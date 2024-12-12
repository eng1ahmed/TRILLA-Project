
let wellcome = document.querySelector("#wellcome");
wellcome.innerHTML = `WellCome ${localStorage
  .getItem("userName")
  .toUpperCase()}`;

let menu = document.getElementById("menu");
let li = document.querySelector("nav ul");
li.classList.add("none");
menu.onclick = function () {
  li.classList.toggle("none");
  menu.style.color = "rgb(0, 165, 55)";
  //  li.style.position = "absloute"
};
// localStorage.imgsrc =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4d392_EM-K1OS296AAu67ggisJUqZ8UrIw&s";
// localStorage.title = "MY LAMBORJINI";
// localStorage.price = 200;
// localStorage.description = "THIS IS MY LAMBORJINI";

let imgsrc = localStorage.imgsrc.split(",");
let title = localStorage.title.split(",");
let price = localStorage.price.split(",");
let description = localStorage.description.split(",");

class addProduct {
  constructor(image, productName, price, description) {
    let allproducts = document.getElementById("allp")
    let product = document.createElement("div");
    let content = document.createElement("div");
    content.id = "content";
    product.classList.add("product");
    product.id = `product `;
    allproducts.appendChild(product);
    let imgg = document.createElement("img");
    imgg.src = `${image}`;
    product.appendChild(imgg);
    product.appendChild(content);
    let name = document.createElement("h2");
    name.innerText = `Title :${productName}`;
    content.appendChild(name);
    let p = document.createElement("h3");
    p.innerText = `Price : ${price} $`;
    p.id = "price";
    content.appendChild(p);
    let descrip = document.createElement("h3");
    descrip.innerText = `Description : ${description}`;
    content.appendChild(descrip);
  }
}
for (i = 0; i < price.length; i++) {
  new addProduct(imgsrc[i], title[i], price[i], description[i]);
}
console.log(i);

