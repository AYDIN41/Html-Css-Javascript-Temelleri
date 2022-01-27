// Dinamit Element Silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Methodu
// todos[2].remove();

// Remove Child

// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);
todoList.removeChild(todos[0]);
console.log(todos);
console.log(todoList);