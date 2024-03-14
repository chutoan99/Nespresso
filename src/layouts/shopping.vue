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

<template lang="pug">
.wrapper
  .wrapper-innner
    HeaderCustom
    router-view
    Footer.
</template>
