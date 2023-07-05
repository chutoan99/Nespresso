<script lang="ts">
import "../css/pages/sustainability.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityPage",
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
      <Nav />
      <section id="tabs">
        <div class="tabs">
          <router-link to="/sustainability_recycling" class="tabs_heading"
            >COMMITMENT</router-link
          >
          <router-link
            to="/sustainability_bcorp "
            class="tabs_heading tab_active"
            >B CORP</router-link
          >
          <router-link to="/sustainability_circularity" class="tabs_heading"
            >CIRCULARITY</router-link
          >
          <router-link to="/sustainability_climate" class="tabs_heading"
            >CLIMATE</router-link
          >
          <router-link to="/sustainability_communities" class="tabs_heading"
            >COMMUNITY</router-link
          >
        </div>
      </section>
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>
