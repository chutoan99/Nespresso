<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductCoffeeItem",
  components: {},
  props: ["data"],
});
</script>

<template lang="pug">
.product-item(v-for="product in data", :key="product.id")
  .product-tag(v-if="product.tag")
    span.product-tag__name {{ product?.tag }}
  .product-image
    router-link(:to="'./coffee_detail?id=' + product.id")
      img(:src="product.image" :alt="product.alt")
  .product-content
    .product-desc
      h6.product-name {{ product?.name }}
      .product-type__sleeve.
        {{ product?.sleeve }}
      .product-type__size
        .product-type__size-icon(v-for="size in product.sizes", :key="size.id")
          img(:src="size.image", alt)
          span {{ size?.size }}
      .product-type__intensity
        span Intensity
        .product-type__intensity-icon
          i(v-for="i in product.intensity", :key="i")
          span {{ product?.intensity }}
    .product-footer
      .product-price
        p.product-price-total {{ product?.price }}
        p.product-capsule {{ product?.capsule }}
        p.product-capsule.
          {{ product?.capsulePrice }}
      button.product-add
        img(src="assets/svgs/cart.svg", alt)
        span ADD TO BASKET
</template>
