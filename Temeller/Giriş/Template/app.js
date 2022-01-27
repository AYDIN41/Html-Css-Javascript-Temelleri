const name  = "Aydın";
const surname = "41";
const department = "Student";
const salary = 0;

// const a = "İsim: " + name + "\n" + "Departman: " + department  + "\n" + "Maaş: " + salary;

// const a = `İsim: ${name}\nDepartman:${department}\nMaaş:${salary+1}`;
// const html = "<ul>"+
//                 "<li>" + name + "</li>" +
//                 "<li>" + department + "</li>" +
//                 "<li>" + salary + "</li>"
//             "</ul>";

function topla(a,b){
    return a+b;
}
const html = `
    <ul>
    <li>${name +  " "  + surname}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${topla(38,3)} </li>
    <li>${10/5,"Emirhan AYDIN"}</li>
    <ul>

`;
document.body.innerHTML = html;
// console.log(a);