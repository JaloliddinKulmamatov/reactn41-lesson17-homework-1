$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
        loop:true,
        nav:true, 
        items:1,
        responsive: {
            0: {
                items:1,
            },

            800: {
                items:2,
            },

            1000: {
                items:4,
            }
        }
    }
  );
});