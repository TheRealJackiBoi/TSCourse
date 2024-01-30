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
function takeGenArr <T> (arr: T[]): T { 
  return arr.length > 0 ? arr[0] : undefined
}


function take2Obj <T extends object, U extends object> (first: T, second: U) {
  return {...first, ...second}
}





