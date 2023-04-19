

console.log("test");

const colorButton = document.getElementById("color");
const placeButton = document.getElementById("place");
const ritualButton = document.getElementById("ritual");

console.log("test");

colorButton.addEventListener("click", function() {
  alert("My favorite color is Purple.");
});

placeButton.addEventListener("click", function() {
  alert("My favorite place is Vegas.");
});

ritualButton.addEventListener("click", function() {
  alert("My favorite ritual is taking a shower after work.");
});