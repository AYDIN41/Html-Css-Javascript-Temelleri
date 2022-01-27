const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// title.addEventListener("click",run);

// Double Click

// title.addEventListener("dblclick",run);

// MouseDown

// title.addEventListener("mousedown",run);

// MouseUp

// title.addEventListener("mouseup",run);

// MouseOver

// title.addEventListener("mouseover",run);

// MouseOut

title.addEventListener("mouseout",run);
function run(e){
    console.log(e.type);
}
// const element1 = document.querySelector(".card-header");
// const element2 = document.querySelector("#todo");
// const element3 = document.getElementsByClassName("btn btn-danger")[0];
// element3.addEventListener("click",run)

// function run(e){
//     element1.textContent = element2.target.value;
//     e.preventDefault();
// }