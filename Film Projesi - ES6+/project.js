const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI projesini başlatma
// const ui = new UI();
// Storage oluşturma
// const storage = new Storage();
// Tüm eventleri yükleme

eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    })
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    // if(title === title && director === director && url === url ){
    //     // Yeni Film
    //     const newFilm = new Film(title,director,url);
    //     ui.addFilmToUı(newFilm); // Arayzüze
    // }else{
    //     // Hata
    //     ui.displayMessage("Lütfen tüm alanları doldurun!","danger");
    // }
    if(title === "" || director === "" || url === "" ){
        //Hata
        UI.displayMessage("Lütfen tüm alanları doldurun!","danger");
    }else{
        // Yeni Film
        const newFilm = new Film(title,director,url);
        UI.addFilmToUı(newFilm); // Arayzüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a film ekleme
        UI.displayMessage("Film başarı ile eklendi...","info"); // Başarı mesajı görüntüleme
    }



    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Film başarı ile silindi...","info");
    }
}
function clearAllFilms(){
    if(!(confirm("Emin misiniz?"))){

    }else{
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
    
}