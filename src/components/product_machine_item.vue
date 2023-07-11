<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductMachineItem",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div class="product-item" v-for="item in data" :key="item.id">
    <div class="product-tag">
      <span class="product-tag__name">{{ item.label }}</span>
    </div>
    <router-link to="/machines_detail" class="product-image">
      <img :src="item.image" :alt="item.name" />
    </router-link>
    <p class="product-name">{{ item.name }}</p>
    <p class="product-desc">{{ item.description }}</p>
    <div class="product-type">
      <p class="product-type__text">Available colors:</p>
      <div class="product-type__color">
        <span class="product-type__color--red"></span>
        <span class="product-type__color--black"></span>
        <span class="product-type__color--green"></span>
        <span class="product-type__color--brick-red"></span>
      </div>
    </div>
    <div class="product-price">
      <p class="product-price__num">{{ item.price }}</p>
    </div>
    <div class="product-btn">
      <router-link to="/machines_detail">VIEW MORE DETAILS </router-link>
    </div>
  </div>
</template>
