let wellcome = document.querySelector("#wellcome");

wellcome.innerHTML = `WellCome ${localStorage
  .getItem("userName")
  .toUpperCase()}`;

let menu = document.getElementById("menu");
let li = document.querySelector("nav ul");
li.classList.add("none");
menu.onclick = function () {
  li.classList.toggle("none");
  //  li.style.position = "absloute"

};

console.log(menu);

class addProduct {
  constructor(productName, price, description) {
    let i;
    let allproducts = document.getElementById("allp");
    let product = document.createElement("div");
    let content = document.createElement("div");
    content.id = "content";
    product.classList.add("product");
    product.id = `product ${i}`;
    allproducts.appendChild(product);
    let img = document.createElement("img");
    product.appendChild(img);
    product.appendChild(content);
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSap-eSqTTO2iEqPYAvkSQjYLCxmDNeG7WRg&s";
    let name = document.createElement("h2");
    name.innerText = `Car Name :${productName}`;
    content.appendChild(name);
    let p = document.createElement("h3");
    p.innerText = `Price : ${price} $`;
    p.id = "price";
    content.appendChild(p);
    let descrip = document.createElement("h3");
    descrip.innerText = `Description : ${description}`;
    content.appendChild(descrip);
    i++;
  }
}

let product1 = new addProduct("Car 1", 200, "i have good car");
let product2 = new addProduct("Car 2", 500, "i have good car");
let product3 = new addProduct("Car 3", 1000, "i have good car");
