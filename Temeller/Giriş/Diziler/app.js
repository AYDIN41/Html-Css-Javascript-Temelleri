let value;

const numbers= [41,94,77,44,38,59,71];

// const numbers2 = new Array(1,2,3,4,5,6,7); Bu yöntemle ile numbers yönteminde kullanılan array oluşturma yöntemi aynıdır.

const langs = ["Python","C++,","Java","Javascript"];

const a  = ["Merhaba Aydın",41,null,undefined];

value = numbers.length;
// Index
value = numbers[0];
value = numbers[numbers.length -1];

// Herhangi Bir indeksdeki değeri değiştirme 

numbers[3] = 414141;
value = numbers;

// Index Of Aradığımız değerin işaret edilen dizide kaçıncı sırada olduğunu bize gösterir.

value = numbers.indexOf(414141);

// Arrayin sonuna değer ekleme - Push

numbers.push(7);

value = numbers;

// Dizinin (Array) başına değer ekleme - Unshift

numbers.unshift("İZMİT");
value = numbers;

// Sonundan değer atma - pop
numbers.pop();

value = numbers;

//Başından değer atma - shift
numbers.shift();

value = numbers;

//İstenilen yerden istenilen sayıda istenilen sayiları atmak için - Splice
numbers.splice(4,7);
value = numbers;

// Diziyi tersine çevirme - Reverse

numbers.reverse();
value = numbers;

// Sort methodu sadece ilk basamağına göre sıralama yaptığı için sağlıklı bir sıralama oluşturmuyor.
value = numbers.sort();

value = numbers.sort(function a(x,y){ // Küçükten büyüğe sıralama
    return x - y;
})

value = numbers.sort(function order(x,y){ // Büyükten küçüğe sıralama
    return y - x;
})

console.log(value);