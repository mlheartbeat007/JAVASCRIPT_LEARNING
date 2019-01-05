// addthe rtraditional
// vue script
// for event handling we 
//we use somting like v-on

const obj = new Vue({
    el:'#book',
    data:{
        title: "the summer of sixty nine",
        author: "Tanvir rahman",
        summery: "this is not a book and i am not the author",

    },
    methods:{
        //here you will write the method /function
        sayhello: function(){
            //add the alert
            alert("you are awesome");
        }
    }
});