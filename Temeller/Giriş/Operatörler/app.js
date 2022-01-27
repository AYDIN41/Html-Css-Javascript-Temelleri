let value;

const value1 = 10;
const value2 = 4;

// Aritmetik işlemler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2;

// Math Kütüphanesi özellikleri

value = Math.PI;
value = Math.E;
value = Math.log10(41);

//Round fonksiyonu numara.5 ve üzerini üst bir sayıya yuvarlar numara.5 altını alt bir sayıya yuvarlar
value = Math.round(3.7);
value = Math.round(41.4); 

// Ceil fonksiyonu float olan herhangi bir sayıyı üst bir sayıya yuvarlar
value = Math.ceil(40.10);

// Floor fonksiyonu float bir sayıyı alt bir sayıya yuvalar

value = Math.floor(44.9);

// Sqrt fonksiyonu sayıların kökünü almamızı sağlar
value = Math.sqrt(250);

//Abs fonksiyonu mutlak değer işlevi görür

value = Math.abs(-41);

// Pow fonksiyonu istenilen sayının istenildiği kadar kuvvetini almayı sağlar
value = Math.pow(2,64);

// Max ve Min fonksiyonları varilen sayılar arasından en büyüğünü ve en küçüğünü bulur
value = Math.max(41,77,-41,94);
value = Math.min(41,77,-41,94)

// Random fonksiyonu 0 ile 1 arasında rastgele sayılar üretir.(1 buna dahil değildir)
value = Math.random();
value = Math.random() * 20;
value = parseInt(Math.random() * 400);
value = Math.floor(Math.random() * 100 + 1);
console.log(value);