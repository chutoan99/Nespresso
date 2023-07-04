<script lang="ts">
import "../css/pages/notfound.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound2Page",
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

      <main id="Page404">
        <div class="container messages">
          <p class="messages-text">Oops! That page can’t be found.</p>
        </div>
      </main>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
