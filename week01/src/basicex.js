var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1
var num = 2;
var str = "Hello";
var bool = true;
var arr = [1, 2, 3, 4];
var any = 1;
// 2
var weekdays;
(function (weekdays) {
    weekdays[weekdays["MONDAY"] = 0] = "MONDAY";
    weekdays[weekdays["TUESDAY"] = 1] = "TUESDAY";
    weekdays[weekdays["WEDNESDAY"] = 2] = "WEDNESDAY";
    weekdays[weekdays["THURSDAY"] = 3] = "THURSDAY";
    weekdays[weekdays["FRIDAY"] = 4] = "FRIDAY";
})(weekdays || (weekdays = {}));
var strWeekdays;
(function (strWeekdays) {
    strWeekdays["MONDAY"] = "monday";
    strWeekdays["TUESDAY"] = "tuesday";
    strWeekdays["WEDNESDAY"] = "wednesday";
    strWeekdays["THURSDAY"] = "thursday";
    strWeekdays["FRIDAY"] = "friday";
})(strWeekdays || (strWeekdays = {}));
/* 2.3
 * uniontypes and object literals
 * */
// 4
var Person = /** @class */ (function () {
    function Person(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Person.prototype.getName = function () { return this.name; };
    Person.prototype.getEmail = function () { return this.email; };
    Person.prototype.getAge = function () { return this.age; };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, email, age, salary) {
        var _this = _super.call(this, name, email, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getSalary = function () { return this.salary; };
    return Employee;
}(Person));
var julius = new Employee("Julius", "julleren@gmail.com", 24, 1000);
// 4
var anyStr = any;
var specificStr = anyStr;
// 5
var add = function (a, b) { return a + b; };
// 6
var http = [200, "OK"];
var http2 = [400, "error"];
var http3 = [404, "notfound"];
var http4 = [500, "server error"];
var personTuple = ["julius", 24, "julleren@gmail.com"];
// 7 
var numOrStr = function (val) {
    console.log(val);
};
var newPers = ["julius", "24", "julleren@gmail.com"];
console.log(numOrStr("9"));
// 8
function takeGenArr(arr) {
    if (arr.length > 0) {
        return arr[0];
    }
    else {
        return null;
    }
}
function take2Obj(first, second) {
    return __assign(__assign({}, first), second);
}
// 9
var arrOfNum = [1, 2, 3, 4, 5];
var multiDArr = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
// 10
// Part 1
// A variable that might be null or undefined
var nullableValue = "Hello";
// Use the exclamation mark to assert that the value is non-null
var nonNullableValue = nullableValue;
console.log(nonNullableValue); // Output: Hello
// Part 2
// A variable that might be null or undefined
var myString = "placeholder because of function not defined"; //possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
var lemgth = myString.length;
// 11
// Part 1
// A function that takes an optional parameter
function printName(name) {
    console.log(name);
}
// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John
// Create a person object with an age property
// Create a person object without an age property
var prsn = {
    name: "Julius"
};
// 12
var numOrStrFunc = function (val) {
    if (typeof val === "string") {
        return val;
    }
    // could use if/else, but by having the union type of string or number and checking if val is a string, it can only be a number
    else {
        return val * 2;
    }
};
// 13
var anyVar = 2323;
var myAnyToStr = anyVar;
var myAnyToStrUseAngle = anyVar;
// 14
var direction = function (direction) {
    switch (direction) {
        case "left":
            return 1;
        case "right":
            return 2;
        case "up":
            return 3;
        case "down":
            return 4;
    }
};
var humOrAli = function (creator) {
    if ("eat" in creator) {
        return creator.eat;
    }
    else {
        return creator.fly;
    }
};
// 16
var PersonForCar = /** @class */ (function () {
    function PersonForCar(name) {
        this.name = name;
    }
    return PersonForCar;
}());
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    return Car;
}());
// instance of only works if it's of a class, and that is type or interface NOT
// Therefore I've changed Car and PersonForCar to class
var carOrPerson = function (instance) {
    if (instance instanceof Car) {
        return instance.model;
    }
    else {
        return instance.name;
    }
};
// write a type predicate to narrow the type of the fish parameter
var isFish = function (animal) {
    return animal.swim !== undefined;
};
function howToMove(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
var persFromInterface = {
    name: "Jack",
    "age": 21
};
var combineStudentAndPerson = function (person, student) { return __assign(__assign({}, person), student); };
