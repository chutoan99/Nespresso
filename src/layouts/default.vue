<script lang="ts">
import { defineComponent } from "vue";
//? APP
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>
