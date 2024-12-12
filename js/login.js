let loginForm = document.getElementById("loginForm");
let userName = document.getElementById("username");
let Password = document.getElementById("password");
let btn = document.querySelector("button")
// userName.onblur = function(){
//     sessionStorage.userName = userName.value;
//     sessionStorage.Password = userName.value;
// }

loginForm.onsubmit = function(){
    localStorage.userName = userName.value;
    localStorage.password = Password.value;
}
console.log(window.location.pathname);
btn.onclick = function(){
 window.location.pathname = "/TRILLA-Project/html/page.html";
}
