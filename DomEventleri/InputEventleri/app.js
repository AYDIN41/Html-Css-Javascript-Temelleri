const filter = document.getElementsByClassName("form-control")[0];


// document.addEventListener("DOMContentLoaded",load);
// function load(){
//     console.log("Sayfa Yenilendi");
// }

// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);
filter.addEventListener("paste",run);
filter.addEventListener("copy",run);
filter.addEventListener("cut",run);
filter.addEventListener("select",run);
function run(e){
    console.log(e.type);
}



// console.log(filter);