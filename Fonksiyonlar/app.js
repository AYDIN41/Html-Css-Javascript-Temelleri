// function merhaba(name,age){
//     if((typeof name === "undefined") && (typeof age === "undefined")){
//         name = "Please enter name";
//         age = 99;
//     }
//     else if((typeof name === "undefined") || (typeof age === "undefined")){
//         if(typeof name === "undefined"){
//             name = "Please enter a name";
//         }
//         else if (typeof age === "undefined"){
//             age = "Please enter an age";
//         }
//     }
//     console.log(`İsim: ${name}`, "\n",`Yaş: ${age}`);
// }
// merhaba("Emirhan Aydın",21);
// merhaba("Emre");
// merhaba("",29);

// function square(x){
//     return x*x;
// }
// function cube(x){
//     console.log(x*x*x);
//     return x*x*x;
    
// }
// let a = square(12);
// a = cube(a);
// console.log(a);

// function merhaba(){
//     return "merhaba";
// }
// console.log(merhaba());

//Function Express

// const merhaba = function(name){
//     console.log(`Merhaba ${name}`);
// }
// merhaba("Aydın");

// Immediately Invoked Function Express(IIFE)
// (function(name){
//     console.log("Hey!" + name);
// })("I am using whatsapp");
const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get : function(){
        console.log("Elde Edildi");
    },
    update : function(id){
        console.log(`ID ${id}: Güncellendi`);
    } ,
    delete : function(id){
        console.log(`ID ${id}: Silindi`);
    }
}
data = database;
console.log(data.host);
data.add();
data.get();
data.update(1);
data.delete(1);

