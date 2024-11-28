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