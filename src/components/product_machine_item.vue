<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductMachineItem",
  components: {},
  props: ["data"],
});
</script>

<template lang="pug">
.product-item(v-for="item in data", :key="item.id")
  .product-tag
    span.product-tag__name {{ item.label }}
  router-link.product-image(to="/machines_detail")
    img(:src="item.image", :alt="item.name")
  p.product-name {{ item.name }}
  p.product-desc {{ item.description }}
  .product-type
    p.product-type__text Available colors:
    .product-type__color
      span.product-type__color--red
      span.product-type__color--black
      span.product-type__color--green
      span.product-type__color--brick-red
  .product-price
    p.product-price__num {{ item.price }}
  .product-btn
    router-link(to="/machines_detail") VIEW MORE DETAILS
</template>
