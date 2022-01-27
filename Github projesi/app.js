// Elementleri Seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}
function getData(e){
    
    let username = nameInput.value.trim();

    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı giriniz!");
    }else{
        github.getGithubData(username)
        .then(result => {
            if(result.user.message === "Not Found"){
                // Hata Mesajı
                ui.showError("Bu isimde bir kullanıcı bulunmamaktadır");
            }else{
                ui.addSearchUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(result.user);
                ui.showUserRepo(result.repo);
            }
        })
        .catch(err => ui.showError(err));
    }
    

    ui.clearInput(); // Input alanı temizleme
    e.preventDefault();
}
function clearAllSearched(){
    // Tüm arananları temizleme
    if(confirm("Emin misiniz?")){
        // Silme İşlemi
        Storage.clearAllSearchedusersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}
function getAllSearched(){
    // Arananları Storage'dan al ve UI'ye ekle

    // <!-- <li class="list-group-item">asdaskdjkasjkşdjşasjd</li> -->
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user =>{
        result += `<li class="list-group-item">${user}</li>` 
    });

    lastUsers.innerHTML = result;
}