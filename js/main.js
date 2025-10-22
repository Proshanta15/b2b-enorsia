
// Cart toggle js code 

document.addEventListener("DOMContentLoaded", function () {
  const cartButton = document.getElementById("header_cart_bag_img");
  const cartContainer = document.getElementById("cart_container_body");

  cartButton.addEventListener("click", function (e) {
    // prevent the click from closing immediately if the click happens inside
    e.stopPropagation();

    // toggle visibility
    if (cartContainer.style.display === "block") {
      cartContainer.style.display = "none";
    } else {
      cartContainer.style.display = "block";
    }
  });

  // Close the cart if clicked outside
  document.addEventListener("click", function (e) {
    if (!cartButton.contains(e.target)) {
      cartContainer.style.display = "none";
    }
  });
});


// Slider part js code

// Init slick slider + animation
$('.slider').slick({
  autoplay: true,
  speed: 2000,
  lazyLoad: 'progressive',
  arrows: false,
  dots: true,
}).slickAnimation();

// Client Slider
$(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});

// Sale Brand Slider
$(document).ready(function(){
  $('.sale_brand_carousel').slick({
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});