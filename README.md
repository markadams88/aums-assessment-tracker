# AUMS Assessment Tracker

Students record their assessment results question by question. The tracker maps every mark to the Year 12 scheme of learning and gives each student a report and practice questions. Teachers get reports for each assessment, trends over time and a revision plan.

The site runs on GitHub Pages. The data is stored in Supabase (project `aums-tracker`, London region).

## Files

| File | What it is |
|---|---|
| `index.html` | The page and all the styling |
| `app.js` | Everything the site does |
| `data.js` | SoL topics and lessons, exam technique reasons, and the tagged past-paper question bank |
| `config.js` | The Supabase address and public key, and the staff login email |
| `supabase.js` | The Supabase library (version 2.117.0), kept here so the site doesn't depend on another website |
| `setup.sql` | Builds the database: tables, security rules, classes 12MA1 to 12MA3 and PA1 |
| `make-staff.sql` | Turns the staff login into a teacher account |

## How the logins work

- **Students** create an account with their @aums.ac.uk email and pick their class. They can only ever see their own results. Class averages come from a database function that returns totals only, never names.
- **Staff** go to the page with `#staff` on the end of the address and sign in with a staff account. Mark's account (mark.adams@aums.ac.uk) is the first teacher. To add another teacher, create them in Supabase (Authentication > Users > Add user) and run `make-staff.sql` with their email.
- The security is enforced by the database (row level security), not by the page. A student who looks at the page source still can't read anyone else's data.

## Common jobs

- **Add Year 13 classes:** Staff area > Classes and assessments > Add class.
- **New assessment:** Staff area > Classes and assessments > New assessment. Tag each part to a SoL topic and lesson.
- **Close an assessment:** change its status to Closed. Students can then see their results but can't change them.
- **Student picked the wrong class:** Staff area > Classes and assessments > Students, then change the class.
- **Student forgot their password:** they use "Forgotten your password?" on the sign-in page. Supabase's free email only sends a few emails an hour. If that isn't enough, delete their account in Supabase (Authentication > Users) and they sign up again. Their old results go with it.
- **Change a staff password:** Supabase > Authentication > Users, find the account, then send a password recovery email.
