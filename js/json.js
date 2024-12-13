// let MyRequest = new XMLHttpRequest();
// MyRequest.open("GET", "../json/data.json");
// MyRequest.send();
// MyRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let jsData = JSON.parse(this.responseText);
//     new addProduct(
//       jsData[0].imgsrc,
//       jsData[0].title,
//       jsData[0].price,
//       jsData[0].description
//     );
//     if (localStorage.length <= 2) {
//       console.log("NO DATA HERE");
//     } else {
//       for (i = 0; i < price.length; i++) {
//         if (price.length > 2) {
//           jsData[i].imgsrc = localStorage.imgsrc.split(",");
//           jsData[i].title = localStorage.title.split(",");
//           jsData[i].price = localStorage.price.split(",");
//           jsData[i].description = localStorage.description.split(",");
//           new addProduct(
//             jsData[i].imgsrc[i],
//             jsData[i].title[i],
//             jsData[i].price[i],
//             jsData[i].description[i]
//           );
//         }
//       }
//     }
//   }
// };
