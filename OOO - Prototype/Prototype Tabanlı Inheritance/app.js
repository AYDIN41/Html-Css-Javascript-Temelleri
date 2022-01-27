// Kalıtım - Inheritance

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş: " + this.age);
}
// const person = new Person("Aydın",21);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;  // call methodu ile inheritance yapıyoruz alt satırda
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
// const emp1 = new Employee("Aydın",21,0);
// emp1.showInfos();
// const person  = new Person("Aydın",2);
// person.showInfos();
// Overriding - İptaL Etme
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name +  " Yaş: " + this.age  + " Maaş: " + this.salary);
}
const emp1 = new Employee("Aydın",21,0);
emp1.showInfos();