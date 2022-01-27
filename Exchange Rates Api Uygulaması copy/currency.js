class Require{
    constructor(firstElement,secondElement){
        this.firstElement = firstElement;
        this.secondElement = secondElement;
        this.url = "http://data.fixer.io/api/latest?access_key=8dba080921cfc7497062e5c9c1fc75bd&format=1";
        this.amount = null;

    }
    exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url)
            .then(response => response.json())
            .then((data)=>{
                const parity = data.rates[this.secondElement];
                const amountt = Number(this.amount);
                let total = amountt * parity;
                resolve(total);
            })
            .catch(err => reject(err));
        })
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstElement(newFirstElement){
        this.firstElement = newFirstElement;
    }
    changeSecondElement(newSecondElement){
        this.secondElement = newSecondElement;
    }
}