// Set Timeout
// Set Timeout belirtilen süre içerisinde çalışır

// setTimeout(function(){
//     console.log("Merhaba");
// },2500);

// Set Interval belirtilen süreye göre belirli aralıklarla çalışır

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı: " + i);
},500)

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);   // clearInterval methodu setInterval fonksiyonunu çalışmasını durdurur
})
