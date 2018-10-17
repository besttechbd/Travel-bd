$(document).ready(function(){
    $('input#full-name,textarea#textarea1').characterCounter();
    $('.sidenav').sidenav();

    var swiper = new Swiper('.swiper-container', {
     effect: 'coverflow',
     grabCursor: true,
     centeredSlides: true,
     slidesPerView: 4,
     coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows : true,
     },
     pagination: {
       el: '.swiper-pagination',
     },
   });
});
