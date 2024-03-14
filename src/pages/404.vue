<script lang="ts">
import { defineComponent } from "vue";
//? APP
import { data_product } from "@/utils/data_product_404";
import ProductItem404 from "@/components/product_item_404.vue";
export default defineComponent({
  name: "NotPoundPage",
  components: {
    ProductItem404,
  },
  data() {
    return {
      dataProduct: data_product,
    };
  },
});
</script>

<template lang="pug">
main#Page404
  section#banner
    img(src='assets/images/banner-1.png' alt='banner')
  section.container.caption
    div
      h3.caption-title SORRY, PAGE NOT FOUND
      p.caption-text
        | Sometimes technology fails, us but coffee never does. Why not grab
        | yourself a cup and then head back to the Homepage?
      button.caption-btn
        router-link(to='/')  GO TO HOMEPAGE 
    img(src='assets/images/page404/404.png' alt='404')
  section.product
    .container
      .product-list
        ProductItem404(v-bind:data='dataProduct')
</template>
