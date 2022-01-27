function Person(firstName,surName){
    this.firstName = firstName;
    this.surName = surName;
    // this.showFullName = function(){ // Bu şekilde kullanıldığında constructive yapıya her çağrıldığında istenmesede function kullanıldığı için çok yük biner ve doğru bir kullanım olmaz
    //     console.log(this.firstName + "  " + this.surName);
    // }
}
Person.prototype.showFullName = function(){
    console.log(this.firstName + "  " + this.surName);
}
const psn1 = new Person("Emirhan","Aydın");
psn1.showFullName();
// psn1.showFullName();