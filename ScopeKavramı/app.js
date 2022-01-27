var value1 = 10;
let value2 = 20;
const value3 = 30;

// function a(){
//     var value1 = 40;
//     let value2 = 50;
//     const  value3 = 60;
//     console.log(value1,value2,value3);
// }
// a();

// if(1){
//     var a  = 10;
//     let b = 20;
//     const c  = 30;
// }
// var değişkeni if'in dışında da çalışır let ve const bu özelliğe sahip değildir.
// console.log(a);
// console.log(b);
// console.log(c);
// Bu if döngüsünde görüldüğü gibi var değişkeni global bir değişken rölü üstleniyor. Bu özelliği yüzünden var değişkeni kullanmak sağlıklı değildir.
if(true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1,value2,value3);
}
console.log(value1,value2,value3);



// console.log(value1,value2,value3);
