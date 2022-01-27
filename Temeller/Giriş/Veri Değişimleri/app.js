// Veri tiplerini String'e çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function() {console.log()});
value = String([1,2,3,4]);

value = (10).toString();
value = (3.14).toString();

// Verileri Sayıya Çevirme
//Sayıya çevrilebilenler
value = Number("123");
value = Number(null);
value = Number(true);
value = Number(false);
// Sayıya çevrilemeyenler
value = Number("Hello World!");
value = Number(function(){console.log});
value = Number([1,2,3,4,5]);

// Float ve int yapıları kullanarak sayıya çevirme

value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3.14")

const a = "Aydın" + 41;
console.log(a,typeof a);
const b = "41" + 94;
console.log(b,typeof b);
const c = Number("94") + 41;
console.log(c,typeof c);

console.log(value,typeof value);