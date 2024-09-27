// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

// Student class inheriting from Person
class Student extends Person {
  constructor(name, age, rollNo, grade) {
    // Call the parent constructor
    super(name, age);

    // Validate roll number
    if (rollNo <= 0) {
      throw new Error("Roll number must be a positive integer.");
    }

    this.rollNo = rollNo;
    this.grade = grade;
  }

  // Override the introduce method
  introduce() {
    return `${super.introduce()} I'm a student with roll number ${this.rollNo} in grade ${this.grade}.`;
  }

  // New method specific to Student
  study(subject) {
    return `${this.name} is studying ${subject}.`;
  }

  // Getter for grade (demonstrating property usage)
  get gradeLevel() {
    return this.grade;
  }

  // Setter for grade with validation
  set gradeLevel(newGrade) {
    if (newGrade < 1 || newGrade > 12) {
      throw new Error("Grade must be between 1 and 12.");
    }
    this.grade = newGrade;
  }
}

// Demonstrate usage

try {
  // Creating a new Student
  const student1 = new Student("Alice", 15, 101, 9);
  console.log(student1.introduce());
  console.log(student1.study("Mathematics"));

  // Demonstrating getter
  console.log(`${student1.name}'s grade level: ${student1.gradeLevel}`);

  // Demonstrating setter
  student1.gradeLevel = 10;
  console.log(`${student1.name}'s new grade level: ${student1.gradeLevel}`);

  // Attempting to create a Student with invalid roll number
  const student2 = new Student("Bob", 16, 0, 10); // This will throw an error
} catch (error) {
  console.error("Error:", error.message);
}

// Demonstrating another error scenario
try {
  const student3 = new Student("Charlie", 14, 103, 8);
  student3.gradeLevel = 13; // This will throw an error
} catch (error) {
  console.error("Error:", error.message);
}
