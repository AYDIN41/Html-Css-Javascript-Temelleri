document.getElementById("change").addEventListener("click",changeTheMoney);

function changeTheMoney(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://data.fixer.io/api/latest?access_key=25a1f4f5e0d4fa3f14edabbcf4932f35&format=1",true);

    

    xhr.onload = function(){
        if(this.status === 200){
            const exchange = JSON.parse(this.responseText);
            const rate = exchange.rates.TRY;
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;
        }
    }



    xhr.send();
}