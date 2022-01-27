let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(3)");
const cardrow = document.querySelector(".card.row");
value = todoList;
value = todo;
value = cardrow;

// Child Notes - Text dahil olarak alır.
value = todoList.childNodes;
value = todoList.childNodes[0];

// Children - Element

value = todoList.children;
value = todoList.children[todoList.children.length-1];
value = todoList.children[1].textContent = "Aydın41"

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Aydın4141";

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// Kardeş Elementlere geçme özelliği

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;

console.log(value);