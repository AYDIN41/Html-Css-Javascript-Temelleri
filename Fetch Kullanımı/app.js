function getMyFile(){

    fetch("example.txt").then((response) =>{
        return response.text();
    }).then((data)=>{
        console.log(data);
    })
    .catch(err => console.log(err));

}
function getJSONFile(){
    fetch("example.json").then((response) =>{ // Local bir json verisi alma 
        return response.text();
    }).then((data)=>{
       console.log(data)
    })
    .catch(err => console.log(err));
}
function getApi(){
    fetch("http://data.fixer.io/api/latest?access_key=8dba080921cfc7497062e5c9c1fc75bd&format=1").then((response)=>{
        return response.text();
    }).then((data)=>{
        const exchange = JSON.parse(data);
        console.log(exchange.rates.TRY);
    })
    .catch(err => console.error(err));
}
// getMyFile();
// getJSONFile();
getApi();