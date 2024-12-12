let names = [
  "product one",
  "product two",
  "product three",
  "product four",
  "product five",
  "product sex",
  "product seven",
  "product eight",
];
let imgsrc = document.getElementById("imgsrc");
let ages = ["30", "40", "50", "60", "70", "80", "90", "100"];
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";

function element(name, ages) {
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let age = document.createElement("p");
  let img = document.createElement("img");

  //content
  let head = document.createTextNode(name);
  let agecontent = document.createTextNode(ages);
  img.src = imgsrc.value;
  if (imgsrc.value == "") {
    imgsrc.value =
      "file:///C:/Users/AMEE%20ALSAYED/Music/js%20course/day%203/images/p1.jpg";
  }
  title.appendChild(head);
  age.appendChild(agecontent);
  container.appendChild(card);
  card.appendChild(title);
  card.appendChild(age);
  card.appendChild(img);
  //style
  card.style.width = "200px";
  card.style.background = "#444";
  card.style.color = "#fff";
  card.style.padding = "20px";
  card.style.margin = "2px";
  card.style.display = "inline-block";
  img.style.width = "100%";
}
let i = 0;
var btn = document.getElementById("btn");
let pname = document.getElementById("pname");
let price = document.getElementById("price");
var pnv = pname.value;
pname.style.marginBottom = "10px";
price.style.marginBottom = "10px";
btn.style.cssText = `
padding:10px;
color:white;
background:#00ffde;
width:200px;
border:none;
margin:10px;
`;

btn.onclick = function () {
  element(pname.value, price.value);
  i++;
  names.push(pname.value);
  ages.push(price.value);
  console.log(names);
};
let z = 0;
for (z = 0; z < names.length; z++) {
  element(names[z], ages[z]);
}
