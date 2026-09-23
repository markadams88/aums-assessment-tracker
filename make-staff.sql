-- Makes a staff account a teacher. Change the email to the account you want to promote.
-- The account must already exist (Supabase > Authentication > Users > Add user).
update public.profiles set role = 'teacher', class_id = null
where email = 'mark.adams@aums.ac.uk';
select email, role from public.profiles where role = 'teacher';
