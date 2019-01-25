//wired looping function in javascript
const days = ['MONDAYS', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
console.log(days[0]);
// create a function
let say_hello = function (day) {
    console.log("say hello " + day)
}

days.forEach(say_hello)

//its can be enhanced by the explcit use

days.forEach(function (day, index) {
    console.log("say hello " + index + " " + day);


})
// remember first parameter can never be index it will be 
// the array element

//now the traditional for loop
//do it with the same 
for (let item = 0; item < days.length; item++) {
    console.log("say hello " + item + " " + days[item]);


}




