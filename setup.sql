-- AUMS Assessment Tracker: database set-up
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query > paste > Run).
-- Safe to re-run: it drops and recreates the policies and functions, and only adds seed rows that are missing.

-- ---------- tables ----------
create table if not exists public.classes(
  id text primary key,
  year int not null default 12,
  teacher text,
  archived boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists public.profiles(
  id uuid primary key references auth.users on delete cascade,
  email text,
  full_name text,
  class_id text references public.classes(id) on update cascade on delete set null,
  role text not null default 'student' check (role in ('student','teacher')),
  created_at timestamptz not null default now()
);
create table if not exists public.assessments(
  id text primary key,
  name text not null,
  date date,
  total int not null,
  status text not null default 'open' check (status in ('draft','open','closed')),
  classes text[] not null default '{}',
  parts jsonb not null,
  created_at timestamptz not null default now()
);
create table if not exists public.submissions(
  assessment_id text references public.assessments(id) on delete cascade on update cascade,
  student_id uuid references public.profiles(id) on delete cascade,
  answers jsonb not null,
  reflection jsonb,
  updated_at timestamptz not null default now(),
  primary key (assessment_id, student_id)
);
create table if not exists public.practice_done(
  student_id uuid references public.profiles(id) on delete cascade,
  question_id text not null,
  done_at timestamptz not null default now(),
  primary key (student_id, question_id)
);

-- ---------- helper ----------
create or replace function public.is_teacher() returns boolean
language sql security definer set search_path = public stable as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'teacher')
$$;

-- ---------- new sign-ups: school email only, profile created automatically ----------
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.email is null or lower(new.email) not like '%@aums.ac.uk' then
    raise exception 'Use your school email ending @aums.ac.uk';
  end if;
  insert into public.profiles (id, email, full_name, class_id)
  values (new.id, lower(new.email),
          coalesce(new.raw_user_meta_data->>'full_name', ''),
          (select c.id from public.classes c where c.id = new.raw_user_meta_data->>'class_id'));
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- class averages for students (totals only, no names) ----------
create or replace function public.class_summary()
returns table (assessment_id text, part_id text, total numeric, n int)
language sql security definer set search_path = public stable as $$
  select s.assessment_id, a.key, sum((a.value->>'s')::numeric), count(*)::int
  from public.submissions s
  join public.profiles p on p.id = s.student_id
  cross join lateral jsonb_each(s.answers) a
  where p.class_id = (select class_id from public.profiles where id = auth.uid())
  group by s.assessment_id, a.key
$$;
revoke all on function public.class_summary() from public, anon;
grant execute on function public.class_summary() to authenticated;

-- ---------- row level security ----------
alter table public.classes enable row level security;
alter table public.profiles enable row level security;
alter table public.assessments enable row level security;
alter table public.submissions enable row level security;
alter table public.practice_done enable row level security;

drop policy if exists "classes readable" on public.classes;
drop policy if exists "teachers manage classes" on public.classes;
create policy "classes readable" on public.classes for select using (true);
create policy "teachers manage classes" on public.classes for all using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "own profile or teacher" on public.profiles;
drop policy if exists "teachers update profiles" on public.profiles;
drop policy if exists "teachers delete profiles" on public.profiles;
create policy "own profile or teacher" on public.profiles for select using (id = auth.uid() or public.is_teacher());
create policy "teachers update profiles" on public.profiles for update using (public.is_teacher()) with check (public.is_teacher());
create policy "teachers delete profiles" on public.profiles for delete using (public.is_teacher());

drop policy if exists "signed-in read assessments" on public.assessments;
drop policy if exists "teachers manage assessments" on public.assessments;
create policy "signed-in read assessments" on public.assessments for select to authenticated using (true);
create policy "teachers manage assessments" on public.assessments for all using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "read own submissions" on public.submissions;
drop policy if exists "insert own submission" on public.submissions;
drop policy if exists "update own submission" on public.submissions;
drop policy if exists "teachers manage submissions" on public.submissions;
create policy "read own submissions" on public.submissions for select using (student_id = auth.uid() or public.is_teacher());
create policy "insert own submission" on public.submissions for insert with check (
  student_id = auth.uid() and exists (
    select 1 from public.assessments a join public.profiles p on p.id = auth.uid()
    where a.id = assessment_id and a.status = 'open' and p.class_id = any (a.classes)));
create policy "update own submission" on public.submissions for update using (student_id = auth.uid()) with check (
  student_id = auth.uid() and exists (select 1 from public.assessments a where a.id = assessment_id and a.status = 'open'));
create policy "teachers manage submissions" on public.submissions for all using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "own practice" on public.practice_done;
drop policy if exists "teachers read practice" on public.practice_done;
create policy "own practice" on public.practice_done for all using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy "teachers read practice" on public.practice_done for select using (public.is_teacher());

-- ---------- starting data ----------
insert into public.classes (id, year, teacher) values
  ('12MA1', 12, 'Mr Adams'), ('12MA2', 12, 'Mr Adams'), ('12MA3', 12, 'Mr Adams')
on conflict (id) do nothing;

insert into public.assessments (id, name, date, total, status, classes, parts) values
  ('PA1', 'PA1: Pure Mathematics & Complex Numbers', '2026-09-23', 40, 'open', '{12MA1,12MA2,12MA3}',
   '[{"id": "1", "q": "1", "p": "", "topic": "Trigonometric identities / CAST", "detail": "Use sin²θ + cos²θ = 1 to find the possible values of cos θ in surd form", "marks": 3, "textbook": "Ex 6.3 (p. 115) Q3; Ex 6.2 (p. 109) Q9-10 (Maths Y1 Ch 6)", "lessons": ["C&M 00-4", "C&M 00-2"], "module": "C&M 00"}, {"id": "2i", "q": "2", "p": "i", "topic": "Complex numbers: multiplication", "detail": "Multiply complex numbers using i² = −1", "marks": 2, "textbook": "Ex 2.2 (pp. 46-7) Q2, 8-10 (FM Core Pure Ch 2)", "lessons": ["A&S 00-2"], "module": "A&S 00"}, {"id": "2ii", "q": "2", "p": "ii", "topic": "Complex numbers: division", "detail": "Divide complex numbers by multiplying by the conjugate of the denominator", "marks": 2, "textbook": "Ex 2.2 (pp. 46-7) Q2, 8-10 (FM Core Pure Ch 2)", "lessons": ["A&S 00-3"], "module": "A&S 00"}, {"id": "3", "q": "3", "p": "", "topic": "Increasing functions", "detail": "Differentiate a cubic and solve f′(x) > 0 to find where f(x) is increasing", "marks": 4, "textbook": "Ex 10.4 (pp. 203-4) Q1-2, 6, 8 (Maths Y1 Ch 10)", "lessons": ["C&M 01-3", "C&M 01-2"], "module": "C&M 01"}, {"id": "4", "q": "4", "p": "", "topic": "Discriminant and quadratic inequalities", "detail": "Use b² − 4ac < 0 and solve the resulting quadratic inequality in k", "marks": 4, "textbook": "Ex 3.3 (p. 51) Q5, 11; Ex 4.2 (p. 65) Q7 (Maths Y1 Ch 3-4)", "lessons": ["A&S 01-2", "A&S 01-4"], "module": "A&S 01"}, {"id": "5i", "q": "5", "p": "i", "topic": "Differentiating reciprocals", "detail": "Write 1/x as x⁻¹, differentiate and show dy/dx = 0 at x = 1", "marks": 2, "textbook": "Ex 10.2 (p. 195) Q2, 7-8; Ex 10.6 (p. 209) Q1, 4 (Maths Y1 Ch 10)", "lessons": ["C&M 01-2"], "module": "C&M 01"}, {"id": "5ii", "q": "5", "p": "ii", "topic": "Nature of stationary points", "detail": "Use the second derivative to show the turning point is a minimum", "marks": 2, "textbook": "Ex 10.4 (pp. 203-4) Q4, 7 (Maths Y1 Ch 10)", "lessons": ["C&M 01-3"], "module": "C&M 01"}, {"id": "6i", "q": "6", "p": "i", "topic": "Complex roots of quadratics", "detail": "Solve a quadratic with negative discriminant, giving roots in the form a + bi", "marks": 3, "textbook": "Ex 2.1 (p. 43) Q1; Ex 2.2 (p. 46) Q4-5 (FM Core Pure Ch 2)", "lessons": ["A&S 00-4"], "module": "A&S 00"}, {"id": "6ii", "q": "6", "p": "ii", "topic": "Argand diagrams", "detail": "Represent complex numbers (a conjugate pair) on an Argand diagram", "marks": 2, "textbook": "Ex 2.3 (p. 50) Q2-3 (FM Core Pure Ch 2)", "lessons": ["A&S 00-5"], "module": "A&S 00"}, {"id": "7i", "q": "7", "p": "i", "topic": "Simultaneous equations (linear and quadratic)", "detail": "Solve algebraically to find the points of intersection of a curve and a line", "marks": 4, "textbook": "Ex 4.1 (p. 58) Q9-10 (Maths Y1 Ch 4)", "lessons": ["A&S 01-3"], "module": "A&S 01"}, {"id": "7ii", "q": "7", "p": "ii", "topic": "Completing the square", "detail": "Write ax² + bx + c in the form a(x + b)² + c", "marks": 3, "textbook": "Ex 3.2 (p. 46) Q4; Ex 3.1 (p. 41) Q8, 10 (Maths Y1 Ch 3)", "lessons": ["A&S 01-1"], "module": "A&S 01"}, {"id": "7iii", "q": "7", "p": "iii", "topic": "Quadratic graphs", "detail": "Use the completed square form (vertex) to show the graph is always above the x-axis", "marks": 1, "textbook": "Ex 3.1 (p. 40) Q3-4 (Maths Y1 Ch 3)", "lessons": ["A&S 01-1", "A&S 01-6"], "module": "A&S 01"}, {"id": "8i", "q": "8", "p": "i", "topic": "Trigonometric identities in proof", "detail": "Use tan x = sin x / cos x and cos²x = 1 − sin²x to form a quadratic in sin x", "marks": 3, "textbook": "Ex 6.2 (p. 109) Q9-10, 12 (Maths Y1 Ch 6)", "lessons": ["C&M 00-4"], "module": "C&M 00"}, {"id": "8ii", "q": "8", "p": "ii", "topic": "Solving a quadratic trig equation", "detail": "Solve the quadratic in sin x, reject the impossible root and find all angles in range", "marks": 3, "textbook": "Ex 6.3 (p. 115) Q4, 9 (Maths Y1 Ch 6)", "lessons": ["C&M 00-5"], "module": "C&M 00"}, {"id": "8iii", "q": "8", "p": "iii", "topic": "Transformed trig equations", "detail": "Count solutions of an equation in 4x over an extended interval", "marks": 2, "textbook": "Ex 6.3 (p. 115) Q2, 6, 10 (Maths Y1 Ch 6)", "lessons": ["C&M 00-5", "C&M 00-2"], "module": "C&M 00"}]'::jsonb)
on conflict (id) do nothing;

-- ---------- added later: private paper store and student PDF switches ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('papers','papers',false,10485760,array['application/pdf'])
on conflict (id) do update set public=false;

create table if not exists public.app_settings(
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.app_settings enable row level security;
drop policy if exists "Signed in users read settings" on public.app_settings;
create policy "Signed in users read settings" on public.app_settings for select to authenticated using (true);
drop policy if exists "Teachers change settings" on public.app_settings;
create policy "Teachers change settings" on public.app_settings for all to authenticated using (public.is_teacher()) with check (public.is_teacher());
insert into public.app_settings(key,value) values ('student_pdfs','{"questions":true,"markschemes":true}') on conflict (key) do nothing;

drop policy if exists "AUMS users can read papers" on storage.objects;
create policy "AUMS users can read papers" on storage.objects
  for select to authenticated
  using (
    bucket_id = 'papers'
    and exists (select 1 from public.profiles p where p.id = auth.uid())
    and (
      public.is_teacher()
      or coalesce((select (s.value ->> case when storage.objects.name like '%-MS-%' then 'markschemes' else 'questions' end)::boolean
                   from public.app_settings s where s.key = 'student_pdfs'), true)
    )
  );
drop policy if exists "Teachers manage papers" on storage.objects;
create policy "Teachers manage papers" on storage.objects
  for all to authenticated
  using (bucket_id = 'papers' and public.is_teacher())
  with check (bucket_id = 'papers' and public.is_teacher());

-- ---------- staff accounts and student passwords ----------
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.staff_invites(
  email text primary key,
  invited_by uuid,
  created_at timestamptz not null default now()
);
alter table public.staff_invites enable row level security;
drop policy if exists "Teachers manage staff invites" on public.staff_invites;
create policy "Teachers manage staff invites" on public.staff_invites for all to authenticated
  using (public.is_teacher()) with check (public.is_teacher());

-- sign-up: invited emails become teachers, everyone else a student
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare invited boolean;
begin
  if new.email is null or lower(new.email) not like '%@aums.ac.uk' then
    raise exception 'Use your school email ending @aums.ac.uk';
  end if;
  select exists(select 1 from public.staff_invites i where i.email = lower(new.email)) into invited;
  insert into public.profiles (id, email, full_name, class_id, role)
  values (new.id, lower(new.email),
          coalesce(new.raw_user_meta_data->>'full_name', ''),
          case when invited then null else (select c.id from public.classes c where c.id = new.raw_user_meta_data->>'class_id') end,
          case when invited then 'teacher' else 'student' end);
  if invited then delete from public.staff_invites where email = lower(new.email); end if;
  return new;
end $$;

-- the staff sign-up form checks this first, so people who aren't invited get a clear message
create or replace function public.is_staff_invited(check_email text) returns boolean
language sql security definer set search_path = public stable as $$
  select exists(select 1 from public.staff_invites where email = lower(trim(check_email)))
$$;
revoke all on function public.is_staff_invited(text) from public;
grant execute on function public.is_staff_invited(text) to anon, authenticated;

-- teachers set a new password for a student
create or replace function public.set_student_password(target uuid, new_password text) returns void
language plpgsql security definer set search_path = public, extensions, auth as $$
begin
  if not public.is_teacher() then raise exception 'Only staff can change passwords'; end if;
  if coalesce(length(new_password),0) < 8 then raise exception 'The password needs at least 8 characters'; end if;
  if not exists (select 1 from public.profiles where id = target and role = 'student') then
    raise exception 'That is not a student account';
  end if;
  update auth.users set encrypted_password = extensions.crypt(new_password, extensions.gen_salt('bf')), updated_at = now()
  where id = target;
end $$;
revoke all on function public.set_student_password(uuid, text) from public, anon;
grant execute on function public.set_student_password(uuid, text) to authenticated;

-- teachers give or remove staff access for an existing account
create or replace function public.set_staff_access(target uuid, make_teacher boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_teacher() then raise exception 'Only staff can do this'; end if;
  if target = auth.uid() and not make_teacher then raise exception 'You cannot remove your own staff access'; end if;
  update public.profiles
     set role = case when make_teacher then 'teacher' else 'student' end,
         class_id = case when make_teacher then null else class_id end
   where id = target;
end $$;
revoke all on function public.set_staff_access(uuid, boolean) from public, anon;
grant execute on function public.set_staff_access(uuid, boolean) to authenticated;
