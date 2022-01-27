// const object = new Object();
// const object2 = new Object();
// object.name = "Aydın";
// console.log(object2);

function Employee(name,surname){
    this.name = name;
    this.surname = surname;
    this.showInfos = function(){
        console.log("Bu bir prototype objesidir");
    }
    this.toString = function(){
        console.log("Prototype denemesi");
    }
}
const emp1 = new Employee("Emirhan","Aydın");
console.log(emp1);
Employee.prototype.age = 21;
console.log(emp1.age);
// console.log(emp1.toString());