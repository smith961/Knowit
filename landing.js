const images=["assets/landing/developer.png","assets/landing/landingpage2.png"];
let index = 0;
function animateImages(){
 const img = document.getElementById("image");
 img.style.opacity = 0;
 setTimeout (() => {
  index = (index + 1) % images.length;
  img.src = images[index];
  img.style.opacity = 1;
 }, 500);
}
setInterval(animateImages, 3000);

document.addEventListener("DOMContentLoaded", () => {
 const loginContainer = document.querySelector(".login-container");
 const signUpContainer = document.querySelector(".sign-up-container");
 const showLogin = document.getElementById("showLogin");
 const showSignUp = document.getElementById("showSignUp");

 showSignUp.addEventListener("click", () => {
     loginContainer.style.transform = "translateX(-100%)";
     signUpContainer.style.transform = "translateX(0)";
 });

 showLogin.addEventListener("click", () => {
     loginContainer.style.transform = "translateX(0)";
     signUpContainer.style.transform = "translateX(100%)";
 });
});