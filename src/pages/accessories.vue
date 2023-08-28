<script lang="ts">
import { defineComponent } from "vue";
//? APP

import ProductAccessoriesItem from "@/components/product_accessories_item.vue";
import {
  data_Limited,
  data_New_Arrival,
  data_Milk_Frothers,
  data_Lume_Collection,
  data_Reveal_Collection,
  data_Maintenance,
  data_Nude_Collection,
  data_Pixie_Collection,
  data_Display_Collection,
  data_IceTray_1,
  data_IceTray_2,
  data_View_Collection_1,
  data_View_Collection_2,
} from "@/utils/data_accessories";
export default defineComponent({
  name: "AccessoriesPage",
  components: {
    ProductAccessoriesItem,
  },
  data() {
    return {
      isExpanded: false,
      dataLimited: data_Limited,
      dataNewArrival: data_New_Arrival,
      dataMilkFrothers: data_Milk_Frothers,
      dataLumeCollection: data_Lume_Collection,
      dataRevealCollection: data_Reveal_Collection,
      dataMaintenance: data_Maintenance,
      dataNudeCollection: data_Nude_Collection,
      dataPixieCollection: data_Pixie_Collection,
      dataDisplayCollection: data_Display_Collection,
      dataIceTray1: data_IceTray_1,
      dataIceTray2: data_IceTray_2,
      dataViewCollection1: data_View_Collection_1,
      dataViewCollection2: data_View_Collection_2,
    };
  },
  methods: {
    toggleModal() {
      this.isExpanded = !this.isExpanded;
    },
  },
});
</script>

<template>
  <main id="accessories">
    <section class="hero">
      <p class="hero-title">NESPRESSO ACCESSORIES</p>
      <p class="hero-content">
        Free Delivery for min. 100 lei, in 2 working days.
      </p>
    </section>

    <section class="container">
      <div class="filter-accessories">
        <div class="filter-number">
          <span>77 ACCESSORIES</span>
        </div>
      </div>
      <div class="filter-wrapper">
        <div class="filter-button filter-toggle">
          <button
            id="filterButton"
            class="filter-sublabel"
            @click="toggleModal"
            :aria-expanded="isExpanded ? 'true' : 'false'"
          >
            Filter
          </button>
        </div>

        <div
          id="modal"
          class="filter-list"
          :style="{ display: isExpanded ? 'none' : 'block' }"
        >
          <div class="filter-content">
            <label for="collection-select" class="filter-label">TYPE</label>
            <div class="filter-item">
              <select name="type" id="type-select" class="filter-item__select">
                <option value="ALL_VALUES">All</option>
                <option value="Coffee Mug">Coffee Mug</option>
                <option value="Spoons">Spoons</option>
                <option value="Glasses">Glasses</option>
                <option value="Sugar">Sugar</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Food">Food</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Capsule Dispenser">Capsule Dispenser</option>
                <option value="Milk Solution">Milk Solution</option>
              </select>
            </div>
          </div>
          <div class="filter-content">
            <label for="type-select" class="filter-label">COLLECTION</label>
            <div class="filter-item">
              <select
                name="collection"
                id="collection-select"
                class="filter-item__select"
              >
                <option value="ALL_VALUES">All</option>
                <option value="Barista Creations on Ice">
                  Barista Creations on Ice
                </option>
                <option value="Vertuo">Vertuo</option>
                <option value="Best sellers">Best sellers</option>
                <option value="Aeroccino">Aeroccino</option>
                <option value="Food And Bites">Food And Bites</option>
                <option value="Nomad">Nomad</option>
                <option value="Barista Collection">Barista Collection</option>
                <option value="Nude">Nude</option>
                <option value="View">View</option>
                <option value="Lume">Lume</option>
                <option value="Origin">Origin</option>
                <option value="Pixie">Pixie</option>
                <option value="Touch">Touch</option>
                <option value="Sustainable Choices">Sustainable Choices</option>
                <option value="Capsules Dispensers">Capsules Dispensers</option>
                <option value="Sugars">Sugars</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Reveal">Reveal</option>
                <option value="Recycling">Recycling</option>
                <option value="Glass">Glass</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="banner">
      <img src="assets/images/product/banner.png" alt="banner" />
      <div class="banner-info">
        <span class="banner-title">ORIGINAL COFFEE CAPSULES</span>
        <h6 class="banner-desc">
          Get 10% credit back in your accountwith Subscription by Nespresso
        </h6>
        <span class="banner-more">READ MORE</span>
      </div>
      <button type="submit" class="banner-btn">
        <img src="assets/svgs/cart.svg" alt="cart" />Buy Now
      </button>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-1">
        <div class="container">
          <p class="product-title">Milano Limited Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataLimited" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-2">
        <div class="container">
          <p class="product-title">New Arrival</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataNewArrival" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-3">
        <div class="container">
          <p class="product-title">Milk Frothers</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataMilkFrothers" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-4">
        <div class="container">
          <p class="product-title">Lume Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataLumeCollection" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-5">
        <div class="container">
          <p class="product-title">Reveal Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataRevealCollection" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-6">
        <div class="container">
          <p class="product-title">Maintenance</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataMaintenance" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-7">
        <div class="container">
          <p class="product-title">Nude Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataNudeCollection" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper product-wrapper--high">
      <div class="product-inner background-8 product-inner--high">
        <div class="container">
          <p class="product-title">Pixie Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataPixieCollection" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper product-wrapper--high">
      <div class="product-inner background-9 product-inner--high">
        <div class="container">
          <p class="product-title">Display Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataDisplayCollection" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-10">
        <div class="container">
          <p class="product-title">Ice Tray</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataIceTray1" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper">
      <div class="product-inner background-10">
        <div class="container">
          <p class="product-title">Ice Tray</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataIceTray2" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper product-wrapper--high">
      <div class="product-inner product-inner--high background-12">
        <div class="container">
          <p class="product-title">View Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataViewCollection1" />
          </div>
        </div>
      </div>
    </section>

    <section class="product-wrapper product-wrapper--high">
      <div class="product-inner product-inner--high background-13">
        <div class="container">
          <p class="product-title">View Collection</p>
          <div class="product-list">
            <ProductAccessoriesItem v-bind:data="dataViewCollection2" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
