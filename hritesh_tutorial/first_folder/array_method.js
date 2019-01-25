const numbers = ['one','two','three','four','five','six']
numbers[1]="somethings";
//console.log(numbers)
//returns the first elemrnt and pop it
//first_num = numbers.shift()
//console.log(first_num)

//unshift numbers
//inserting the value in the first position
//console.log(numbers.unshift('one'))

//console.log(numbers)



//numbers from the last
 //working with the end of the array
last_numbers=numbers.pop()
console.log(last_numbers)
numbers.push('seven')
console.log(numbers)

//in the middle
numbers.splice(2,1,"something")
console.log(numbers)
//number.splice(starting point,how many from the position,'whatvalue')