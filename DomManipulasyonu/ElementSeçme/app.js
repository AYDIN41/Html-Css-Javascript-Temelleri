// Elementlere göre ıd alma


let element;
let element2;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Elementlere göre class alma

// element = document.getElementsByClassName("list-group-item").length;
// element2 = document.getElementsByClassName("list-group-item");
// for(let i = 0;i<element;i++){
//     console.log(element2[i]);
// }
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");

// Query Selector - CSS Selector - Tek Bir Element

element = document.querySelector("#todo-form");
element = document.querySelectorAll("#todo-form");
element = document.querySelectorAll(".list-group-item"); // NodeList hem collection özellikleri barındırır hemde array özellikleri barındırır

element.forEach(function(elementt){
    console.log(elementt);
});



// console.log(element);