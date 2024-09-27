// Method 1: ES6 Class Syntax
class Person1 {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I work as a ${this.occupation}.`);
  }

  // Arrow function as a member (Note: this is not a common practice due to potential issues with 'this' binding)
  getDetails = () => {
    return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}`;
  }
}

// Method 2: Constructor Function
function Person2(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;

  this.introduce = function() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I work as a ${this.occupation}.`);
  };
}

// Method 3: Object Literal
const Person3 = {
  init(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    return this;
  },
  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I work as a ${this.occupation}.`);
  }
};

// Method 4: Factory Function
function createPerson(name, age, occupation) {
  return {
    name,
    age,
    occupation,
    introduce() {
      console.log(`Hi, I'm ${name}, ${age} years old, and I work as a ${occupation}.`);
    }
  };
}

// Demonstrating usage and printing details
console.log("Method 1: ES6 Class");
const person1 = new Person1("Alice", 30, "Engineer");
person1.introduce();
console.log(person1.getDetails());

console.log("\nMethod 2: Constructor Function");
const person2 = new Person2("Bob", 25, "Designer");
person2.introduce();

console.log("\nMethod 3: Object Literal");
const person3 = Object.create(Person3).init("Charlie", 35, "Manager");
person3.introduce();

console.log("\nMethod 4: Factory Function");
const person4 = createPerson("David", 28, "Teacher");
person4.introduce();

// Demonstrating arrow function as a non-member function
const getFullDetails = (person) => {
  return `${person.name} is ${person.age} years old and works as a ${person.occupation}.`;
};

console.log("\nUsing non-member arrow function:");
console.log(getFullDetails(person1));
console.log(getFullDetails(person2));
console.log(getFullDetails(person3));
console.log(getFullDetails(person4));
