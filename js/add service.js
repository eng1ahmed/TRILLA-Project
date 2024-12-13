// //get menu element
// let menu = document.getElementById("menu");
// let li = document.querySelector("nav ul");
// // add class none to hide li
// li.classList.add("none");

// // make menu toggle
// menu.onclick = function () {
//   li.classList.toggle("none");
//   menu.style.color = "rgb(0, 165, 55)";
// };

// //save form items into variables
// let btn = document.getElementById("addp");
// let addform = document.getElementById("addpr");
// let inpimg = document.getElementById("addimg");
// let inptitle = document.getElementById("inptitle");
// let inpprice = document.getElementById("inpprice");
// let inpdescription = document.getElementById("inpdescription");

// let i = 0;
// let imgsrc = [];
// imgsrc.push(
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6KAtYVephlVDASzcHgRCV3tUfje-XAdLojdfWdg-ukCKeHwc4PxQ_a7rpYBhnz0IlKY&usqp=CAU"
// );
// // = localStorage.imgsrc.split(",");
// let title = [];
// title.push("MY X");
// // = localStorage.title.split(",");
// let price = [];
// price.push(20000);
// // = localStorage.price.split(",");
// let description = [];
// description.push("my car");
// // = localStorage.description.split(",");
// localStorage.imgsrc = imgsrc;
// localStorage.title = title;
// localStorage.price = price;
// localStorage.description = description;
// imgsrc.push(localStorage.imgsrc.split(",")) 
// title.push(localStorage.title.split(",")) 
// price.push(localStorage.price.split(",")) 
// description.push(localStorage.description.split(",")) 


// addform.addEventListener("submit", () => {
//   // event.preventDefault();
//   imgsrc.push(inpimg.value);
//   title.push(inptitle.value);
//   price.push(inpprice.value);
//   description.push(inpdescription.value);
//   localStorage.imgsrc = imgsrc;
//   localStorage.title = title;
//   localStorage.price = price;
//   localStorage.description = description;

// });

// class addProduct {
//   constructor(image, productName, price, description) {
//     //  createElement
//     let allproducts = document.getElementById("allp");
//     let product = document.createElement("div");
//     let content = document.createElement("div");
//     let imgg = document.createElement("img");
//     let name = document.createElement("h2");
//     let p = document.createElement("h3");
//     let descrip = document.createElement("h3");
//     // appendChild
//     product.appendChild(imgg);
//     allproducts.appendChild(product);
//     product.appendChild(content);
//     content.appendChild(name);
//     content.appendChild(p);
//     content.appendChild(descrip);

//     // add id
//     content.id = "content";
//     product.id = `product${i}`;
//     p.id = "price";

//     // add class and src
//     imgg.src = `${image}`;
//     product.classList.add("product");

//     // add text
//     name.innerText = `Title :${productName}`;
//     p.innerText = `Price : ${price} $`;
//     descrip.innerText = `Description : ${description}`;
//   }
// }
// // loop to make new products from local storage data
// for (i = 0; i < price.length; i++) {
//   new addProduct(imgsrc[i], title[i], price[i], description[i]);
// }
// console.log(localStorage);
// //  let MyRequest = new XMLHttpRequest();
// //  MyRequest.open("GET", "../json/data.json");
// //  MyRequest.send();
// //  MyRequest.onreadystatechange = function () {
// //    if (this.readyState === 4 && this.status === 200) {
// //      let jsData = JSON.parse(this.responseText);
// //      for (i = 0; i < price.length; i++) {
// //       jsData[i].imgsrc[i] = localStorage.imgsrc;
// //       jsData[i].title[i] = localStorage.title;
// //       jsData[i].price[i] = localStorage.price;
// //       jsData[i].description[i] = localStorage.description;
// //       localStorage.description = jsData[i].description[i];
// //       localStorage.price = jsData[i].price;
// //       localStorage.title = jsData[i].title;
// //       localStorage.imgsrc = jsData[i].imgsrc;
// //       console.log(localStorage)
// //        new addProduct(
// //          jsData[i].imgsrc,
// //          jsData[i].title,
// //          jsData[i].price,
// //          jsData[i].description
// //        );
// //        console.log(jsData)
// //      }
// //    }
// //  };
// Get menu element
// Get menu element
// Get menu element
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
class addProduct {
  constructor(image, productName, price, description) {
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
}

// Display existing products from local storage
for (let i = 0; i < productImages.length; i++) {
  new addProduct(productImages[i], productTitles[i], productPrices[i], productDescriptions[i]);
}
