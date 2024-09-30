// Global object 
globalThis.college = " George Brown College"

//console.log(module); // module object

var name = "Simon Vu"
function greet(name){
    console.log("Hello " + name);
}

function sayHello(){
    console.log("Hello World");
}

module.exports = {
    name,
    greet,
    sayHello
}