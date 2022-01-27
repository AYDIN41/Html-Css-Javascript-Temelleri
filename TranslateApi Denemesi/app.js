// Prototype,Ajax,Callback

const wordd = document.getElementById("word").value;
const languagee = document.getElementById("language").value;

eventListeners();



function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    // Change
    document.getElementById("language").onchange = function(){
        // Arayüz işlemleri
        Ui.changeUI();
    }

}
const translate = new Translate(wordd,languagee);
const Ui = new UI();
function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(err,response){
        if(err !== null){
            console.log(err);
        }else{
            Ui.displayTranslate(response);
        }
    });

    e.preventDefault();
}