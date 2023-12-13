/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var price_per_day = 35;
var count = 0;
const total_amount = document.getElementById("calculated-cost");
var halfButton = document.getElementById("half");
var fullButton = document.getElementById("full");
var monday_button = document.getElementById("monday");
var tuesday_button = document.getElementById("tuesday");
var wednesday_button = document.getElementById("wednesday");
var thursday_button = document.getElementById("thursday");
var friday_button = document.getElementById("friday");
var clear_button = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function addColor() {
    if (this.classList.contains('blue-hover')) {
        this.classList.add("clicked");
        count++;
    }
    recalculate();
}
monday_button.addEventListener("click", addColor);
tuesday_button.addEventListener('click', addColor);
wednesday_button.addEventListener('click', addColor);
thursday_button.addEventListener('click', addColor);
friday_button.addEventListener('click', addColor);

function clear() {
    monday_button.classList.remove("clicked");
    tuesday_button.classList.remove("clicked");
    wednesday_button.classList.remove("clicked");
    thursday_button.classList.remove("clicked");
    friday_button.classList.remove("clicked");
    count = 0;
    recalculate();
}
clear_button.addEventListener("click", clear);

function half_day() {
    price_per_day = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    recalculate();
}
halfButton.addEventListener("click", half_day);

function full_day() {
    price_per_day = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    recalculate();
}
fullButton.addEventListener("click", full_day);

function recalculate() {
    let totalPrice;
    totalPrice = price_per_day*count;
    total_amount.textContent = totalPrice;
}
