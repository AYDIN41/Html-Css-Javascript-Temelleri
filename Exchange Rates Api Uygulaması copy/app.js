const amountElement = document.getElementById("amount");
const firstOutPut = document.getElementById("firstCurrency");
const secondOutPut = document.getElementById("secondCurrency");
const require = new Require("EUR","TRY");
const ui = new UI(firstOutPut,secondOutPut);
eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",changeExchange);
    firstOutPut.onchange = function(){
        require.changeFirstElement(firstOutPut.options[firstOutPut.selectedIndex].textContent);
    }
    secondOutPut.onchange = function(){
        require.changeSecondElement(secondOutPut.options[secondOutPut.selectedIndex].textContent);
    }
}
function changeExchange(){
    require.changeAmount(amountElement.value);
    require.exchange()
    .then(result => ui.changeResult(result))
    .catch(err => console.log(err));
}