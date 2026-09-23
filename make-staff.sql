-- Run AFTER you have added the staff user in Supabase (Authentication > Users > Add user),
-- with email maths.staff@aums.ac.uk and "Auto Confirm User" ticked.
update public.profiles set role = 'teacher', full_name = 'Maths staff', class_id = null
where email = 'maths.staff@aums.ac.uk';
select email, role from public.profiles where role = 'teacher';
