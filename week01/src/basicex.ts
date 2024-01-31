// 1
const num: number = 2
const str: string = "Hello"
const bool: boolean = true
const arr: number[] = [1, 2, 3, 4]
const any: any = 1

// 2
enum weekdays {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY 
}

enum strWeekdays {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday", 
  THURSDAY = "thursday",
  FRIDAY = "friday" 
}


/* 2.3
 * uniontypes and object literals
 * */

// 4
class Person {
  private name: string
  private readonly email: string
  private age: number

  constructor(name: string, email: string, age:number) {
    this.name = name
    this.email = email
    this.age = age
  }

  getName(): string { return this.name }
  getEmail(): string { return this.email }
  getAge(): number { return this.age }
}

class Employee extends Person {
  private salary: number
  
  constructor(name: string, email: string, age:number, salary: number) {
    super(name, email, age)
    this.salary = salary
  }

  getSalary(): number { return this.salary }
}

const julius: Employee = new Employee("Julius", "julleren@gmail.com", 24, 1000)


// 4
const anyStr: any = any
const specificStr = anyStr as string


// 5
const add = (a: number, b: number): number => a + b 

// 6
const http: [number, string] = [200, "OK"]
const http2: [number, string] = [400, "error"]
const http3: [number, string] = [404, "notfound"]
const http4: [number, string] = [500, "server error"]

const personTuple: [string, number, string] = ["julius", 24, "julleren@gmail.com"]

// 7 
const numOrStr = (val: number | string) => {
  console.log(val)
}

type NumOrStr = number | string

const newPers: [string, NumOrStr, string] = ["julius", "24", "julleren@gmail.com"]

console.log(numOrStr("9"))


// 8
function takeGenArr <T> (arr: T[]): T | null { 
  if (arr.length > 0) { 
    return arr[0]
  } 
  else {
    return null
  }
}


function take2Obj <T extends object, U extends object> (first: T, second: U) {
  return {...first, ...second}
}


// 9
const arrOfNum: Array<number> = [1, 2, 3, 4, 5]

const multiDArr: Array<Array<string>> = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]]


// 10
 // Part 1
 // A variable that might be null or undefined
 let nullableValue: string | null | undefined = "Hello";

 // Use the exclamation mark to assert that the value is non-null
 let nonNullableValue: string = nullableValue!;

 console.log(nonNullableValue!); // Output: Hello

// Part 2
// A variable that might be null or undefined
let myString: string | undefined = "placeholder because of function not defined"//possibleUndefinedStringFunction();
// Use the exclamation mark to assert that the value is non-null
let lemgth: number = myString!.length; 


// 11
// Part 1
// A function that takes an optional parameter
function printName(name?: string) {
  console.log(name);
}

// Call the function without a parameter
printName(); // Output: undefined
// Call the function with a parameter
printName("John"); // Output: John

// Part 2
// A type alias with an optional age property
type NewPersonType = {
  name: string;
  age?: number;
};

// Create a person object with an age property
// Create a person object without an age property
const prsn: NewPersonType = {
  name: "Julius"
}



// 12
const numOrStrFunc = (val: number | string): string | number => {
  if ( typeof val === "string" ) {
    return val
  }
  // could use if/else, but by having the union type of string or number and checking if val is a string, it can only be a number
  else {
    return val * 2
  }
}


// 13
const anyVar: any = 2323
const myAnyToStr = anyVar as string
const myAnyToStrUseAngle = <string>anyVar


// 14
const direction = (direction: "left" | "right" | "up" | "down"): number => {

  switch (direction) {
    case "left":
      return 1
    case "right":
      return 2
    case "up":
      return 3
    case "down":
      return 4
  }
  
}


// 15
type Human = {
  eat: Function
}

type Alien = {
  fly: Function
}


const humOrAli = (creator: Human | Alien): Function => {
  if ("eat" in creator) {
    return creator.eat
  }
  else {
    return creator.fly
  }
}


// 16
class PersonForCar {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Car {
  model: string
  constructor(model: string) {
    this.model = model
  }
}

// instance of only works if it's of a class, and that is type or interface NOT
// Therefore I've changed Car and PersonForCar to class
const carOrPerson = (instance: Car | PersonForCar): string => {
  if (instance instanceof Car) {
    return (instance as Car).model
  }
  else {
    return (instance as PersonForCar).name
  }
}


// 17
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// write a type predicate to narrow the type of the fish parameter
const isFish = (animal: Fish | Bird): animal is Fish => {
  return (animal as Fish).swim !== undefined
}

function howToMove(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}



// 18
interface PersInterface {
  name: string
  [key: string]: string | number
}

const persFromInterface: PersInterface = {
  name: "Jack",
  "age": 21
}


// 19
type SndPersInterface = {
  name: string
}

type Student = {
  studentId: number
}

const combineStudentAndPerson = (person: SndPersInterface, student: Student): Student & SndPersInterface => { return {...person, ...student}}
