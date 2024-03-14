<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "ShoppingPage",
  data() {
    return {
      progressSteps: [
        {
          id: 1,
          step: "Step 1",
          label: "Shopping bag summary",
          isActive: false,
          path: "step_1",
        },
        {
          id: 2,
          step: "Step 2",
          label: "Delivery setup",
          isActive: false,
          path: "step_2",
        },
        {
          id: 3,
          step: "Step 3",
          label: "Payment",
          isActive: false,
          path: "step_3",
        },
        {
          id: 4,
          step: "Step 4",
          label: "Shopping summary",
          isActive: false,
          path: "step_4",
        },
        {
          id: 5,
          step: "Step 5",
          label: "Shopping confirmation",
          isActive: false,
          path: "step_5",
        },
      ],
      currentTab: "",
    };
  },
  computed: {
    getParam(): string {
      const pathSegments = this.$route.path.split("/");
      return pathSegments[pathSegments.length - 1];
    },
  },

  mounted() {
    this.currentTab = this.getParam;
    this.getData();
  },
  methods: {
    getData() {
      let foundCurrentTab = false;
      this.progressSteps.forEach((item, index) => {
        if (item.path === this.currentTab) {
          foundCurrentTab = true;
          this.progressSteps[index].isActive = false;
          if (index === this.progressSteps.length - 1) {
            this.progressSteps.forEach((item) => {
              item.isActive = true;
            });
          }
        } else if (foundCurrentTab) {
          this.progressSteps[index].isActive = false;
        } else {
          this.progressSteps[index].isActive = true;
        }
      });
    },
    handleLinkClick(step: any) {
      this.$nextTick(() => {
        this.currentTab = step.path;
        this.getData();
      });
    },
  },
});
</script>

<template lang="pug">
section#progressbar
  ul.progressbar.container
    li.progressbar_item(v-for='step in progressSteps' :key='step.id' :class="{ 'item-active': step.isActive }")
      router-link.progressbar_item-link(:to='step.path' @click='handleLinkClick(step)')
        span
          | {{ step?.step }}
          svg(:style="{ display: step.isActive ? 'block' : 'none' }" width='18' height='13' viewbox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M17 1L6 12L1 7' stroke='#3D8705' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
        span.hide_on-mobile {{ step.label }}
  |     t&#x1EA1;o file json t&#x1B0;&#x1A1;ng &#x1EE9;ng v&agrave; render b&#x1EB1;ng vue gi&uacute;p t&ocirc;i
main#shopping_bag
  router-view
</template>
