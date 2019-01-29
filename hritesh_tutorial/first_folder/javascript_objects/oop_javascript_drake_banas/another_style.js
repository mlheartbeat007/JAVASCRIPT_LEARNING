//functional approach
//how the normal function work

let work = function() {
  return "hello are you working";
};

console.log(work());

//but this is different approach but creating class

function Person(name, street) {
  this.name = name;
  this.street = street;
  //add method
  this.info = function() {
    return "my name is " + this.name + " lives in " + this.street;
  };
}

//create the object
//this is another methoid
let bobsmith = new Person("Tanvir", "CDA/23");
console.log(bobsmith);
//we can see that it also converted to the dictonary
// object
//first one make more nsense
console.log(bobsmith.info());

//change the properties of the obj like name

let changename = function(obj) {
  obj.name = "Miraj Hossein";
  return "The new name " + obj.name;
};

console.log(changename(bobsmith));
var person1 = new Person("Tanvir", "CDA/21");
var person2 = new Person("Ornob", "Patenga");

console.log(person1);
console.log(person2);
