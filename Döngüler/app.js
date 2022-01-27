// while

let i = 0;
// while(i<11){
//     console.log(i);
//     i++;
// }

// while(i<10){
    
//     if(i == 5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

const langs = ["Python","C","Java"];
// for(i;i<langs.length;i++){
//     console.log(langs[i]);
// }
// langs.forEach(function(aydın41,sıralama){
//     console.log(aydın41,sıralama);
// })
// const users = [
//     {name:"Aydın",age:21},
//     {name:"Hakan",age:29},
//     {name:"Zeynep",age:33}
// ]
// const names = users.map(function(aydın41){
//     return aydın41.name;
// })
// const ages = users.map(function(aydın41){
//     return aydın41.age;
// })
// console.log(names);
// console.log(ages);


const user = {
    name: "Aydın",
    age: 41
};

for ( let i in user){ // Pythonda kullanılan for syntac şekli (javascript'e for in olarak adlandırılıyor)
    console.log(i,user[i]);
}
