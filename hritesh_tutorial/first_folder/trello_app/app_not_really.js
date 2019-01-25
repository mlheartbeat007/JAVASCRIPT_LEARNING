const myTodo = []
//empty array now we have to push
myTodo.push('By Bread');
myTodo.push('code');
myTodo.push('beat myself');
myTodo.push('tell myself i am a looser');
myTodo.push('does it matter!! i am always loosing')
myTodo.push('but its not enough');
myTodo.push('i have to do it on a regular basis');
//added in the array
//now i have to print it
myTodo.forEach(function (td, index) {

    console.log("your task " + (index + 1) + " " + td);
})

