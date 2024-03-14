<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductRecommenItem",
  components: {},
  props: ["data"],
});
</script>

<template lang="pug">
.product-item(v-for="product in data", :key="product.image")
  .product-image
    router-link(to="/accessories_detail")
      img(:src="product.image", :alt="product.alt")
    p.product-name {{ product?.name }}
  .product-content
    span.product-price {{ product?.price }}
    button.product-add
      img(src="/assets/svgs/icon-plus.svg", alt)
</template>
