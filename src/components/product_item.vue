<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductItem",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div class="product_item" v-for="item in data" :key="item.id">
    <h3 class="product_item-heading">{{ item.name }}</h3>
    <div class="product_item-img">
      <img
        :src="item.image"
        :alt="item.name"
        style="width: '160px'; height: '160px'"
      />
    </div>
    <div class="product_item-price">
      <span>{{ item.price }} </span>
      <label> {{ item.old_price }}</label>
    </div>
    <div class="product_item-btn">
      <button>
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
        <span> ADD TO BASKET </span>
      </button>
    </div>
    <span class="product_item-ticket">{{ item.label }}</span>
  </div>
</template>
