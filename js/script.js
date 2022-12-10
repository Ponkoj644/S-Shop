// Recent slider js
// Owl carousel
$(".featured-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Discount Slider
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Testimonial slider
// Review slider
var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});

// copyright by Ponkoj Mondol, Contact- +880-1833 044436, Email: ponkojmonndal2014@gmail.com
