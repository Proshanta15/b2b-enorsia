
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
