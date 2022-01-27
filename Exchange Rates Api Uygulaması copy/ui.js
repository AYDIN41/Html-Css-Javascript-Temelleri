class UI{
    constructor(first,second){
        this.first = first;
        this.second = second;

        this.outFirst = document.getElementById("outputFirst");
        this.outSecond = document.getElementById("outputSecond");
        this.outResult = document.getElementById("outputResult");

    }
    changeFirst(){
        this.outFirst.textContent = this.first.options[this.first.selectedIndex].textContent;
    }
    changeSecond(){
        this.outSecond.textContent = this.second.options[this.second.selectedIndex].textContent;
    }
    changeResult(result){
        this.outResult.value = result;
    }
}