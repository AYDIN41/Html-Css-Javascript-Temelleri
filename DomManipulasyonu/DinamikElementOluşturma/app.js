let value;


value = document.getElementsByClassName("card-body")[1];
const newLink = document.createElement("a");
const newLink2 = document.createElement("a");
newLink2.id = "clear-todos";
newLink2.className = "btn btn-danger";
newLink2.href = "https://www.google.com.tr/";
newLink2.target = "_blank";
newLink2.style.marginLeft = "3rem";
newLink2.style.marginRight = "5rem";
newLink.id = "clear-todos";
newLink.className = "btn btn-info";
newLink.href = "https://www.google.com.tr/";
newLink.target = "_blank";
// newLink.style.marginRight = "0.1rem";
newLink.style.marginLeft = "auto";
// Text Content
// value.textContent = "Aydın41";
// console.log(value); Yeni bir element oluştururken textContent kullanmak riskli olur bunun nedeni eklenecek yerin hepsini kapsamasıdır
// Text Node
// const text = document.createTextNode("Aydın41");
// value.appendChild(text);
newLink2.appendChild(document.createTextNode("Farklı bir sayfaya git"));
newLink.appendChild(document.createTextNode("Farklı bir sayfaya git"));
value.appendChild(newLink2);
value.appendChild(newLink);
console.log(value);
console.log(newLink);