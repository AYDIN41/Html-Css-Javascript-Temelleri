const person = {

    age: 21,

    // tellAge: function(){
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)


    //  Arrow Function normal fonksiyonumuzu bind ile global window'a (this'e) bağlıyor 

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }

}
person.tellAge();