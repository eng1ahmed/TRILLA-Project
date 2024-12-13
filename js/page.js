// Make a welcome message
let welcome = document.querySelector("#wellcome");
let userName = localStorage.getItem("userName");

if (userName) {
  welcome.innerHTML = `Welcome ${userName.toUpperCase()}`;
} else {
  welcome.innerHTML = "Welcome!"; // Default welcome message if no username found
}

// Menu toggle functionality
let menu = document.getElementById("menu");
let li = document.querySelector("nav ul");
li.classList.add("none");

menu.onclick = function () {
  li.classList.toggle("none");
  menu.style.color = "rgb(0, 165, 55)";
};
// Get products from local storage or initialize empty arrays
let productImages = localStorage.getItem("productImages")
  ? JSON.parse(localStorage.getItem("productImages"))
  : [];
let productTitles = localStorage.getItem("productTitles")
  ? JSON.parse(localStorage.getItem("productTitles"))
  : [];
let productPrices = localStorage.getItem("productPrices")
  ? JSON.parse(localStorage.getItem("productPrices"))
  : [];
let productDescriptions = localStorage.getItem("productDescriptions")
  ? JSON.parse(localStorage.getItem("productDescriptions"))
  : [];
function addProduct (image, productName, price, description) {
    let allproducts = document.getElementById("allp");
    let product = document.createElement("div");
    let content = document.createElement("div");
    let imgg = document.createElement("img");
    let name = document.createElement("h2");
    let p = document.createElement("h3");
    let descrip = document.createElement("h3");

    product.appendChild(imgg);
    allproducts.appendChild(product);
    product.appendChild(content);
    content.appendChild(name);
    content.appendChild(p);
    content.appendChild(descrip);

    content.id = "content";
    product.id = `product${productImages.length}`; // Use array length for unique ID
    p.id = "price";

    imgg.src = image;
    product.classList.add("product");

    name.innerText = `Title : ${productName}`;
    p.innerText = `Price : ${price} $`;
    descrip.innerText = `Description : ${description}`;
  }

// Display existing products from local storage
for (let i = 0; i < productImages.length; i++) {
  new addProduct(
    productImages[i],
    productTitles[i],
    productPrices[i],
    productDescriptions[i]
  );
}
