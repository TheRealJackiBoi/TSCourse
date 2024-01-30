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
