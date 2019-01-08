
var number1;
var number2;

number1 = Math.floor(Math.random()*100);
number2 = Math.floor(Math.random()*100);

document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

var answer = number1*number2;

var checkanswer = document.querySelector('input[type=text]');
var value = checkanswer.value;
var btn = document.querySelector('input[type=button][value=check]');

btn.onclick = function(){
	value  = checkanswer.value;
	if (value == answer) {
		alert("right");
	}
	else {
		alert("wrong. correct answer is"+answer);
	}
}
