// console.log(global); // Global object
// console.log(console); // Console object

console.log(__dirname); // directory name
console.log(__filename); // file name

setInterval(() => {
    console.log('Hello world');
}, 3000); // prints 'Hello World'

setTimeout(() => {
    console.log('Hello World');
}, 3000); // prints 'Hello World' after the timeout