///we will use the node version of the drake banas tutorial

//cre4ate customer class remember it will be dict

let customer = {
  Name: "Tom Smith",
  speak: function() {
    return "my name is " + this.Name;
  },
  //dict inside a dict
  address: {
    street: "cda 23/1 agrabad",
    city: "Chittagong",
    state: "PA"
  }
};

//fetch the data
console.log(customer.speak());
console.log(customer.name + " lives at " + customer.address.street);
//add some property to the class inside the address
customer.address.country = "Bangladesh";
//take the data
console.log(customer.address.country);
console.log(
  customer.name +
    " lives at " +
    customer.address.street +
    " and the country is " +
    customer.address.country
);
