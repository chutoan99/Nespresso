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

<template>
  <main id="Page404">
    <section id="banner">
      <img src="assets/images/banner-1.png" alt="banner" />
    </section>
    <section class="container caption">
      <div>
        <h3 class="caption-title">SORRY, PAGE NOT FOUND</h3>
        <p class="caption-text">
          Sometimes technology fails, us but coffee never does. Why not grab
          yourself a cup and then head back to the Homepage?
        </p>
        <button class="caption-btn">
          <router-link to="/"> GO TO HOMEPAGE </router-link>
        </button>
      </div>
      <img src="assets/images/page404/404.png" alt="404" />
    </section>

    <section class="product">
      <div class="container">
        <div class="product-list">
          <ProductItem404 v-bind:data="dataProduct" />
        </div>
      </div>
    </section>
  </main>
</template>
