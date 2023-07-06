<script lang="ts">
import "../css/pages/accessories_detail.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccessoriesDetailPage",
  components: {
    Header,
    Nav,
    Footer,
  },
  // const modal = document.querySelector(".js-modal");
  //     const ImageClick = document.querySelector(".js-modal-click");
  //     const modalClose = document.querySelector(".js-modal-close");

  //     // Open Modal Image
  //     ImageClick.onclick = function () {
  //       modal.classList.add("open-modal");
  //     };

  //     // Close Modal Image Click Outside
  //     window.onclick = function (event) {
  //       if (event.target == modal) {
  //         modal.classList.remove("open-modal");
  //       }
  //     };

  //     // Close Modal Image Click Close
  //     modalClose.addEventListener("click", function () {
  //       modal.classList.remove("open-modal");
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
  //   if (currentScreenWidth < 768) {
  //     initializeSlider();
  //   } else {
  //     $(".category-list").slick("unslick");
  //   }
  // });
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <Nav />

      <main id="accessories_detail">
        <!-- Product Card -->
        <section class="product">
          <div class="product-detail container">
            <div class="product-media">
              <button>
                <router-link to="/accessories">SEE ALL COFFEES</router-link>
              </button>
              <div class="product-image">
                <img
                  src="assets/images/accessories-detail/accessories-detail-1.png"
                  alt=""
                />
              </div>
            </div>
            <div class="product-wrapper">
              <div class="product-card">
                <p class="product-card__title">ORIGINAL</p>
                <h4 class="product-card__name">
                  MILANO TOUCH GOLDEN TRAVEL MUG
                </h4>
                <div class="product-card__accessories">
                  <span> [Accessories details] </span>
                  <ul>
                    <li>The property 1</li>
                    <li>The property 2</li>
                    <li>The property 3</li>
                    <li>The property 4</li>
                  </ul>
                </div>
                <div class="product-card__delivery">
                  <div class="product-card__service">
                    <img src="assets/svgs/shipping-car.svg" alt="" />
                    <p class="product-card__service-text">Free delivery</p>
                  </div>
                  <div class="product-card__service">
                    <img src="assets/svgs/bell.svg" alt="" />
                    <p class="product-card__service-text">
                      Coffee set included
                    </p>
                  </div>
                </div>
              </div>
              <div class="product-footer">
                <span class="product-footer__price">₫600,000</span>
                <span class="product-card__special-gift">
                  The special gift when you purchase over VND 3,000,000
                </span>
                <button type="submit" class="product-footer__add">
                  <img src="assets/svgs/cart.svg" alt="" />
                  <span>ADD TO BASKET</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Banner -->
        <section class="banner">
          <div class="banner-image">
            <img
              src="assets/images/accessories-detail/accessories-detail-2.png"
              alt=""
            />
          </div>
          <div class="banner-text">
            <h4 class="banner-text__heading">MACHINE SUBSCRIPTION</h4>
            <span class="banner-text__desc"
              >Get your coffee machine for just 1 RON</span
            >
          </div>

          <button class="banner-btn">DISCOVER MORE</button>
        </section>

        <!-- Content -->
        <section class="content">
          <div class="content-container">
            <div class="content-caption">
              <h4 class="content-caption__heading">GOLDEN TRAVEL MUG</h4>
              <div class="content-caption__desc">
                <p>
                  Inspired by Chiara Ferragni’s vision of Milan, the Golden
                  Travel Mug is by your side here, there, and everywhere. A
                  stylish way to keep your drinks warm or cold, the mug holds
                  all your favourite coffee recipes: Espresso or Lungo, black or
                  with milk. Its double stainless-steel exterior comes in gold,
                  a nod to Milan’s artistic heritage, luxurious lifestyle and
                  timeless elegance. Bringing together form, function, and
                  inspiration; on the move.
                  <br />
                  Dimension (Height, Diameter): 16.4 cm, 9.3 cmCapacity: 345
                  mlDishwasher safe
                </p>
              </div>
            </div>
            <div class="content-filter">
              <div class="content-filter-left">
                <span class="content-filter__text">Content & Allergens</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6.20067H14.5M14.5 6.20067C14.5 7.96798 16 8.00067 16.8 8.00067C17.6 8.00067 19 7.96798 19 6.20067M14.5 6.20067C14.5 4.43336 16.1 4.50067 16.8 4.50067C17.5 4.50067 19 4.43336 19 6.20067M19 6.20067H24"
                    stroke="black"
                  />
                  <path
                    d="M24 11.8007L9.5 11.8007M9.5 11.8007C9.5 10.0334 8 10.0007 7.2 10.0007C6.4 10.0007 5 10.0334 5 11.8007M9.5 11.8007C9.5 13.568 7.9 13.5007 7.2 13.5007C6.5 13.5007 5 13.568 5 11.8007M5 11.8007L0 11.8007"
                    stroke="black"
                  />
                  <path
                    d="M0 17.2013H14.5M14.5 17.2013C14.5 18.9687 16 19.0013 16.8 19.0013C17.6 19.0013 19 18.9687 19 17.2013M14.5 17.2013C14.5 15.434 16.1 15.5013 16.8 15.5013C17.5 15.5013 19 15.434 19 17.2013M19 17.2013H24"
                    stroke="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <!-- Accessories-recommend -->
        <section class="accessories-recommend">
          <h4 class="accessories-recommend-title">
            ENHANCE YOUR COFFEE RITUAL
          </h4>
          <p class="accessories-recommend-desc">
            Choose our recommended coffee assortments to ensure a perfect coffee
            tasting experience.
          </p>
          <div class="accessories-list">
            <div class="accessories-item">
              <div class="accessories-item-head">
                <div class="accessories-item__image">
                  <img
                    src="assets/images/accessories/accessories-10.png"
                    alt=""
                  />
                </div>
                <span class="accessories-item__name"
                  >NUDE ESPRESSO CUPS X 2 (80ML)</span
                >
              </div>
              <div class="accessories-item-body">
                <span class="accessories-item__price">₫550,000</span>
                <button class="accessories-item__btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z"
                      fill="white"
                    />
                  </svg>

                  <span>Ask to basket</span>
                </button>
              </div>
            </div>

            <div class="accessories-item">
              <div class="accessories-item-head">
                <div class="accessories-item__image">
                  <img
                    src="assets/images/accessories/accessories-10.png"
                    alt=""
                  />
                </div>
                <span class="accessories-item__name"
                  >NUDE ESPRESSO CUPS X 2 (80ML)</span
                >
              </div>
              <div class="accessories-item-body">
                <span class="accessories-item__price">₫550,000</span>
                <button class="accessories-item__btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z"
                      fill="white"
                    />
                  </svg>

                  <span>Ask to basket</span>
                </button>
              </div>
            </div>

            <div class="accessories-item">
              <div class="accessories-item-head">
                <div class="accessories-item__image">
                  <img
                    src="assets/images/accessories/accessories-10.png"
                    alt=""
                  />
                </div>
                <span class="accessories-item__name"
                  >NUDE ESPRESSO CUPS X 2 (80ML)</span
                >
              </div>
              <div class="accessories-item-body">
                <span class="accessories-item__price">₫550,000</span>
                <button class="accessories-item__btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z"
                      fill="white"
                    />
                  </svg>

                  <span>Ask to basket</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Accessories-footer -->
        <section class="accessories-footer">
          <div class="accessories-footer-left">
            <h4 class="accessories-footer__title">
              DISCOVER THE RECOMMENDED RECIPE
            </h4>
            <span class="accessories-footer__desc"
              >Treat yourself to signature recipe for Nespresso.</span
            >
          </div>
          <div class="accessories-footer-right js-modal-click">
            <img
              src="assets/images/accessories-detail/accessories-detail-3.png"
              alt=""
            />
            <span>THYME AND GRAPEFRUIT ETHIOPIA JAMMING</span>
          </div>
        </section>

        <section class="modal js-modal">
          <div class="modal-container">
            <button class="modal-close js-modal-close">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5L5 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19 19L5 5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div class="modal-image">
              <img
                src="assets/images/accessories-detail/accessories-detail-4.png"
                alt="THYME AND GRAPEFRUIT ETHIOPIA JAMMING"
              />
            </div>

            <div class="modal-content">
              <h4 class="modal-name">
                THYME AND GRAPEFRUIT <br />
                ETHIOPIA JAMMING
              </h4>
              <div class="modal-search">
                <div class="modal-search__item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L13.875 13.875"
                      stroke="#45495A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="#45495A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>2 min</span>
                </div>

                <div class="modal-search__item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L13.875 13.875"
                      stroke="#45495A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="#45495A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>2 min</span>
                </div>
              </div>

              <div class="modal-body">
                <div class="modal-left">
                  <div class="modal-info">
                    <h5 class="modal-label">INGREDIENTS</h5>
                    <div class="modal-list">
                      <div class="modal-item">
                        <span class="modal-item__type">4buc</span>
                        <span class="modal-item__name">Glacon</span>
                      </div>
                      <div class="modal-item">
                        <span class="modal-item__type">90ml</span>
                        <span class="modal-item__name">Tonic water</span>
                      </div>
                      <div class="modal-item">
                        <span class="modal-item__type">10ml</span>
                        <span class="modal-item__name"
                          >Pink grapefruit syrup</span
                        >
                      </div>
                      <div class="modal-item">
                        <span class="modal-item__type">1buc</span>
                        <span class="modal-item__name">Spring of thyme</span>
                      </div>
                    </div>
                  </div>

                  <button class="modal-button">
                    <span>GO TO RECIPE PAGE</span>
                  </button>
                </div>
                <div class="modal-right">
                  <div class="modal-info">
                    <h5 class="modal-label">MATERIALS</h5>
                    <div class="modal-list">
                      <div class="modal-item">
                        <span class="modal-item__num"></span>
                        <span class="modal-item__name">View Recipe Glass</span>
                      </div>

                      <div class="modal-item">
                        <span class="modal-item__num"></span>
                        <span class="modal-item__name">Ice Cube tray</span>
                      </div>
                    </div>
                  </div>

                  <div class="modal-info">
                    <h5 class="modal-label">HOW TO MAKE</h5>
                    <div class="modal-list">
                      <div class="modal-item">
                        <span class="modal-item__num">01</span>
                        <span class="modal-item__name">undefined</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  </div>
</template>
