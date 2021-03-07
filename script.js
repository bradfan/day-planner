var date = moment().format("dddd, MMMM Do YYYY, HH")
var currentDay = document.getElementById("currentDay"); currentDay.textContent=date;
currentDay.textContent=date
// set var to change color depending on the hour of day
var currentHour = +moment().format("HH");
console.log(currentHour)
var $timeBlock = $("#time-block");
var time = $(".hour").text();
console.log(time);
var arrayTime = time.split(":")

console.log(arrayTime);
var hour = parseInt(arrayTime)
console.log(arrayTime)

// for loop appends textarea 
for(let i=9; i<=17; i++){
    $timeBlock.append(timeBlock(i));
}
// function assigns color to textarea past, present,future
function timeBlock(hour){
    var background;
    if(currentHour===hour){
        background = "present";
    }else if(currentHour < hour){
        background = "past";
    }else {
        background = "future"
    }return $timeBlock
}











// // var a = "9:00"
// var b = "12:00"
// var arrayA = a.split(":")  //this splits the string into an array by the colon, so it will be this: ["9", "00"]
// var numberA = parseInt( arrayA[0] )  //parseInt runs on the first element of our array, which is "9"

// if(numberA < 8){
//   numberA += 12;
//   //any numbers that are lower than 8 from 8:00 AM, we'll add 12 to so that our PM times are on the 24-hr clock
// }