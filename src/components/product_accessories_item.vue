<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductAccessoriesItem",
  components: {},
  props: ["data"],
});
</script>

<template lang="pug">
.product-item(v-for="item in data", :key="item.name")
  .product-image
    router-link(to="/accessories_detail")
      img(:src="item.image", alt)
    p.product-name {{ item?.name }}
  .product-content
    span.product-price {{ item?.price }}
    button.product-add
      svg(width="24", height="24", viewBox="0 0 24 24", fill="none", xmlns="http://www.w3.org/2000/svg")
        path(fill-rule="evenodd", clip-rule="evenodd", d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z", fill="white")
      span Add to basket
</template>
