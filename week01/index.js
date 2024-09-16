console.log('Hello, Simon!');

a = 10
var a = 10
// let a = 10

let b = 20
b= 100
b = "Hello"

// var b = 

//Object Literal
var student = {
    studentId: 1,
    studentName: "John",
    studentAge: 20,
    city: "New York"
}
console.log(student)
console.log(student.studentName)
console.log(typeof student)

// for(let key in student){
//     console.log(key)
//     console.log(student[key])
// }
for(let key in student){
    console.log( `${key} -> ${student[key]}`)
}

var emp = {
    empId: 1,
    empName: "John",
    empAge: 20,
    empCity: "NY"
}
//Object Destructuring 

var {empId, empName, empAge, empCity} = emp
var result = "Pass"
console.log(empId)

var newEmp = {
    empId, 
    empName, 
    empAge, 
    empCity,
    result
}

console.log(newEmp)

var emp1 = {
    ...emp,
    result
}
console.log(emp1)