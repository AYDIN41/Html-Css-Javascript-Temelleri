// Tüm Elementleri Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clear = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm Event Listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodoUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clear.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
    if(confirm("Tümünü Silmek istediğinize emin misiniz?")){
        // Arayüzden todoları silme
        // todoList.innerHTML = ""; // Yavaş
        let value = todoList.length;
        for(let i = 0;i<value;i++){
            todoList.removeChild(todoList.firstElementChild);
        }
    }
}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            // İstenilen veri bulunamadı
            listItem.setAttribute("style","display : none !important");
        }else{
            listItem.setAttribute("style","display : block");
        }
    });
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("info","Silme İşlemi Başarıyla Tamamlandı");
    }
}
function deleteTodoFromStorage(todo){
    let todos = getTodoFromStorage();

    todos.forEach(function(aydın41,index){
        if(aydın41 === todo){
            todos.splice(index,1);
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodoUI(){

    let todos = getTodoFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })

}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    if(todoInput.value === ""){
        /*<div class="alert alert-danger" role="alert">
                        <strong>This</strong> is a dark alert—check it out!
                      </div>*/
        showAlert("danger","Lütfen bir değer giriniz");
    }
    else if (todoInput.value.indexOf(addTodoToStorage) === -1 ){
        showAlert("warning","Bu değere sahipsiniz");
    }    
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("info","Başarılı bir işlem yaptınız");
    }
    
    todoInput.value = "";

    e.preventDefault();
}
function getTodoFromStorage(){ // Storagedan Todoları Alma
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo){
    let todos = getTodoFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}
function showAlert(type,message){
    const alertItem = document.createElement("div");
    alertItem.className = `alert alert-${type}`;
    alertItem.role = "alert";
    alertItem.appendChild(document.createTextNode(message));
    firstCardBody.appendChild(alertItem);
    // SetTimeOut Fonskiyonlara belirli bir zaman kısıtlaması yapmaya yarar
    setTimeout(function(){
        alertItem.remove();
    },1500)

}
function addTodoToUI(todoNew){ // String değerini list item olarak UI'ya ekleme
    // Link Item Oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(todoNew));
    listItem.appendChild(link);

    // Todo List'e List Ekleme
    todoList.appendChild(listItem);
}
