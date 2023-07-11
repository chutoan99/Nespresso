<script lang="ts">
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";
import { data_product_machine } from "@/utils/data_produc_machine";
import ProductMachineItem from "@/components/product_machine_item.vue";
export default defineComponent({
  name: "MachinesPage",
  components: {
    Header,
    NavigationComponent,
    Footer,
    ProductMachineItem,
  },
  data() {
    return {
      data_product_machine: data_product_machine,
      isExpanded: false,
      colorLabels: [
        { name: "red", color: "#f10404", checked: false },
        { name: "black", color: "#000000", checked: false },
        { name: "white", color: "#ffffff", checked: false },
      ],
    };
  },
  methods: {
    toggleModal() {
      this.isExpanded = !this.isExpanded;
      console.log("shfj");
    },

    OnchangeLabel(label: any) {
      this.colorLabels.forEach((item) => {
        item.checked = item === label;
      });
    },
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />
      <main id="machines">
        <section class="hero">
          <p class="banner__title">ORIGINAL COFFEE MACHINES</p>
          <p class="font_heading-5 banner__content">
            Free Delivery for any coffee machine.
          </p>
        </section>

        <section class="container">
          <div class="filter-machines">
            <div class="filter-number">
              <span>13 MACHINES</span>
            </div>
          </div>
          <div class="filter-wrapper">
            <div class="filter-button filter-toggle">
              <button
                id="filterButton"
                @click="toggleModal"
                :aria-expanded="isExpanded ? 'true' : 'false'"
                class="filter-sublabel"
              >
                Filter
              </button>
            </div>

            <div
              id="modal"
              class="filter-list"
              :style="{ display: isExpanded ? 'none' : 'block' }"
            >
              <div class="filter-item">
                <p class="filter-item__name">color</p>

                <ul class="filter-item__ellipse">
                  <li
                    v-on:click="OnchangeLabel(item)"
                    v-for="item in colorLabels"
                    :key="item.name"
                    class="filter-item__color"
                  >
                    <label
                      :class="[
                        'filter-item__label',
                        { 'filter-item__label--checked': item.checked },
                      ]"
                      :for="`FilterColor-${item.name}`"
                      :style="{ 'background-color': item.color }"
                    >
                      <span class="VisuallyHidden">{{ item.name }}</span>
                    </label>
                    <input
                      type="radio"
                      name="FilterColor"
                      :id="`FilterColor-${item.name}`"
                      :value="item.name"
                    />
                  </li>
                </ul>
              </div>

              <div class="filter-item">
                <p class="filter-item__name">PRICEV</p>

                <div class="price-input">
                  <div class="field">
                    <input type="number" class="input-min" value="400000" />
                  </div>
                  <div class="field" style="text-align: end">
                    <input type="number" class="input-max" value="10000000" />
                  </div>
                </div>
                <div class="slider">
                  <div class="progress"></div>
                </div>
                <div class="range-input">
                  <input
                    type="range"
                    class="range-min"
                    min="400000"
                    max="10000000"
                    value="400000"
                    step="100000"
                  />
                  <input
                    type="range"
                    class="range-max"
                    min="400000"
                    max="10000000"
                    value="10000000"
                    step="100000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="banner">
            <img src="assets/images/machines/machines_icon1.png" alt="" />
            <div class="banner-desciption">
              <p class="banner-heading font_heading-5">MACHINE SUBSCRIPTION</p>
              <p class="banner-content font_body-1">
                Get your coffee machine for just 1 RON
              </p>
            </div>
            <button class="banner-btn">DISCOVER MORE</button>
          </div>

          <div class="product-list">
            <ProductMachineItem v-bind:data="data_product_machine" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
</template>
