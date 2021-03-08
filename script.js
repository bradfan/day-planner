var date = moment().format("dddd, MMMM Do YYYY, HHmm")
var currentDay = document.getElementById("currentDay"); currentDay.textContent=date;
currentDay.textContent=date
// set var to change color depending on the hour of day
var currentHour = (+moment().format("HH")*100);
console.log(currentHour)
var $timeBlock = $("#time-block")
var time = [$(".hour").text()];
// var time = document.querySelector(".hour")
 console.log(time);
var hour = parseInt[time];
for (let i = 0; i < 8; i++) {
    $timeBlock.append(buildTimeBlock(hour))
}
// have to get this to talk to $timeBlock NOT MUCH MORE THAN PSUEDO-CODE
function buildTimeBlock(hour){
    var background;
    if(currentHour===hour){
        // SHOT IN THE DARK OPTION
        $timeBlock.addClass("present")
    }else if(currentHour < hour){
        background = "past";
    }else {
        background = "future"
    }
} 
 buildTimeBlock()
// console.log(buildTimeBlock)

// DRAWN FROM LOCAL STORAGE LESSON 4-22
var saveBtn = document.querySelector(".saveBtn");
// (html element listening for click on save button)
saveBtn.addEventListener("click", function(event){
    // (should prevent refresh)
    event.preventDefault();
    // (establishes "note" as a var recieving info(?) from description class and its value)
    var description = document.querySelectorAll(".description").value;
    var description = localStorage.getItem("description")
    // (should set and get data for local storage in a string)
    localStorage.setItem("description",description)
    localStorage.getItem("description", description);
    console.log(localStorage)
    // "description" is null
 })   


 




