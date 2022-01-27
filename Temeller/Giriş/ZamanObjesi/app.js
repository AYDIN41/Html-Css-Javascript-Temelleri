let value;

const now = new Date();

const date = new Date("6-18-2000 3:55:41:42");

const date1 = new Date("July 18 2000");

const date2 = new Date("6/18/2000");

value = date2;

value = date.getMonth();
value = date.getDate();
value = date.getDay();

value = date.getHours();
value = date.getMinutes();
value = date.getSeconds();
value = date.getMilliseconds();

date.setDate(23);
date.setFullYear(2004);
date.setMonth(8);
date.setSeconds(21);
date.setHours(13);
date.setMinutes(30);


value = date;


console.log(value);