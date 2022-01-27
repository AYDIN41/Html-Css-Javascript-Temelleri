const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;


// Seçili class'a yeni bir class ekleme ve silme methodlar
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

// Placeholder'ı değiştirme ve Attribute ekleme

element = todoInput;
// element = todoInput.placeholder = "Aydın41";
element = todoInput.getAttribute("placeholder");
element = todoInput.setAttribute("placeholder","Aydın41");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");
element = todoInput;

// element = todoInput.hasAttribute("title")



console.log(element);