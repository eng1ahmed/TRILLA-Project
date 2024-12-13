// save form items into variables
const signUpForm = document.getElementById("signUpForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

// make action when submited
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(passwordInput.value.length < 8){
    alert("Please enter 8 charcter password")
  }
  else{
        localStorage.setItem("userName", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
    localStorage.setItem("phone", phoneInput.value);
    window.location.href = "./html/index.html";
  }


});
