// const obj = {
//     test1: function(){
//         console.log("Test 1");
//     },
//     test2: function(){
//         console.log("Test 2");
//     }
// }
// const emp = Object.create(obj);
// emp.name = "Aydın";
// emp.age = 21;
// console.log(emp);

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}

function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("MyTest");
}
const emp = new Employee("Emirhan",21);

emp.test1();
console.log(emp);