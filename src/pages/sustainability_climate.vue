<script lang="ts">
import "../css/pages/sustainability_climate.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityClimatePage",
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
      <Header />
      <!-- Header -->
      <Nav />
      <!-- Navigation -->
      <section id="tabs">
        <div class="tabs">
          <router-link to="/sustainability_recycling" class="tabs_heading"
            >COMMITMENT</router-link
          >
          <router-link to="/sustainability_bcorp" class="tabs_heading"
            >B CORP</router-link
          >
          <router-link to="/sustainability_circularity" class="tabs_heading"
            >CIRCULARITY</router-link
          >
          <router-link
            to="/sustainability_climate"
            class="tabs_heading tab_active"
            >CLIMATE</router-link
          >
          <router-link to="/sustainability_communities" class="tabs_heading"
            >COMMUNITY</router-link
          >
        </div>
      </section>

      <section id="climate" class="climate">
        <div class="background-1">
          <div class="climate_frame-wrapper">
            <h3 class="climate_frame-heading">THE POWER OF COFFEE</h3>
            <p class="climate_frame-des">AS A POSITIVE FORCE FOR THE PLANET</p>
          </div>
        </div>
        <div class="climate_frame1 container">
          <h3 class="climate_frame1-heading">AS A B CORP™</h3>
          <h3 class="climate_frame1-title">NURTURING NATURE</h3>
          <p class="climate_frame1-des">
            Ecosystems are delicate. That’s why we believe it is important to
            regenerate land, restore healthy ecosystems, and build resilience
            against the impacts of climate change. So the land can thrive, while
            also providing high-quality coffee to savor.
          </p>
        </div>
        <div class="background-2">
          <div class="climate_frame4-wrapper">
            <h3 class="climate_frame4-heading">
              WATCH THE VIDEO
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
            </h3>
          </div>
        </div>
        <div class="container">
          <div class="climate_frame8">
            <h3 class="climate_frame8-heading">AS A B CORP™</h3>
            <h4 class="climate_frame8-title">NURTURING NATURE</h4>
            <p class="climate_frame8-des">
              Ecosystems are delicate. That’s why we believe it is important to
              regenerate land, restore healthy ecosystems, and build resilience
              against the impacts of climate change. So the land can thrive,
              while also providing high-quality coffee to savor.
            </p>
            <div>
              <div class="climate_frame8-btn">
                <button>
                  <router-link to=""> FIND OUT MORE</router-link>
                  <img alt="logonew" src="../assets/images/LogoN.png" />
                </button>
              </div>
            </div>
          </div>
          <div class="conatiner climate_frame2">
            <div class="climate_frame2-left">
              <h2 class="climate_frame2-left-heading">
                TRANSPORTATION MEASURES
              </h2>
              <ul class="climate_frame2-left-list">
                <li>Maritime transportation for the long distances</li>
                <li>
                  100% of green coffee travels by rail from European ports
                </li>
                <li>
                  More rail transportation in Europe and optimized pallet
                  contents
                </li>
              </ul>
            </div>
            <div class="climate_frame2-right" style="width: 100%; height: 100%">
              <img
                src="../assets/images/sustainability&recycling/climate_3.png"
                style="width: 100%; height: 100%"
              />
            </div>
          </div>
          <div class="climate_frame7">
            <div class="climate_frame7-right" style="width: 100%; height: 100%">
              <img
                src="../assets/images/sustainability&recycling/climate_4.png"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="climate_frame7-left">
              <h2 class="climate_frame7-left-heading">OPERATIONS</h2>
              <ul class="climate_frame7-left-list">
                <li>
                  100% of electricity in factories generated from renewable
                  sources
                </li>
                <li>Romont production site awarded LEED® Gold certification</li>
                <li>Production centers 'zero waste to landfill' since 2014</li>
                <li>Photovoltaic solar panels - 50'000 kWh / year</li>
                <li>
                  Used coffee grounds generate renewable energy in Switzerland
                </li>
              </ul>
            </div>
          </div>
          <div class="climate_frame2">
            <div class="climate_frame2-left">
              <h2 class="climate_frame2-left-heading">
                BOUTIQUE TRANSFORMATIONS
              </h2>
              <p class="climate_frame2-left-des"></p>
              <ul class="climate_frame2-left-list">
                <li>Inspired by BREEAM/LEED certification</li>
                <li>
                  New shops eco-designed with sustainably sourced materials
                </li>
                <li>Furniture made from coffee grounds</li>
              </ul>
            </div>
            <div class="climate_frame2-right" style="width: 100%; height: 100%">
              <img
                src="../assets/images/sustainability&recycling/climate_5.png"
                style="width: 100%; height: 100%"
              />
            </div>
          </div>
        </div>
        <div class="background-3"></div>
        <div class="container" style="padding-bottom: 40px">
          <div style="padding-top: 40px; padding-bottom: 48px">
            <div class="climate_frame6">
              <h3 class="climate_frame6-heading">REGENERATIVE COFFEEE</h3>
              <p class="climate_frame6-des">
                For almost 20 years, we’ve supported AAA farmers in cultivating
                high-quality coffee, while protecting nature. We’ve also
                launched our first organic coffees from Peru, Indonesia and the
                Democratic Republic of Congo.
              </p>
            </div>
          </div>
          <div class="container climate_frame3">
            <div class="climate_frame3-item">
              <h3 class="climate_frame3-item-heading">BIODIVERSITY</h3>
              <p class="climate_frame3-item-des">
                Protect and monitor wildlife
              </p>
              <div class="climate_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/climate_10.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="climate_frame3-item">
              <h3 class="climate_frame3-item-heading">NATURE</h3>
              <p class="climate_frame3-item-des">
                Promote regenerative practices
              </p>
              <div class="climate_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/climate_7.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="climate_frame3-item">
              <h3 class="climate_frame3-item-heading">ORGANIC</h3>
              <p class="climate_frame3-item-des">Work in harmony with nature</p>
              <div class="climate_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/climate_8.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="climate_frame3-item">
              <h3 class="climate_frame3-item-heading">AGROFORESTRY</h3>
              <p class="climate_frame3-item-des">
                Plant trees to improve soil & resilience
              </p>
              <div class="climate_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/climate_9.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
