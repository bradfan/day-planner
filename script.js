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
var saveBtn9 = document.querySelector(".saveBtn9");
var saveBtn10 = document.querySelector(".saveBtn10");
var saveBtn11 = document.querySelector(".saveBtn11");
var saveBtn12 = document.querySelector(".saveBtn12");
var saveBtn13 = document.querySelector(".saveBtn13");
var saveBtn14 = document.querySelector(".saveBtn14");
var saveBtn15 = document.querySelector(".saveBtn15");
var saveBtn16 = document.querySelector(".saveBtn16");
var saveBtn17 = document.querySelector(".saveBtn17");

for (let i = 0; i < 9; i++) {
    $timeBlock.append(buildTimeBlock)

}


// append($(timeblock).addClass("past present future"));

// have to get this to talk to $timeBlock NOT MUCH MORE THAN PSUEDO-CODE
// function buildTimeBlock(hour){
//     var background;
//     if(currentHour===hour){
//         // SHOT IN THE DARK OPTION
//         $timeBlock.addClass("present")
//     }else if(currentHour < hour){
//         background = "past";
//     }else {
//         background = "future"
//     }
// } 
//  buildTimeBlock()
// console.log(buildTimeBlock)



var $description9text = document.querySelector(".description9")
saveBtn9.addEventListener("click", function(event){
    event.preventDefault();
     var $description9text = document.querySelector(".description9").value;
    localStorage.setItem("description9text",$description9text)
     console.log(localStorage)
});
var $description10text = document.querySelector(".description10")
saveBtn10.addEventListener("click", function(event){
   event.preventDefault();
    var $description10text = document.querySelector(".description10").value;
   localStorage.setItem("description10text",$description10text)
    console.log(localStorage)
});
var $description11text = document.querySelector(".description11")
saveBtn11.addEventListener("click", function(event){
   event.preventDefault();
    var $description11text = document.querySelector(".description9").value;
   localStorage.setItem("description11text",$description11text)
    console.log(localStorage)
});
var $description12text = document.querySelector(".description12")
saveBtn12.addEventListener("click", function(event){
   event.preventDefault();
    var $description12text = document.querySelector(".description12").value;
   localStorage.setItem("description12text",$description12text)
    console.log(localStorage)
});
var $description13text = document.querySelector(".description13")
saveBtn13.addEventListener("click", function(event){
    event.preventDefault();
     var $description13text = document.querySelector(".description13").value;
    localStorage.setItem("description13text",$description13text)
     console.log(localStorage)
});
var $description14text = document.querySelector(".description14")
saveBtn14.addEventListener("click", function(event){
    event.preventDefault();
     var $description14text = document.querySelector(".description14").value;
    localStorage.setItem("description14text",$description14text)
     console.log(localStorage)
});
var $description15text = document.querySelector(".description15")
saveBtn9.addEventListener("click", function(event){
    event.preventDefault();
     var $description15text = document.querySelector(".description15").value;
    localStorage.setItem("description15text",$description15text)
     console.log(localStorage)
});
var $description16text = document.querySelector(".description16")
saveBtn16.addEventListener("click", function(event){
   event.preventDefault();
    var $description16text = document.querySelector(".description16").value;
   localStorage.setItem("description16text",$description16text)
    console.log(localStorage)
});
var $description17text = document.querySelector(".description17")
saveBtn17.addEventListener("click", function(event){
    event.preventDefault();
     var $description17text = document.querySelector(".description17").value;
    localStorage.setItem("description17text",$description17text)
     console.log(localStorage)
});
function renderUserInfo(){
     var content = localStorage.getItem("description9text");
     $description9text.textContent = content
     var content = localStorage.getItem("description10text");
     $description10text.textContent = content
     var content = localStorage.getItem("description11text");
     $description11text.textContent = content
     var content = localStorage.getItem("description12text");
     $description12text.textContent = content
     var content = localStorage.getItem("description13text");
     $description13text.textContent = content
     var content = localStorage.getItem("description14text");
     $description14text.textContent = content
     var content = localStorage.getItem("description15text");
     $description15text.textContent = content
     var content = localStorage.getItem("description16text");
     $description16text.textContent = content
     var content = localStorage.getItem("description17text");
     $description17text.textContent = content

 };
 renderUserInfo()
 

 



 




