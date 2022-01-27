// async function test(data){
//     // async methodu bize Promise dönmesini sağlıyor 
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Bu bir değerdir");
//         },5000);
        
//     })
//     let response = await promise; // Await methodu asekron işlemlerde istenilen değerin çıktı olarak alınana kadar beklemesini sağlar.

//     console.log("Hey!");
//     return  response;
        
//     // return data;
// }
// test("Merhaba Dünya!")
// .then((response)=>{
//     console.log(response);
// })

// async function testData(data){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Lütfen bir string değer giriniz"));
//             }
//         },5000);

        
//     })

//     const response = await promise;

//     return response;

// }
// testData(23).then((response)=>{
//     console.log(response);
// })
// .catch(err => console.log(err));

async function getCurrency(url){
    const response = await fetch(url);

    const data = await response.json();

    return data;
}
getCurrency("http://data.fixer.io/api/latest?access_key=8dba080921cfc7497062e5c9c1fc75bd&format=1")
.then((response)=>{
    console.log(response);
})