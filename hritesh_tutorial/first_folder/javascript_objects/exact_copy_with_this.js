let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,
  addMeetings: function(meet) {
    this.meetings = this.meetings + meet;
  },
  meetdone: function(meet) {
    this.meetDone = this.meetDone + meet;
  },
  resetDone: function() {
    this.meetings = 0;
    this.meetDone = 0;
  },
  details: function() {
    let leftmeeting = this.meetings - this.meetDone;
    return "You have " + leftmeeting + " meetings today";
  }
};
//remember you have to add comma ageter every keyLvalue pair
//its a dictonary

myTodos.addMeetings(1);
myTodos.addMeetings(10);
myTodos.addMeetings(20);
myTodos.addMeetings(10);
myTodos.addMeetings(5);
result = myTodos.details();
console.log(result);
myTodos.meetdone(5);
myTodos.meetdone(5);
myTodos.meetdone(5);
console.log(myTodos.details());
myTodos.resetDone();
console.log(myTodos.details());
