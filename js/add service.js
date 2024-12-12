let menu = document.getElementById("menu");
let li = document.querySelector("nav ul");
li.classList.add("none");
menu.onclick = function () {
  li.classList.toggle("none");
  menu.style.color = "rgb(0, 165, 55)";
};

let i = 0;

//get
let imgsrc = localStorage.imgsrc.split(",");
let title = localStorage.title.split(",");
let price = localStorage.price.split(",");
let description = localStorage.description.split(",");

//save it into variables
let btn = document.getElementById("addp");
let addform = document.getElementById("addpr");
let inpimg = document.getElementById("addimg");
let inptitle = document.getElementById("inptitle");
let inpprice = document.getElementById("inpprice");
let inpdescription = document.getElementById("inpdescription");
// addPr

class addProduct {
  constructor(image, productName, price, description) {
    let allproducts = document.getElementById("allp");
    let product = document.createElement("div");
    let content = document.createElement("div");
    content.id = "content";
    product.classList.add("product");
    product.id = `product${i}`;
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
    let cancel = document.createElement("button");
    // cancel.innerText = "X";
    // cancel.id = "delete";
    // content.append(cancel);
  }
}
addform.onsubmit = function () {
  //set
  // event.preventDefault();
  localStorage.imgsrc = imgsrc;
  localStorage.title = title;
  localStorage.price = price;
  localStorage.description = description;
  imgsrc.push(inpimg.value);
  title.push(inptitle.value);
  price.push(inpprice.value);
  description.push(inpdescription.value);
  // let MyRequest = new XMLHttpRequest();
  // MyRequest.open("GET", "../json/data.json");
  // MyRequest.send();
  // MyRequest.onreadystatechange = function () {
  //   if (this.readyState === 4 && this.status === 200) {
  //     let jsData = JSON.parse(this.responseText);
  //     for (i = 0; i < price.length; i++) {
  //       jsData[i].imgsrc = localStorage.imgsrc.split(",");
  //       jsData[i].title = localStorage.title.split(",");
  //       jsData[i].price = localStorage.price.split(",");
  //       jsData[i].description = localStorage.description.split(",");
  //       console.log(jsData[i]);
  //     }
  //   }
  // }
};
for (i = 0; i < price.length; i++) {
  new addProduct(imgsrc[i], title[i], price[i], description[i]);
}