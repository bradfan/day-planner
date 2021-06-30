var date = moment().format("dddd, MMMM Do YYYY");
var currentDay = document.getElementById("currentDay");
currentDay.textContent = date;
console.log("date", date)

// resorted to 'hard coding' each one individually
var saveBtn8 = document.querySelector(".saveBtn8");
var saveBtn9 = document.querySelector(".saveBtn9");
var saveBtn10 = document.querySelector(".saveBtn10");
var saveBtn11 = document.querySelector(".saveBtn11");
var saveBtn12 = document.querySelector(".saveBtn12");
var saveBtn13 = document.querySelector(".saveBtn13");
var saveBtn14 = document.querySelector(".saveBtn14");
var saveBtn15 = document.querySelector(".saveBtn15");
var saveBtn16 = document.querySelector(".saveBtn16");
var saveBtn17 = document.querySelector(".saveBtn17");

var $description8text = document.querySelector(".description8");
saveBtn8.addEventListener("click", function (event) {
  event.preventDefault();
  var $description8text = document.querySelector(".description8").value;
  localStorage.setItem("description8text", $description8text);
});
var $description9text = document.querySelector(".description9");
saveBtn9.addEventListener("click", function (event) {
  event.preventDefault();
  var $description9text = document.querySelector(".description9").value;
  localStorage.setItem("description9text", $description9text);
});
var $description10text = document.querySelector(".description10");
saveBtn10.addEventListener("click", function (event) {
  event.preventDefault();
  var $description10text = document.querySelector(".description10").value;
  localStorage.setItem("description10text", $description10text);
});
var $description11text = document.querySelector(".description11");
saveBtn11.addEventListener("click", function (event) {
  event.preventDefault();
  var $description11text = document.querySelector(".description11").value;
  localStorage.setItem("description11text", $description11text);
});
var $description12text = document.querySelector(".description12");
saveBtn12.addEventListener("click", function (event) {
  event.preventDefault();
  var $description12text = document.querySelector(".description12").value;
  localStorage.setItem("description12text", $description12text);
});
var $description13text = document.querySelector(".description13");
saveBtn13.addEventListener("click", function (event) {
  event.preventDefault();
  var $description13text = document.querySelector(".description13").value;
  localStorage.setItem("description13text", $description13text);
});
var $description14text = document.querySelector(".description14");
saveBtn14.addEventListener("click", function (event) {
  event.preventDefault();
  var $description14text = document.querySelector(".description14").value;
  localStorage.setItem("description14text", $description14text);
});
var $description15text = document.querySelector(".description15");
saveBtn15.addEventListener("click", function (event) {
  event.preventDefault();
  var $description15text = document.querySelector(".description15").value;
  localStorage.setItem("description15text", $description15text);
});
var $description16text = document.querySelector(".description16");
saveBtn16.addEventListener("click", function (event) {
  event.preventDefault();
  var $description16text = document.querySelector(".description16").value;
  localStorage.setItem("description16text", $description16text);
});
var $description17text = document.querySelector(".description17");
saveBtn17.addEventListener("click", function (event) {
  event.preventDefault();
  var $description17text = document.querySelector(".description17").value;
  localStorage.setItem("description17text", $description17text);
});
function renderUserInfo() {
  var content = localStorage.getItem("description8text");
  $description8text.textContent = content;
  var content = localStorage.getItem("description9text");
  $description9text.textContent = content;
  var content = localStorage.getItem("description10text");
  $description10text.textContent = content;
  var content = localStorage.getItem("description11text");
  $description11text.textContent = content;
  var content = localStorage.getItem("description12text");
  $description12text.textContent = content;
  var content = localStorage.getItem("description13text");
  $description13text.textContent = content;
  var content = localStorage.getItem("description14text");
  $description14text.textContent = content;
  var content = localStorage.getItem("description15text");
  $description15text.textContent = content;
  var content = localStorage.getItem("description16text");
  $description16text.textContent = content;
  var content = localStorage.getItem("description17text");
  $description17text.textContent = content;
}
renderUserInfo();

function buildTimeBlock() {
  // this grabs .each class "col-md-10" and grabs the text
  $(".col-md-10").each(function () {
    // grabs the attribute stated on html (this) looks at "col-md-10"
    var hardHour = $(this).parent().attr("id");
    // real time
    console.log("hardhour", hardHour);
    var currentHour = +moment().format("HH") * 100;
    // string to integers to compare time to stated time
    console.log("currentHour", currentHour);
    if (parseInt(currentHour) > parseInt(hardHour)) {
      $(this).addClass("past");
    } else if (parseInt(currentHour) === parseInt(hardHour)) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
buildTimeBlock();
