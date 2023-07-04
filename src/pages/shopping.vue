<script lang="ts">
import "../css/pages/shopping.css";
import Footer from "@/containers/Footer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "ShoppingPage",
  components: {
    Footer,
  },
  // Add other properties, methods, etc.
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <header id="header" class="header">
        <div class="header_inner">
          <div class="header_logo">
            <router-link to="/">
              <img
                src="../assets/images/logoApp.png"
                alt="logoApp"
                width="100%"
                height="100%"
              />
            </router-link>
          </div>
        </div>
      </header>

      <!-- progressbar -->
      <section id="progressbar">
        <ul class="progressbar container">
          <li class="active progressbar_item item-active">
            <router-link class="progressbar_item-link" to="">
              <span
                >Step 1
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">Shopping bag summary</span>
            </router-link>
          </li>
          <li class="progressbar_item">
            <router-link class="progressbar_item-link" to="">
              <span
                >Step 2
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">Delivery setup</span>
            </router-link>
          </li>
          <li class="progressbar_item">
            <router-link class="progressbar_item-link" to="">
              <span
                >Step 3
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">Payment</span>
            </router-link>
          </li>
          <li class="progressbar_item">
            <router-link class="progressbar_item-link" to="">
              <span
                >Step 4
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">shopping summary</span>
            </router-link>
          </li>
          <li class="progressbar_item">
            <router-link class="progressbar_item-link" to="">
              <span
                >Step 5
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">shopping confirmation</span>
            </router-link>
          </li>
        </ul>
      </section>

      <main id="shopping_bag">
        <router-view></router-view>
      </main>

      <Footer />
    </div>
  </div>
</template>
