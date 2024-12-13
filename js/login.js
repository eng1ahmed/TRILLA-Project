// save form items into variables
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// make action when submited
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // check form value equal to localstorage value
  if (
    localStorage.userName === usernameInput.value &&
    localStorage.password === passwordInput.value
  ) {
    localStorage.setItem("userName", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
    window.location.href = "./page.html";
  }
  else{
    alert("USERNAME AND PASSWORD DOES NOT MATCH")
  }
})