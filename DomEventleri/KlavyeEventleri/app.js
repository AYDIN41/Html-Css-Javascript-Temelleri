// Klavye Eventleri


// Keypress Sadece harfler ve numaralar ile çalışır

// document.addEventListener("keypress",run);

// function run(e){ // variable.key = bizim seçtiğimiz harf veya sayının değerini gösterir / variable.which = bizim seçtiğimiz değişkenin acsi tablosundaki değeri gösterir
//     if(e.key == "a"){
//         console.log("Aydın414141414141 ");
//     }
//     console.log(e.key + " = " +"Aydın41 " + e.which);
// }


// Keydown Herhangi bir tuşa bastığımızda çalışacaktır

// document.addEventListener("keydown",aydın41);

// function aydın41(e){
//     console.log("Kullandığınız klavye elemanı: " + e.key + " " + "Asci tablosundaki değeri: " + e.which)
// }

// KeyUp Herhangi bir klavye değerini bastığımız tuşa dokunmayı bıraktığımız zaman verecektir

// document.addEventListener("keyup",aydın41);

// function aydın41(aydın){
//     console.log("Kullandığınız değer: " + aydın.key + " Asci tablosundaki değeri: " + aydın.which);
// }

const element1 = document.querySelector(".card-header");
const element2 = document.querySelector("#todo");

element2.addEventListener("keyup",run);

function run(e){
    if(e.target.value === "Aydın"){
        element1.textContent = "Aydın41"
    }else{
        element1.textContent = e.target.value;
    }
    
    // console.log(e.target.value);
}
