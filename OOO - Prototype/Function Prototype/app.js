// Call,Apply,Bind
const obj1 = {
    number1 : 10,
    number2 : 20
};
const obj2 = {
    number1: 30,
    number2: 40
}

function addNumber(number3,number4){
    console.log(this);
    console.log(this.number2);
    console.log(this.number1 + this.number2 + number3 + number4);
}
// addNumber.call(obj1,500,1000);
// addNumber.call(obj2,100,200);
// const array = [100,200];
// addNumber.apply(obj1,array);
// addNumber.apply(obj2,array);
// addNumber.apply(obj2,[41,94]);

// Bind 

function functionforBind(number3,number4){
    console.log(this.number2 + this.number1 + number3 + number4);
}

const copyFunct1 = functionforBind.bind(obj1);
const copyFunct2 = functionforBind.bind(obj2);
// console.dir(copyFunct1);
copyFunct1(150,210);
copyFunct2(200,270);
