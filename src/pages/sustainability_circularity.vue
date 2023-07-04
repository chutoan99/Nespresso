<script lang="ts">
import "../css/pages/circularity-sustainability.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sustainabilityCircularityPage",
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
          <a href="./sustainability-recycling.html" class="tabs_heading"
            >COMMITMENT</a
          >
          <a href="./bcorp-sustainability.html" class="tabs_heading">B CORP</a>
          <a
            href="./circularity-sustainability.html"
            class="tabs_heading tab_active"
            >CIRCULARITY</a
          >
          <a href="./climate-sustainability.html" class="tabs_heading"
            >CLIMATE</a
          >
          <a href="./communities-sustainability.html" class="tabs_heading"
            >COMMUNITY</a
          >
        </div>
      </section>

      <section id="circularity" class="circularity">
        <div class="background-1">
          <div class="circularity_frame-wrapper">
            <h3 class="circularity_frame-heading">CIRCULARITY</h3>
            <p class="circularity_frame-des">
              A RESILIENT APPROACH THAT IS GOOD FOR BUSINESS, PEOPLE AND PLANET
            </p>
          </div>
        </div>
        <div class="container">
          <h3 class="circularity_frame1-heading">AS A B CORP™</h3>
          <h3 class="circularity_frame1-title">INFINITE POSSIBILITIES</h3>
          <p class="circularity_frame1-des">
            Since launching our first recycling scheme in 1991, we’ve embarked
            on a journey towards a more circular model, designed to use less and
            keep materials in use for longer. At the heart of our commitment to
            B Corp values, this ambition continues to grow. From precision
            consumption to refurbished coffee machines.
          </p>
          <div class="circularity_frame1-img">
            <img
              alt=""
              src="../assets/images/sustainability&recycling/circularity_3.png"
              height="100%"
            />
          </div>
        </div>
        <div class="circularity_frame6 container">
          <h3 class="circularity_frame6-heading">ALL IN FOR RECYCLING</h3>
          <p class="circularity_frame6-des">
            Over the last 30 years, together, we’ve strived to give the aluminum
            and used coffee grounds in our capsules a new lease of life. 9 out
            of 10 customers now have a recycling collection point within 5km.
            This is just the beginning, as we use more recycled content and
            extend recycling through industry-wide collective systems.
          </p>
          <span class="circularity_frame6-title"
            >Infinitely recyclable aluminum
          </span>
          <span class="circularity_frame6-title">
            100,000+ collection points across the globe
          </span>
          <span class="circularity_frame6-title">
            Original and Vertuo capsules made using 80%+ recycled aluminum, by
            end 2022</span
          >
        </div>
        <div class="container circularity_frame2">
          <div class="circularity_frame2-left">
            <h2 class="circularity_frame2-left-heading">DOING OUR BIT</h2>
            <p class="circularity_frame2-left-des">
              To make recycling easier and more convenient, we have created a
              recycling scheme with more than 100,000 collection points
              worldwide, including home collection and postal services. So your
              coffee grounds can be transformed into renewable energy sources on
              compost, and your capsules can become new aluminum objects.
            </p>
            <span class="circularity_frame2-left-find">DIVE IN</span>
          </div>
          <div
            class="circularity_frame2-right"
            style="width: 100%; height: 100%"
          >
            <img
              src="../assets/images/sustainability&recycling/circularity_2.png"
              style="width: 100%; height: 100%"
            />
          </div>
        </div>
        <div class="container" style="padding-top: 40px; padding-bottom: 48px">
          <div class="circularity_frame6">
            <h3 class="circularity_frame6-heading">
              RE-THINK. RE-USE. RE-LOVE.
            </h3>
            <p class="circularity_frame6-des">
              On our path as a B Corp, we’re more committed than ever to
              optimizing resources and minimizing waste. Every action has an
              impact. Each innovative idea can make us more efficient. Together,
              we can continue to bring this commitment to life.
            </p>
          </div>
        </div>
        <div class="container circularity_frame3">
          <div class="circularity_frame3-item">
            <h3 class="circularity_frame3-item-heading">
              PRECISION CONSUMPTION
            </h3>
            <p class="circularity_frame3-item-des">
              Just the right amount of water, energy and coffee
            </p>
            <div class="circularity_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/circularity_5.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div class="circularity_frame3-item">
            <h3 class="circularity_frame3-item-heading">ALUMINIUM</h3>
            <p class="circularity_frame3-item-des">
              The first global sustainable aluminium standard (ASI)
            </p>
            <div class="circularity_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/circularity_4.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div class="circularity_frame3-item">
            <h3 class="circularity_frame3-item-heading">RE-LOVE</h3>
            <p class="circularity_frame3-item-des">
              Longer machine lifespans, repairs and refurbishment
            </p>
            <div class="circularity_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/circularity_6.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
