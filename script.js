const burgerMenu = document.getElementById("burgerMenu");
const mobileNavSec = document.getElementById("mobileNavSec");
const mobileNavShadow = document.getElementById("mobileNavShadow");

burgerMenu.addEventListener("click", function (){
    mobileNavSec.style.display = "block"; 
})

mobileNavShadow.addEventListener("click", function () {
    mobileNavSec.style.removeProperty("display")
})

//slick slider
$(document).ready(function(){
  $('.flashSale_container').slick({
      // setting-name: setting-value
      arrows: true,
      prevArrow: ".backarrow",
      nextArrow: ".nextarrow",
      // dots: true,
//   infinite: true,
//   speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      // fade: true,
       
      
  });
     $(".categorySlideContainer").slick({
       // setting-name: setting-value
       arrows: true,
       prevArrow: ".categoryBackarrow",
       nextArrow: ".categoryNextarrow",
       // dots: true,
       //   infinite: true,
       //   speed: 300,
       slidesToShow: 4,
       slidesToScroll: 1,
       // fade: true,
     });
    
    
     $(".productSlideContainer").slick({
       // setting-name: setting-value
       arrows: true,
       prevArrow: ".productsBackArrow",
       nextArrow: ".productsNextArrow",
       // dots: true,
       //   infinite: true,
       //   speed: 300,
       slidesToShow: 4,
       slidesToScroll: 1,
       // fade: true,
     });
    })