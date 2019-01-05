// create the javascript object
// sreate the Vue object called it is a js
// there are two things el and the data
//id will be inside the el
// and all the data with jinja like template 
// inside the data
// before starting the id add the # 
const first = new Vue({
    el: '#example',
    data:{
        title: 'this is the second example of the vue',
        message: 'this the message object of the vue',
        name: 'add the name',
    }
});

//in javascript toUppercase() is the function 
// for changing the case
//lets create another Vue object
// addinf js for the third fourth


const obj1 = new Vue({
    el:'#example2',
    data:{
        name1: 'this is name 1',
        text1: 'this is text1',
    }

});

// add another vue js object

const obj2 = new Vue({
    el: '#this_is_third',
    data:{
        name2:'this is name2 using the traditional method',
        text2:'this is the text2 using traditional method',
    }

});


//lets create another with 5 attribute

const obj3 = new Vue({
    el: '#this_is_forth',
    data:{
        name3:'hello this is name3',
        age3:'i am not that old',
        text3:'i have the whole lorem ipsum text',
    // adding images
    img:{
        src: 'https://placeimg.com/200/200/animals',
        alt: 'A placeholder images'
    }
}


});


// lets add another 

const obj4 = new Vue({
    el: '#this_is_fifth ',
    data:{
        name5:'This is name 5',
        date5: 'i dont know the date',
        details5:'i dont know the detail yet',
    img: {
        src: "https://placeimg.com/200/200/animals",
        alt: 'this is a pic of the kitty',
    }
    }

});