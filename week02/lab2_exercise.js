// Ex1:
const greeter = (myArray, counter) => {
    const greetText = 'hello';
    for (let i = 0; i < counter && i < myArray.length; i++) {
        console.log(`${greetText} ${myArray[i]}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Ex2:
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');

console.log(capitalize('fooBar')); // Output: FooBar
console.log(capitalize('nodeJs')); // Output: NodeJs

// Ex3:
const capitalizeFirstLetter = ([first, ...rest]) => first.toUpperCase() + rest.join('');
const capitalizeColors = colors => colors.map(color => capitalizeFirstLetter(color));
const colors = ['red', 'blue', 'green'];
console.log(capitalizeColors(colors)); // Output: ['Red', 'Blue', 'Green']

// Ex4:
const filterLessThan20 = (arr) => arr.filter(value => value >= 20);
const values = [1, 60, 34, 30, 20, 5];
console.log(filterLessThan20(values)); // Output: [60, 34, 30, 20]

// Ex5:
const calculateSum = arr => arr.reduce((sum, num) => sum + num, 0);
const calculateProduct = arr => arr.reduce((product, num) => product * num, 1);
const numbers = [1, 2, 3, 4];
console.log(calculateSum(numbers));    // Output: 10
console.log(calculateProduct(numbers)); // Output: 24

// Ex6:
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.details()}, Balance: $${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());  // Output: Model: Pontiac Firebird, Year: 1976

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());  // Output: Model: Volvo SD, Year: 2018, Balance: $30000
