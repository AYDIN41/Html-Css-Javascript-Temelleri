class Request{
    async get(url){
        const response = await fetch(url); // Fetch kullanarak Response Objesine erişiyoruz

        const data = await response.json(); // Bize dönen Response objesini belirli bir özellikle alıyoruz 

        return data;
    }
    async post(url,data){
        const response = await fetch(url,{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json; charset = UTF-8"
            }
        });
        
        const responseData = await response.json();
        
        return responseData;

    }
    async put(url,data){
        const response = await fetch(url,{
            method : "PUT",
            body : JSON.stringify(data),
            headers : {
                "Content-type" : "application/json; charset = UTF-8"
            }
        });

        const responseData = await response.json();

        return responseData;
    }
    async delete(url){
        const response = await fetch(url,{
            method : "DELETE"
        });
        
        return "Veri silme işlemi başarılı";
    }
}
const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/photos")
// .then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.error(err);
// });

// request.post("https://jsonplaceholder.typicode.com/photos",{albumId:23,title:"Michael Jordon"})
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error(err);
// });

// request.put("https://jsonplaceholder.typicode.com/photos/4",{albumId:24,title:"Kobe Bryant"})
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.error(err);
// });

request.delete("https://jsonplaceholder.typicode.com/photos")
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});