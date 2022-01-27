const element = document.querySelector("#clear-todos");

// Element Özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);

// Element ve Style Özelliklerini Değiştirme

element.className = "btn btn-warning";
// element.style.color = "black";
element.style.marginLeft = "3rem"; 
element.href = "https://www.google.com.tr/";
element.target = "_parents"
element.textContent = "Sil"
// Elementlerin içerisine html ile bir şey yazmak istersek innerHTML'i kullanmalıyız eğer innerHTML kullanmadan yazarsak yazımız html şeklinde çıkacaktır
// element.textContent = "<span>Sil</span>"
// element.innerHTML = "<span style = 'color:royalblue'>Sil</span>";

// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(element){
//     element.style.color = "royalblue";
//     element.style.background = "black";
// });

let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");
element2.forEach(function(element){
    element.style.color = "royalblue";
    element.style.background = "black";
})
console.log(element2);

// console.log(element);