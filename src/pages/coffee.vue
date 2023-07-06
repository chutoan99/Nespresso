<script lang="ts">
import "../css/pages/coffee.css";
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoffeePage",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },
});

//     //Modal
//     const modal = document.querySelector(".js-modal");
//     const filterBtn = document.querySelector(".filter-left");
//     const modalClose = document.querySelector(".js-modal-close");
//     const mobileClose = document.querySelector(".js-mobile-close");

//     //Modal
//     filterBtn.addEventListener("click", function () {
//       modal.classList.add("open-modal");
//     });

//     //Close Modal
//     modalClose.addEventListener("click", function () {
//       modal.classList.remove("open-modal");
//     });

//     // Close Modal Mobile
//     mobileClose.addEventListener("click", function () {
//       modal.classList.remove("open-modal");
//     });

//     //Dropdown
//     const clickDrop = document.querySelector(".filter-container");
//     const dropdownList = document.querySelector(".filter-dropdown__listbox");

//     //Dropdown
//     clickDrop.addEventListener("click", function () {
//       dropdownList.classList.toggle("is-open");
//       clickDrop.classList.toggle("is-open");
//     });

//     //Close Dropdown and Modal when click outside
//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.classList.remove("open-modal");
//       }
//       if (!clickDrop.contains(event.target)) {
//         dropdownList.classList.remove("is-open");
//         clickDrop.classList.remove("is-open");
//       }
//     };

//     //Sort
//     const btnSort = document.querySelector(".btn-sort");
//     const sortList = document.querySelector(".modal-mobile__sort");
//     btnSort.addEventListener("click", function () {
//       sortList.classList.toggle("is-open");
//     });

//   function initializeSlider() {
//   $(".category-list").slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     infinite: true,
//     arrows: true,
//     draggable: false,
//     prevArrow:
//       '<button type="button" class="slick-prev"> <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.0122891C11.198 0.0123311 11.3913 0.071003 11.5557 0.180887C11.7201 0.290772 11.8482 0.446936 11.9239 0.629635C11.9996 0.812334 12.0194 1.01337 11.9808 1.20732C11.9422 1.40127 11.847 1.57944 11.7072 1.71929L2.41421 11.0123L11.7072 20.3053C11.8894 20.4939 11.9902 20.7465 11.9879 21.0087C11.9856 21.2709 11.8804 21.5217 11.695 21.7071C11.5096 21.8925 11.2588 21.9977 10.9966 22C10.7344 22.0022 10.4818 21.9014 10.2932 21.7193L0.293211 11.7193C0.10574 11.5318 0.000425355 11.2775 0.000425332 11.0123C0.000425309 10.7471 0.10574 10.4928 0.293211 10.3053L10.2932 0.305288C10.4807 0.117739 10.735 0.0123464 11.0002 0.0122891Z" fill="black"/></svg></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"> <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z" fill="black" /></svg></button>',
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: "unslick",
//       },
//       {
//         breakpoint: 1024,
//         settings: "unslick",
//       },

//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 4,
//           arrows: true,
//           infinite: false,
//           dots: false,
//         },
//       },
//     ],
//   });
// }

// // Call the function to initialize the slider
// initializeSlider();

// // Add a resize event listener to reinitialize the slider on window resize
// window.addEventListener("resize", function () {
//   var currentScreenWidth = window.innerWidth;
//   if (currentScreenWidth === 768) {
//     initializeSlider();
//   } else {
//     $(".category-list").slick("unslick");
//   }
// });

//
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />
      <div id="coffee">
        <section id="hero">
          <div class="hero-container">
            <div class="hero-main">
              <h3 class="hero-heading">ORIGINAL COFFEE CAPSULES</h3>
              <h5 class="hero-desc">Free Delivery for minimum 100 lei.</h5>
            </div>

            <div class="filter-bar">
              <div class="filter-left">
                <img class="filter-img" src="assets/svgs/Filter.svg" alt="" />
                <p class="filter-desc">FILTER</p>
              </div>

              <!-- <div class="filter-center">
                <img class="filter-img" src="assets/svgs/Filter.svg" alt="" />
                <p class="filter-desc">ORIGINAL</p>
              </div> -->

              <div class="filter-right">
                <div class="filter-container">
                  <div class="filter-right__header">
                    <p class="filter-right__desc">SORT BY</p>
                    <!-- <img
                      class="filter-img"
                      src="assets/svgs/Filter.svg"
                      alt=""
                    /> -->
                  </div>
                  <span class="filter-detail">Recommended</span>
                </div>
                <div class="filter-dropdown">
                  <div class="filter-dropdown__listbox">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m13.289 4 .711.688L6.44 12h-.735L2 8.407l.71-.688 3.363 3.26L13.289 4Z"
                        ></path>
                      </svg>
                      Recommended
                    </button>
                    <button>Lower Price</button>
                    <button>Higher Price</button>
                    <button>Lower intensity</button>
                    <button>Higher intensity</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="category">
              <div class="category-submenu">
                <ul class="category-list">
                  <li class="category-item">
                    <a href="#ispirazione">
                      <img
                        class="category-img"
                        src="assets/images/product/Ellipse_1.png"
                        alt="Ispirazione Italiana"
                      />
                      <p class="category-desc">Ispirazione Italiana</p>
                    </a>
                  </li>
                  <li class="category-item">
                    <a href="#discovery">
                      <img
                        class="category-img"
                        src="assets/images/product/Ellipse_2.png"
                        alt="Discovery Offer"
                      />
                      <p class="category-desc">Discovery Offer</p>
                    </a>
                  </li>
                  <li class="category-item">
                    <a href="#master">
                      <img
                        class="category-img"
                        src="assets/images/product/Ellipse_3.png"
                        alt="Master Origins  "
                      />
                      <p class="category-desc">Master Origins</p>
                    </a>
                  </li>
                  <li class="category-item">
                    <a href="#world">
                      <img
                        class="category-img"
                        src="assets/images/product/Ellipse_4.png"
                        alt="World Exploration"
                      />
                      <p class="category-desc">World Exploration</p>
                    </a>
                  </li>
                  <li class="category-item">
                    <a href="#barista">
                      <img
                        class="category-img"
                        src="assets/images/product/Ellipse_5.png"
                        alt="Barista Creations"
                      />
                      <p class="category-desc">Barista Creations</p>
                    </a>
                  </li>
                  <li class="category-item">
                    <a href="#espresso">
                      <img
                        class="category-img"
                        src="assets/images/product/Ellipse_6.png"
                        alt="Espresso"
                      />
                      <p class="category-desc">Espresso</p>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="category-banner">
                <img src="assets/images/product/promotion.png" alt="" />

                <div class="category-detail">
                  <p class="category-detail__heading">
                    ORIGINAL COFFEE CAPSULES
                  </p>
                  <p class="category-detail__desc">
                    Get 10% credit back in your accountwith Subscription by
                    Nespresso
                  </p>
                </div>

                <button class="category-btn" type="submit">
                  <span>SUBSCRIBE</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <main id="product_coffee">
          <section class="product background-1" id="ispirazione">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">ISPIRAZIONE ITALIANA</h4>
                <h5 class="product-header__desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h5>
              </div>

              <div class="product-list">
                <div class="product-item">
                  <!-- Product Tag -->
                  <div class="product-tag">
                    <span class="product-tag__name">LIMITED</span>
                  </div>

                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_1.png"
                        alt="Ispirazione Italiana Selection"
                      />
                    </a>
                  </div>

                  <!-- Product Content -->
                  <div class="product-content">
                    <!-- Product name -->
                    <div class="product-desc">
                      <h6 class="product-name">
                        Ispirazione Italiana Selection
                      </h6>

                      <div class="product-type">
                        <span class="product-type__sleeve"
                          >10-sleeve assortment</span
                        >
                        <div class="product-type__size">
                          <div class="product-type__size-icon">
                            <img src="assets/svgs/sizeM.svg" alt="" />
                            <span>25ml</span>
                          </div>
                          <div class="product-type__size-icon">
                            <img src="assets/svgs/sizeL.svg" alt="" />
                            <span>40ml</span>
                          </div>
                        </div>
                        <div class="product-type__intensity">
                          <span>Intensity</span>
                          <div class="product-type__intensity-icon">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <span>13</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫1,658,000</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <svg
                          width="21"
                          height="24"
                          viewBox="0 0 21 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.90002 3.75C6.90002 1.67889 8.57892 0 10.65 0C12.7211 0 14.4 1.67889 14.4 3.75V6H19.65L20.4 24H0.900024L1.65002 6H6.90002V3.75ZM7.65002 6H13.65V3.75C13.65 2.09317 12.3069 0.75 10.65 0.75C8.99319 0.75 7.65002 2.09317 7.65002 3.75V6Z"
                            fill="white"
                          />
                        </svg>

                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Tag -->
                  <div class="product-tag">
                    <span class="product-tag__name">LIMITED</span>
                  </div>

                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_2.png"
                        alt="Ispirazione Italiana Intense Selection"
                      />
                    </a>
                  </div>

                  <!-- Content -->
                  <div class="product-content">
                    <!-- Product Description -->
                    <div class="product-desc">
                      <!-- Name -->
                      <h6 class="product-name">
                        IIspirazione Italiana Intense Selection
                      </h6>
                      <div class="product-type">
                        <div class="product-type__sleeve">
                          5-sleeve assortment
                        </div>
                        <div class="product-type__size">
                          <div class="product-type__size-icon">
                            <img src="assets/svgs/sizeM.svg" alt="" />
                            <span>25ml</span>
                          </div>
                          <div class="product-type__size-icon">
                            <img src="assets/svgs/sizeL.svg" alt="" />
                            <span>40ml</span>
                          </div>
                        </div>
                        <div class="product-type__intensity">
                          <span>Intensity</span>
                          <div class="product-type__intensity-icon">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <span>8</span>
                            <i class="product-type__intensity-icon--empty"></i>
                            <i class="product-type__intensity-icon--empty"></i>
                            <i class="product-type__intensity-icon--empty"></i>
                            <i class="product-type__intensity-icon--empty"></i>
                            <i class="product-type__intensity-icon--empty"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Product-footer -->
                    <div class="product-footer">
                      <!-- Price -->
                      <div class="product-price">
                        <p class="product-price-total">₫883,000</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_3.png"
                        alt="Roma"
                      />
                    </a>
                  </div>

                  <!-- Product Content -->
                  <div class="product-content">
                    <!-- Product description -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Roma</h6>
                      <div class="product-type">
                        <div class="product-type__sleeve">
                          Full and Balanced
                        </div>
                        <div class="product-type__size">
                          <div class="product-type__size-icon">
                            <img src="assets/svgs/sizeM.svg" alt="" />
                            <span>25ml</span>
                          </div>
                          <div class="product-type__size-icon">
                            <img src="assets/svgs/sizeL.svg" alt="" />
                            <span>40ml</span>
                          </div>
                        </div>
                        <div class="product-type__intensity">
                          <span>Intensity</span>
                          <div class="product-type__intensity-icon">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <span>13</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_4.png"
                        alt="Livanto"
                      />
                    </a>
                  </div>

                  <!-- Product content -->
                  <div class="product-content">
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Livanto</h6>
                      <div class="product-type__sleeve">Round and Balanced</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>

                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_5.png"
                        alt="Arpeggio"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Arpeggio</h6>
                      <div class="product-type__sleeve">Intense and Cream</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_6.png"
                        alt="Arpeggio Decaffeinato"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Arpeggio Decaffeinato</h6>
                      <div class="product-type__sleeve">Intense and Cream</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_7.png"
                        alt="Kazzar"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Kazzar</h6>
                      <div class="product-type__sleeve">Intense and Syrupy</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_8.png"
                        alt="Napoli"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Napoli</h6>
                      <div class="product-type__sleeve">Dark and Creamy</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_9.png"
                        alt="Ristretto"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ristretto</h6>
                      <div class="product-type__sleeve">
                        Powerful and Contrasting
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_10.png"
                        alt="Ristretto Decaffeinato"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ristretto Decaffeinato</h6>
                      <div class="product-type__sleeve">
                        Powerful and Contrasting
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/product_11.png"
                        alt="Venezia"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Venezia</h6>
                      <div class="product-type__sleeve">
                        Balanced and Thick Body
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product background-2" id="discovery">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">DISCOVERY OFFER</h4>
                <h5 class="product-header__desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h5>
              </div>

              <div class="product-list">
                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/discovery.png"
                        alt="Welcome Offer Coffee Pack"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Welcome Offer Coffee Pack</h6>
                      <div class="product-type__sleeve">
                        10-sleeve assortment
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫1,706,000</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product background-3" id="master">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title white-text">MASTER ORIGINS</h4>
                <h5 class="product-header__desc white-text">
                  Explore a range of single origin coffees by local farming
                  communities who developed specific ways of processing coffee.
                </h5>
              </div>

              <div class="product-list">
                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/master_1.png"
                        alt="Ispirazione Napoli"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ispirazione Napoli</h6>
                      <div class="product-type__sleeve">
                        Sweet and Harmonious
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/master_2.png"
                        alt="Ispirazione Napoli"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ispirazione Napoli</h6>
                      <div class="product-type__sleeve">Intense and Spicy</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/master_3.png"
                        alt="Ispirazione Napoli"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ispirazione Napoli</h6>
                      <div class="product-type__sleeve">Rich and Woody</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/master_4.png"
                        alt="Ispirazione Napoli"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ispirazione Napoli</h6>
                      <div class="product-type__sleeve">Flowery and Bright</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/master_5.png"
                        alt="Ispirazione Napoli"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Ispirazione Napoli</h6>
                      <div class="product-type__sleeve">Fruity and Vibrant</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product background-4" id="world">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">WORLD EXPLORATIONS</h4>
                <h5 class="product-header__desc">
                  Travel the world through coffee – and discover unique and
                  typical tastes brought to you from cities around the world.
                </h5>
              </div>

              <div class="product-list">
                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_1.png"
                        alt="Shanghai Lungo"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Shanghai Lungo</h6>
                      <div class="product-type__sleeve">
                        Fruity with Fine Acidity
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_2.png"
                        alt="Buenos Aires Lungo"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Buenos Aires Lungo</h6>
                      <div class="product-type__sleeve">Sweet and Cereal</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_3.png"
                        alt="Tokyo Lungo"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Tokyo Lungo</h6>
                      <div class="product-type__sleeve">
                        Flowery and Complex
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_4.png"
                        alt="Vienna Lungo"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Vienna Lungo</h6>
                      <div class="product-type__sleeve">Round and Smooth</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_5.png"
                        alt="Stockholm Lungo"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Stockholm Lungo</h6>
                      <div class="product-type__sleeve">
                        Rich and Full-Bodied
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_6.png"
                        alt="Cape Town Lungo"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Cape Town Lungo</h6>
                      <div class="product-type__sleeve">
                        Intense and Roasted
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫17,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_7.png"
                        alt="Rio De Janeiro Espresso"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Rio De Janeiro Espresso</h6>
                      <div class="product-type__sleeve">Herbal & Spicy</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_8.png"
                        alt="Istanbul Espresso"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Istanbul Espresso</h6>
                      <div class="product-type__sleeve">Roasted & Fruity</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/world_9.png"
                        alt="Paris Espresso"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Paris Espresso</h6>
                      <div class="product-type__sleeve">Mild & Balanced</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫15,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product background-5" id="barista">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">BARISTA CREATIONS</h4>
                <h5 class="product-header__desc" style="width: 808px">
                  Perfect blends inspired by the creativity and expertise of
                  world’s finest baristas, these coffee capsules are designed to
                  make it easy for you to recreate the full spread of coffee
                  recipes at home.
                </h5>
              </div>

              <div class="product-list">
                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/barista_1.png"
                        alt="Cocoa Truffle"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Cocoa Truffle</h6>
                      <div class="product-type__sleeve">Cocoa Flavoured</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/barista_2.png"
                        alt="Vanilla Éclair"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Vanilla Éclair</h6>
                      <div class="product-type__sleeve">Vanilla Flavoured</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/barista_3.png"
                        alt="Caramel Crème Brûlée"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Caramel Crème Brûlée</h6>
                      <div class="product-type__sleeve">Caramel Flavoured</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫19,900</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/barista_4.png"
                        alt="Chiaro"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Chiaro</h6>
                      <div class="product-type__sleeve">Sweet Biscuit</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫18,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/barista_5.png"
                        alt="Scuro"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Scuro</h6>
                      <div class="product-type__sleeve">
                        Roasted and Balanced
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫18,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/barista_6.png"
                        alt="Corto"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Corto</h6>
                      <div class="product-type__sleeve">
                        For extra intense recipes with milk
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">₫18,500</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product background-6" id="espresso">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title white-text">ESPRESSO</h4>
                <h5 class="product-header__desc white-text">
                  With varying intensities and tastes, the audacious blends
                  offer an authentic coffee experience as an Espresso.
                </h5>
              </div>

              <div class="product-list">
                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/espresso_1.png"
                        alt="Volluto Decaffeinato"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Volluto Decaffeinato</h6>
                      <div class="product-type__sleeve">Sweet and Light</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">22,00 RON/MONTH</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/espresso_2.png"
                        alt="Volluto"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Volluto</h6>
                      <div class="product-type__sleeve">Sweet and Light</div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">22,00 RON/MONTH</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/espresso_3.png"
                        alt="Cosi"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Cosi</h6>
                      <div class="product-type__sleeve">
                        Mild and Delicately Toasted
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">22,00 RON/MONTH</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <!-- Product Image -->
                  <div class="product-image">
                    <a href="./coffee-detail.html">
                      <img
                        src="assets/images/product/espresso_4.png"
                        alt="Capriccio"
                      />
                    </a>
                  </div>
                  <div class="product-content">
                    <!-- Product Desc -->
                    <div class="product-desc">
                      <!-- Product name -->
                      <h6 class="product-name">Capriccio</h6>
                      <div class="product-type__sleeve">
                        Rich and Distinctive
                      </div>
                      <div class="product-type__size">
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeM.svg" alt="" />
                          <span>25ml</span>
                        </div>
                        <div class="product-type__size-icon">
                          <img src="assets/svgs/sizeL.svg" alt="" />
                          <span>40ml</span>
                        </div>
                      </div>
                      <div class="product-type__intensity">
                        <span>Intensity</span>
                        <div class="product-type__intensity-icon">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <span>13</span>
                        </div>
                      </div>
                    </div>

                    <!-- Product Footer -->
                    <div class="product-footer">
                      <div class="product-price">
                        <p class="product-price-total">22,00 RON/MONTH</p>
                        <p class="product-capsule">1 sleeve (10 capsules)</p>
                        <p class="product-capsule">Capsule price: 2,20 RON</p>
                      </div>
                      <button class="product-add">
                        <img src="assets/svgs/cart.svg" alt="" />
                        <span>ADD TO BASKET</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="product">
            <div class="product_ads">
              <img src="assets/images/product/banner.png" alt="banner" />
              <div class="product_ads__text">
                <p class="product_ads__title">ORIGINAL COFFEE CAPSULES</p>
                <p class="product_ads__desc">
                  Get 10% credit back in your accountwith Subscription by
                  Nespresso
                </p>
                <a href="#" class="product_ads__more">READ MORE</a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />

      <div id="coffee_modal">
        <div class="modal js-modal">
          <div class="modal-wrapper">
            <div class="modal-container">
              <button class="modal-mobile__close js-mobile-close">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1L1 15"
                    stroke="#17171A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 15L1 1"
                    stroke="#17171A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <div class="modal-mobile modal-mobile__sort">
                <div class="mobile__sort btn-sort">
                  <span class="mobile__sort-title">Sort By</span>
                  <span class="mobile__sort-recommend">Recommended</span>
                </div>
                <div class="mobile__sort-dropdown">
                  <div class="mobile__sort-listbox">
                    <button>Lower Price</button>
                    <button>Higher Price</button>
                    <button>Lower intensity</button>
                    <button>Higher intensity</button>
                  </div>
                </div>
              </div>
              <div class="modal-mobile">
                <div>
                  <header class="modal-head">
                    <h5 class="modal-title">FILTER</h5>
                    <button class="modal-close js-modal-close">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 1L1 15"
                          stroke="#17171A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 15L1 1"
                          stroke="#17171A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </header>
                  <fieldset>
                    <legend>Intensity</legend>
                    <div class="modal-content">
                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="light4-5" />

                        <label for="light4-5">
                          <span>Light 4 - 5</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="mild6-8" />

                        <label for="mild6-8">
                          <span>Mild 6 - 8</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input
                          type="checkbox"
                          name="options"
                          id="intense9-13"
                        />

                        <label for="intense9-13">
                          <span>Intense 9 - 13</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Extraction method</legend>
                    <div class="modal-content">
                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="lungo" />

                        <label for="lungo">
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.62 3.00902L14.083 -0.000976562H0.916992L2.87499 12.729C2.92853 13.0835 3.10783 13.4069 3.38012 13.64C3.65241 13.8732 3.99951 14.0006 4.35799 13.999H10.642C11.388 13.999 12.012 13.465 12.125 12.729L12.852 7.99902H13.5C15.98 7.99902 16.5 6.64102 16.5 5.49902C16.5 4.37902 15.987 3.05602 13.62 3.00902ZM12.917 0.999023L12.612 2.98202H2.38799L2.08299 1.00002L12.917 0.999023ZM11.137 12.576C11.1192 12.6944 11.0594 12.8024 10.9685 12.8802C10.8776 12.9581 10.7617 13.0006 10.642 13H4.35799C4.23847 13.0004 4.12281 12.9578 4.03212 12.8799C3.94142 12.8021 3.88175 12.6942 3.86399 12.576L2.54199 3.98202H12.458L11.137 12.576ZM13.5 7.00002H13.006L13.468 4.00002H13.5C15.258 4.00002 15.5 4.72002 15.5 5.50002C15.5 6.28002 15.258 7.00002 13.5 7.00002Z"
                              fill=""
                            />
                          </svg>

                          <span>Lungo</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="cappuccino" />

                        <label for="cappuccino">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.62 6.009L12.775 5H11.763L10.137 15.576C10.1192 15.6944 10.0594 15.8024 9.9685 15.8802C9.87759 15.9581 9.76169 16.0006 9.642 16H3.358C3.23848 16.0004 3.12282 15.9577 3.03213 15.8799C2.94143 15.8021 2.88176 15.6942 2.864 15.576L1.237 5H0.225L1.875 15.729C1.92832 16.0837 2.10753 16.4073 2.37984 16.6406C2.65215 16.874 2.99937 17.0016 3.358 17H9.642C10.388 17 11.012 16.465 11.125 15.729L11.852 11H12.5C14.98 11 15.5 9.64 15.5 8.5C15.5 7.38 14.987 6.056 12.62 6.009ZM12.5 10H12.006L12.468 7H12.5C14.258 7 14.5 7.72 14.5 8.5C14.5 9.28 14.258 10 12.5 10ZM13 4V3.5C13 2.753 12.708 1.5 10.75 1.5C10.434 1.5 10.174 1.542 9.939 1.6C9.274 0.605 8.059 0 6.5 0C4.94 0 3.726 0.605 3.061 1.6C2.79587 1.53309 2.52344 1.4995 2.25 1.5C0.292 1.5 0 2.753 0 3.5V4H13Z"
                              fill=""
                            />
                          </svg>

                          <span>Cappuccino & Latte Macchiato</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="ristretto" />

                        <label for="ristretto">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9999 2H10.7799L11.0809 0H0.919922L2.37792 9.723C2.48992 10.463 3.11392 11 3.86192 11H8.13992C8.87692 11 9.51492 10.451 9.62292 9.723L10.1069 6.5H10.9999C13.1749 6.5 13.4999 5.09 13.4999 4.25C13.4999 3.41 13.1749 2 10.9999 2ZM8.13892 10H3.85992C3.74045 9.99907 3.62519 9.95572 3.53471 9.8777C3.44423 9.79967 3.38441 9.69204 3.36592 9.574L2.90592 6.5H9.09492L8.63392 9.574C8.6156 9.69229 8.55569 9.80017 8.46496 9.87826C8.37423 9.95634 8.25862 9.99951 8.13892 10ZM9.24492 5.5H2.75492L2.08192 1H9.91992L9.24492 5.5ZM10.9999 5.5H10.2559L10.6309 3H10.9999C12.3179 3 12.4999 3.6 12.4999 4.25C12.4999 4.9 12.3179 5.5 10.9999 5.5Z"
                              fill=""
                            />
                          </svg>

                          <span>Ristretto</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="erspresso" />

                        <label for="erspresso">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9999 2H10.7799L11.0809 0H0.919922L2.37792 9.723C2.48992 10.463 3.11392 11 3.86192 11H8.13992C8.87692 11 9.51492 10.451 9.62292 9.723L10.1069 6.5H10.9999C13.1749 6.5 13.4999 5.09 13.4999 4.25C13.4999 3.41 13.1749 2 10.9999 2ZM9.91892 1L9.61892 3H2.38092L2.08092 1H9.91892ZM8.63392 9.574C8.6156 9.69229 8.55569 9.80017 8.46496 9.87826C8.37423 9.95634 8.25862 9.99951 8.13892 10H3.85992C3.74045 9.99907 3.62519 9.95572 3.53471 9.8777C3.44423 9.79967 3.38441 9.69204 3.36592 9.574L2.52992 4H9.46792L8.63392 9.574ZM10.9999 5.5H10.2559L10.6309 3H10.9999C12.3179 3 12.4999 3.6 12.4999 4.25C12.4999 4.9 12.3179 5.5 10.9999 5.5Z"
                              fill=""
                            />
                          </svg>
                          <span>Espresso</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <!-- <fieldset>
               <legend>Aromatic profile</legend>
               <div class="modal-content">
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="biscuity" />
 
                   <label for="biscuity">
                     <svg
                       width="20"
                       height="20"
                       viewBox="0 0 20 20"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M20 7C20 6.373 19.775 5.858 19.392 5.506C19.777 5.156 20 4.641 20 4C20 2.804 19.196 2 18 2C18 0.785 17.215 0 16 0C15.373 0 14.858 0.225 14.506 0.608C14.156 0.223 13.641 0 13 0C12.373 0 11.858 0.225 11.506 0.608C11.156 0.223 10.641 0 10 0C9.373 0 8.858 0.225 8.506 0.608C8.156 0.223 7.641 0 7 0C6.373 0 5.858 0.225 5.506 0.608C5.156 0.223 4.641 0 4 0C2.804 0 2 0.804 2 2C0.785 2 0 2.785 0 4C0 4.627 0.225 5.142 0.607 5.494C0.223 5.844 0 6.36 0 7C0 7.627 0.225 8.142 0.607 8.494C0.223 8.844 0 9.36 0 10C0 10.627 0.225 11.142 0.607 11.494C0.223 11.844 0 12.36 0 13C0 13.627 0.225 14.142 0.607 14.494C0.223 14.844 0 15.36 0 16C0 17.196 0.804 18 2 18C2 19.215 2.785 20 4 20C4.627 20 5.142 19.775 5.494 19.393C5.844 19.777 6.359 20 7 20C7.627 20 8.142 19.775 8.494 19.393C8.844 19.777 9.359 20 10 20C10.627 20 11.142 19.775 11.494 19.393C11.844 19.777 12.359 20 13 20C13.627 20 14.142 19.775 14.494 19.393C14.844 19.777 15.359 20 16 20C17.196 20 18 19.196 18 18C19.215 18 20 17.215 20 16C20 15.373 19.775 14.858 19.392 14.506C19.777 14.156 20 13.641 20 13C20 12.373 19.775 11.858 19.392 11.506C19.777 11.156 20 10.641 20 10C20 9.373 19.775 8.858 19.392 8.506C19.777 8.156 20 7.641 20 7ZM18 9C18.3 9 19 9.098 19 10C19 10.826 18.456 11 18 11V12C18.3 12 19 12.098 19 13C19 13.826 18.456 14 18 14V15C18.3 15 19 15.098 19 16C19 16.826 18.456 17 18 17H17V18C17 18.3 16.902 19 16 19C15.174 19 15 18.456 15 18H14C14 18.3 13.902 19 13 19C12.174 19 12 18.456 12 18H11C11 18.3 10.902 19 10 19C9.173 19 9 18.456 9 18H8C8 18.3 7.902 19 7 19C6.173 19 6 18.456 6 18H5C5 18.3 4.902 19 4 19C3.173 19 3 18.456 3 18V17H2C1.7 17 1 16.902 1 16C1 15.174 1.544 15 2 15V14C1.7 14 1 13.902 1 13C1 12.174 1.544 12 2 12V11C1.7 11 1 10.902 1 10C1 9.173 1.544 9 2 9V8C1.7 8 1 7.902 1 7C1 6.173 1.544 6 2 6V5C1.7 5 1 4.902 1 4C1 3.173 1.544 3 2 3H3V2C3 1.7 3.098 1 4 1C4.827 1 5 1.544 5 2H6C6 1.7 6.098 1 7 1C7.827 1 8 1.544 8 2H9C9 1.7 9.098 1 10 1C10.826 1 11 1.544 11 2H12C12 1.7 12.098 1 13 1C13.826 1 14 1.544 14 2H15C15 1.7 15.098 1 16 1C16.826 1 17 1.544 17 2V3H18C18.3 3 19 3.098 19 4C19 4.827 18.456 5 18 5V6C18.3 6 19 6.098 19 7C19 7.827 18.456 8 18 8V9Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Biscuity</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Hazelnut" />
 
                   <label for="Hazelnut">
                     <svg
                       width="20"
                       height="19"
                       viewBox="0 0 20 19"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M10 0C3.458 0 0 2.957 0 8.553C0 14.673 8.337 19 10 19C11.662 19 20 14.674 20 8.553C20 3.037 16.448 0 10 0ZM15.873 2.341C15.35 3.11 13.177 4 10 4C6.783 4 4.591 3.086 4.105 2.312C5.563 1.443 7.525 1 10 1C11.99 1 14.16 1.314 15.873 2.341ZM10 18C8.88 18 1 14.175 1 8.553C1 6.03 1.769 4.135 3.293 2.873C4.146 4.116 6.786 5 10 5C13.184 5 15.808 4.133 16.686 2.907C18.072 4.054 19 5.835 19 8.553C19 14.175 11.121 18 10 18Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Hazelnut</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Caramel" />
 
                   <label for="Caramel">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M10.7 12.4999L4.20005 9.4999L3.80005 10.3999L10.3 13.2999C11.2 13.6999 11.5 14.1999 11.5 15.3999V16.1999C11.5 17.1999 12.3 17.9999 13.3 17.9999C14.3 17.9999 15.1 17.1999 15.1 16.1999V13.3999C15.1 12.7999 15.8 12.3999 16.8 11.7999C17.8 11.2999 20.2 10.2999 20.3 10.2999L19.9 9.3999C19.8 9.3999 17.4 10.3999 16.4 10.8999C15.3 11.3999 14.1 11.9999 14.1 13.2999V16.0999C14.1 16.4999 13.8 16.8999 13.3 16.8999C12.8 16.8999 12.5 16.5999 12.5 16.0999V15.2999C12.5 14.3999 12.3 13.0999 10.7 12.4999Z"
                         fill=""
                       />
                       <path
                         d="M12 2.3999L0 8.1999V15.7999L12 21.4999L24 15.7999V8.1999L12 2.3999ZM23 15.1999L12 20.4999L1 15.1999V8.7999L12 3.4999L23 8.7999V15.1999Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Caramel</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Flavoured" />
 
                   <label for="Flavoured">
                     <svg
                       width="21"
                       height="21"
                       viewBox="0 0 21 21"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M18.49 3.50988C14.633 -0.343116 10.16 0.222884 5.19005 5.18988C0.220046 10.1589 -0.343955 14.6339 3.51005 18.4899C5.18005 20.1569 6.99304 20.9999 8.91005 20.9999C9.20605 20.9999 9.50504 20.9799 9.80704 20.9399C12.007 20.6459 14.363 19.2569 16.809 16.8099C19.257 14.3629 20.646 12.0069 20.939 9.80688C21.24 7.55488 20.416 5.43688 18.489 3.51088L18.49 3.50988ZM5.89605 5.89788C8.49705 3.29688 10.877 1.99988 13.079 1.99988C14.643 1.99988 16.116 2.66288 17.515 3.96988L15.254 8.23988C14.8931 8.92288 14.3525 9.49436 13.6906 9.89264C13.0287 10.2909 12.2706 10.5009 11.498 10.4999H10.501C9.54698 10.4986 8.6107 10.7581 7.79331 11.2501C6.97591 11.7422 6.30847 12.4482 5.86305 13.2919L3.75305 17.2769C0.856045 13.9669 1.55605 10.2379 5.89705 5.89688L5.89605 5.89788ZM19.947 9.67488C19.683 11.6529 18.39 13.8149 16.101 16.1029C13.813 18.3919 11.651 19.6859 9.67305 19.9489C7.82104 20.1959 6.12105 19.5609 4.48505 18.0309L6.74505 13.7609C7.1056 13.0777 7.64594 12.506 8.30772 12.1075C8.9695 11.7091 9.72756 11.4989 10.5 11.4999H11.497C13.447 11.4999 15.224 10.4299 16.136 8.70888L18.246 4.72288C19.62 6.28588 20.183 7.91188 19.947 9.67488Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Flavoured</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Chocolate" />
 
                   <label for="Chocolate">
                     <svg
                       width="13"
                       height="22"
                       viewBox="0 0 13 22"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M0 0V22H13V0H0ZM12 8H9V5H12V8ZM4 9V11.529L1 11.929V9H4ZM1 8V5H4V8H1ZM9.328 13.965L2.251 12.785L11.688 11.605L9.328 13.965ZM5 11.395V9H8V10.995L5 11.395ZM5 8V5H8V8H5ZM5 4V1H8V4H5ZM12 4H9V1H12V4ZM4 1V4H1V1H4ZM12 21H1V13.59L9.672 15.035L12 12.707V21ZM9 10.862V9H12V10.462L9 10.862Z"
                         fill=""
                       />
                     </svg>
                     <span>Chocolate</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Vanilla" />
 
                   <label for="Vanilla">
                     <svg
                       width="21"
                       height="21"
                       viewBox="0 0 21 21"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M18.49 3.50988C14.633 -0.343116 10.16 0.222884 5.19005 5.18988C0.220046 10.1589 -0.343955 14.6339 3.51005 18.4899C5.18005 20.1569 6.99304 20.9999 8.91005 20.9999C9.20605 20.9999 9.50504 20.9799 9.80704 20.9399C12.007 20.6459 14.363 19.2569 16.809 16.8099C19.257 14.3629 20.646 12.0069 20.939 9.80688C21.24 7.55488 20.416 5.43688 18.489 3.51088L18.49 3.50988ZM5.89605 5.89788C8.49705 3.29688 10.877 1.99988 13.079 1.99988C14.643 1.99988 16.116 2.66288 17.515 3.96988L15.254 8.23988C14.8931 8.92288 14.3525 9.49436 13.6906 9.89264C13.0287 10.2909 12.2706 10.5009 11.498 10.4999H10.501C9.54698 10.4986 8.6107 10.7581 7.79331 11.2501C6.97591 11.7422 6.30847 12.4482 5.86305 13.2919L3.75305 17.2769C0.856045 13.9669 1.55605 10.2379 5.89705 5.89688L5.89605 5.89788ZM19.947 9.67488C19.683 11.6529 18.39 13.8149 16.101 16.1029C13.813 18.3919 11.651 19.6859 9.67305 19.9489C7.82104 20.1959 6.12105 19.5609 4.48505 18.0309L6.74505 13.7609C7.1056 13.0777 7.64594 12.506 8.30772 12.1075C8.9695 11.7091 9.72756 11.4989 10.5 11.4999H11.497C13.447 11.4999 15.224 10.4299 16.136 8.70888L18.246 4.72288C19.62 6.28588 20.183 7.91188 19.947 9.67488Z"
                         fill=""
                       />
                     </svg>
                     <span>Vanilla</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Cocoa" />
 
                   <label for="Cocoa">
                     <svg
                       width="21"
                       height="22"
                       viewBox="0 0 21 22"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M18.66 5.19289L19.587 2.87889L18.12 1.41289L15.823 2.33289C14.441 1.35289 13.048 0.894887 11.615 0.952887C9.31703 1.04689 6.87503 2.41789 4.14703 5.14689C-1.55097 10.8439 0.42603 19.7369 0.51303 20.1119L0.580029 20.4019L0.86603 20.4819C1.04303 20.5319 3.09003 21.0819 5.79603 21.0819C8.89003 21.0819 12.845 20.3619 15.854 17.3529C18.543 14.6649 19.954 12.0669 20.047 9.63289C20.107 8.09489 19.636 6.60789 18.66 5.19289ZM16.27 4.02289L8.64703 11.6459L9.35403 12.3539L16.982 4.72389C17.646 5.64689 18.153 7.88289 12.317 13.7199C8.01103 18.0249 3.36703 19.0139 1.76703 19.2329C1.98603 17.6329 2.97503 12.9889 7.27903 8.68289C11.348 4.61589 13.669 3.62889 15.015 3.62889C15.603 3.62889 15.991 3.81989 16.27 4.02289ZM17.88 2.58689L18.413 3.12089L17.951 4.27689C17.7659 4.06262 17.5735 3.85483 17.374 3.65389L17.36 3.63889L17.346 3.62589C17.1455 3.42673 16.9387 3.23397 16.726 3.04789L17.88 2.58689ZM4.85403 5.85389C7.39603 3.31189 9.62103 2.03489 11.655 1.95189C12.632 1.91689 13.562 2.15489 14.495 2.66989C12.477 2.91989 9.88303 4.66489 6.57203 7.97689C3.20703 11.3429 1.77603 14.8479 1.16403 17.1569C1.01403 14.1549 1.40603 9.30089 4.85403 5.85389ZM15.147 16.6469C11.6 20.1909 6.46003 20.2579 3.49003 19.9269C5.78503 19.3709 9.48303 17.9679 13.024 14.4269C16.304 11.1459 18.05 8.56689 18.325 6.55689C18.843 7.53989 19.088 8.54589 19.048 9.59589C18.964 11.7689 17.651 14.1429 15.147 16.6469Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Cocoa</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Roasted Cereral" />
 
                   <label for="Roasted Cereral">
                     <svg
                       width="20"
                       height="22"
                       viewBox="0 0 20 22"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M10.5 2V1H13V0H7V1H9.5V2C3.5 2.2 0 5.9 0 12C0 18.3 3.7 22 10 22C16.3 22 20 18.3 20 12C20 5.9 16.5 2.2 10.5 2ZM10.5 3C15.7 3.2 18.8 6.2 19 11.5H15C15.2 10.3 14.7 9.3 13.8 8.3C12.8 7.3 11.8 6.9 10.6 7.1V3H10.5ZM13.5 9.5C13.9 10.1 14.1 10.7 14 11.3C13.9 12.2 13.3 13.2 12.3 14.2C11.3 15.2 10.3 15.8 9.4 15.9C8.7 16 8 15.7 7.3 15.2L8.3 13.4C8.6 12.8 9.2 12.5 9.8 12.5H10.3C11.3 12.5 12.3 11.9 12.7 11L13.5 9.5ZM10.7 8H11C11.6 8 12.2 8.3 12.8 8.7L11.8 10.5C11.5 11.1 10.9 11.4 10.3 11.4H9.8C8.8 11.4 7.8 12 7.4 12.9L6.6 14.4C5.9 13.4 5.6 11.9 7.8 9.7C8.8 8.7 9.8 8.1 10.7 8ZM10 21C4.3 21 1 17.7 1 12C1 6.5 4.1 3.2 9.5 3V7.3C8.7 7.6 7.9 8.2 7.1 9C4 12.1 5 14.3 6.3 15.7C7.1 16.6 8 17 9 17H9.5C10.6 16.9 11.8 16.2 13 15C13.8 14.2 14.4 13.4 14.7 12.6H19C18.8 17.9 15.5 21 10 21Z"
                         fill=""
                       />
                     </svg>
                     <span>Roasted Cereral</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Powerful" />
 
                   <label for="Powerful">
                     <svg
                       width="21"
                       height="21"
                       viewBox="0 0 21 21"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M18.49 3.50988C14.633 -0.343116 10.16 0.222884 5.19005 5.18988C0.220046 10.1589 -0.343955 14.6339 3.51005 18.4899C5.18005 20.1569 6.99304 20.9999 8.91005 20.9999C9.20605 20.9999 9.50504 20.9799 9.80704 20.9399C12.007 20.6459 14.363 19.2569 16.809 16.8099C19.257 14.3629 20.646 12.0069 20.939 9.80688C21.24 7.55488 20.416 5.43688 18.489 3.51088L18.49 3.50988ZM5.89605 5.89788C8.49705 3.29688 10.877 1.99988 13.079 1.99988C14.643 1.99988 16.116 2.66288 17.515 3.96988L15.254 8.23988C14.8931 8.92288 14.3525 9.49436 13.6906 9.89264C13.0287 10.2909 12.2706 10.5009 11.498 10.4999H10.501C9.54698 10.4986 8.6107 10.7581 7.79331 11.2501C6.97591 11.7422 6.30847 12.4482 5.86305 13.2919L3.75305 17.2769C0.856045 13.9669 1.55605 10.2379 5.89705 5.89688L5.89605 5.89788ZM19.947 9.67488C19.683 11.6529 18.39 13.8149 16.101 16.1029C13.813 18.3919 11.651 19.6859 9.67305 19.9489C7.82104 20.1959 6.12105 19.5609 4.48505 18.0309L6.74505 13.7609C7.1056 13.0777 7.64594 12.506 8.30772 12.1075C8.9695 11.7091 9.72756 11.4989 10.5 11.4999H11.497C13.447 11.4999 15.224 10.4299 16.136 8.70888L18.246 4.72288C19.62 6.28588 20.183 7.91188 19.947 9.67488Z"
                         fill=""
                       />
                     </svg>
                     <span>Powerful</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Spicy" />
 
                   <label for="Spicy">
                     <svg
                       width="22"
                       height="16"
                       viewBox="0 0 22 16"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M20.2259 3.18608L21.4479 0.722076L20.5519 0.278076L19.3529 2.69408C18.7169 2.43908 18.0829 2.38708 17.4979 2.56608C16.7399 2.79608 16.1059 3.38608 15.6719 4.26208L14.7269 6.05908C13.4189 8.54708 11.0309 10.4631 8.00488 11.4531C6.39188 11.9801 2.16488 12.2961 0.589879 12.0081L0.569879 12.0041L0.0258789 13.2721L0.202879 13.4021C2.36988 15.0001 5.94488 15.9841 8.93788 15.9841C10.0139 15.9841 11.0149 15.8571 11.8479 15.5851L12.4619 15.3841C14.9699 14.5641 18.2109 12.4441 19.7969 9.56008L21.0799 7.22408C21.8619 5.64808 21.5219 4.14408 20.2259 3.18608ZM20.1929 6.76108L18.9199 9.07708C17.4659 11.7241 14.4729 13.6741 12.1509 14.4331L11.5369 14.6331C8.89888 15.4981 4.40988 14.7651 1.57088 13.1051C3.63788 13.1921 6.84488 12.8851 8.31588 12.4051C11.5909 11.3311 14.1829 9.24308 15.6119 6.52408L16.5619 4.71608C16.8809 4.07408 17.2929 3.67308 17.7879 3.52308C18.2579 3.38008 18.7949 3.47408 19.3449 3.79008C20.4949 4.44908 20.7999 5.54008 20.1929 6.76108Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Spicy</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Intense" />
 
                   <label for="Intense">
                     <svg
                       width="21"
                       height="21"
                       viewBox="0 0 21 21"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M18.49 3.50988C14.633 -0.343116 10.16 0.222884 5.19005 5.18988C0.220046 10.1589 -0.343955 14.6339 3.51005 18.4899C5.18005 20.1569 6.99304 20.9999 8.91005 20.9999C9.20605 20.9999 9.50504 20.9799 9.80704 20.9399C12.007 20.6459 14.363 19.2569 16.809 16.8099C19.257 14.3629 20.646 12.0069 20.939 9.80688C21.24 7.55488 20.416 5.43688 18.489 3.51088L18.49 3.50988ZM5.89605 5.89788C8.49705 3.29688 10.877 1.99988 13.079 1.99988C14.643 1.99988 16.116 2.66288 17.515 3.96988L15.254 8.23988C14.8931 8.92288 14.3525 9.49436 13.6906 9.89264C13.0287 10.2909 12.2706 10.5009 11.498 10.4999H10.501C9.54698 10.4986 8.6107 10.7581 7.79331 11.2501C6.97591 11.7422 6.30847 12.4482 5.86305 13.2919L3.75305 17.2769C0.856045 13.9669 1.55605 10.2379 5.89705 5.89688L5.89605 5.89788ZM19.947 9.67488C19.683 11.6529 18.39 13.8149 16.101 16.1029C13.813 18.3919 11.651 19.6859 9.67305 19.9489C7.82104 20.1959 6.12105 19.5609 4.48505 18.0309L6.74505 13.7609C7.1056 13.0777 7.64594 12.506 8.30772 12.1075C8.9695 11.7091 9.72756 11.4989 10.5 11.4999H11.497C13.447 11.4999 15.224 10.4299 16.136 8.70888L18.246 4.72288C19.62 6.28588 20.183 7.91188 19.947 9.67488Z"
                         fill=""
                       />
                     </svg>
                     <span>Intense</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Spicyb2b" />
 
                   <label for="Spicyb2b">
                     <svg
                       width="21"
                       height="21"
                       viewBox="0 0 21 21"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M18.49 3.50988C14.633 -0.343116 10.16 0.222884 5.19005 5.18988C0.220046 10.1589 -0.343955 14.6339 3.51005 18.4899C5.18005 20.1569 6.99304 20.9999 8.91005 20.9999C9.20605 20.9999 9.50504 20.9799 9.80704 20.9399C12.007 20.6459 14.363 19.2569 16.809 16.8099C19.257 14.3629 20.646 12.0069 20.939 9.80688C21.24 7.55488 20.416 5.43688 18.489 3.51088L18.49 3.50988ZM5.89605 5.89788C8.49705 3.29688 10.877 1.99988 13.079 1.99988C14.643 1.99988 16.116 2.66288 17.515 3.96988L15.254 8.23988C14.8931 8.92288 14.3525 9.49436 13.6906 9.89264C13.0287 10.2909 12.2706 10.5009 11.498 10.4999H10.501C9.54698 10.4986 8.6107 10.7581 7.79331 11.2501C6.97591 11.7422 6.30847 12.4482 5.86305 13.2919L3.75305 17.2769C0.856045 13.9669 1.55605 10.2379 5.89705 5.89688L5.89605 5.89788ZM19.947 9.67488C19.683 11.6529 18.39 13.8149 16.101 16.1029C13.813 18.3919 11.651 19.6859 9.67305 19.9489C7.82104 20.1959 6.12105 19.5609 4.48505 18.0309L6.74505 13.7609C7.1056 13.0777 7.64594 12.506 8.30772 12.1075C8.9695 11.7091 9.72756 11.4989 10.5 11.4999H11.497C13.447 11.4999 15.224 10.4299 16.136 8.70888L18.246 4.72288C19.62 6.28588 20.183 7.91188 19.947 9.67488Z"
                         fill=""
                       />
                     </svg>
                     <span>Spicy</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Roasted" />
 
                   <label for="Roasted">
                     <svg
                       width="20"
                       height="22"
                       viewBox="0 0 20 22"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M10.5 2V1H13V0H7V1H9.5V2C3.5 2.2 0 5.9 0 12C0 18.3 3.7 22 10 22C16.3 22 20 18.3 20 12C20 5.9 16.5 2.2 10.5 2ZM10.5 3C15.7 3.2 18.8 6.2 19 11.5H15C15.2 10.3 14.7 9.3 13.8 8.3C12.8 7.3 11.8 6.9 10.6 7.1V3H10.5ZM13.5 9.5C13.9 10.1 14.1 10.7 14 11.3C13.9 12.2 13.3 13.2 12.3 14.2C11.3 15.2 10.3 15.8 9.4 15.9C8.7 16 8 15.7 7.3 15.2L8.3 13.4C8.6 12.8 9.2 12.5 9.8 12.5H10.3C11.3 12.5 12.3 11.9 12.7 11L13.5 9.5ZM10.7 8H11C11.6 8 12.2 8.3 12.8 8.7L11.8 10.5C11.5 11.1 10.9 11.4 10.3 11.4H9.8C8.8 11.4 7.8 12 7.4 12.9L6.6 14.4C5.9 13.4 5.6 11.9 7.8 9.7C8.8 8.7 9.8 8.1 10.7 8ZM10 21C4.3 21 1 17.7 1 12C1 6.5 4.1 3.2 9.5 3V7.3C8.7 7.6 7.9 8.2 7.1 9C4 12.1 5 14.3 6.3 15.7C7.1 16.6 8 17 9 17H9.5C10.6 16.9 11.8 16.2 13 15C13.8 14.2 14.4 13.4 14.7 12.6H19C18.8 17.9 15.5 21 10 21Z"
                         fill=""
                       />
                     </svg>
                     <span>Roasted</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Balanced" />
 
                   <label for="Balanced">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M21.972 12.834L19.207 5H21V4H12.5V2H11.5V4H3V5H4.793L2.028 12.834C2.00941 12.8874 1.99994 12.9435 2 13V13.5C2 15.691 3.309 17 5.5 17C7.691 17 9 15.691 9 13.5V13C9.00006 12.9435 8.99059 12.8874 8.972 12.834L6.207 5H11.5V21H9V22H15V21H12.5V5H17.793L15.028 12.834C15.0094 12.8874 15 12.9435 15 13V13.5C15 15.691 16.309 17 18.5 17C20.691 17 22 15.691 22 13.5V13C22 12.9435 21.9906 12.8874 21.972 12.834ZM5.5 16C4.458 16 3.233 15.638 3.03 14H7.97C7.767 15.638 6.542 16 5.5 16ZM3.03 13L5.5 6.002L7.97 13H3.03ZM18.5 6.002L20.97 13H16.03L18.5 6.002ZM18.5 16C17.458 16 16.233 15.638 16.03 14H20.97C20.767 15.638 19.542 16 18.5 16Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Balanced</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input
                     type="checkbox"
                     name="options"
                     id="Delicate toasted biscuit notes"
                   />
 
                   <label for="Delicate toasted biscuit notes">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.49 4.50988C15.633 0.656884 11.16 1.22288 6.19005 6.18988C1.22005 11.1589 0.656045 15.6339 4.51005 19.4899C6.18005 21.1569 7.99304 21.9999 9.91005 21.9999C10.206 21.9999 10.505 21.9799 10.807 21.9399C13.007 21.6459 15.363 20.2569 17.809 17.8099C20.257 15.3629 21.646 13.0069 21.939 10.8069C22.24 8.55488 21.416 6.43688 19.489 4.51088L19.49 4.50988ZM6.89605 6.89788C9.49705 4.29688 11.877 2.99988 14.079 2.99988C15.643 2.99988 17.116 3.66288 18.515 4.96988L16.254 9.23988C15.8931 9.92288 15.3525 10.4944 14.6906 10.8926C14.0287 11.2909 13.2706 11.5009 12.498 11.4999H11.501C10.547 11.4986 9.6107 11.7581 8.79331 12.2501C7.97591 12.7422 7.30847 13.4482 6.86305 14.2919L4.75305 18.2769C1.85605 14.9669 2.55605 11.2379 6.89705 6.89688L6.89605 6.89788ZM20.947 10.6749C20.683 12.6529 19.39 14.8149 17.101 17.1029C14.813 19.3919 12.651 20.6859 10.673 20.9489C8.82104 21.1959 7.12105 20.5609 5.48505 19.0309L7.74505 14.7609C8.1056 14.0777 8.64594 13.506 9.30772 13.1075C9.9695 12.7091 10.7276 12.4989 11.5 12.4999H12.497C14.447 12.4999 16.224 11.4299 17.136 9.70888L19.246 5.72288C20.62 7.28588 21.183 8.91188 20.947 10.6749Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Delicate toasted biscuit notes</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Sweet" />
 
                   <label for="Sweet">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M16.4651 1.92505L9.97607 5.19805L9.99007 9.19805L7.48607 7.95705L0.99707 11.23L1.02407 18.847L7.53607 22.074L14.0241 18.802L14.0101 14.802L16.5141 16.042L23.0031 12.77L22.9761 5.15205L16.4651 1.92505ZM2.02207 18.227L2.00207 12.351L7.01007 14.877L7.03007 20.709L2.02207 18.227ZM12.3881 11.503L7.50807 14.008L2.60807 11.538L7.49007 9.07405L12.3881 11.502V11.503ZM8.03107 20.706L8.01107 14.873L13.0001 12.312L13.0201 18.188L8.03007 20.706H8.03107ZM10.9911 9.69505L10.9801 6.31905L15.9891 8.84505L16.0091 14.677L14.0061 13.684L13.9971 11.184L10.9921 9.69405L10.9911 9.69505ZM16.4861 7.97505L11.5871 5.50505L16.4681 3.04305L21.3671 5.47105L16.4861 7.97505ZM17.0091 14.674L16.9891 8.84205L21.9791 6.28005L22.0011 12.156L17.0091 14.674Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Sweet</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Cereal" />
 
                   <label for="Cereal">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.49 4.50988C15.633 0.656884 11.16 1.22288 6.19005 6.18988C1.22005 11.1589 0.656045 15.6339 4.51005 19.4899C6.18005 21.1569 7.99304 21.9999 9.91005 21.9999C10.206 21.9999 10.505 21.9799 10.807 21.9399C13.007 21.6459 15.363 20.2569 17.809 17.8099C20.257 15.3629 21.646 13.0069 21.939 10.8069C22.24 8.55488 21.416 6.43688 19.489 4.51088L19.49 4.50988ZM6.89605 6.89788C9.49705 4.29688 11.877 2.99988 14.079 2.99988C15.643 2.99988 17.116 3.66288 18.515 4.96988L16.254 9.23988C15.8931 9.92288 15.3525 10.4944 14.6906 10.8926C14.0287 11.2909 13.2706 11.5009 12.498 11.4999H11.501C10.547 11.4986 9.6107 11.7581 8.79331 12.2501C7.97591 12.7422 7.30847 13.4482 6.86305 14.2919L4.75305 18.2769C1.85605 14.9669 2.55605 11.2379 6.89705 6.89688L6.89605 6.89788ZM20.947 10.6749C20.683 12.6529 19.39 14.8149 17.101 17.1029C14.813 19.3919 12.651 20.6859 10.673 20.9489C8.82104 21.1959 7.12105 20.5609 5.48505 19.0309L7.74505 14.7609C8.1056 14.0777 8.64594 13.506 9.30772 13.1075C9.9695 12.7091 10.7276 12.4989 11.5 12.4999H12.497C14.447 12.4999 16.224 11.4299 17.136 9.70888L19.246 5.72288C20.62 7.28588 21.183 8.91188 20.947 10.6749Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Cereal</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Woody" />
 
                   <label for="Woody">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M12 1C7.682 1 5 2.341 5 4.5V19.5C5 21.626 7.748 23 12 23C16.252 23 19 21.626 19 19.5V4.5C19 2.309 16.383 1 12 1ZM11 2.036V4H12V2C15.645 2 18 2.981 18 4.5C18 5.38 17.147 6.084 15.726 6.52L13.853 4.647L13.146 5.354L14.584 6.792C13.82 6.924 12.956 7 12 7C10.864 7 9.864 6.89 9.003 6.704L10.353 5.354L9.646 4.647L7.9 6.393C6.707 5.953 6 5.3 6 4.5C6 3.15 7.976 2.208 11 2.036ZM14 21.868V18H13V21.96C12.676 21.978 12.357 22 12 22C10.559 22 9.408 21.835 8.5 21.578V13H7.5V21.22C6.487 20.742 6 20.11 6 19.5V6.488C6.852 7.2 8.223 7.685 10 7.888V15H11V7.972C11.324 7.988 11.655 8 12 8C13.116 8 14.12 7.909 15 7.738V13H16V7.493C16.83 7.243 17.502 6.903 18 6.488V19.5C18 20.486 16.717 21.52 14 21.868Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Woody</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Hint Of Fruity" />
 
                   <label for="Hint Of Fruity">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M8.5 10.523C8.5 8.91 7.612 8.023 6 8.023C4.388 8.023 3.5 8.91 3.5 10.523C3.5 12.135 4.388 13.023 6 13.023C7.612 13.023 8.5 12.135 8.5 10.523ZM6 12.023C4.949 12.023 4.5 11.573 4.5 10.523C4.5 9.471 4.949 9.023 6 9.023C7.051 9.023 7.5 9.471 7.5 10.523C7.5 11.573 7.051 12.023 6 12.023ZM18 8.022C16.388 8.022 15.5 8.91 15.5 10.522C15.5 12.135 16.388 13.022 18 13.022C19.612 13.022 20.5 12.135 20.5 10.522C20.5 8.91 19.612 8.022 18 8.022ZM18 12.022C16.948 12.022 16.5 11.574 16.5 10.522C16.5 9.472 16.948 9.022 18 9.022C19.052 9.022 19.5 9.472 19.5 10.522C19.5 11.574 19.052 12.022 18 12.022ZM11.5 15.523C11.5 13.91 10.612 13.023 9 13.023C7.388 13.023 6.5 13.91 6.5 15.523C6.5 17.135 7.388 18.023 9 18.023C10.612 18.023 11.5 17.135 11.5 15.523ZM9 17.023C7.949 17.023 7.5 16.574 7.5 15.523C7.5 14.471 7.949 14.023 9 14.023C10.051 14.023 10.5 14.471 10.5 15.523C10.5 16.574 10.051 17.023 9 17.023ZM15 13.023C13.388 13.023 12.5 13.91 12.5 15.523C12.5 17.135 13.388 18.023 15 18.023C16.612 18.023 17.5 17.135 17.5 15.523C17.5 13.91 16.612 13.023 15 13.023ZM15 17.023C13.948 17.023 13.5 16.574 13.5 15.523C13.5 14.471 13.948 14.023 15 14.023C16.052 14.023 16.5 14.471 16.5 15.523C16.5 16.574 16.052 17.023 15 17.023ZM12 18.023C10.388 18.023 9.5 18.91 9.5 20.523C9.5 22.135 10.388 23.023 12 23.023C13.612 23.023 14.5 22.135 14.5 20.523C14.5 18.91 13.612 18.023 12 18.023ZM12 22.023C10.949 22.023 10.5 21.574 10.5 20.523C10.5 19.471 10.949 19.023 12 19.023C13.052 19.023 13.5 19.471 13.5 20.523C13.5 21.574 13.052 22.023 12 22.023ZM6.677 4.721C8.169 5.914 10.386 6.018 10.48 6.022L11.035 6.045L10.999 5.49C10.994 5.412 10.858 3.552 9.323 2.324C7.83 1.13 5.614 1.027 5.52 1.023L4.965 1L5.001 1.555C5.006 1.633 5.142 3.493 6.677 4.721ZM8.697 3.105C9.403 3.669 9.73 4.427 9.88 4.95C9.193 4.84 8.095 4.575 7.302 3.94C6.597 3.376 6.27 2.618 6.12 2.095C6.807 2.205 7.905 2.47 8.698 3.105H8.697ZM11.515 8.058C10.213 8.225 9.5 9.08 9.5 10.523C9.5 12.135 10.388 13.023 12 13.023C13.612 13.023 14.5 12.135 14.5 10.523C14.5 9.091 13.797 8.235 12.513 8.06V7.973C12.511 7.951 12.312 5.722 13.618 4.282C14.377 3.446 15.515 3.022 17 3.022V2.022C15.218 2.022 13.83 2.559 12.873 3.616C11.268 5.39 11.507 7.964 11.515 8.022V8.058ZM13.5 10.523C13.5 11.573 13.052 12.023 12 12.023C10.949 12.023 10.5 11.573 10.5 10.523C10.5 9.471 10.949 9.023 12 9.023C13.052 9.023 13.5 9.471 13.5 10.523Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Hint Of Fruity</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Citrus" />
 
                   <label for="Citrus">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.49 4.50988C15.633 0.656884 11.16 1.22288 6.19005 6.18988C1.22005 11.1589 0.656045 15.6339 4.51005 19.4899C6.18005 21.1569 7.99304 21.9999 9.91005 21.9999C10.206 21.9999 10.505 21.9799 10.807 21.9399C13.007 21.6459 15.363 20.2569 17.809 17.8099C20.257 15.3629 21.646 13.0069 21.939 10.8069C22.24 8.55488 21.416 6.43688 19.489 4.51088L19.49 4.50988ZM6.89605 6.89788C9.49705 4.29688 11.877 2.99988 14.079 2.99988C15.643 2.99988 17.116 3.66288 18.515 4.96988L16.254 9.23988C15.8931 9.92288 15.3525 10.4944 14.6906 10.8926C14.0287 11.2909 13.2706 11.5009 12.498 11.4999H11.501C10.547 11.4986 9.6107 11.7581 8.79331 12.2501C7.97591 12.7422 7.30847 13.4482 6.86305 14.2919L4.75305 18.2769C1.85605 14.9669 2.55605 11.2379 6.89705 6.89688L6.89605 6.89788ZM20.947 10.6749C20.683 12.6529 19.39 14.8149 17.101 17.1029C14.813 19.3919 12.651 20.6859 10.673 20.9489C8.82104 21.1959 7.12105 20.5609 5.48505 19.0309L7.74505 14.7609C8.1056 14.0777 8.64594 13.506 9.30772 13.1075C9.9695 12.7091 10.7276 12.4989 11.5 12.4999H12.497C14.447 12.4999 16.224 11.4299 17.136 9.70888L19.246 5.72288C20.62 7.28588 21.183 8.91188 20.947 10.6749Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Citrus</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Fruity" />
 
                   <label for="Fruity">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M8.5 10.523C8.5 8.91 7.612 8.023 6 8.023C4.388 8.023 3.5 8.91 3.5 10.523C3.5 12.135 4.388 13.023 6 13.023C7.612 13.023 8.5 12.135 8.5 10.523ZM6 12.023C4.949 12.023 4.5 11.573 4.5 10.523C4.5 9.471 4.949 9.023 6 9.023C7.051 9.023 7.5 9.471 7.5 10.523C7.5 11.573 7.051 12.023 6 12.023ZM18 8.022C16.388 8.022 15.5 8.91 15.5 10.522C15.5 12.135 16.388 13.022 18 13.022C19.612 13.022 20.5 12.135 20.5 10.522C20.5 8.91 19.612 8.022 18 8.022ZM18 12.022C16.948 12.022 16.5 11.574 16.5 10.522C16.5 9.472 16.948 9.022 18 9.022C19.052 9.022 19.5 9.472 19.5 10.522C19.5 11.574 19.052 12.022 18 12.022ZM11.5 15.523C11.5 13.91 10.612 13.023 9 13.023C7.388 13.023 6.5 13.91 6.5 15.523C6.5 17.135 7.388 18.023 9 18.023C10.612 18.023 11.5 17.135 11.5 15.523ZM9 17.023C7.949 17.023 7.5 16.574 7.5 15.523C7.5 14.471 7.949 14.023 9 14.023C10.051 14.023 10.5 14.471 10.5 15.523C10.5 16.574 10.051 17.023 9 17.023ZM15 13.023C13.388 13.023 12.5 13.91 12.5 15.523C12.5 17.135 13.388 18.023 15 18.023C16.612 18.023 17.5 17.135 17.5 15.523C17.5 13.91 16.612 13.023 15 13.023ZM15 17.023C13.948 17.023 13.5 16.574 13.5 15.523C13.5 14.471 13.948 14.023 15 14.023C16.052 14.023 16.5 14.471 16.5 15.523C16.5 16.574 16.052 17.023 15 17.023ZM12 18.023C10.388 18.023 9.5 18.91 9.5 20.523C9.5 22.135 10.388 23.023 12 23.023C13.612 23.023 14.5 22.135 14.5 20.523C14.5 18.91 13.612 18.023 12 18.023ZM12 22.023C10.949 22.023 10.5 21.574 10.5 20.523C10.5 19.471 10.949 19.023 12 19.023C13.052 19.023 13.5 19.471 13.5 20.523C13.5 21.574 13.052 22.023 12 22.023ZM6.677 4.721C8.169 5.914 10.386 6.018 10.48 6.022L11.035 6.045L10.999 5.49C10.994 5.412 10.858 3.552 9.323 2.324C7.83 1.13 5.614 1.027 5.52 1.023L4.965 1L5.001 1.555C5.006 1.633 5.142 3.493 6.677 4.721ZM8.697 3.105C9.403 3.669 9.73 4.427 9.88 4.95C9.193 4.84 8.095 4.575 7.302 3.94C6.597 3.376 6.27 2.618 6.12 2.095C6.807 2.205 7.905 2.47 8.698 3.105H8.697ZM11.515 8.058C10.213 8.225 9.5 9.08 9.5 10.523C9.5 12.135 10.388 13.023 12 13.023C13.612 13.023 14.5 12.135 14.5 10.523C14.5 9.091 13.797 8.235 12.513 8.06V7.973C12.511 7.951 12.312 5.722 13.618 4.282C14.377 3.446 15.515 3.022 17 3.022V2.022C15.218 2.022 13.83 2.559 12.873 3.616C11.268 5.39 11.507 7.964 11.515 8.022V8.058ZM13.5 10.523C13.5 11.573 13.052 12.023 12 12.023C10.949 12.023 10.5 11.573 10.5 10.523C10.5 9.471 10.949 9.023 12 9.023C13.052 9.023 13.5 9.471 13.5 10.523Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Fruity</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Citric" />
 
                   <label for="Citric">
                     <span>Citric</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Berry" />
 
                   <label for="Berry">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.49 4.50988C15.633 0.656884 11.16 1.22288 6.19005 6.18988C1.22005 11.1589 0.656045 15.6339 4.51005 19.4899C6.18005 21.1569 7.99304 21.9999 9.91005 21.9999C10.206 21.9999 10.505 21.9799 10.807 21.9399C13.007 21.6459 15.363 20.2569 17.809 17.8099C20.257 15.3629 21.646 13.0069 21.939 10.8069C22.24 8.55488 21.416 6.43688 19.489 4.51088L19.49 4.50988ZM6.89605 6.89788C9.49705 4.29688 11.877 2.99988 14.079 2.99988C15.643 2.99988 17.116 3.66288 18.515 4.96988L16.254 9.23988C15.8931 9.92288 15.3525 10.4944 14.6906 10.8926C14.0287 11.2909 13.2706 11.5009 12.498 11.4999H11.501C10.547 11.4986 9.6107 11.7581 8.79331 12.2501C7.97591 12.7422 7.30847 13.4482 6.86305 14.2919L4.75305 18.2769C1.85605 14.9669 2.55605 11.2379 6.89705 6.89688L6.89605 6.89788ZM20.947 10.6749C20.683 12.6529 19.39 14.8149 17.101 17.1029C14.813 19.3919 12.651 20.6859 10.673 20.9489C8.82104 21.1959 7.12105 20.5609 5.48505 19.0309L7.74505 14.7609C8.1056 14.0777 8.64594 13.506 9.30772 13.1075C9.9695 12.7091 10.7276 12.4989 11.5 12.4999H12.497C14.447 12.4999 16.224 11.4299 17.136 9.70888L19.246 5.72288C20.62 7.28588 21.183 8.91188 20.947 10.6749Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Berry</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Malted Cereal" />
 
                   <label for="Malted Cereal">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M15.828 6L14 7.422V3H13V8.2L12 8.978V1H11V8.978L10 8.2V3H9V7.422L7.171 6H6V15.5C6 19.368 7.86 21.75 11 21.978V24H12V21.978C15.14 21.75 17 19.368 17 15.5V6H15.828ZM16 14.26L12 17.46V14.74L16 11.54V14.26ZM7 11.54L11 14.74V17.46L7 14.26V11.54ZM16 7.133V10.259L12 13.459V10.244L16 7.133ZM11 10.244V13.459L7 10.259V7.133L11 10.244ZM7.003 15.543L11 18.74V20.955C8.437 20.734 7.015 18.845 7.003 15.542V15.543ZM12 20.956V18.74L15.998 15.542C15.985 18.845 14.564 20.735 12 20.956Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Malted Cereal</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Flowery" />
 
                   <label for="Flowery">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.996 13.672C22.465 12.802 23.482 10.972 22.786 8.655C22.456 7.553 21.851 6.751 21.036 6.335C20.151 5.885 19.045 5.889 17.75 6.345C16.92 6.637 16.118 7.127 15.381 7.694C15.748 6.811 16.001 5.887 16.001 5C16.001 2.458 14.542 1 12.001 1C9.45797 1 8.00097 2.458 8.00097 5C8.00097 5.888 8.25397 6.813 8.62297 7.697C7.88497 7.13 7.08297 6.638 6.25197 6.345C4.95597 5.888 3.84897 5.885 2.96597 6.335C2.14997 6.75 1.54497 7.552 1.21397 8.655C0.518966 10.974 1.53697 12.803 4.00597 13.672C4.66897 13.905 5.39197 13.999 6.12797 13.999C6.20497 13.999 6.28197 13.989 6.35897 13.987C5.50397 14.552 4.71497 15.21 4.14397 15.964C3.24597 17.152 2.87397 18.28 3.03797 19.318C3.18297 20.23 3.74997 21.054 4.67797 21.701C5.14797 22.03 5.99097 22.49 7.00997 22.49C8.04897 22.49 9.27197 22.012 10.472 20.425C11.205 19.456 11.685 18.169 11.996 16.882C12.296 18.144 12.769 19.425 13.526 20.425C14.563 21.795 15.771 22.495 17.017 22.495C17.78 22.495 18.559 22.234 19.321 21.702C20.251 21.052 20.819 20.228 20.963 19.316C21.127 18.278 20.754 17.151 19.855 15.964C19.284 15.209 18.504 14.554 17.659 13.993C17.731 13.994 17.802 13.999 17.874 13.999C18.609 13.999 19.334 13.906 19.996 13.672ZM19.976 19.159C19.873 19.806 19.461 20.385 18.749 20.882C17.176 21.977 15.687 21.622 14.322 19.822C13.328 18.507 12.875 16.569 12.668 14.952C13.646 14.806 14.325 14.313 14.688 13.529L14.73 13.54C16.273 14.23 18.057 15.246 19.06 16.568C19.786 17.528 20.095 18.402 19.976 19.159ZM5.24997 20.88C4.53997 20.385 4.12797 19.806 4.02597 19.159C3.90597 18.402 4.21397 17.529 4.94197 16.567C5.95397 15.229 7.75797 14.209 9.30797 13.52C9.67097 14.308 10.349 14.803 11.329 14.95C11.122 16.568 10.669 18.506 9.67397 19.82C8.31197 21.62 6.82397 21.979 5.24997 20.88ZM2.17197 8.942C2.42497 8.096 2.84497 7.519 3.41897 7.227C3.71597 7.076 4.05897 7 4.44597 7C4.88297 7 5.37497 7.096 5.91997 7.288C7.28897 7.771 8.60597 8.895 9.62997 9.958C9.22297 10.458 8.99997 11.138 8.99997 12C8.99997 12.195 9.01897 12.375 9.03997 12.552C9.01997 12.562 8.99797 12.571 8.97697 12.58C7.50597 12.97 5.72897 13.22 4.33697 12.729C2.35697 12.031 1.62697 10.757 2.17197 8.942ZM12 2C13.99 2 15 3.008 15 5C15 6.41 14.228 7.99 13.423 9.262C12.9705 9.08174 12.4869 8.9927 12 9C11.452 9 10.982 9.095 10.578 9.261C9.77297 7.99 8.99997 6.41 8.99997 5C8.99997 3.008 10.01 2 12 2ZM14 12C14 13.383 13.383 14 12 14C10.617 14 9.99997 13.383 9.99997 12C9.99997 10.617 10.617 10 12 10C13.383 10 14 10.617 14 12ZM15 12C15 11.137 14.777 10.459 14.371 9.959C15.395 8.895 16.713 7.769 18.081 7.288C19.11 6.927 19.951 6.906 20.581 7.227C21.156 7.519 21.575 8.096 21.829 8.942C22.373 10.757 21.645 12.031 19.664 12.729C18.252 13.225 16.442 12.963 14.96 12.564C14.982 12.384 15 12.199 15 12Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Flowery</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Rich" />
 
                   <label for="Rich">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.49 4.50988C15.633 0.656884 11.16 1.22288 6.19005 6.18988C1.22005 11.1589 0.656045 15.6339 4.51005 19.4899C6.18005 21.1569 7.99304 21.9999 9.91005 21.9999C10.206 21.9999 10.505 21.9799 10.807 21.9399C13.007 21.6459 15.363 20.2569 17.809 17.8099C20.257 15.3629 21.646 13.0069 21.939 10.8069C22.24 8.55488 21.416 6.43688 19.489 4.51088L19.49 4.50988ZM6.89605 6.89788C9.49705 4.29688 11.877 2.99988 14.079 2.99988C15.643 2.99988 17.116 3.66288 18.515 4.96988L16.254 9.23988C15.8931 9.92288 15.3525 10.4944 14.6906 10.8926C14.0287 11.2909 13.2706 11.5009 12.498 11.4999H11.501C10.547 11.4986 9.6107 11.7581 8.79331 12.2501C7.97591 12.7422 7.30847 13.4482 6.86305 14.2919L4.75305 18.2769C1.85605 14.9669 2.55605 11.2379 6.89705 6.89688L6.89605 6.89788ZM20.947 10.6749C20.683 12.6529 19.39 14.8149 17.101 17.1029C14.813 19.3919 12.651 20.6859 10.673 20.9489C8.82104 21.1959 7.12105 20.5609 5.48505 19.0309L7.74505 14.7609C8.1056 14.0777 8.64594 13.506 9.30772 13.1075C9.9695 12.7091 10.7276 12.4989 11.5 12.4999H12.497C14.447 12.4999 16.224 11.4299 17.136 9.70888L19.246 5.72288C20.62 7.28588 21.183 8.91188 20.947 10.6749Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Rich</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Honey" />
 
                   <label for="Honey">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M19.49 4.50988C15.633 0.656884 11.16 1.22288 6.19005 6.18988C1.22005 11.1589 0.656045 15.6339 4.51005 19.4899C6.18005 21.1569 7.99304 21.9999 9.91005 21.9999C10.206 21.9999 10.505 21.9799 10.807 21.9399C13.007 21.6459 15.363 20.2569 17.809 17.8099C20.257 15.3629 21.646 13.0069 21.939 10.8069C22.24 8.55488 21.416 6.43688 19.489 4.51088L19.49 4.50988ZM6.89605 6.89788C9.49705 4.29688 11.877 2.99988 14.079 2.99988C15.643 2.99988 17.116 3.66288 18.515 4.96988L16.254 9.23988C15.8931 9.92288 15.3525 10.4944 14.6906 10.8926C14.0287 11.2909 13.2706 11.5009 12.498 11.4999H11.501C10.547 11.4986 9.6107 11.7581 8.79331 12.2501C7.97591 12.7422 7.30847 13.4482 6.86305 14.2919L4.75305 18.2769C1.85605 14.9669 2.55605 11.2379 6.89705 6.89688L6.89605 6.89788ZM20.947 10.6749C20.683 12.6529 19.39 14.8149 17.101 17.1029C14.813 19.3919 12.651 20.6859 10.673 20.9489C8.82104 21.1959 7.12105 20.5609 5.48505 19.0309L7.74505 14.7609C8.1056 14.0777 8.64594 13.506 9.30772 13.1075C9.9695 12.7091 10.7276 12.4989 11.5 12.4999H12.497C14.447 12.4999 16.224 11.4299 17.136 9.70888L19.246 5.72288C20.62 7.28588 21.183 8.91188 20.947 10.6749Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Honey</span>
                   </label>
                 </div>
 
                 <div class="modal-content__box">
                   <input type="checkbox" name="options" id="Fruity Winey" />
 
                   <label for="Fruity Winey">
                     <svg
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M8.5 10.523C8.5 8.91 7.612 8.023 6 8.023C4.388 8.023 3.5 8.91 3.5 10.523C3.5 12.135 4.388 13.023 6 13.023C7.612 13.023 8.5 12.135 8.5 10.523ZM6 12.023C4.949 12.023 4.5 11.573 4.5 10.523C4.5 9.471 4.949 9.023 6 9.023C7.051 9.023 7.5 9.471 7.5 10.523C7.5 11.573 7.051 12.023 6 12.023ZM18 8.022C16.388 8.022 15.5 8.91 15.5 10.522C15.5 12.135 16.388 13.022 18 13.022C19.612 13.022 20.5 12.135 20.5 10.522C20.5 8.91 19.612 8.022 18 8.022ZM18 12.022C16.948 12.022 16.5 11.574 16.5 10.522C16.5 9.472 16.948 9.022 18 9.022C19.052 9.022 19.5 9.472 19.5 10.522C19.5 11.574 19.052 12.022 18 12.022ZM11.5 15.523C11.5 13.91 10.612 13.023 9 13.023C7.388 13.023 6.5 13.91 6.5 15.523C6.5 17.135 7.388 18.023 9 18.023C10.612 18.023 11.5 17.135 11.5 15.523ZM9 17.023C7.949 17.023 7.5 16.574 7.5 15.523C7.5 14.471 7.949 14.023 9 14.023C10.051 14.023 10.5 14.471 10.5 15.523C10.5 16.574 10.051 17.023 9 17.023ZM15 13.023C13.388 13.023 12.5 13.91 12.5 15.523C12.5 17.135 13.388 18.023 15 18.023C16.612 18.023 17.5 17.135 17.5 15.523C17.5 13.91 16.612 13.023 15 13.023ZM15 17.023C13.948 17.023 13.5 16.574 13.5 15.523C13.5 14.471 13.948 14.023 15 14.023C16.052 14.023 16.5 14.471 16.5 15.523C16.5 16.574 16.052 17.023 15 17.023ZM12 18.023C10.388 18.023 9.5 18.91 9.5 20.523C9.5 22.135 10.388 23.023 12 23.023C13.612 23.023 14.5 22.135 14.5 20.523C14.5 18.91 13.612 18.023 12 18.023ZM12 22.023C10.949 22.023 10.5 21.574 10.5 20.523C10.5 19.471 10.949 19.023 12 19.023C13.052 19.023 13.5 19.471 13.5 20.523C13.5 21.574 13.052 22.023 12 22.023ZM6.677 4.721C8.169 5.914 10.386 6.018 10.48 6.022L11.035 6.045L10.999 5.49C10.994 5.412 10.858 3.552 9.323 2.324C7.83 1.13 5.614 1.027 5.52 1.023L4.965 1L5.001 1.555C5.006 1.633 5.142 3.493 6.677 4.721ZM8.697 3.105C9.403 3.669 9.73 4.427 9.88 4.95C9.193 4.84 8.095 4.575 7.302 3.94C6.597 3.376 6.27 2.618 6.12 2.095C6.807 2.205 7.905 2.47 8.698 3.105H8.697ZM11.515 8.058C10.213 8.225 9.5 9.08 9.5 10.523C9.5 12.135 10.388 13.023 12 13.023C13.612 13.023 14.5 12.135 14.5 10.523C14.5 9.091 13.797 8.235 12.513 8.06V7.973C12.511 7.951 12.312 5.722 13.618 4.282C14.377 3.446 15.515 3.022 17 3.022V2.022C15.218 2.022 13.83 2.559 12.873 3.616C11.268 5.39 11.507 7.964 11.515 8.022V8.058ZM13.5 10.523C13.5 11.573 13.052 12.023 12 12.023C10.949 12.023 10.5 11.573 10.5 10.523C10.5 9.471 10.949 9.023 12 9.023C13.052 9.023 13.5 9.471 13.5 10.523Z"
                         fill=""
                       />
                     </svg>
 
                     <span>Fruity Winey</span>
                   </label>
                 </div>
               </div>
             </fieldset> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
