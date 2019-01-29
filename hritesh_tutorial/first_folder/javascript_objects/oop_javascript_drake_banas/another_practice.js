let address = {
  street: "first street",
  city: "first city",
  state: "first State",
  //this is the get attribute
  getattr: function() {
    return "he lives in " + this.street + " " + this.city + " " + this.state;
  },

  ///this is the set attribute
  set_addr: function(theAddress) {
    //take the whole address string
    let parts = theAddress.toString().split(",");
    //console.log(parts);
    //store all the argument
    //in the previous variable
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.state = parts[2] || "";
    //console.log(this.street);
    //console.log(this.city);
    //console.log(this.state);
  }
};
console.log(address.street);
console.log(address.city);
console.log(address.state);
console.log(address.getattr());
address.set_addr("Second street,second city,second State");
console.log(address.getattr());
