	
var number1;
var number2;
//number1 = Math.floor((Math.random()+10)+1);
//number2 = Math.floor((Math.random()+10)+1);
number1 = Math.floor(Math.random()*100);
number2 = Math.floor(Math.random()*100);


//now add the number in the id field
//we can add DOM using this method
document.getElementById('number1').innerHTML = number1;
document.getElementById('number2').innerHTML = number2;

var answer = number1+number2;
//now get the answer

var checkanswer = document.querySelector('input[type=text]');
var value  = checkanswer.value;
var btn = document.querySelector('input[type=button][value=check]');
btn.onclick = function(){
	value = checkanswer.value;
	if (value==answer) {
		alert("you are right");

	}
	else {
		alert("you are wrong corrent is "+answer);
	}
}