
let menu = document.getElementById("menu");
let li = document.querySelector("nav ul");

// Add class none to hide li
li.classList.add("none");

// Make menu toggle
menu.onclick = function () {
  li.classList.toggle("none");
  menu.style.color = "rgb(0, 165, 55)";
};

// Get products from local storage or initialize empty arrays
let productImages = localStorage.getItem("productImages") ? JSON.parse(localStorage.getItem("productImages")) : [];
let productTitles = localStorage.getItem("productTitles") ? JSON.parse(localStorage.getItem("productTitles")) : [];
let productPrices = localStorage.getItem("productPrices") ? JSON.parse(localStorage.getItem("productPrices")) : [];
let productDescriptions = localStorage.getItem("productDescriptions") ? JSON.parse(localStorage.getItem("productDescriptions")) : [];

// Add product form
let addform = document.getElementById("addpr");
addform.addEventListener("submit", (event) => {
  event.preventDefault();


      let allproducts = document.getElementById("allp");
      localStorage.allproducts = allproducts.innerHTML;
      console.log(allproducts.innerHTML);
      
  // Get form values
  let inpimg = document.getElementById("addimg").value;
  let inptitle = document.getElementById("inptitle").value;
  let inpprice = document.getElementById("inpprice").value;
  let inpdescription = document.getElementById("inpdescription").value;

  // Add new product to arrays
  productImages.push(inpimg);
  productTitles.push(inptitle);
  productPrices.push(inpprice);
  productDescriptions.push(inpdescription);

  // Update local storage
  localStorage.setItem("productImages", JSON.stringify(productImages));
  localStorage.setItem("productTitles", JSON.stringify(productTitles));
  localStorage.setItem("productPrices", JSON.stringify(productPrices));
  localStorage.setItem("productDescriptions", JSON.stringify(productDescriptions));

  // Create and display new product
  new addProduct(inpimg, inptitle, inpprice, inpdescription);
});

// Product class to create and display products
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
  new addProduct(productImages[i], productTitles[i], productPrices[i], productDescriptions[i]);
}
