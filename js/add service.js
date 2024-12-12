let menu = document.getElementById("menu");
let li = document.querySelector("nav ul");
li.classList.add("none");
menu.onclick = function () {
  li.classList.toggle("none");
  menu.style.color = "rgb(0, 165, 55)";
};
let imgsrc = [localStorage.imgsrc];
let title = [localStorage.title.split(",")];
let price = [localStorage.price.split(",")];
let description = [localStorage.description.split(",")];
let btn = document.getElementById("addp");
let addform = document.getElementById("addpr");
let inpimg = document.getElementById("addimg");
let inptitle = document.getElementById("inptitle");
let inpprice = document.getElementById("inpprice");
let inpdescription = document.getElementById("inpdescription");
class addProduct {
  constructor(image, productName, price, description) {
    let allproducts = document.getElementById("allp");
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
addform.onsubmit = function (event) {
    event.preventDefault();
//   new addProduct(inpimg,inptitle,inpprice,inpdescription);
  imgsrc.push(inpimg.value);
  title.push(inptitle.value);
  price.push(inpprice.value);
  description.push(inpdescription.value);
  
  localStorage.imgsrc = imgsrc;
  localStorage.title = title;
  localStorage.price = price;
  localStorage.description = description;
};
let z ;
 for (z = 0; z < title[0].length; z++) {
      new addProduct(imgsrc[0][z], title[0][z], price[0][z], description[0][z]);
    }
