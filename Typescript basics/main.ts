export {};
let message = "Welcome Back";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Wafi";

let sentence: string = `My name is ${name}. I am learning TypeScript`;

console.log(sentence);

/* Why have types?
    Helps you iron out undetectable mistakes done during development
    Intellisense helps you select the helper functions for a specific type
    Better code structure
    Functional programming
*/

let isNew: boolean = null;
let myNae: string = undefined;

//two ways to declare arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// pupils specifity for types within an array
let person1: [string, number] = ["Chris", 22];

// Enumeration syntax
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;

// You can also use the 'any' type
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

// You can use unknown to fix this issue and the use of the keyboard as
let myVariable2: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}

//(myVariable2 as string).toUpperCase();

// typescript will infer a type for variables that are assigned a value at decleration
// You can have multitype using the or operator
let multiType: number | boolean;
multiType = 20;
multiType = true;
// this approach is more supported and using the any type or unknown type that may
// provide more unstability

// functions
function add(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
console.log(add(5, 8));
console.log(add(5));

// Interfaces
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne"
};

fullName(p);

// interface makes this process less verbose
interface Person {
  firstName: string;
  lastName?: string;
}

// classes basically the same as java etc.
class Employee {
  protected employeeName: string; //access modifiers

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log("Good Morning ${this.employeeName}");
  }
}

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
}
