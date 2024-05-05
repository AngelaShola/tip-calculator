//FORM
let form = document.getElementById('form');

//INPUTS
let billInput = document.querySelector('bill-amount');
let numberOfPeopleInput = document.querySelector('.people-amount');
let customInput = document.querySelector(".custom-input");
let amountInput = document.querySelector('.tip-amount');
let totalInput = document.querySelector('.total-amount');


//BUTTONS
let fivePercent = document.querySelector('.btn-5');
let tenPercent = document.querySelector('.btn-10');
let fifteenPercent = document.querySelector('.btn-15');
let twentyFivePercent = document.querySelector('.btn-25');
let fiftyPercent = document.querySelector('.btn-50');
let resetButton = document.querySelector('.reset-btn');

resetButton.onclick =()=>{
    alert("wELCOM");
}

//ERROR MESSAGE
let errorMessage = document.querySelector('error-message');

function fivePercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(fivePercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {

        let tax = parsedPercent / 100;
    
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;

        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';

    }
}

function tenPercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(tenPercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {

    let tax = parsedPercent / 100;
 
    let tipCalculation = (parsedBill * (tax)) / parsedPeople;
    let total = (parsedBill + (parsedBill * tax)) / parsedPeople;

    amountInput.textContent = '$' + tipCalculation.toFixed(2);
    totalInput.textContent = '$' + total.toFixed(2);
    errorMessage.style.display = 'none';
    }

}

function fifteenPercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(fifteenPercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }

}

function twentyFivePercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(twentyFivePercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ){
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }
 
}

function fiftyPercentTip() {
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(fiftyPercent.value);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1 ) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }
 
}

function customTipPercent() {
    let customTip = customInput.value;
    let billAmount = billInput.value;
    let numberOfPeople = numberOfPeopleInput.value;
    let parsedBill = parseInt(billAmount);
    let parsedPercent = parseInt(customTip);
    let parsedPeople = parseInt(numberOfPeople);
    
    if(parsedPeople === 0 ) {
        errorMessage.style.display = 'inline';
    } else if (parsedPeople >= 1) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        amountInput.textContent = '$' + tipCalculation.toFixed(2);
        totalInput.textContent = '$' + total.toFixed(2);
        errorMessage.style.display = 'none';
    }

}

fivePercent.addEventListener('click', fivePercentTip);
tenPercent.addEventListener('click', tenPercentTip);
fifteenPercent.addEventListener('click', fifteenPercentTip);
twentyFivePercent.addEventListener('click', twentyFivePercentTip);
fiftyPercent.addEventListener('click', fiftyPercentTip);
customInput.addEventListener('input', customTipPercent);

resetButton.addEventListener('click', () => {
    amountInput.textContent = '$0.00';
    totalInput.textContent = '$0.00';
    billInput.value = "";
    customInput.value = "";
    numberOfPeopleInput.value="";
})



   
  






