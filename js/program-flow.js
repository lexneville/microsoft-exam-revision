//calculate the factorial of the largest value in an array using reduce method 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var factorials = numbers.reduce(factorial);
function factorial(previous, current) {
    return previous * current;
}
console.log(factorials);

//for...in loop
var person = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1955", gender: "Female"};
for (var prop in person) {
    console.log(prop); // Prints the variable names 
};
for (var prop in person) {
    console.log(person[prop]); // Prints the values
};

