let value;

const firstname = "Emirhan";
const surname = "Aydın";

const langs = "Java,Python,C++";

value = firstname + " " + surname;
value = value + 41;
value += 41;

// Stringdeki karakter uzunluklarını bulmak için length methodunu kullanıyoruz
value = surname.length;

// Javascript de yazımı kolaylıştırmak için concat methodunu kullanıyoruz 
value = firstname.concat(" ",surname," Öğrenci");

// Harflerin küçültmek ya da büyütmek için toLowercase ve toUpperCase kullanırız
value = firstname.toUpperCase();
value = surname.toLowerCase();
value = surname[0];
value = firstname[firstname.length-1];

// Index of methodu ile istediğimiz elemanın kaçıncı dizide yer aldığını bulabiliriz.
value = firstname.indexOf("h");
value = firstname.indexOf("e"); // eğer aradığımız değer yoksa sonuç bize -1 olarak dönecektir.

// char at methodu ise bizim yazdığımız sayıya göre bulunan string değerini döndürüyor.
value = firstname.charAt(4);
value = firstname.charAt(firstname.length-1);

// split methodu stringler arasında ayrılmayan eklere göre belirlenip tek bir dizi içerisine aktarılmasıdır.
value = langs.split(",");
// replace methodu yer değiştirme olanağı sağlıyor.
value = langs.replace("C++","C#");

// Includes methodu dizi içerisinde istenilen değerin varolup olmadığını sorguluyor eğer istenilen değer varsa sonuç true dönüyor.
value = langs.includes("C++");
value = langs.includes("C#");
console.log(value);