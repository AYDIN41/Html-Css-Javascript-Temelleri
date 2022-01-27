// function getData(data){ // Promise Objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(typeof data === "string"){
//                 // Olumlu
//                 resolve(data);
//             }else{
//                 // Olumsuz
//                 reject(new Error("Lütfen string bir değer girin!"));
//             }
//         },5000);
//     });
// }

// getData(23).then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.error(err);
// })

function addTwoNumber(number){
    return new Promise((resolve,reject)=>{
        if(typeof number === "number"){
            resolve(number+2);
        }else{
            reject(new Error("Lütfen bir sayı değeri giriniz"));
        }
    },3000);
}
addTwoNumber(7)
.then((response)=>{
    console.log(response);
    return response + 2;
}).then(function(response2){
    console.log(response2);
})
.catch((err)=>{
    console.error(err)
})

// then methodu birden çok çağıralabilirken catch methodu sadece bir kez yazılabilir