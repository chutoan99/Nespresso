<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductItem404",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div v-for="product in data" :key="product.id" class="product-item">
    <div class="product-tag">
      <span class="product-tag__name">promote</span>
    </div>
    <div class="product-card">
      <div class="product-card-wrapper">
        <span class="product-name">{{ product.name }}</span>
        <div class="product-image">
          <router-link to="/machines_detail">
            <img :src="product.image" alt="" />
          </router-link>
        </div>
        <span class="product-price">{{ product.price }}</span>
        <button class="product-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z"
              fill="white"
            />
          </svg>
          <span>Add to basket</span>
        </button>
      </div>
    </div>
  </div>
</template>
