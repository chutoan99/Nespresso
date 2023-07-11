<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductCartItem",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div v-for="card in data" :key="card.image" class="card_item">
    <div class="card_item-img">
      <img :src="card.image" />
    </div>
    <div class="card_item-title">
      <span>{{ card.title }}</span>
    </div>
  </div>
</template>
