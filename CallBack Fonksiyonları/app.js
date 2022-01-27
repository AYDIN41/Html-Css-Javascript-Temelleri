// Callback Fonksiyonlaru


// langs.forEach(function(lang){
//     console.log(lang);
// })

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Tıkladınız");
// })

// function process1(callback){
//     setTimeout(function(){
//         console.log("Process1");
//         callback();
//     },2500)
    
// }
// function process2(){
//     setTimeout(function(){
//         console.log("Process2");
//     },2000)
    
// }
// Callback ile sekron kullanım
// process1(process2);
//Asekron kullanım
// process1();
// process2();
// console.log("Merhaba");

const langs = ["Java","Python","C++","C"];

function addLangs(lang,callback){
    setTimeout(function(){
        callback();
        langs.push(lang);
        console.log("Dil eklendi");
        
    },2500)
    
}
function showLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })   
    },2000);
    
}

addLangs("Javascript",showLangs);


