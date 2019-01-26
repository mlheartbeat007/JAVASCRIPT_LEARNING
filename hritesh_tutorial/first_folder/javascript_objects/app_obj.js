let myTodos = {
  day: "monday",
  meetings: 0,
  meetDone: 0
};
console.log(myTodos);

//three atributes day,meetings,meetdone
let add_meetings = function(obj, meetings = 0) {
  //adding a default value
  obj.meetings = obj.meetings + meetings;
};
//console.log(add_meetings);
//if the meeting done we have to reset the timing

let meetdone = function(obj, meetings = 0) {
  obj.meetings = obj.meetings - meetings;
};

let resetDay = function(obj) {
  obj.meetings = 0;
  obj.meetDone = 0;
};

let get_summary_of_the_day = function(obj) {
  let left_meetings = obj.meetings - obj.meetDone;
  return "you have " + left_meetings + " meetigns today";
};

add_meetings(myTodos, 1);
add_meetings(myTodos, 2);
add_meetings(myTodos, 3);
add_meetings(myTodos, 4);
add_meetings(myTodos, 6);
console.log(get_summary_of_the_day(myTodos));
meetdone(myTodos, 3);
meetdone(myTodos, 4);
//meetdone(myTodos);
console.log(get_summary_of_the_day(myTodos));
resetDay(myTodos);
console.log(get_summary_of_the_day(myTodos));
