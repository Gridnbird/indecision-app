// arguments object - no longer bound with arrow function
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Kiev', 'New York', 'Philadelphia'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlaceLived());


// Challenge area 

const multiplier = {
    // numbers - array of numbers
    numbers: [2, 3, 5],
    // multiplyBy - single number
    multiplyBy: 4,
    // multiply - return a new array where the numbers have been multiplied 
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());