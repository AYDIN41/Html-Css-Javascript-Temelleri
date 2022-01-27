function UI(){

    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputword = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");

}
UI.prototype.changeUI = function(){
    // Arayüz değiştirme

    this.outputImage.src = `images/${this.languageList.value}.png`;

    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].text
    console.log(this.languageList.options[this.languageList.selectedIndex].text);
    

}
UI.prototype.displayTranslate = function(word){
    this.outputword.innerHTML = word; 
}