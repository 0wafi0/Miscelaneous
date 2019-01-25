"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "Wafi";
var sentence = "My name is " + name + ". I am learning TypeScript";
console.log(sentence);
/* Why have types?
    Helps you iron out undetectable mistakes done during development
    Intellisense helps you select the helper functions for a specific type
    Better code structure
    Functional programming
*/
var isNew = null;
var myNae = undefined;
//two ways to declare arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// pupils specifity for types within an array
var person1 = ["Chris", 22];
// Enumeration syntax
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// You can also use the 'any' type
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
// You can use unknown to fix this issue and the use of the keyboard as
var myVariable2 = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
//(myVariable2 as string).toUpperCase();
// typescript will infer a type for variables that are assigned a value at decleration
// You can have multitype using the or operator
var multiType;
multiType = 20;
multiType = true;
// this approach is more supported and using the any type or unknown type that may
// provide more unstability
// functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(5, 8));
console.log(add(5));
// Interfaces
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
// classes basically the same as java etc.
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ${this.employeeName}");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    return Manager;
}(Employee));
