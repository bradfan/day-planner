var date = moment().format("dddd, MMMM Do YYYY, h:mm a")
var currentDay = document.getElementById("currentDay"); currentDay.textContent=date;
currentDay.textContent=date
// set var to change color depending on the hour of day
var currentHour = +moment().format("H");
console.log(currentHour)
var $timeSlots = $("#time-slots");
// for loop appends textarea 
for(let i=9; i<=17; i++){
    $timeSlots.append(timeColor(i));
}
// function assigns color to textarea past, present,future
function timeColor(h){
    var background;
    if(currentHour===h){
        background = "present";
    }else if(currentHour < h){
        background = "past";
    }else {
        background = "future"
    }
}

// be able to loop through every single text area to determine if background = present past or future.