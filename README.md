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
| `qindex.js` | Where every past-paper question and its mark scheme sit in the past-paper PDFs (kept in private Supabase storage) |
| `pdf-lib.min.js` | The library that builds the question and mark scheme PDFs in the browser (version 1.17.1) |
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

## Question and mark scheme PDFs

Every question in the bank that comes from a paper we hold has a "Questions PDF" and a "Mark scheme" button. Students get them on their practice list and in the Question bank tab. Teachers get them on the revision plan (starters and each homework group) and in the Question bank, where you can tick any mix of questions and make one sheet.

The PDFs are cut from the real OCR papers, so the maths, diagrams and layout are exactly as the exam board printed them. Nothing is retyped.

The papers themselves are not in this repository. They sit in a private storage bucket called `papers` in Supabase, and only signed-in AUMS accounts can read them. To add or replace a paper, upload it there (Supabase > Storage > papers).

- 1,654 of the 1,661 bank questions have a question PDF.
- 1,444 have a mark scheme. Most are cut to the question. A few old papers only give the whole mark scheme, and the PDF says so.
- There are no mark schemes for M2, or for some older series (for example January 2012) because those files aren't in the Old Spec Solutions folder. Add them there and they can be cut the same way.
- Paper 3 comprehension questions need the pre-release article, which isn't in the folders yet.
