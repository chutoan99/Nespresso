<script lang="ts">
import { defineComponent } from "vue";
//? APP
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";

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
      <NavigationComponent />
      <main id="pageNotFound">
        <div class="container messages">
          <p class="messages-text">Oops! That page can’t be found.</p>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scope></style>
