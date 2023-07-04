<script lang="ts">
import "../css/pages/index.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Header,
    Nav,
    Footer,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <!-- start header -->
      <Header />
      <!-- end header -->
      <Nav />
      <!-- end nav -->

      <section id="banner">
        <img
          src="../assets/images/banner-1.png"
          alt="banner"
          width="100%"
          height="100%"
        />
      </section>

      <main id="main">
        <section class="tagLine-event">
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.5 0.5C19.05 0.5 14 4.822 14 9C14 10.828 14.896 12.232 16.351 12.955C15.3796 15.1842 14.7052 17.5312 14.345 19.936C13.953 18.973 13.406 18.029 12.769 17.122C13.519 16.392 14 15.361 14 14C14 9.988 8.227 5.5 0.5 5.5H0V6C0 12.542 4.29 18.5 9 18.5C10.05 18.5 11.103 18.249 11.97 17.728C13.166 19.426 14 21.241 14 23V26.5H15V24.5C15 19.97 15.994 16.252 17.287 13.3C17.743 13.419 18.224 13.5 18.75 13.5C23.505 13.5 28 7.425 28 1V0.5H27.5ZM9 17.5C5.005 17.5 1.223 12.227 1.01 6.507C7.801 6.695 13 10.616 13 14C13 15.062 12.66 15.8 12.176 16.317C9.086 12.345 4.527 9.289 4.238 9.097L3.686 9.931C3.754 9.977 8.342 13.055 11.375 16.929C10.425 17.449 9.349 17.5 9 17.5ZM18.75 12.5C18.3969 12.498 18.0449 12.4588 17.7 12.383C20.105 7.421 23.252 4.936 23.304 4.897L22.696 4.103C22.642 4.144 19.276 6.782 16.748 12.054C15.644 11.495 15 10.434 15 9C15 4.054 21.972 1.661 26.99 1.508C26.77 7.228 22.87 12.5 18.75 12.5Z"
              fill="#17171A"
            />
          </svg>
          <h3>
            EVERY CUP OF NESPRESSO COFFEE IS CARBON NEUTRAL.
            <span>MORE DETAILS.</span>
          </h3>
        </section>
        <!-- start featured -->
        <section class="featured container">
          <div class="featured_wrapper" id="featured">
            <div class="featured_item">
              <div class="featured_item-content">
                <h3 class="featured_item-content-heading">FREE DELIVERY</h3>
                <p class="featured_item-content-des">
                  for orders of total value of minimum 100 lei. For orders that
                  do not meet the specified criteria, the cost of standard
                  delivery is 15 lei.
                </p>
                <div class="featured_item-content-btn">
                  <button>FIND OUT MORE</button>
                </div>
              </div>
              <div class="featured_item-inner">
                <div class="featured_item-img">
                  <img src="../assets/images/Calque_1.png" alt="Calque" />
                </div>
                <div class="featured_item-main">
                  <h3 class="featured_item-header">FREE DELIVERY</h3>
                  <p class="featured_item-des">for orders of min. 100 lei.</p>
                </div>
                <div class="featured_item-btn">
                  <button>
                    <svg
                      class="icon_plus"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33337 9H7.33337V15C7.33337 15.6 7.73337 16 8.33337 16C8.93337 16 9.33337 15.6 9.33337 15V9H15.3334C15.9334 9 16.3334 8.6 16.3334 8C16.3334 7.4 15.9334 7 15.3334 7H9.33337V1C9.33337 0.4 8.93337 0 8.33337 0C7.73337 0 7.33337 0.4 7.33337 1V7H1.33337C0.733374 7 0.333374 7.4 0.333374 8C0.333374 8.6 0.733374 9 1.33337 9Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="icon_minus"
                      width="17"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g id="Complete">
                        <g id="minus">
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="4"
                            x2="20"
                            y1="12"
                            y2="12"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="featured_item">
              <div class="featured_item-content">
                <h3 class="featured_item-content-heading">RECYCLE CAPSULES</h3>
                <p class="featured_item-content-des">
                  Together let’s protect the environment with every cup of
                  coffee! Collect your Nespresso used capsules and return them
                  by courier, ticking the option Swap of Used Capsules when you
                  place your online order or bring them upon your next visit to
                  our Nespresso Boutiques.
                </p>
                <div class="featured_item-content-btn">
                  <button>FIND OUT MORE</button>
                </div>
              </div>
              <div class="featured_item-inner">
                <div class="featured_item-img">
                  <img src="../assets/images/Layer_1.png" alt="Calque" />
                </div>
                <div class="featured_item-main">
                  <h3 class="featured_item-header">RECYCLE CAPSULES</h3>
                  <p class="featured_item-des">via couriers</p>
                </div>
                <div class="featured_item-btn">
                  <button>
                    <svg
                      class="icon_plus"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33337 9H7.33337V15C7.33337 15.6 7.73337 16 8.33337 16C8.93337 16 9.33337 15.6 9.33337 15V9H15.3334C15.9334 9 16.3334 8.6 16.3334 8C16.3334 7.4 15.9334 7 15.3334 7H9.33337V1C9.33337 0.4 8.93337 0 8.33337 0C7.73337 0 7.33337 0.4 7.33337 1V7H1.33337C0.733374 7 0.333374 7.4 0.333374 8C0.333374 8.6 0.733374 9 1.33337 9Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="icon_minus"
                      width="17"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g id="Complete">
                        <g id="minus">
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="4"
                            x2="20"
                            y1="12"
                            y2="12"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="featured_item">
              <div class="featured_item-content">
                <h3 class="featured_item-content-heading">
                  EXCLUSIVE BENEFITS
                </h3>
                <p class="featured_item-content-des">
                  It’s our shared passion for coffee which brings us together,
                  so why not make the most of it? By becoming a Nespresso
                  member, a world of benefits. Rewards and coffee-inspired
                  discoveries open to you. All these benefits are made for you
                  to enjoy your coffee moments, every day. To make loving coffee
                  even more rewarding.
                </p>
                <div class="featured_item-content-btn">
                  <button>FIND OUT MORE</button>
                </div>
              </div>
              <div class="featured_item-inner">
                <div class="featured_item-img">
                  <img src="../assets/images/Frame.png" alt="Calque" />
                </div>
                <div class="featured_item-main">
                  <h3 class="featured_item-header">EXCLUSIVE BENEFITS</h3>
                  <p class="featured_item-des">for Nespresso Members</p>
                </div>
                <div class="featured_item-btn">
                  <button>
                    <svg
                      class="icon_plus"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33337 9H7.33337V15C7.33337 15.6 7.73337 16 8.33337 16C8.93337 16 9.33337 15.6 9.33337 15V9H15.3334C15.9334 9 16.3334 8.6 16.3334 8C16.3334 7.4 15.9334 7 15.3334 7H9.33337V1C9.33337 0.4 8.93337 0 8.33337 0C7.73337 0 7.33337 0.4 7.33337 1V7H1.33337C0.733374 7 0.333374 7.4 0.333374 8C0.333374 8.6 0.733374 9 1.33337 9Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      class="icon_minus"
                      width="17"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g id="Complete">
                        <g id="minus">
                          <line
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            x1="4"
                            x2="20"
                            y1="12"
                            y2="12"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end featured -->
        <section id="moreInfo" class="moreInfo">
          <div class="container moreInfo_list">
            <div class="moreInfo_item">
              <div class="moreInfo_item-wrapper">
                <h3 class="moreInfo_item-heading">
                  Mocha Coffee Recipe featuring Ispirazione Roma
                </h3>
                <p class="moreInfo_item-title">
                  Foamy, milky sweet and lightly chocolatey, a delicious Mocha
                  Latte is ideal for a classic coffee indulgence.Mocha Coffee
                  Recipe featuring Ispirazione Roma
                </p>
                <div class="moreInfo_item-btn">
                  <button><span>GET THE RECIPE</span></button>
                </div>
              </div>
              <div class="moreInfo_item-img">
                <img
                  src="../assets/images/Rectangle_2.png"
                  alt="moreInfo_item"
                  width="100%"
                />
              </div>
            </div>
            <div class="moreInfo_item">
              <div class="moreInfo_item-wrapper">
                <h3 class="moreInfo_item-heading">Cappuccino</h3>
                <p class="moreInfo_item-title">
                  Make your morning moment just a little more special with a
                  quick Cappuccino.
                </p>
                <div class="moreInfo_item-btn">
                  <button><span>GET THE RECIPE</span></button>
                </div>
              </div>
              <div class="moreInfo_item-img">
                <img
                  src="../assets/images/Rectangle_1.png"
                  alt="moreInfo_item"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </section>
        <!-- product -->
        <section id="product" class="product">
          <h2 class="product_heading">DISCOVER THE NESPRESSO PRODUCTS</h2>
          <div class="container product_list">
            <div class="product_item">
              <h3 class="product_item-heading">INISSIA</h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_1.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ4,200,000</span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">PROMOTE</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Ispirazione Italiana Selection
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_2.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ1,658,000</span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">PROMOTE</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">Napoli</h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_3.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ15,000</span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">LIMITED</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Essenza Mini Black & Aeroccino 3
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_4.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price">
                <span>đ6,670,000 </span>
                <label> đ6,300,000</label>
              </div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">ONLINE EXCLUSIVE</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Essenza Mini Red & Aeroccino 3
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_5.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price">
                <span>đ6,670,000 </span>
                <label> đ6,300,000</label>
              </div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">LIMITED</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Ispirazione Italiana Intense Selection
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_6.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ6,670,000 </span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">PROMOTE</span>
            </div>
          </div>
          <!-- <div class="product_seemore"><span>SEE MORE</span></div> -->
        </section>
        <!-- moreInfo -->
        <section id="moreInfo">
          <div
            class="container moreInfo_list"
            style="grid-template-columns: 1fr 1fr 1fr"
          >
            <div class="moreInfo_item">
              <div class="moreInfo_item-wrapper">
                <h3 class="moreInfo_item-heading">B-Corp Certification</h3>
                <p class="moreInfo_item-title">
                  For Nespresso, this certification represents 30 years of
                  continuous sustainability actions
                </p>
                <div class="moreInfo_item-btn">
                  <button><span>FIND OUT MORE</span></button>
                </div>
              </div>
              <div class="moreInfo_item-img">
                <img
                  src="../assets/images/Rectangle_5.png"
                  alt="moreInfo_item"
                  width="100%"
                />
              </div>
            </div>
            <div class="moreInfo_item">
              <div class="moreInfo_item-wrapper">
                <h3 class="moreInfo_item-heading">Think outside the cup</h3>
                <p class="moreInfo_item-title">
                  Committed to sustainable farming since 2003-it's time to go
                  further, with a shift to regenerative agriculture
                </p>
                <div class="moreInfo_item-btn">
                  <button><span>FIND OUT MORE</span></button>
                </div>
              </div>
              <div class="moreInfo_item-img">
                <img
                  src="../assets/images/Rectangle_3.png"
                  alt="moreInfo_item"
                  width="100%"
                />
              </div>
            </div>
            <div class="moreInfo_item">
              <div class="moreInfo_item-wrapper">
                <h3 class="moreInfo_item-heading">NESPRESSO RECYCLING PLAN</h3>
                <p class="moreInfo_item-title">
                  Discover Nespresso sustainability commitment. We provide a
                  solution for recycling your used aluminum capsules and
                  fulfilling your commitment to protecting the environment.
                </p>
                <div class="moreInfo_item-btn">
                  <button><span>LEARN MORE</span></button>
                </div>
              </div>
              <div class="moreInfo_item-img">
                <img
                  src="../assets/images/Rectangle_4.png"
                  alt="moreInfo_item"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </section>
        <!-- product -->
        <section id="product" class="product">
          <h2 class="product_heading">Recomment for you you</h2>
          <div class="container product_list">
            <div class="product_item">
              <h3 class="product_item-heading">INISSIA</h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_1.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ4,200,000</span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">PROMOTE</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Ispirazione Italiana Selection
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_2.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ1,658,000</span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">PROMOTE</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">Napoli</h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_3.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ15,000</span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">LIMITED</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Essenza Mini Black & Aeroccino 3
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_4.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price">
                <span>đ6,670,000 </span>
                <label> đ6,300,000</label>
              </div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">ONLINE EXCLUSIVE</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Essenza Mini Red & Aeroccino 3
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_5.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price">
                <span>đ6,670,000 </span>
                <label> đ6,300,000</label>
              </div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">LIMITED</span>
            </div>
            <div class="product_item">
              <h3 class="product_item-heading">
                Ispirazione Italiana Intense Selection
              </h3>
              <div class="product_item-img">
                <img
                  src="../assets/images/img-product_6.png"
                  alt="product"
                  width="160"
                  height="160"
                />
              </div>
              <div class="product_item-price"><span>đ6,670,000 </span></div>
              <div class="product_item-btn">
                <button>
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
                  <span> ADD TO BASKET </span>
                </button>
              </div>
              <span class="product_item-ticket">PROMOTE</span>
            </div>
          </div>
          <!-- <div class="product_seemore"><span>SEE MORE</span></div> -->
        </section>
        <!-- product -->
      </main>
      <!-- start footer -->
      <Footer />
      <!--end footer -->
    </div>
  </div>
</template>
