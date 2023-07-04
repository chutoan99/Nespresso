<script lang="ts">
import "../css/pages/signUp_private_2.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "signUpPrivate2Page",
  components: {
    Header,
    Nav,
    Footer,
  },
  // Add other properties, methods, etc.
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <!-- Header -->
      <Nav />
      <!-- Navigation -->

      <main class="">
        <section id="private_2">
          <div class="private_2 container">
            <div class="private_2-banner">
              <img src="../assets/images/product/banner.png" alt="" />
              <div class="private_2-banner-info">
                <span class="private_2-banner-title"
                  >ORIGINAL COFFEE CAPSULES</span
                >
                <h6 class="private_2-banner-desc">
                  Get 10% credit back in your accountwith Subscription by
                  Nespresso
                </h6>
                <span class="private_2-banner-more">READ MORE</span>
              </div>
              <button type="submit" class="private_2-banner-btn">
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
                <span> Button </span>
              </button>
            </div>
            <div class="private_2-content">
              <div class="private_2-content-title">
                <h4>WELCOME TO NESPRESSO</h4>
              </div>
              <div class="private_2-content-img">
                <div class="private_2-content-img-wrapper">
                  <img src="../assets/images/LogoN.png" alt="LogoN" />
                </div>
              </div>
              <hr class="private_2-content-line" />
              <div class="private_2-content-heading">
                <h3>YOUR NESPRESSO & YOU ACCOUNT HAS BEEN CREATED!</h3>
              </div>
              <div class="private_2-content-des">
                <p>
                  Enjoy the Nespresso benefits and take advantage of
                  personalized offers and rewards.
                </p>
              </div>
              <ul class="private_2-content-list">
                <li>
                  <span></span>Order fast your favorite Nespresso original
                  capsules
                </li>
                <li><span></span>Redeem your personalized offers</li>
                <li><span></span>Free delivery for orders of min. 100 lei</li>
                <li><span></span>Secure payment methods with SSL encryption</li>
                <li><span></span>Online assistance, step by step</li>
              </ul>
              <div class="private_2-content-footer">
                <button>
                  <a href="./index.html">GO TO SHOP</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
