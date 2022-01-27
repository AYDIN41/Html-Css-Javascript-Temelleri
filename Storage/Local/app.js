// Local Storage

// SetItem

// localStorage.setItem("Aydın41",4141);
// localStorage.setItem("Aydın",41);

// Get Item

// const value = localStorage.getItem("Aydın");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage

// localStorage.clear();

// localStorage.setItem("Aydın41",4141);
// localStorage.setItem("Aydın",41);

// console.log(localStorage.getItem("hareket"));

// if(localStorage.getItem("hareket") === null){
//     console.log("Veriye erişilemiyor");
// }else{
//     console.log("Veri Bulundu!!!");
// }

// Local Storage - Array Yazma

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos",JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();
}