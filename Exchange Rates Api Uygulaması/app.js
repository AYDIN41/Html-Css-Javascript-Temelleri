// Elementleri Alma
const amountElement = document.getElementById("amount");
const firstElement = document.getElementById("firstCurrency");
const secondElement = document.getElementById("secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstElement,secondElement);
eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstElement.onchange = function(){
        currency.changeFirstCurrency(firstElement.options[firstElement.selectedIndex].textContent);
        ui.changeFirst();
    }
    secondElement.onchange = function(){
        currency.changeSecondCurreny(secondElement.options[secondElement.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err));
}