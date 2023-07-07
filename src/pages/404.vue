<script lang="ts">
import "../css/pages/404.css";
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotPoundPage",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },
  // Add other properties, methods, etc.
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />

      <NavigationComponent />
      <section id="banner">
        <img
          src="assets/images/banner-1.png"
          alt="banner"
          width="100%"
          height="100%"
        />
      </section>

      <main id="Page404">
        <section class="container caption">
          <div>
            <h3 class="caption-title">SORRY, PAGE NOT FOUND</h3>
            <p class="caption-text">
              Sometimes technology fails, us but coffee never does. Why not grab
              yourself a cup and then head back to the Homepage?
            </p>
            <button class="caption-btn">
              <router-link to="/"> GO TO HOMEPAGE </router-link>
            </button>
          </div>
          <img src="assets/images/page404/404.png" alt="404" />
        </section>

        <section class="product">
          <div class="container">
            <div class="product-list">
              <div class="product-item">
                <div class="product-tag">
                  <span class="product-tag__name">promote</span>
                </div>
                <div class="product-card">
                  <div class="product-card-wrapper">
                    <span class="product-name">inissia</span>
                    <div class="product-image">
                      <router-link to="/machines_detail">
                        <img src="assets/images/page404/product_1.png" alt="" />
                      </router-link>
                    </div>
                    <span class="product-price">đ 16.5000</span>
                    <button class="product-btn">
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
                      <span>Add to basket</span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="product-item">
                <div class="product-tag">
                  <span class="product-tag__name">promote</span>
                </div>
                <div class="product-card">
                  <div class="product-card-wrapper">
                    <span class="product-name">inissia</span>
                    <div class="product-image">
                      <router-link to="/machines_detail">
                        <img src="assets/images/page404/404.png" alt="" />
                      </router-link>
                    </div>
                    <span class="product-price">đ 16.5000</span>
                    <button class="product-btn">
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
                      <span>Add to basket</span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="product-item">
                <div class="product-tag">
                  <span class="product-tag__name">promote</span>
                </div>
                <div class="product-card">
                  <div class="product-card-wrapper">
                    <span class="product-name">inissia</span>
                    <div class="product-image">
                      <router-link to="/machines_detail">
                        <img src="assets/images/page404/product_1.png" alt="" />
                      </router-link>
                    </div>
                    <span class="product-price">đ 16.5000</span>
                    <button class="product-btn">
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
                      <span>Add to basket</span>
                    </button>
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
