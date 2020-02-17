var Person = {
    FirstName: "Rick",
    HairColor: "Brown"
};
console.log(Person);
var jsonPerson = JSON.stringify(Person);
console.log(jsonPerson);
var parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);