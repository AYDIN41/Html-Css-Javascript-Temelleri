// Htpp Status 
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

document.getElementById("btn").addEventListener("click",function(){
    // Request Oluşturma
    const xhr = new XMLHttpRequest();
    // Onload methodu sadece request hazır olduğunda çalışır
    xhr.onload = function(){
        if(this.status === 200){
           document.getElementById("ajax").innerHTML = this.responseText;
        }
    }
    // xhr.onprogress = function(){ // Request işlenirken bu method kullanılır
    //     console.log("Process işleniyor",this.readyState);
    // }
    // xhr.onreadystatechange = function(){
         // console.log(this.readyState);
        // console.log(this.status);

    //     if(this.status === 200 && this.readyState === 4){
    //         // Response Hazır
    //         console.log(this.responseText);
    //     }

    // }

    xhr.open("GET","example.txt",true);

    xhr.send();


})


