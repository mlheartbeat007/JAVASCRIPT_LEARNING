// functions or method can be inside the object
// we have to use the this object
// remember obj in javascript is actually a dictonary
//
let mytodos = {
  day: "Monday",
  meetings: 0,
  meetdone: 0,
  //this become different
  //we are not going to use the = sign cause its a dictonary
  //and inside the key value pair in the value we have to add function
  //the keyword this will have everything inside the object
  //then we just access the dict obj
  details: function() {
    console.log(this);
    console.log(this.details); //you can call itself function
    console.log("day --- " + this.day);
    console.log("day --- " + this.meetings);
    console.log("day --- " + this.meetdone);
  }
};
mytodos.details();
