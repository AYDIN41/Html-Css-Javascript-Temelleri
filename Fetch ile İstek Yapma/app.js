class Request{

    get(url){   // Get Fonksiyonu ile Veri Alma İşlemi
        return new Promise(function(resolve,reject){
            fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                resolve(data);
            })
            .catch(err => reject(err));
        })
        
    }
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json; charset=UTF-8"
                }
            }).then((response)=>{
                return response.text();
            })
            .then((data)=>{
                resolve(data);
            })
            .catch(err => reject(err));
        })
        
    } 
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : "PUT",
                body : JSON.stringify(data),
                headers : {
                    "Content-type" : "application/json; charset=UTF-8"
                } 
            }).then((response)=>{
                return response.json()
            })
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
        
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : "DELETE"
            }).then(response => resolve("İstenilen Veri silindi"))
            .catch(err => reject(err))
        })
    }
}

const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/photos/1")
.then((response)=>{
    console.log(response);
})
.catch(err => console.log(err));
// request.put("https://jsonplaceholder.typicode.com/photos/1",{albumId:24,title:"Kobe Bryant"})
// .then(response => console.log(response))
// .catch(err => console.log(err));
// request.post("https://jsonplaceholder.typicode.com/photos",{albumId:23,title:"Michael Jordon"})
// .then(response => console.log(response))
// .catch(err => console.log(err));
// let photos;

// request.get("https://jsonplaceholder.typicode.com/photos")
// .then(data=>{
//     photos = data;
//     console.log(photos);
// })
// .catch(err => console.log(err));

// console.log(photos); // Asekron bir çalışma söz konusu olduğu için fonskiyondan önce console.log()'u çalıştıracak