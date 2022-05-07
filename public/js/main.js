
function main() {

(function () {

   'use strict';
   
   $(".filtering").on("click", "span", function () {
    var a = $(".gallery").isotope({});
    var e = $(this).attr("data-filter");
    a.isotope({ filter: e });
});
$(".filtering").on("click", "span", function () {
    $(this).addClass("active").siblings().removeClass("active");
});

$(function(){
    $(".filtering").on("click", "span", function () {
        var a = $(".gallery").isotope({});
        var e = $(this).attr("data-filter");
        a.isotope({ filter: e });
    });
    $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
})

   

new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });
 
	
  

}());


// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");



// const appearOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -250px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });


}
main();


