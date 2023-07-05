<script lang="ts">
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

<style lang="scss" scope>
@import "src/sass/base/_global.scss";
@import "src/sass/base/_reset";
@import "src/sass/base/_variable";
#pageNotFound {
  .messages {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20.8125rem;
    &-text {
      font-style: normal;
      font-weight: 600;
      font-size: 3rem;
      line-height: 3.25rem;
      color: $black-900;
      text-align: center;
    }
  }
}
/* Tablet: width >= 768px and width < 1024px */
@media only screen and (min-width: 48rem) and (max-width: 63.938rem) {
  #pageNotFound {
    .messages {
      margin-top: 3.125rem;
    }
  }
}

/* Mobile: width < 768px */
@media only screen and (max-width: 47.938em) {
  #pageNotFound {
    .caption {
      flex-direction: row;
      align-items: center;
      display: flex;
      margin: 0 auto;
      padding: 11.25rem 0;
      gap: 6rem;
    }
    .messages {
      margin-top: 3.125rem;
    }
  }
}
</style>
