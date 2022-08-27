

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


let billAmount;

document.querySelector(".billAmount").addEventListener("input", () => {

  let bill = document.querySelector(".billAmount").value;
  return billAmount = bill;

});


let numberOfPeople;
document.querySelector(".numofPeople").addEventListener("input", () => {

  let people = document.querySelector(".numofPeople").value;
  return numberOfPeople = people;

});


function customNum(val) {
  document.querySelector(".custom").setAttribute("type", "number");
  document.querySelector(".custom").setAttribute("value", "");
  document.querySelector(".custom").classList.add("custom-input");
  return givenTip = "";
}

let customNumber;
document.querySelector(".custom").addEventListener("input", () => {

  let custom = document.querySelector(".custom").value;
  return customNumber = custom;

});


let givenTip;

function tip(val) {

  return givenTip = val;


}


const tipPercentage = ["5", "10", "15", "25", "50"];






document.querySelector(".container").addEventListener("input", () => {


  let tipAmount;

  if (tipPercentage.includes(givenTip)) {
    tipAmount = ((billAmount * givenTip / 100) / numberOfPeople);
  } else if (customNumber) {
    givenTip = "";
    tipAmount = ((billAmount * customNumber / 100) / numberOfPeople);
  }



  let totalAmount = ((billAmount / numberOfPeople) + tipAmount);
  document.querySelector(".tip-amount-cal span").innerHTML = tipAmount.toFixed(2);

  document.querySelector(".total-amount-cal span").innerHTML = totalAmount.toFixed(2);



});
