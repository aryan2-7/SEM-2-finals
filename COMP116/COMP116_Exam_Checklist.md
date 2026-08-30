# COMP 116 (OOP) — Exam Prep Checklist

Built from your 9 lectures + 2018/2019/2022/2023/2024 past papers + the repeated-questions collection. Organized by topic, weighted by how often it's actually been asked. Section A = MCQ (30 mins, 0.5 each), Section B = 4-mark theory/programs (pick 6), Section C = 8-mark long programs (pick 2).

---

## 🔴 Tier 1 — Show up almost every year (master these cold)

### 1. OOP Fundamentals vs Structured Programming
- [ ] Explain 4 pillars: encapsulation, abstraction, inheritance, polymorphism — with one-line examples each
- [ ] OOP vs POP: data-focus vs function-focus, bottom-up vs top-down
- [ ] Why OOP suits real-world modeling (asked 3x — have a ready 4-mark answer)
- [ ] Data hiding vs data encapsulation — the distinction examiners like to test

### 2. Constructors & Destructors
- [ ] Default, parameterized, copy constructor — differences + when each is auto-generated
- [ ] Why copy constructor takes reference, not value (infinite recursion explanation)
- [ ] Constructor overloading — is it mandatory to have a constructor? (verbatim past Q)
- [ ] Destructor: no return type, no args, can't be overloaded, called on scope exit/delete
- [ ] `new`/`delete` operator pairing with constructor/destructor (asked 2x, 8 marks) — practice a full program: array data member allocated in constructor via `new`, freed in destructor via `delete[]`
- [ ] Order of constructor/destructor calls in inheritance chains (multilevel + multiple) — **know both example outputs from Lecture 6 by heart**
- [ ] Serial-number-per-object pattern using a static counter (2018 Section B Q4 — combine with static members topic below)

### 3. Inheritance
- [ ] Public/private/protected inheritance — the full access matrix (Lecture 6 table). This shows up as MCQ almost every year in slightly different phrasing.
- [ ] Types: single, multilevel, multiple, hierarchical, hybrid — draw the diagrams
- [ ] Diamond problem — what it is, why ambiguity occurs, **virtual base class** as the fix
- [ ] Full virtual base class program: `Person → (Student, Teacher) → PhdScholar/Master` — this exact scenario appears in 2018, 2024, and the repeated-questions list. Practice writing it from scratch.
- [ ] Initializing base class data members from derived class constructor — two ways (explicit call vs assignment) — asked repeatedly (2x, "two levels of access specifiers" also 2x at 8 marks)
- [ ] Multiple inheritance ambiguity resolution using `ClassName::function()`

### 4. Polymorphism
- [ ] Compile-time vs runtime polymorphism — full comparison table (binding type, mechanism, speed, flexibility)
- [ ] Function overloading vs function overriding — differences table (Lecture 6) — asked as its own Q too
- [ ] Virtual functions: why must be called through base class pointer/reference for dynamic binding to trigger
- [ ] Pure virtual functions (`= 0`) and abstract classes — rules: can't instantiate, must override or subclass also becomes abstract
- [ ] Base class pointer array holding derived objects + loop calling virtual function (2018 exact question: Student abstract base, Engineering/Science/Medical derived) — **practice this one, it's a near-guaranteed 8-marker**
- [ ] Diamond problem again but from the "virtual function vs virtual base class" differentiation angle (April 2023 asked this explicitly — know the 4-row comparison table)

### 5. Operator Overloading
- [ ] Which operators CANNOT be overloaded: `::`, `.`, `.*`, `sizeof`, `?:`, `typeid` — memorize this list, it's an MCQ favorite
- [ ] Member function vs friend function overloading — argument count difference (unary: 0 vs 1 arg; binary: 1 vs 2 args)
- [ ] Why `<<`/`>>` must be overloaded as friend/non-member (left operand is `ostream`/`istream`, not your class)
- [ ] Prefix vs postfix `++`/`--` overloading — the "dummy int" trick
- [ ] Friend function operator overloading advantage: allows built-in type as left operand (`2 + c1` works with friend, not member)
- [ ] Practice writing: overload `+` for Complex numbers (appears constantly), overload for a Distance/Length class with feet+inches carrying logic, overload `>>`/`<<` for object I/O

### 6. Templates / Generic Programming
- [ ] Function template syntax (`template<typename T>`) and multiple-type templates (`template<typename T, typename U>`)
- [ ] Class template syntax + declaring objects with `<type>`
- [ ] Class template with array data member: sort + return average/max (asked almost every year, 4 or 8 marks) — **practice `ArrayProcessor<T>` style class exactly like Lecture 8's example**
- [ ] Function template with reference parameters returning greatest of three numbers (repeated question)
- [ ] Difference between function template and class template

### 7. Exception Handling
- [ ] `try`/`catch`/`throw` mechanism and syntax
- [ ] Divide-by-zero exception handling program — practice both the simple version and the "R = Z/(X-Y)" variant (2018 exact Q)
- [ ] Array-out-of-bounds / negative-value exception handling (repeated question, both 2023 and 2024 papers)
- [ ] Re-throwing an exception — why (logging/cleanup before propagating up), rule: can only re-throw from within a catch block
- [ ] `catch(...)` catch-all syntax

### 8. Static Members
- [ ] Static data member: one copy shared across all objects, must be defined+initialized outside class (`int ClassName::var = x;`)
- [ ] Static member function: can only access other static members, called via `ClassName::function()`
- [ ] Object counter pattern: static int incremented in constructor, static getter function — **write this from memory**, it's asked constantly in different wrappings (Student count, Car count, digital wallet transaction count)

---

## 🟠 Tier 2 — Recurring but slightly less frequent

- [ ] Friend functions: general concept, why used, syntax (`friend` keyword only in declaration) — Dec 2024 asked "what is Friend Function, why used" directly
- [ ] `this` pointer — what it is, why needed (disambiguate member vs parameter names), can't be reassigned
- [ ] Inline functions: syntax, benefit (avoids call overhead), disadvantage (code bloat, can't be recursive, compiler may ignore) — asked twice with marks split [3+1]
- [ ] Reference variables vs pointers — full comparison table (nullability, reassignability, syntax) — practice the swap-two-numbers-by-reference program
- [ ] Access specifiers (public/private/protected) — default is private for class, public for struct
- [ ] Static vs dynamic memory allocation, `new`/`delete` vs `new[]`/`delete[]`
- [ ] Pointer to object vs derived class pointer rules (base ptr can point to derived object; derived ptr cannot point to base)
- [ ] Composition ("has-a" via object as class member) vs inheritance ("is-a")
- [ ] Virtual base class syntax specifically: `class Derived : virtual public Base`

## 🟡 Tier 3 — Seen once or twice, worth a quick pass

- [ ] Scope types: local, global, namespace, class scope
- [ ] C vs C++ comparison table (procedural vs OOP, structs vs classes)
- [ ] Getters/setters (accessors/mutators) pattern
- [ ] Private member functions — encapsulating internal logic, can't be called via dot operator externally
- [ ] Abstract `publication → book/tape` style multi-branch inheritance with `getdata()`/`putdata()` virtual pattern (2018 Section C)
- [ ] Bank account (`Account → SavingAccount/CurrentAccount`) style derived-class design problem
- [ ] Full worked "Digital Wallet" abstract-class + polymorphism problem (appears at high mark value, 16 marks in one paper) — worth outlining once even if low-probability, since it's a big point sink if it appears
- [ ] `#define` macro vs `const` distinction (came up as a weird MCQ option about `PI++` failing)

---

## 📋 High-yield programs to have "in your fingers" (write each once, cold, no notes)

1. Virtual base class diamond-problem program (Person/Student/Teacher/PhdScholar or Master)
2. Abstract class + array of base class pointers achieving runtime polymorphism (Student/Engineering/Science/Medical)
3. Class template with sort + average/max over an array
4. Operator overloading of `+` for a two-part class (Complex, or feet+inches Length) as **both** member and friend function
5. Divide-by-zero and array-bounds exception handling
6. Static data member + static function object counter
7. Constructor/destructor order demonstration in multilevel and multiple inheritance
8. `new`/`delete` for a dynamically-allocated array data member (constructor allocates, destructor frees)
9. Overloading `<<` and `>>` for object I/O as friend functions
10. Prefix/postfix `++` overloading using the dummy-int trick

---

## Section A (MCQ) quick-hit facts to drill
- Non-overloadable operators list
- Default access specifiers (class = private, struct = public)
- Access matrix for public/private/protected inheritance
- Constructor call order top-down, destructor bottom-up (reverse)
- `delete` vs `delete[]`
- Static member access syntax: `ClassName::member`
- What counts as polymorphism (overloading operators like `<<` counts; `&&`, `II`(`||`) do NOT — trick option seen twice)
- Pure virtual function syntax `= 0`
- What makes a class abstract (≥1 pure virtual function)

---

Want me to turn any of the 10 "in your fingers" programs into a quiz/flashcard set, or start drilling one of them with you right now (e.g., I ask you to write it, then I review)?
