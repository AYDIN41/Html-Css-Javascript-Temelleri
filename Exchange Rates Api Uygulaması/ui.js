class UI{
    constructor(firstElement,secondElement){
        this.firstElement = firstElement;
        this.secondElement = secondElement;

        this.outPutFirst = document.getElementById("outputFirst");
        this.outPutSecond = document.getElementById("outputSecond");
        this.outPutResult = document.getElementById("outputResult");
    }

    changeFirst(){
        this.outPutFirst.textContent = this.firstElement.options[this.firstElement.selectedIndex].textContent; 
    }
    changeSecond(){
        this.outPutSecond.textContent = this.secondElement.options[this.secondElement.selectedIndex].textContent;
    }
    displayResult(result){
        this.outPutResult.value = result;
    }
}