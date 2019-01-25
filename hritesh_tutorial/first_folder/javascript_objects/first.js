//object oriented programming
//listen oop in java script is more like a dictonary
let myvideo1 = {
    title: 'loops in javascript',
    videolngth: 15,
    videoDiscription: 'this is the video discription',


}
let myvideo2 = {
    title: 'functions in javascript',
    videolngth: 200,
    videoDiscription: 'this is the video discription',


}

//now try to access it
//console.log(myvideo.title);
//console.log(myvideo.videolngth);
//console.log(myvideo.videoDiscription);
//console.log(myvideo)

//creating new properties
//myvideo.videolngth = '200';
//console.log(myvideo);

let showvideolength = function (myobj) {
    console.log("The length of the video is " + myobj.videolngth)
}

//now see its working
showvideolength(myvideo1);
showvideolength(myvideo2);

let changevideolength2 = function (myobj) {
    //returning an object
    return {
        format1: 'this video has length ' + (myobj.videolngth + 2),
        format2: 'this video has length ' + (myobj.videolngth + 4),
    }

}
console.log(changevideolength2(myvideo1))

//assign it to an variable
let obj1 = changevideolength2(myvideo1)
let obj2 = changevideolength2(myvideo2)
console.log(obj1)
console.log(obj2)
//we can do it bypiece by piece
console.log(obj1.format1)
console.log(obj1.format2)
console.log(obj2.format1)
console.log(obj2.format2)

let showinfo = function (myobj) {
    //show all the object properties
    return {
        title: "this video title is " + myobj.title,
        videolength: "this videolength " + myobj.videolength,
        videoDiscription: "this discription " + myobj.videoDiscription,
    }

}

//lets give it a try
let resultobj = showinfo(myvideo1)
console.log(resultobj);
//slice it down
console.log(resultobj.title)
console.log(resultobj.videolength)
console.log(resultobj.videoDiscription)


// lets with the 

let myvideo3 = {
    title: 'loops in javascript',
    videolngth: 15,
    videoDiscription: 'this is the video discription',




}