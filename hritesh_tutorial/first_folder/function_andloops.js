
/* Created with JetBrains WebStorm.
* User: pirate
* Date: 1/25/19
* Time: 5:40 AM
* To change this template use File | loop and function | File Templates.
*/

//define function good for vue js
/***************************/
let say_hello = function () {
    console.log("greetings message");
    console.log("hei user");
}
say_hello()
/********************************/

//function with parameter
let say_hello_with_name = function (name1, name2) {
    console.log('hello ' + name1);
    console.log('hello ' + name2);
    console.log('hello ${name1} ${name2}');
    //currently this is not working

}
say_hello_with_name('tanvir', 'rahman')

let mathop = function (number1, number2) {
    //return value
    return number1 + number2

}
console.log(mathop(12, 12))
