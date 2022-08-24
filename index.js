let value;

function billAmount(val) {
  return value = val;
  document.querySelector(".tip-amount-cal span").innerHTML = '0.00';
}

let numberOfPeople;

function numofPeople(val) {
  return numberOfPeople = val;
}

let percentage;

function tip(val) {
  return percentage = val;


}
let customNumber;

function customNum(val) {
  document.querySelector(".custom").setAttribute("type", "number");
  document.querySelector(".custom").setAttribute("value", "");
  document.querySelector(".custom").classList.add("custom-input");

  return customNumber = val;


}

const tipPercentage = ["5", "10", "15", "25", "50"];



let tipAmount = () => {

  if (tipPercentage.includes(percentage)) {
    tipAmount = ((value * percentage / 100) / numberOfPeople);
  } else if (customNumber) {
    percentage = "";
    tipAmount = ((value * customNumber / 100) / numberOfPeople);
  }
}


let totalAmount = () => {
  totalAmount = ((value / numberOfPeople) + tipAmount);
}


function calculate() {
  tipAmount();
  totalAmount();

  document.querySelector(".tip-amount-cal span").innerHTML = tipAmount.toFixed(2);

  document.querySelector(".total-amount-cal span").innerHTML = totalAmount.toFixed(2);
}



function reset() {
  location.reload();
}



let buttons = document.querySelectorAll("table input");



buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
