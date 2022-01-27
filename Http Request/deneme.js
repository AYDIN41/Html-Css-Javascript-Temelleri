class Reques{
    constructor(){
        this.xml = new XMLHttpRequest();
    }
        
    
    get(url,callback){
        this.xml.open("GET",url);
        this.xml.onload = () => {
            if(this.xml.status === 200){
                callback(null,this.xml.responseText);
            }else{
                callback("Ops!You did wrong",null)
            }
        }
        this.xml.send();
    }
    
}
const request = new Reques();
request.get("https://jsonplaceholder.typicode.com/posts",function(error,response){
    if(error === null){
        console.log(response);
    }else{
        console.log(error);
    }
});