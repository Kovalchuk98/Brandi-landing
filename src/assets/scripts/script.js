
  const menuToggle = document.querySelector('#menu-togle');
  const mobileNavContainer = document.querySelector('#mobile-nav');

  
  menuToggle.onclick = function(){
      menuToggle.classList.toggle('menu-icon-active');
      mobileNavContainer.classList.toggle('mobile-nav__list--active');
  }
  

   var owl = $("#main__slider");
          owl.owlCarousel({
         loop:true,
         margin:0,
         mouseDrag : false,
         touchDrag : false,
        //  autoplay,
        //  autoplaySpeed: 300,  //  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        //  nav:true,
         responsive:{
           0:{
             items:1
           },
           600:{
             items:1
           },
           1000:{
             items:1
           }
         }
       });
