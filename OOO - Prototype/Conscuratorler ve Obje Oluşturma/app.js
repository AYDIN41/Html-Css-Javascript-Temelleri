// const exampleObject1 = {
//     name : "Emirhan",
//     age : 21
// };
// const exampleObject2 = {
//     job : "student",
//     salary : 0
// };
// exampleObject1.departmant  = "Management Information System";
// console.log(exampleObject1);

function Employee(name,surname,job){    // Yapıcı Fonksiyon - Constructer
    this.name = name;
    this.surname = surname;
    this.job = job;


    this.showInfos = function(){
        console.log(this.name,this.surname,this.job);
    }
    // console.log(this);
}
const emp1 = new Employee("Emirhan","Aydın","Student");
const emp2 = new Employee("Emre","Aydın","Architect");

emp1.showInfos();
emp2.showInfos();

// console.log(emp1);
// console.log(emp2);