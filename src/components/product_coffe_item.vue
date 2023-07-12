<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductCoffeeItem",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div class="product-item" v-for="product in data" :key="product.id">
    <div class="product-tag" v-if="product.tag">
      <span class="product-tag__name">{{ product.tag }}</span>
    </div>

    <div class="product-image">
      <router-link :to="'./coffee_detail?id=' + product.id">
        <img :src="product.image" :alt="product.alt" />
      </router-link>
    </div>
    <div class="product-content">
      <div class="product-desc">
        <h6 class="product-name">{{ product.name }}</h6>
        <div class="product-type__sleeve">
          {{ product.sleeve }}
        </div>
        <div class="product-type__size">
          <div
            class="product-type__size-icon"
            v-for="size in product.sizes"
            :key="size.id"
          >
            <img :src="size.image" alt="" />
            <span>{{ size.size }}</span>
          </div>
        </div>
        <div class="product-type__intensity">
          <span>Intensity</span>
          <div class="product-type__intensity-icon">
            <i v-for="i in product.intensity" :key="i"></i>
            <span>{{ product.intensity }}</span>
          </div>
        </div>
      </div>
      <div class="product-footer">
        <div class="product-price">
          <p class="product-price-total">{{ product.price }}</p>
          <p class="product-capsule">{{ product.capsule }}</p>
          <p class="product-capsule">
            {{ product.capsulePrice }}
          </p>
        </div>
        <button class="product-add">
          <img src="assets/svgs/cart.svg" alt="" />
          <span>ADD TO BASKET</span>
        </button>
      </div>
    </div>
  </div>
</template>
