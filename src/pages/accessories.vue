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

<template lang="pug">
main#accessories
  section.hero
    p.hero-title NESPRESSO ACCESSORIES
    p.hero-content
      | Free Delivery for min. 100 lei, in 2 working days.
  section.container
    .filter-accessories
      .filter-number
        span 77 ACCESSORIES
    .filter-wrapper
      .filter-button.filter-toggle
        button#filterButton.filter-sublabel(@click='toggleModal' :aria-expanded="isExpanded ? 'true' : 'false'")
          | Filter
      #modal.filter-list(:style="{ display: isExpanded ? 'none' : 'block' }")
        .filter-content
          label.filter-label(for='collection-select') TYPE
          .filter-item
            select#type-select.filter-item__select(name='type')
              option(value='ALL_VALUES') All
              option(value='Coffee Mug') Coffee Mug
              option(value='Spoons') Spoons
              option(value='Glasses') Glasses
              option(value='Sugar') Sugar
              option(value='Maintenance') Maintenance
              option(value='Food') Food
              option(value='Biscuits') Biscuits
              option(value='Capsule Dispenser') Capsule Dispenser
              option(value='Milk Solution') Milk Solution
        .filter-content
          label.filter-label(for='type-select') COLLECTION
          .filter-item
            select#collection-select.filter-item__select(name='collection')
              option(value='ALL_VALUES') All
              option(value='Barista Creations on Ice')
                | Barista Creations on Ice
              option(value='Vertuo') Vertuo
              option(value='Best sellers') Best sellers
              option(value='Aeroccino') Aeroccino
              option(value='Food And Bites') Food And Bites
              option(value='Nomad') Nomad
              option(value='Barista Collection') Barista Collection
              option(value='Nude') Nude
              option(value='View') View
              option(value='Lume') Lume
              option(value='Origin') Origin
              option(value='Pixie') Pixie
              option(value='Touch') Touch
              option(value='Sustainable Choices') Sustainable Choices
              option(value='Capsules Dispensers') Capsules Dispensers
              option(value='Sugars') Sugars
              option(value='Maintenance') Maintenance
              option(value='Reveal') Reveal
              option(value='Recycling') Recycling
              option(value='Glass') Glass
  section.banner
    img(src='assets/images/product/banner.png' alt='banner')
    .banner-info
      span.banner-title ORIGINAL COFFEE CAPSULES
      h6.banner-desc
        | Get 10% credit back in your accountwith Subscription by Nespresso
      span.banner-more READ MORE
    button.banner-btn(type='submit')
      img(src='assets/svgs/cart.svg' alt='cart')
      | Buy Now
  section.product-wrapper
    .product-inner.background-1
      .container
        p.product-title Milano Limited Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataLimited')
  section.product-wrapper
    .product-inner.background-2
      .container
        p.product-title New Arrival
        .product-list
          ProductAccessoriesItem(v-bind:data='dataNewArrival')
  section.product-wrapper
    .product-inner.background-3
      .container
        p.product-title Milk Frothers
        .product-list
          ProductAccessoriesItem(v-bind:data='dataMilkFrothers')
  section.product-wrapper
    .product-inner.background-4
      .container
        p.product-title Lume Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataLumeCollection')
  section.product-wrapper
    .product-inner.background-5
      .container
        p.product-title Reveal Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataRevealCollection')
  section.product-wrapper
    .product-inner.background-6
      .container
        p.product-title Maintenance
        .product-list
          ProductAccessoriesItem(v-bind:data='dataMaintenance')
  section.product-wrapper
    .product-inner.background-7
      .container
        p.product-title Nude Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataNudeCollection')
  section.product-wrapper.product-wrapper--high
    .product-inner.background-8.product-inner--high
      .container
        p.product-title Pixie Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataPixieCollection')
  section.product-wrapper.product-wrapper--high
    .product-inner.background-9.product-inner--high
      .container
        p.product-title Display Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataDisplayCollection')
  section.product-wrapper
    .product-inner.background-10
      .container
        p.product-title Ice Tray
        .product-list
          ProductAccessoriesItem(v-bind:data='dataIceTray1')
  section.product-wrapper
    .product-inner.background-10
      .container
        p.product-title Ice Tray
        .product-list
          ProductAccessoriesItem(v-bind:data='dataIceTray2')
  section.product-wrapper.product-wrapper--high
    .product-inner.product-inner--high.background-12
      .container
        p.product-title View Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataViewCollection1')
  section.product-wrapper.product-wrapper--high
    .product-inner.product-inner--high.background-13
      .container
        p.product-title View Collection
        .product-list
          ProductAccessoriesItem(v-bind:data='dataViewCollection2')
</template>
