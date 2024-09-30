const module1 = require('./module1');

console.log(module);
console.log(module1);
console.log(module1.name);
module1.greet('Simon');
module1.sayHello('Hello World');

const calc = require('./calculator');

console.log(calc.add(5, 2));
console.log(calc.subtract(5, 2));
console.log(calc.mutiply(5, 2));
console.log(calc.devide(5, 2));

console.log(college);