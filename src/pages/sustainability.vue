<script lang="ts">
import { defineComponent } from "vue";
//? APP
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";

export default defineComponent({
  name: "SustainabilityPage",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },

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

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />
      <section id="tabs">
        <div class="tabs">
          <router-link
            v-for="tab in tabs"
            :key="tab.value"
            :to="`/sustainability/${tab.value}`"
            class="tabs_heading"
            :class="{ tab_active: isActive(tab.value) }"
          >
            {{ tab.label }}
          </router-link>
        </div>
      </section>
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>
