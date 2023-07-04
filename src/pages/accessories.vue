<script lang="ts">
import "../css/pages/accessories.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccessoriesPage",
  components: {
    Header,
    Nav,
    Footer,
  },
  //Modal Filter
  // $(document).ready(function () {
  //   $("#filterButton").click(function () {
  //     var expanded = $(this).attr("aria-expanded");
  //     if (expanded === "false") {
  //       $(this).attr("aria-expanded", "true");
  //       // $("#modal").show();
  //       $("#modal").css("display", "flex");
  //     } else {
  //       $(this).attr("aria-expanded", "false");
  //       $("#modal").hide();
  //     }
  //   });
  // });
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

      <main id="accessories">
        <section class="hero">
          <p class="hero-title">NESPRESSO ACCESSORIES</p>
          <p class="hero-content">
            Free Delivery for min. 100 lei, in 2 working days.
          </p>
        </section>

        <section class="container">
          <div class="filter-accessories">
            <div class="filter-number">
              <span>77 ACCESSORIES</span>
            </div>
            <!-- <div class="filter-sublabel filter-toggle">
              <span>Filter</span>
            </div> -->
          </div>
          <div class="filter-wrapper">
            <div class="filter-button filter-toggle">
              <button
                id="filterButton"
                class="filter-sublabel"
                aria-expanded="false"
              >
                Filter
              </button>
            </div>

            <div id="modal" class="filter-list">
              <div class="filter-content">
                <label for="collection-select" class="filter-label">TYPE</label>
                <div class="filter-item">
                  <select
                    name="type"
                    id="type-select"
                    class="filter-item__select"
                  >
                    <option value="ALL_VALUES">All</option>
                    <option value="Coffee Mug">Coffee Mug</option>
                    <option value="Spoons">Spoons</option>
                    <option value="Glasses">Glasses</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Food">Food</option>
                    <option value="Biscuits">Biscuits</option>
                    <option value="Capsule Dispenser">Capsule Dispenser</option>
                    <option value="Milk Solution">Milk Solution</option>
                  </select>
                </div>
              </div>
              <div class="filter-content">
                <label for="type-select" class="filter-label">COLLECTION</label>
                <div class="filter-item">
                  <select
                    name="collection"
                    id="collection-select"
                    class="filter-item__select"
                  >
                    <option value="ALL_VALUES">All</option>
                    <option value="Barista Creations on Ice">
                      Barista Creations on Ice
                    </option>
                    <option value="Vertuo">Vertuo</option>
                    <option value="Best sellers">Best sellers</option>
                    <option value="Aeroccino">Aeroccino</option>
                    <option value="Food And Bites">Food And Bites</option>
                    <option value="Nomad">Nomad</option>
                    <option value="Barista Collection">
                      Barista Collection
                    </option>
                    <option value="Nude">Nude</option>
                    <option value="View">View</option>
                    <option value="Lume">Lume</option>
                    <option value="Origin">Origin</option>
                    <option value="Pixie">Pixie</option>
                    <option value="Touch">Touch</option>
                    <option value="Sustainable Choices">
                      Sustainable Choices
                    </option>
                    <option value="Capsules Dispensers">
                      Capsules Dispensers
                    </option>
                    <option value="Sugars">Sugars</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Reveal">Reveal</option>
                    <option value="Recycling">Recycling</option>
                    <option value="Glass">Glass</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="banner">
          <img src="../assets/images/product/banner.png" alt="banner" />
          <div class="banner-info">
            <span class="banner-title">ORIGINAL COFFEE CAPSULES</span>
            <h6 class="banner-desc">
              Get 10% credit back in your accountwith Subscription by Nespresso
            </h6>
            <span class="banner-more">READ MORE</span>
          </div>
          <button type="submit" class="banner-btn">
            <img src="../assets/svgs/cart.svg" alt="cart" />Buy Now
          </button>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-1">
            <div class="container">
              <p class="product-title">Milano Limited Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-1.png"
                        alt=""
                      />
                    </a>
                    <p class="product-name">MILANO TOUCH GOLDEN TRAVEL MUG</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫3,700,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-2.png"
                        alt=""
                      />
                    </a>
                    <p class="product-name">
                      ISPIRAZIONE ITALIANO ESPRESSO SET
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫3,700,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-2">
            <div class="container">
              <p class="product-title">New Arrival</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-3.png"
                        alt="MILANO TOUCH GOLDEN TRAVEL MUG"
                      />
                    </a>
                    <p class="product-name">MILANO TOUCH GOLDEN TRAVEL MUG</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫3,700,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-3">
            <div class="container">
              <p class="product-title">Milk Frothers</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-4.png"
                        alt="AEROCCINO 3"
                      />
                    </a>
                    <p class="product-name">AEROCCINO 3</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫2,600,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-5.png"
                        alt="AEROCCINO 4"
                      />
                    </a>
                    <p class="product-name">AEROCCINO 4</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">đ3,400,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-4">
            <div class="container">
              <p class="product-title">Lume Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-6.png"
                        alt="LUME ESPRESSO CUPS X 2"
                      />
                    </a>
                    <p class="product-name">LUME ESPRESSO CUPS X 2</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫750,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-6.png"
                        alt="LUME ESPRESSO CUPS X 2"
                      />
                    </a>
                    <p class="product-name">LUME ESPRESSO CUPS X 2</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫830,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-6.png"
                        alt="LUME ESPRESSO CUPS X 2"
                      />
                    </a>
                    <p class="product-name">LUME ESPRESSO CUPS X 2</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫980,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-5">
            <div class="container">
              <p class="product-title">Reveal Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-7.png"
                        alt="REVEAL ESPRESSO MILD GLASSES"
                      />
                    </a>
                    <p class="product-name">REVEAL ESPRESSO MILD GLASSES</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫750,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-8.png"
                        alt="REVEAL LUNGO"
                      />
                    </a>
                    <p class="product-name">REVEAL LUNGO</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫830,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-7.png"
                        alt="REVEAL ESPRESSO INTENSE GLASSES"
                      />
                    </a>
                    <p class="product-name">REVEAL ESPRESSO INTENSE GLASSES</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫980,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-6">
            <div class="container">
              <p class="product-title">Maintenance</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-9.png"
                        alt="DESCALING KIT"
                      />
                    </a>
                    <p class="product-name">DESCALING KIT</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫138,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-7">
            <div class="container">
              <p class="product-title">Nude Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-10.png"
                        alt="NUDE ESPRESSO CUPS X 2 (80ML)"
                      />
                    </a>
                    <p class="product-name">NUDE ESPRESSO CUPS X 2 (80ML)</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫550,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-11.png"
                        alt="NUDE LUNGO CUPS X 2 (180ML)"
                      />
                    </a>
                    <p class="product-name">NUDE LUNGO CUPS X 2 (180ML)</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫660,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-12.png"
                        alt="NUDE GRAN LUNGO CUPS X 2 (270ML)"
                      />
                    </a>
                    <p class="product-name">NUDE GRAN LUNGO CUPS X 2 (270ML)</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫460,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-13.png"
                        alt="NUDE MUGS X 2 (390ML)"
                      />
                    </a>
                    <p class="product-name">NUDE MUGS X 2 (390ML)</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫850,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper product-wrapper--high">
          <div class="product-inner background-8 product-inner--high">
            <div class="container">
              <p class="product-title">Pixie Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-14.png"
                        alt="PIXIE ESPRESSO SET (RISTRETTO & DECAFFEINATO)"
                      />
                    </a>
                    <p class="product-name">
                      PIXIE ESPRESSO SET (RISTRETTO & DECAFFEINATO)
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫750,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-15.png"
                        alt="PIXIE ESPRESSO SET (ARPEGGIO & VOLLUTO)"
                      />
                    </a>
                    <p class="product-name">
                      PIXIE ESPRESSO SET (ARPEGGIO & VOLLUTO)
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫830,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-16.png"
                        alt="PIXIE LUNGO SET (ENVIVO & LINIZIO)"
                      />
                    </a>
                    <p class="product-name">
                      PIXIE LUNGO SET (ENVIVO & LINIZIO)
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫980,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-17.png"
                        alt="PIXIE LUNGO SET (BUENOS AIRES & SHANGHAI)"
                      />
                    </a>
                    <p class="product-name">
                      PIXIE LUNGO SET (BUENOS AIRES & SHANGHAI)
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫3,700,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-18.png"
                        alt="PIXIE LUNGO SET (FORTISSIO & VIVALTO)"
                      />
                    </a>
                    <p class="product-name">
                      PIXIE LUNGO SET (FORTISSIO & VIVALTO)
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫750,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-19.png"
                        alt="PIXIE ESPRESSO CUP, RIO DE JANEIRO"
                      />
                    </a>
                    <p class="product-name">
                      PIXIE ESPRESSO CUP, RIO DE JANEIRO
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫830,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-20.png"
                        alt="PIXIE ESPRESSO CUP, PARIS"
                      />
                    </a>
                    <p class="product-name">PIXIE ESPRESSO CUP, PARIS</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫980,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-21.png"
                        alt="PIXIE ESPRESSO CUP, ISTANBUL"
                      />
                    </a>
                    <p class="product-name">PIXIE ESPRESSO CUP, ISTANBUL</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫3,700,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper product-wrapper--high">
          <div class="product-inner background-9 product-inner--high">
            <div class="container">
              <p class="product-title">Display Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-22.png"
                        alt="DISPLAY DISCOVERY BOX"
                      />
                    </a>
                    <p class="product-name">DISPLAY DISCOVERY BOX</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫1,200,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-23.png"
                        alt="DISPLAY BONBONNIERE CAPSULE DISPENSER"
                      />
                    </a>
                    <p class="product-name">
                      DISPLAY BONBONNIERE CAPSULE DISPENSER
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫480,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-24.png"
                        alt="DISPLAY CUBE CAPSULE DISPENSER"
                      />
                    </a>
                    <p class="product-name">DISPLAY CUBE CAPSULE DISPENSER</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫583,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-25.png"
                        alt="DISPLAY VERSILO CAPSULE DISPENSER"
                      />
                    </a>
                    <p class="product-name">
                      DISPLAY VERSILO CAPSULE DISPENSER
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫1,100,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-26.png"
                        alt="DISPLAY PURE ROCK CAPSULE DISPENSER"
                      />
                    </a>
                    <p class="product-name">
                      DISPLAY PURE ROCK CAPSULE DISPENSER
                    </p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫820,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-27.png"
                        alt="DISPLAY MIA CAPSULE DISPENSER"
                      />
                    </a>
                    <p class="product-name">DISPLAY MIA CAPSULE DISPENSER</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫640,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-10">
            <div class="container">
              <p class="product-title">Ice Tray</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-28.png"
                        alt="ICE CUBE TRAYS KIT"
                      />
                    </a>
                    <p class="product-name">ICE CUBE TRAYS KIT</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫620,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper">
          <div class="product-inner background-10">
            <div class="container">
              <p class="product-title">Ice Tray</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-29.png"
                        alt="RECYCLAY ESPRESSO CUPS"
                      />
                    </a>
                    <p class="product-name">RECYCLAY ESPRESSO CUPS</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫1,200,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper product-wrapper--high">
          <div class="product-inner product-inner--high background-12">
            <div class="container">
              <p class="product-title">View Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-30.png"
                        alt="VIEW CAPPUCCINO SET"
                      />
                    </a>
                    <p class="product-name">VIEW CAPPUCCINO SET</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫720,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-31.png"
                        alt="VIEW RECIPE GLASSES SET"
                      />
                    </a>
                    <p class="product-name">VIEW RECIPE GLASSES SET</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫350,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-32.png"
                        alt="VIEW SPOONS – LARGE X 6"
                      />
                    </a>
                    <p class="product-name">VIEW SPOONS – LARGE X 6</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫440,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-33.png"
                        alt="VIEW GRAN LUNGO"
                      />
                    </a>
                    <p class="product-name">VIEW GRAN LUNGO</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫460,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-34.png"
                        alt="VIEW ESPRESSO SET X 2"
                      />
                    </a>
                    <p class="product-name">VIEW ESPRESSO SET X 2</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫660,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-35.png"
                        alt="VIEW LUNGO SET X 2"
                      />
                    </a>
                    <p class="product-name">VIEW LUNGO SET X 2</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫880,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-36.png"
                        alt="VIEW RECIPE GLASSES – 12 PIECES"
                      />
                    </a>
                    <p class="product-name">VIEW RECIPE GLASSES – 12 PIECES</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫1,800,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>

        <section class="product-wrapper product-wrapper--high">
          <div class="product-inner product-inner--high background-13">
            <div class="container">
              <p class="product-title">View Collection</p>
              <div class="product-list">
                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-37.png"
                        alt="NOMAD TRAVEL MUG BLOOMING ROSE"
                      />
                    </a>
                    <p class="product-name">NOMAD TRAVEL MUG BLOOMING ROSE</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫605,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-38.png"
                        alt="NOMAD TRAVEL MUG OCEAN BLUE"
                      />
                    </a>
                    <p class="product-name">NOMAD TRAVEL MUG OCEAN BLUE</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫785,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-39.png"
                        alt="NOMAD TRAVEL MUG LATTE"
                      />
                    </a>
                    <p class="product-name">NOMAD TRAVEL MUG LATTE</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫790,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-40.png"
                        alt="NOMAD BOTTLE"
                      />
                    </a>
                    <p class="product-name">NOMAD BOTTLE</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫500,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-41.png"
                        alt="NOMAD TRAVEL MUG RASPBERRY"
                      />
                    </a>
                    <p class="product-name">NOMAD TRAVEL MUG RASPBERRY</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫605,000</span>
                    <button class="product-add">
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

                <div class="product-item">
                  <div class="product-image">
                    <a href="./accessories-detail.html">
                      <img
                        src="../assets/images/accessories/accessories-35.png"
                        alt="VIEW LUNGO SET X 2"
                      />
                    </a>
                    <p class="product-name">VIEW LUNGO SET X 2</p>
                  </div>
                  <div class="product-content">
                    <span class="product-price">₫880,000</span>
                    <button class="product-add">
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
            </div>
          </div>
        </section>
      </main>
      <!-- End Main -->
      <!-- start footer -->
      <Footer />
    </div>
  </div>
</template>
