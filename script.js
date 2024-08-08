var loader = document.getElementById("loader");

  window.addEventListener("load", function(){
     loader.style.display = "none";
  })
   
  var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 100,
     modifier: 2,
     slideShadows: true,
   },
   loop: true,
 });