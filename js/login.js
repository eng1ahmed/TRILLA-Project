// let lf = document.querySelector("#loginForm");
// let userName = document.getElementById("username");
// let Password = document.getElementById("password");
// let btn = document.querySelector("button");
// function click (){
//           window.location.pathname = "./html/page.html";
// }

// lf.onsubmit = function () {
//   localStorage.userName = userName.value;
//   localStorage.password = Password.value;
//   click();
// };
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("userName", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);

  window.location.href = "./html/page.html";
});
