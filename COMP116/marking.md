# COMP 116 — End Semester Examination (Aug/Sept 2026)
## Marking Scheme — Sections B & C

**Course:** COMP 116 | **Semester:** II | **F.M.:** 40 | **Time:** 2 hrs 30 mins

> Section B: Attempt ANY SIX (6 × 4 = 24) | Section C: Attempt ANY TWO (2 × 8 = 16)
> Note: In Section B, Q4 was crossed out by the student (not attempted) — Q1, 2, 3, 5, 6, 7 are marked as the six attempted. Section C only has Q8 legible in the images (Q9 is shown separately as the OOP inheritance question, worth 8 marks).

---

## SECTION "B" — Attempt ANY SIX [6 × 4 = 24]

---

### Q1. Define Abstraction and Encapsulation with examples. Benefits of inline functions; when not to use them. [2+2=4]

**Model Answer:**

**Abstraction (1 mark):** Hiding internal implementation details and showing only the essential features/functionality to the user.
*Example:* A `Car` class exposes `start()` and `drive()` without revealing engine mechanics.

**Encapsulation (1 mark):** Binding data (variables) and functions (methods) that operate on that data into a single unit (class), and restricting direct access to internal data using access specifiers (private/protected).
*Example:*
```cpp
class Account {
private:
    double balance;
public:
    void deposit(double amt) { balance += amt; }
};
```

**Benefits of inline functions (1 mark):**
- Eliminates function call overhead (no stack push/pop, jump instructions)
- Faster execution for small, frequently-called functions
- Compiler substitutes function body directly at call site

**When NOT to use inline (1 mark):**
- Large function bodies (code bloat — increases executable size)
- Functions with loops, switch statements, or recursion
- Functions containing static variables
- Functions that are called from many places (bloats binary)

**Marking breakdown:**
| Component | Marks |
|---|---|
| Correct definition of Abstraction + valid example | 1 |
| Correct definition of Encapsulation + valid example | 1 |
| At least 2 valid benefits of inline functions | 1 |
| At least 2 valid situations to avoid inline | 1 |
| **Total** | **4** |

*Partial credit:* 0.5 if definition correct but example missing/wrong. Accept any 2 relevant points per sub-part.

---

### Q2. Compare Constructor and Destructor. List and explain 3 types of constructors with syntax. [1+3=4]

**Model Answer:**

**Comparison (1 mark — need at least 3 valid points):**

| Constructor | Destructor |
|---|---|
| Same name as class, no return type | Same name as class prefixed with `~`, no return type |
| Called automatically when object is created | Called automatically when object goes out of scope/is deleted |
| Can be overloaded (multiple constructors) | Cannot be overloaded (only one per class) |
| Can take arguments | Never takes arguments |
| Initializes object's data members | Releases resources (memory, file handles, etc.) |

**Three types of constructors (3 marks — 1 each):**

**1. Default Constructor:**
```cpp
class Box {
public:
    Box() { length = 0; }   // no parameters
private:
    int length;
};
```

**2. Parameterized Constructor:**
```cpp
class Box {
public:
    Box(int l) { length = l; }   // takes arguments
private:
    int length;
};
```

**3. Copy Constructor:**
```cpp
class Box {
public:
    Box(const Box &b) { length = b.length; }  // initializes using another object
private:
    int length;
};
```

*(Accept "Dynamic constructor" as a valid 4th alternative if student swaps one of the above)*

**Marking breakdown:**
| Component | Marks |
|---|---|
| Constructor vs Destructor comparison (≥3 correct points) | 1 |
| Default constructor — name, purpose, correct syntax | 1 |
| Parameterized constructor — name, purpose, correct syntax | 1 |
| Copy constructor — name, purpose, correct syntax | 1 |
| **Total** | **4** |

*Deduct 0.5 per constructor if syntax has minor errors; 0 if type is invalid (e.g., listing "constructor overloading" as a "type").*

---

### Q3. Can we directly use I/O operators on user-defined objects? Justify. Write a C++ program to multiply two complex numbers using operator overloading. [1+3=4]

**Model Answer:**

**Justification (1 mark):**
No, `cin`/`cout` cannot be directly used on user-defined objects (e.g., a `Complex` class) because the compiler does not know how to interpret `<<` and `>>` for a custom type. We must **overload the insertion (`<<`) and extraction (`>>`) operators**, typically as **friend functions**, since they need access to private members but their left operand is `ostream`/`istream`, not the class object itself.

**C++ Program (3 marks):**
```cpp
#include <iostream>
using namespace std;

class Complex {
private:
    float real, imag;
public:
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Operator overloading for multiplication
    Complex operator*(const Complex &c) {
        Complex temp;
        temp.real = (real * c.real) - (imag * c.imag);
        temp.imag = (real * c.imag) + (imag * c.real);
        return temp;
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(2, 3), c2(4, 5);
    Complex c3 = c1 * c2;
    cout << "Product: ";
    c3.display();
    return 0;
}
```
*Formula used: (a+bi)(c+di) = (ac−bd) + (ad+bc)i*

**Marking breakdown:**
| Component | Marks |
|---|---|
| Correct justification (cannot use directly + reason: compiler doesn't know type / need overloading) | 1 |
| Class with proper data members (real, imag) + constructor | 0.5 |
| Correct `operator*` overload with correct complex multiplication formula | 1.5 |
| `main()` creates objects, calls operator, displays result correctly | 1 |
| **Total** | **4** |

*Common errors to penalize:* using wrong formula (e.g., simple real*real), forgetting `const` reference (minor, −0.25), no output statement (−0.5).

---

### Q5. Explain the "Diamond Problem" in multiple inheritance. Explain how C++ resolves it using virtual base classes. [4]

**Model Answer:**

**Diamond Problem (2 marks):**
Occurs when a class inherits from two classes that both inherit from a common base class, creating a diamond-shaped inheritance diagram:

```
        Animal
        /    \
   Mammal    Bird
        \    /
      Platypus
```

If `Platypus` inherits from both `Mammal` and `Bird`, and both of those inherit from `Animal`, then `Platypus` ends up with **two copies** of `Animal`'s members — one via `Mammal`, one via `Bird`. This causes:
- **Ambiguity** when accessing a member of `Animal` through `Platypus` (compiler doesn't know which copy)
- **Memory redundancy** (duplicate base class data)

```cpp
class Animal { public: int age; };
class Mammal : public Animal {};
class Bird : public Animal {};
class Platypus : public Mammal, public Bird {};

Platypus p;
p.age = 5;  // ERROR: ambiguous — Mammal::age or Bird::age?
```

**Resolution using virtual base classes (2 marks):**
C++ resolves this by declaring the common base class as **`virtual`** in the intermediate classes. This ensures only **one shared copy** of the base class is inherited, regardless of how many paths lead to it.

```cpp
class Animal { public: int age; };
class Mammal : virtual public Animal {};
class Bird : virtual public Animal {};
class Platypus : public Mammal, public Bird {};

Platypus p;
p.age = 5;  // OK now — only one copy of Animal exists
```

With `virtual` inheritance, the compiler ensures `Platypus` contains exactly one instance of `Animal`, eliminating both the ambiguity and the duplication.

**Marking breakdown:**
| Component | Marks |
|---|---|
| Correct explanation of diamond problem (diagram/description + why ambiguity arises) | 1.5 |
| Code/example showing the ambiguous access error | 0.5 |
| Explanation that `virtual` keyword ensures single shared base instance | 1.5 |
| Corrected code example using virtual inheritance | 0.5 |
| **Total** | **4** |

---

### Q6. Write a C++ function template that finds the max value in an array. Test with both int and float arrays. [4]

**Model Answer:**

```cpp
#include <iostream>
using namespace std;

// Function template
template <typename T>
T findMax(T arr[], int size) {
    T max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

int main() {
    int intArr[] = {12, 45, 7, 89, 34};
    float floatArr[] = {3.2, 9.8, 1.1, 7.6};

    cout << "Max of int array: " << findMax(intArr, 5) << endl;
    cout << "Max of float array: " << findMax(floatArr, 4) << endl;

    return 0;
}
```

**Expected Output:**
```
Max of int array: 89
Max of float array: 9.8
```

**Marking breakdown:**
| Component | Marks |
|---|---|
| Correct `template <typename T>` / `template <class T>` declaration | 1 |
| Correct generic function logic (loop finds max correctly) | 1.5 |
| Called/tested with an integer array in `main()` with correct output | 0.75 |
| Called/tested with a float array in `main()` with correct output | 0.75 |
| **Total** | **4** |

*Deduct 0.5 if template instantiation is implicit but student doesn't demonstrate both data types clearly.*

---

### Q7. What is exception handling in C++? Explain try, catch, throw with an example handling array-out-of-bounds. [1+3=4]

**Model Answer:**

**Exception Handling (1 mark):**
A mechanism to handle runtime errors (exceptions) in a controlled manner, preventing abrupt program termination. It separates error-handling code from normal logic using three keywords:
- **`try`** — block of code that might throw an exception
- **`throw`** — used to signal/raise an exception when an error condition occurs
- **`catch`** — block that handles the exception thrown

**Example Program (3 marks):**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int index;

    cout << "Enter index to access: ";
    cin >> index;

    try {
        if (index < 0 || index >= 5) {
            throw index;  // throw the invalid index
        }
        cout << "Value at index " << index << " = " << arr[index] << endl;
    }
    catch (int e) {
        cout << "Exception caught: Index " << e << " is out of bounds (valid range 0-4)." << endl;
    }

    cout << "Program continues after exception handling." << endl;
    return 0;
}
```

**Marking breakdown:**
| Component | Marks |
|---|---|
| Correct definition of exception handling + role of try/catch/throw | 1 |
| `try` block correctly wraps risky array-access code | 0.75 |
| `throw` correctly raises exception when index is out of bounds | 1 |
| `catch` block correctly handles and displays meaningful message | 1 |
| Program continues gracefully after handling (no crash) | 0.25 |
| **Total** | **4** |

---

## SECTION "C" — Attempt ANY TWO [2 × 8 = 16]

---

### Q8. Define Class and Object. Explain access modifiers in C++. Can private members be accessed directly outside a class? Justify with example. Explain member functions defined inside vs outside a class with syntax. [2+2+2+2=8]

**Model Answer:**

**Class and Object (2 marks):**
- **Class (1 mark):** A user-defined blueprint/template that defines data members (attributes) and member functions (behavior) for creating objects. It does not occupy memory until instantiated.
- **Object (1 mark):** An instance of a class that occupies actual memory and has its own copy of the class's data members (unless static).

```cpp
class Student {       // class
    int roll;
public:
    void setRoll(int r) { roll = r; }
};
Student s1;            // object
```

**Access Modifiers (2 marks):**

| Modifier | Accessibility |
|---|---|
| **private** | Accessible only within the class itself (default for `class`) |
| **protected** | Accessible within the class and its derived (child) classes |
| **public** | Accessible from anywhere the object is visible (outside the class too) |

(1 mark for naming and correctly describing all 3; 1 mark for a clear example or correct distinction between them)

**Can private members be accessed directly outside the class? (2 marks)**

**No.** Private members can only be accessed within the class's own member functions. Direct access from outside (e.g., `obj.privateVar`) causes a **compile-time error**. Access from outside must go through **public member functions** (getters/setters) or `friend` functions/classes.

```cpp
class Demo {
private:
    int x = 10;
};

int main() {
    Demo d;
    cout << d.x;   // ERROR: 'x' is private within this context
    return 0;
}
```
Corrected via public accessor:
```cpp
class Demo {
private:
    int x = 10;
public:
    int getX() { return x; }   // public interface
};
int main() {
    Demo d;
    cout << d.getX();  // OK — 10
}
```
(1 mark for correct justification "No" + reason; 1 mark for valid code example showing the error and/or the fix)

**Member functions: inside vs outside the class (2 marks):**

**Defined inside the class** (implicitly inline):
```cpp
class Box {
public:
    int getArea(int l, int b) {   // defined inside
        return l * b;
    }
};
```

**Defined outside the class** (using scope resolution operator `::`):
```cpp
class Box {
public:
    int getArea(int l, int b);   // declaration only
};

int Box::getArea(int l, int b) {  // definition outside, using ::
    return l * b;
}
```

(1 mark for correct inside-class syntax; 1 mark for correct outside-class syntax using `ClassName::`)

**Marking breakdown:**
| Component | Marks |
|---|---|
| Class definition + Object definition (1 each) | 2 |
| Access modifiers (private/protected/public) explained correctly | 2 |
| Private access justification (No + reason) + example | 2 |
| Member function inside class (syntax) | 1 |
| Member function outside class (syntax with `::`) | 1 |
| **Total** | **8** |

---

### Q9. Employee Management System — Inheritance Hierarchy (Regular vs Adhoc employees) [8]

**Requirements recap:**
- Regular salary = basic + DA(10% of basic) + HRA(30% of basic)
- Adhoc salary = number_of_days_worked × daily_wage
- (a) Inheritance hierarchy: Employee → Regular, Adhoc
- (b) Parameterized constructors down the hierarchy
- (c) Destructors + member functions to update variables and compute salary
- (d) `main()` — dynamic instantiation + detailed reports

**Model Answer:**

```cpp
#include <iostream>
#include <string>
using namespace std;

// Base class
class Employee {
protected:
    string name;
    int empID;

public:
    // Parameterized constructor
    Employee(string n, int id) : name(n), empID(id) {
        cout << "Employee constructor called for " << name << endl;
    }

    // Member function to update base attributes
    void updateEmployee(string n, int id) {
        name = n;
        empID = id;
    }

    virtual double computeSalary() = 0;   // pure virtual — enforces override
    virtual void displayReport() {
        cout << "Employee Name : " << name << endl;
        cout << "Employee ID   : " << empID << endl;
    }

    virtual ~Employee() {               // virtual destructor for proper cleanup
        cout << "Employee destructor called for " << name << endl;
    }
};

// Derived class: Regular
class Regular : public Employee {
private:
    double basic, da, hra;

public:
    Regular(string n, int id, double b)
        : Employee(n, id), basic(b) {
        da = 0.10 * basic;
        hra = 0.30 * basic;
    }

    void updateBasic(double b) {
        basic = b;
        da = 0.10 * basic;
        hra = 0.30 * basic;
    }

    double computeSalary() override {
        return basic + da + hra;
    }

    void displayReport() override {
        Employee::displayReport();
        cout << "Type          : Regular" << endl;
        cout << "Basic         : " << basic << endl;
        cout << "DA (10%)      : " << da << endl;
        cout << "HRA (30%)     : " << hra << endl;
        cout << "Monthly Salary: " << computeSalary() << endl;
    }

    ~Regular() {
        cout << "Regular destructor called for " << name << endl;
    }
};

// Derived class: Adhoc
class Adhoc : public Employee {
private:
    int daysWorked;
    double dailyWage;

public:
    Adhoc(string n, int id, int days, double wage)
        : Employee(n, id), daysWorked(days), dailyWage(wage) {}

    void updateWorkDetails(int days, double wage) {
        daysWorked = days;
        dailyWage = wage;
    }

    double computeSalary() override {
        return daysWorked * dailyWage;
    }

    void displayReport() override {
        Employee::displayReport();
        cout << "Type          : Adhoc" << endl;
        cout << "Days Worked   : " << daysWorked << endl;
        cout << "Daily Wage    : " << dailyWage << endl;
        cout << "Monthly Salary: " << computeSalary() << endl;
    }

    ~Adhoc() {
        cout << "Adhoc destructor called for " << name << endl;
    }
};

// main() — dynamic instantiation
int main() {
    Employee *emp[2];

    emp[0] = new Regular("Aarav Sharma", 101, 25000);
    emp[1] = new Adhoc("Bina Rai", 102, 20, 1200);

    for (int i = 0; i < 2; i++) {
        cout << "\n-------------------------\n";
        emp[i]->displayReport();
    }

    for (int i = 0; i < 2; i++) {
        delete emp[i];   // triggers virtual destructor chain
    }

    return 0;
}
```

**Expected Output (abridged):**
```
-------------------------
Employee Name : Aarav Sharma
Employee ID   : 101
Type          : Regular
Basic         : 25000
DA (10%)      : 2500
HRA (30%)     : 7500
Monthly Salary: 35000

-------------------------
Employee Name : Bina Rai
Employee ID   : 102
Type          : Adhoc
Days Worked   : 20
Daily Wage    : 1200
Monthly Salary: 24000
```

**Marking breakdown (Total: 8):**

| Part | Component | Marks |
|---|---|---|
| **(a)** | Correct hierarchy: `Employee` (base) → `Regular`, `Adhoc` (derived) with appropriate data members in each | 2 |
| **(b)** | Parameterized constructors at each level, correctly chaining to base via initializer list/base call | 2 |
| **(c)** | Destructors defined at each level (ideally virtual in base); member functions to update variables and correctly compute salary (basic+DA+HRA for Regular; days×wage for Adhoc) | 2 |
| **(d)** | `main()` uses dynamic allocation (`new`), polymorphic base pointers or array of objects, and prints a clear, detailed report for each; proper cleanup (`delete`) | 2 |
| **Total** | | **8** |

**Award partial credit for:**
- Correct formulas even if class design is slightly off (+1)
- Using array of base class pointers vs separate objects — both acceptable if functionally correct
- Missing `virtual` destructor: −0.5 only (not full penalty) if base class is used polymorphically
- Missing dynamic instantiation (`new`)/using static objects instead: −1

**Common deductions:**
- Not deriving both classes from a common `Employee` base: −2 (fails part a)
- Salary formulas swapped or incorrect (e.g., HRA as 10%, DA as 30%): −1
- No constructor chaining (base constructor not called from derived): −1
- No destructor output/definition at all: −1

---

## Overall Section Summary

| Section | Questions Required | Marks per Q | Total |
|---|---|---|---|
| B | Any 6 of 7 | 4 | 24 |
| C | Any 2 of 3 | 8 | 16 |
| **Grand Total** | | | **40** |

**General marking notes for the examiner:**
1. Award marks for correct **logic/concept** even if minor syntax errors exist (missing semicolon, small typo) — deduct max 0.25 per such slip.
2. For programming questions, if the algorithm/logic is entirely correct but doesn't compile due to a small typo, award up to 90% of the code marks.
3. No marks for code that would not logically produce correct output even if syntactically valid.
4. Diagrams/examples that closely paraphrase textbook material are acceptable — do not require verbatim textbook wording.
5. If a student attempts more than the required number of questions, mark all attempted and award the best-scoring combination up to the required count.
