const student = {
    name : "Emirhan Aydın",
    age : 21,
    departman : "Management Information System",
    email : "eaydn4111@gmail.com",

    adress : {
        city : "Kocaeli/İzmit",
        neighbourhood : "42 Evler"
    },
    sport : function(){
        console.log("He has gone right now...(");
    }
}
student1 = student;

// console.log(student1.adress.city);
student.sport();
console.log(student1);

const programers = [
    {name:"John Malkhovich",age: 41},
    {name:"Christian Bale",age: 94}
]
console.log(programers[1].name);