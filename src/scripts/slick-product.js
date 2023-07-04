// function initializeSlider() {
//   $(".category-list")
//     .slick({
//       // autoplay: true,
//       // autoplaySpeed: 1000,
//     })
//     .on("afterChange", function (event, slick, currentSlide) {
//       console.log("Page changed to slide", currentSlide);
//       // Additional logic or actions when the page changes
//     });
// }

// // Call the function to initialize the slider
// initializeSlider();

// // Add a resize event listener to reinitialize the slider on window resize
// window.addEventListener("resize", function () {
//   var currentScreenWidth = window.innerWidth;
//   if (currentScreenWidth < 768) {
//     initializeSlider();
//   } else {
//     $(".product_list").slick("unslick");
//   }
// });

function initializeSlider() {
  $(".category-list")
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow:
        '<button type="button" class="slick-prev"> <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.0122891C11.198 0.0123311 11.3913 0.071003 11.5557 0.180887C11.7201 0.290772 11.8482 0.446936 11.9239 0.629635C11.9996 0.812334 12.0194 1.01337 11.9808 1.20732C11.9422 1.40127 11.847 1.57944 11.7072 1.71929L2.41421 11.0123L11.7072 20.3053C11.8894 20.4939 11.9902 20.7465 11.9879 21.0087C11.9856 21.2709 11.8804 21.5217 11.695 21.7071C11.5096 21.8925 11.2588 21.9977 10.9966 22C10.7344 22.0022 10.4818 21.9014 10.2932 21.7193L0.293211 11.7193C0.10574 11.5318 0.000425355 11.2775 0.000425332 11.0123C0.000425309 10.7471 0.10574 10.4928 0.293211 10.3053L10.2932 0.305288C10.4807 0.117739 10.735 0.0123464 11.0002 0.0122891Z" fill="black"/></svg></button>',
      nextArrow:
        '<button type="button" class="slick-next"> <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z" fill="black" /></svg></button>',
      dots: true,
      responsive: [
        {
          breakpoint: 10000,
          settings: "unslick",
        },
        {
          breakpoint: 1024,
          settings: "unslick",
        },
        
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            arrows: true,
            infinite: false,
            dots: false
          },
        },
      ],
    })
    
}

// Call the function to initialize the slider
initializeSlider();

// Add a resize event listener to reinitialize the slider on window resize
window.addEventListener("resize", function () {
  var currentScreenWidth = window.innerWidth;
  if (currentScreenWidth < 768) {
    initializeSlider();
  } else {
    $(".category-list").slick("unslick");
  }
});