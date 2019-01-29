const obj = new Vue({
  // add method and peoperties
  //remember the Vue V should be capital letter
  el: "#book",

  data: {
    title: "linux System Administration",
    author: "MD Tanvir Rahman",
    summary:
      "this is a lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu summary"
  },
  methods: {
    //another dictionary but it is for function
    sayauthor: function() {
      alert("he will be inshallah a successfull and attractive person");
      //or we can print the title again
      alert(this.author);
    },
    saytitle: function() {
      alert("the title can be changeed after sometime");
      //or we can print the title again
      alert(this.title);
    },
    saysummary: function() {
      alert("boring lorem ipsum");
      //or we can print the title again
      //alert(this.title);
    }
  }
});
