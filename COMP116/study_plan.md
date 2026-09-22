# COMP116 — 2.5-Day Exam Study Plan

**Exam: Friday**

Plan is weighted by what the past papers actually test, not slide order:
- **Operator overloading** — heaviest topic (10 of 28 programming questions)
- **Inheritance** — close second (9 questions)
- **Templates** — 5 questions, but full "hard" marks each
- **Exceptions** — 2 standalone questions + embedded in several others
- **Polymorphism** — not a standalone block; it's tested through the inheritance questions (virtual functions, runtime polymorphism show up in Q12, Q15, Q20, Q28)

---

## Today — light MCQ pass (30-45 min)

Skim Lecture 1 and 2 slides once, just titles and bold terms — no notes. Then do the Section A MCQs from 2-3 papers (e.g. Aug 2019, Sep 2024) cold, no prep. This tells you which MCQ topics are shaky without burning energy, and primes your memory for tomorrow. Stop after 45 minutes even if unfinished.

---

## Tomorrow AM — Inheritance deep dive (~2.5 hrs)

Read Lecture 6 slides fully (longest deck, 51 pages — budget real time). Focus on:
- Single vs multilevel vs multiple inheritance
- Access specifier changes across public/protected/private inheritance
- Constructor call order
- Virtual base classes (the diamond problem) — directly tested in Q21, Q26, and implicitly in Q23/Q24/Q28

Then hand-write solutions (paper or editor, no compiler yet) for **Q21, Q23, Q24, Q26, Q28** from the PYQ file, in that order.

## Tomorrow PM — Templates deep dive (~2.5 hrs)

Read Lecture 8 slides fully. Focus on:
- Class templates vs function templates
- Syntax for defining a member function outside the class template declaration (this exact MCQ pattern showed up in the 2018 paper)
- Multiple template parameters

Then solve **Q10, Q11, Q16, Q25, Q27** from the PYQ file. If you have a compiler available, actually compile at least 2 of these — template syntax errors are easy to make and hard to spot by eye.

*Running low on time?* Cut this block to just Q10, Q11, Q16 — Q25/Q27 repeat the same pattern rather than teach something new.

---

## Day-after AM — Exception Handling (~1.5 hrs)

Read Lecture 9 slides (shortest deck, 17 pages — should go fast). Focus on:
- try/catch/throw syntax
- Catching by type (including catching a string vs `const char*` — an actual past MCQ)
- Multiple catch blocks
- Re-throwing

Then solve **Q8, Q19** from the PYQ file, and re-solve **Q15, Q20** — these embed exception-like validation logic even though they're framed as inheritance/polymorphism problems.

## Day-after Midday — Operator Overloading full pass (~2 hrs)

This is your strongest area — treat it as a fast, confident sweep, not slow relearning. Skim Lecture 5 slides for:
- The friend-function-vs-member-function overload syntax difference (a recurring MCQ trap)
- Which operators can't be overloaded

Then speed-solve **Q1, Q2, Q3, Q4, Q6, Q7, Q9, Q13, Q17, Q18** from the PYQ file — aim for under 10 minutes each. Anything that takes much longer is a gap, not a strength — flag it.

## Day-after PM — Mixed weak-spot review (~1 hr)

Pick 3-4 questions across inheritance, templates, and exceptions that felt hardest earlier today, and re-solve them from scratch without looking at your notes. This is the highest-value hour for retention — redoing a half-known problem beats doing a new one.

*If today's MCQ pass showed gaps in class basics / constructors (Lectures 3-4) too, swap this hour for that instead.*

---

## Friday morning — MCQ + recall sprint, no new coding

- Run through Section A MCQs from every paper you have, timed.
- Do a 10-minute freewrite from memory only: every operator overloading rule, every inheritance access-specifier rule, and the template syntax skeleton. Check against slides only to spot gaps.
- **Do not** attempt new full programs this morning — it's too late for it to stick, and it risks shaking confidence right before the exam.
