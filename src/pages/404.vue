<script lang="ts">
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotPoundPage",
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
      <section id="banner">
        <img
          src="../assets/images/banner-1.png"
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
          <img src="../assets/images/page404/404.png" alt="404" />
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
                        <img
                          src="../assets/images/page404/product_1.png"
                          alt=""
                        />
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
                        <img src="../assets/images/page404/404.png" alt="" />
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
                        <img
                          src="../assets/images/page404/product_1.png"
                          alt=""
                        />
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
      <!-- Footer -->
    </div>
  </div>
</template>

<style lang="scss" scope>
@import "src/sass/base/_global.scss";
@import "src/sass/base/_reset";
@import "src/sass/base/_variable";
#Page404 {
  .caption {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7.5rem 0;
    width: 100%;
    gap: 6rem;

    &-title {
      @extend .font_heading-3;
      font-weight: 600;
      color: $black-700;
      margin-bottom: 1.25rem;
    }

    &-text {
      @extend .font_body-1;
      font-weight: 400;
      color: $black-700;
      margin-bottom: 1.25rem;
    }

    &-btn {
      @extend .button_cart;
      border: none;
      width: 12.8125rem;
      height: 2.5625rem;

      a {
        @extend .font_button;
        font-weight: 600;
        text-decoration: none;
        color: $white;
      }

      &:hover {
        background: $btn-hover;
      }
    }

    img {
      padding-top: 1.25rem;
      width: 100%;
    }
  }

  .product {
    background: $black-50;
    padding: 2.5rem 0;

    &-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
    }

    &-item {
      text-align: center;
      position: relative;
      background-color: $white;
      box-shadow: $card-shadow-4;
      border-radius: 0.25rem;
      padding: 2.5rem 0;
    }

    &-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      gap: 0.75rem;

      &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
      }
    }

    &-tag {
      position: absolute;
      width: 4.4375rem;
      height: 1.5rem;
      right: -0.0206rem;
      top: 0rem;
      padding: 0.5rem;
      background-color: $brown-500;
      display: flex;
      align-items: center;
      justify-content: center;

      &__name {
        @extend .font_overline;
        text-transform: uppercase;
        color: $white;
        text-align: center;
      }
    }

    &-name {
      @extend .font_heading-5;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      color: $black-700;
    }

    &-image {
      width: 100%;
      font-size: 0;
      padding: 1.3125rem 0;
    }

    &-price {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
      letter-spacing: 0.005em;
    }

    &-btn {
      @extend .button_cart;
      width: 100%;

      span {
        @extend .font_button;
        font-weight: 600;
      }

      &:hover {
        background: $btn-hover;
      }
    }
  }
}
/* Mobile: width < 768px */
@media only screen and (max-width: 47.938em) {
  #Page404 {
    .caption {
      display: flex;
      flex-direction: column-reverse;
      padding: 0 1rem;
      padding-bottom: 2.5rem;

      &-title {
        font-size: 2rem;
        line-height: 1.2;
      }
    }

    .product {
      &-list {
        grid-template-columns: repeat(1, 1fr);
        padding: 0.625rem 1.25rem;
        gap: 1rem;
      }

      &-btn {
        width: 100%;
      }
    }
  }
}

/* Tablet: width >= 768px and width < 1024px */
@media only screen and (min-width: 48rem) and (max-width: 63.938rem) {
  #Page404 {
    .caption {
      box-sizing: content-box;
      margin: 0 auto;
      max-width: 45.5rem !important;

      img {
        width: 50%;
      }
    }

    .product {
      &-list {
        grid-template-columns: repeat(2, 1fr);
        padding: 0.625rem 1.25rem;
        gap: 1rem;
      }
    }
  }
}
</style>
