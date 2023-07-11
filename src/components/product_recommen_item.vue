<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductRecommenItem",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div v-for="product in data" :key="product.image" class="product-item">
    <div class="product-image">
      <router-link to="/accessories_detail">
        <img :src="product.image" :alt="product.alt" />
      </router-link>
      <p class="product-name">{{ product.name }}</p>
    </div>
    <div class="product-content">
      <span class="product-price">{{ product.price }}</span>
      <button class="product-add">
        <img src="/assets/svgs/icon-plus.svg" alt="" />
      </button>
    </div>
  </div>
</template>
