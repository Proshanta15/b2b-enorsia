
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

//Top Item section js code 
document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".top_item_img_sm ul li img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const imgContainer = document.querySelector(".modal-img-container");
  const closeBtn = document.querySelector(".close-btn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;
  let isZoomed = false;
  const images = Array.from(thumbs).map(img => img.src);

  // === Thumbnail click ===
  thumbs.forEach((thumb, index) => {
    if (index === 0) thumb.parentElement.classList.add("active");
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.src;
      thumbs.forEach(t => t.parentElement.classList.remove("active"));
      thumb.parentElement.classList.add("active");
      currentIndex = index;
    });
  });

  // === Open modal ===
  mainImg.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = images[currentIndex];
    resetZoom();

    // Disable page scroll when modal is open
    document.body.style.overflow = "hidden";
  });

  // === Close modal ===
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove("active");
    resetZoom();

    // Restore page scroll
    document.body.style.overflow = "";
  }

  // === Navigate ===
  nextBtn.addEventListener("click", () => changeImage(1));
  prevBtn.addEventListener("click", () => changeImage(-1));

  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImg.src = images[currentIndex];
    mainImg.src = images[currentIndex];
    thumbs.forEach((t, i) => t.parentElement.classList.toggle("active", i === currentIndex));
    resetZoom();
  }

  // === Zoom toggle (vertical scroll, increase width) ===
  modalImg.addEventListener("click", () => {
    isZoomed = !isZoomed;
    if (isZoomed) {
      modalImg.classList.add("zoomed");
      imgContainer.classList.add("zoomed-container");

      // Scroll to top when zoomed
      imgContainer.scrollTop = 0;

      // Ensure body scroll is disabled while zoomed
      document.body.style.overflow = "hidden";

    } else {
      resetZoom();
    }
  });

  function resetZoom() {
    isZoomed = false;
    modalImg.classList.remove("zoomed");
    imgContainer.classList.remove("zoomed-container");
    imgContainer.scrollTop = 0;

    // Restore page scroll
    document.body.style.overflow = "";
  }

  // === Keyboard arrows ===
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeModal();
  });
});



// Product Item Js Code
document.querySelectorAll('.product_item').forEach(product => {
  const hoverImgs = product.querySelectorAll('.hover_img img');
  const colorBtns = product.querySelectorAll('.product_color_part ul li a img');
  const originalImg = product.querySelector('.orginal_img');
  const originalHover = product.querySelector('.orginal_hover_img');

  // Product hover → show main hover image
  product.addEventListener('mouseenter', () => {
    originalImg.style.opacity = 0;
    originalHover.style.opacity = 1;
  });

  product.addEventListener('mouseleave', () => {
    // Reset everything when leaving product
    hoverImgs.forEach(img => img.classList.remove('active'));
    colorBtns.forEach(btn => btn.classList.remove('active'));
    originalImg.style.opacity = 1;
    originalHover.style.opacity = 0;
  });

  // Hover over color thumbnails
  colorBtns.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
      // Show corresponding color image
      hoverImgs.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });

      // Hide main hover image
      originalHover.style.opacity = 0;

      // Highlight color
      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });

    btn.addEventListener('mouseleave', () => {
      // Remove color preview
      hoverImgs.forEach(img => img.classList.remove('active'));
      colorBtns.forEach(b => b.classList.remove('active'));

      // Show the main hover image again
      originalHover.style.opacity = 1;
    });
  });
});
