//create event text handled for almost 
// 5 item

const obj1 = new Vue({
    el:'#first_obj',
    data:{
        title1: 'this is title 1',
        text1: 'this is text 1'
    },
    methods:{
        //method name
        obj1_method:function(){
            alert("this is title 1");
        }
    }

})






const obj2 = new Vue({
    el:'#second_obj',
    data:{
        title2: "this is title number 2",
        text2:"this is text 2",

    },
    methods:{
        obj2_method:function(){
            alert("this is title 2");
        }
    }

});



const obj3=new Vue({
    el:"#third_obj",
    data:{
        title3:"this is third title",
        text3:"this is text 3"
    },
    methods:{
        obj3_method:function(){
            alert("this is title 3");
        }
    }
    

});

