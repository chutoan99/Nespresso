<script lang="ts">
import { defineComponent } from "vue";
//? APP
import Footer from "@/containers/Footer.vue";
import HeaderCustom from "@/containers/HeaderCustom.vue";
export default defineComponent({
  name: "ShoppingLayout",
  components: {
    Footer,
    HeaderCustom,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <HeaderCustom />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>
