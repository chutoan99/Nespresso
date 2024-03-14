<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "SustainabilityPage",

  data() {
    return {
      tabs: [
        { value: "commitment", label: "COMMITMENT", isActive: true },
        { value: "bcorp", label: "B CORP", isActive: false },
        { value: "circularity", label: "CIRCULARITY", isActive: false },
        { value: "climate", label: "CLIMATE", isActive: false },
        { value: "community", label: "COMMUNITY", isActive: false },
      ],
      activeTab: "",
    };
  },
  computed: {
    category(): string {
      const pathSegments = this.$route.path.split("/");
      return pathSegments[pathSegments.length - 1];
    },
    isActive(): (value: string) => boolean {
      return (value: string) => this.activeTab === value;
    },
  },
  watch: {
    category(newCategory: string) {
      this.activeTab = newCategory;
    },
  },
  mounted() {
    this.activeTab = this.category;
    console.log(this.category);
  },
});
</script>

<template lang="pug">
section#tabs
  .tabs
    router-link.tabs_heading(v-for='tab in tabs' :key='tab.value' :to='`/sustainability/${tab.value}`' :class='{ tab_active: isActive(tab.value) }')
      | {{ tab.label }}
router-view
</template>
