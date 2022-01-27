class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "http://data.fixer.io/api/latest?access_key=8dba080921cfc7497062e5c9c1fc75bd&format=1";
        this.amount = null;
    }
    exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url)
            .then((response)=>{
                
                const exchanges = response.json();
                // const rate = exchanges.rates(money);
                // response = rate;
                return exchanges;
            })
            .then((data)=>{
                // let a = this.firstCurrency;
                // let money = data.base;
                // money = a;
                
                const parity = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount);
                let total = parity * amount2;
                resolve(total);
            })
            .catch(err => reject(err));
            })
        
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurreny(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}

