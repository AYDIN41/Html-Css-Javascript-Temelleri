// Karşılaştırma Operatörleri

// == 
// 3 tane eşittir kullanımı hem sayi string elemanlar için hemde kullanılan 2 değişkenin tiplerini sorgulamak için kullanılıyor örn 2 == "2" true sonucu verir 2 ==="2" false sonucu verir.
// ===
// !=
// !==
// <=
// >=
// <
// >

// if(2==2){
//     console.log("Two equals two");
// }
// console.log("js" == "Java");
// console.log(2 == "2");
// console.log(2 === "2");
// Mantıksal Bağlaçlar 
// Not Operatörü

// console.log(!(2 == 2));

// const user = "aydın41";

// if(user === "aydın41"){
//     console.log("***************************41414141**********************");
// }else{
//     console.log("*****");
// }

// const process = "41";
// if(process==="41"){
//     console.log("İZMİT");
// }
// else if(process ==="2"){
//     console.log("You chose two option");
// }
// else{
//     console.log("You did not select any option");
// }

const number = 41;
// Ternary Operator
console.log(number === 100 ? "Your number is 41" : "Your number is not 41");

// Switch Case

const process = 1;
switch(process){
    case 1:
        console.log("Your number is 1");
        break;
    case 2:
        console.log("Your number is 2");
        break;
    case 3:
        console.log("Your number is 3");
        break;
    default:
        console.log("Your number is not correct");
}