# COMP 116 — 2.5-Day Study Plan

Built from 28 questions across 10 past papers (2017–2025) and your 9 lecture decks. Time is weighted by how often each topic actually appears on the exam, not evenly split.

## Where the marks come from

| Topic | Lecture(s) | PYQs hitting it | Share |
|---|---|---|---|
| Operator Overloading | L5 | 8 | ~29% |
| Inheritance / Polymorphism / Virtual Base | L6, L7 | 9 | ~32% |
| Templates | L8 | 6 | ~21% |
| Classes, Objects, Static Members | L3 | 3 | ~11% |
| Constructors / Destructors | L4 | 2 | ~7% |
| Exception Handling | L9 | 2 | ~7% |
| C++ Basics, Intro, Inline Functions | L1, L2 | 3 | ~11% |

Operator overloading and the inheritance/polymorphism cluster are **60% of everything asked**. They anchor Day 1 and Day 2. Templates get a focused half-day. Everything else is one pass, not a deep dive — you already know it well enough from Section A MCQs.

---

## Day 1 — Operator Overloading + Foundations (~7 hrs)

**Morning block (3.5 hrs): Operator Overloading (L5)**
- Read L5 slides fully: unary/binary overloading, friend-function overloading, I/O operator overloading.
- Solve, by hand then compile-check:
  - Q3 Circle by Constructor Overloading
  - Q4 Complex Number Multiplication
  - Q7 Length Class Addition (carry logic)
  - Q9 Prefix/Postfix `++` (friend vs member — know both forms)
  - Q13 Mount Everest Height (friend `operator-`, borrowing)
  - Q17 Date Class Age (operator overloading with date logic)
  - Q18 Age After a Period (normalization carries — same family as Q7/Q13)
- Drill until you can write a friend `operator+`/`operator-` overload from memory without checking notes — this is the single highest-yield skill this semester.

**Afternoon block (2 hrs): Classes, Objects, Static Members (L3) + Constructors/Destructors (L4)**
- Skim L3 and L4 — access specifiers, static data members, static member functions, constructor types (default/parameterized/copy), destructor rules.
- Solve:
  - Q5 Province Array of Objects
  - Q14 Static Object Counter (static counter *and* per-object serial number — both variants have appeared)
  - Q22 Player Class

**Evening block (1.5 hrs): C++ Basics (L1, L2)**
- Skim L1 (POP vs OOP, OOP principles) and L2 (inline functions, function overloading, references vs pointers) — fast pass, these are mostly MCQ material.
- Solve:
  - Q1 Inch to Centimeter
  - Q2 Circle Class (inline getters, private data)
  - Q6 Inline Overloaded Area Functions (function overloading by signature)

**End of Day 1 checkpoint:** you should be able to write, unprompted, a class with a friend operator overload, a static counter, and inline overloaded functions.

---

## Day 2 — Inheritance, Polymorphism, Exceptions (~7 hrs)

**Morning block (3.5 hrs): Inheritance (L6)**
- Read L6 fully — this is your longest deck (51 slides) for a reason: base/derived, protected access, visibility modes, all 5 types of inheritance, **virtual base class**, function overriding, abstract classes, constructor/destructor order.
- Solve:
  - Q21 Employee Virtual Base Class
  - Q26 Master Class with Virtual Base Class (near-identical structure to Q21 — do both to lock in the pattern)
  - Q23 Rectangle and Calculate Inheritance
  - Q24 Bank Account Inheritance (Saving/Current — single inheritance, two branches)

**Afternoon block (2.5 hrs): Polymorphism (L7)**
- Read L7 — types of polymorphism, static/dynamic binding, pointer to object and to derived classes, virtual functions, **pure virtual functions**, abstract classes.
- Solve:
  - Q12 Restaurant Bill with Runtime Polymorphism
  - Q15 Library Book Fines with Runtime Polymorphism
  - Q20 Digital Wallet with Abstract Class
  - Q28 Publication Abstract Class with Runtime Polymorphism
- These four all follow the same skeleton: abstract/virtual base pointer → array of pointers → `display()` called polymorphically. Once one clicks, the rest are fast.

**Evening block (1 hr): Exception Handling (L9)**
- Read L9 — `try`/`catch`/`throw`, re-throwing, `this` pointer.
- Solve:
  - Q8 Alphabet or Digit Exception
  - Q19 Maximum of Array with Exception Handling

**End of Day 2 checkpoint:** you should be able to write a virtual base class hierarchy and an abstract-class + polymorphic-array program without hesitating on syntax.

---

## Day 3 (half day, ~4 hrs) — Templates + Full Review

**Morning block (2 hrs): Templates (L8)**
- Read L8 — function templates, function templates with multiple template types, class templates.
- Solve:
  - Q10 Class Template Largest and Average
  - Q11 Class Template Sort and Average
  - Q16 Function Template with Multiple Types
  - Q25 Calculator Class Template
  - Q27 Function Template Array Average

**Late morning block (1.5 hrs): Timed mixed practice**
- Pick 4–5 questions across different topics you haven't redone yet (mix operator overloading, inheritance, one template question) and solve them cold, under time pressure, without looking at the template's Hint until you're stuck.

**Final block (30 min): Weak-spot pass**
- Go back to whichever topic gave you the most trouble in the blocks above and redo one question from it from scratch.

---

## How to use each PYQ entry
Every question in `COMP116_PYQs.md` has Input/Output specs and 3–5 Tests. Write the program, then manually trace at least the edge-case tests (0, negative, boundary) — most of these papers are checked by exact output match, so getting the print format exactly right matters as much as the logic.
