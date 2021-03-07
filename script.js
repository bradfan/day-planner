var date = moment().format("dddd, MMMM Do YYYY, h:mm a")
var currentDay = document.getElementById("currentDay"); currentDay.textContent=date;
currentDay.textContent=date
// set var to change color depending on the hour of day
var currentHour = +moment().format("H");
console.log(currentHour)
var $timeBlock = $("#time-block");
var $hour = $("hour").val();
console.log($hour);
// for loop appends textarea 
for(let i=9; i<=17; i++){
    $timeBlock.append(timeColor(i));
}
// function assigns color to textarea past, present,future
function timeColor(hour){
    var background;
    if(currentHour===hour){
        background = "present";
    }else if(currentHour < hour){
        background = "past";
    }else {
        background = "future"
    }
}

