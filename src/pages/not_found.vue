<script lang="ts">
import "../css/pages/not_found.css";
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound2Page",
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
      <!-- Header -->
      <NavigationComponent />
      <!-- Navigation -->

      <main id="pageNotFound">
        <div class="container messages">
          <p class="messages-text">Oops! That page can’t be found.</p>
        </div>
      </main>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>

<style lang="scss" scope></style>
