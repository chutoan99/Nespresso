<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MoreItem",
  components: {},
  props: ["data"],
});
</script>

<template>
  <div class="moreInfo_item" v-for="item in data" :key="item.heading">
    <div class="moreInfo_item-wrapper">
      <h3 class="moreInfo_item-heading">{{ item.heading }}</h3>
      <p class="moreInfo_item-title">{{ item.title }}</p>
      <div class="moreInfo_item-btn">
        <button><span>GET THE RECIPE</span></button>
      </div>
    </div>
    <div class="moreInfo_item-img">
      <img :src="item.image" alt="moreInfo_item" style="width: '100%'" />
    </div>
  </div>
</template>
