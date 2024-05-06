const burgerMenu = document.getElementById("burgerMenu");
const mobileNavSec = document.getElementById("mobileNavSec");
const mobileNavShadow = document.getElementById("mobileNavShadow");

burgerMenu.addEventListener("click", function (){
    mobileNavSec.style.display = "block"; 
})

mobileNavShadow.addEventListener("click", function () {
    mobileNavSec.style.removeProperty("display")
})