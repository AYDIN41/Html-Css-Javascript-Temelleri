// Ajax,Callback,HTTP requests

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // Get Request
    
    // get(url){ Fonksiyon ile kendimiz bind işlemi yapmak zorunda kalıyoruz eğer arrow function ile kurarsak bind ile otomatik olarak bind ile kendini bind'a bağlıyor
    //     this.xhr.open("GET",url); // Bağlantı Açık
    //     // const temp = this; // Bu ilkel bir yöntem ile this karışıklığını önleyebiliriz
    //     this.xhr.onload = function(){
    //         if(this.xhr.status === 200){
    //             console.log(this.xhr.responseText);
    //         }
    //     }.bind(this);


    //     this.xhr.send();

    // }
      get(url,callback){
        this.xhr.open("GET",url); // Bağlantı Açık
        // const temp = this; // Bu ilkel bir yöntem ile this karışıklığını önleyebiliriz
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Get Request: Bir hata oluştu",null);
            }
        }


        this.xhr.send();

    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json") // JSON verisi gönderme

        this.xhr.onload = () => {
            if(this.xhr.status === 201){ // 201 değeri yeni bir kaynak yaratıldığını söyler
                // Başarılı
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Post Request: Bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-Type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("Put Request: There is something wrong");
            }


        }
        this.xhr.send(JSON.stringify(data));


    }
    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,"Veri silme işlemi başarı ile gerçekleşti");
            }else{
                callback("Delete Request: There is something wrong",null);
            }
        }
        this.xhr.send();
    }
    

}

const request = new Request();
// request.post("https://jsonplaceholder.typicode.com/photos",{albumId:1,title:"Aydın41"},function(err,response){
//     if(err === null){
//         console.log(response);
//     }else{
//         console.log(err);
//     }
// })
// request.get("https://jsonplaceholder.typicode.com/photos",function(err,response){
//     if(err === null){
//         console.log(response);
//     }else{
//         console.log(err);
//     }
    
// });

// request.put("https://jsonplaceholder.typicode.com/photos/1",{albumId:7,title:"Aydın"},function(err,response){
//     if(err === null){
//         console.log(response);
//     }else{
//         console.log(err);
//     }
// })
request.delete("https://jsonplaceholder.typicode.com/photos/1",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        console.log(err);
    }
})