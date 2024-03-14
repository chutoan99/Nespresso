<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductCartItem",
  components: {},
  props: ["data"],
});
</script>

<template lang="pug">
.card_item(v-for="card in data", :key="card.image")
  .card_item-img
    img(:src="card?.image")
  .card_item-title
    span {{ card?.title }}
</template>
