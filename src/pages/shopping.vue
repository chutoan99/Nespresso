<script lang="ts">
import { defineComponent } from "vue";
//? APP
import Footer from "@/containers/Footer.vue";
import HeaderCustom from "@/containers/HeaderCustom.vue";
export default defineComponent({
  name: "ShoppingPage",
  components: {
    Footer,
    HeaderCustom,
  },
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

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <HeaderCustom />
      <!-- progressbar -->
      <section id="progressbar">
        <ul class="progressbar container">
          <li
            v-for="step in progressSteps"
            :key="step.id"
            class="progressbar_item"
            :class="{ 'item-active': step.isActive }"
          >
            <router-link
              class="progressbar_item-link"
              :to="step.path"
              @click="handleLinkClick(step)"
            >
              <span
                >{{ step.step }}
                <svg
                  :style="{ display: step.isActive ? 'block' : 'none' }"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>

              <span class="hide_on-mobile">{{ step.label }}</span>
            </router-link>
          </li>
        </ul>
        tạo file json tương ứng và render bằng vue giúp tôi
      </section>

      <main id="shopping_bag">
        <router-view></router-view>
      </main>

      <Footer />
    </div>
  </div>
</template>
