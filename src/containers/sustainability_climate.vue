<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityClimatePage",
  components: {},
});
</script>

<template lang="pug">
section#climate.climate
  .background-1
    .climate_frame-wrapper
      h3.climate_frame-heading THE POWER OF COFFEE
      p.climate_frame-des AS A POSITIVE FORCE FOR THE PLANET
  .climate_frame1.container
    h3.climate_frame1-heading AS A B CORP&trade;
    h3.climate_frame1-title NURTURING NATURE
    p.climate_frame1-des
      | Ecosystems are delicate. That&rsquo;s why we believe it is important to
      | regenerate land, restore healthy ecosystems, and build resilience
      | against the impacts of climate change. So the land can thrive, while
      | also providing high-quality coffee to savor.
  .background-2
    .climate_frame4-wrapper
      h3.climate_frame4-heading
        | WATCH THE VIDEO
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
  .container
    .climate_frame8
      h3.climate_frame8-heading AS A B CORP&trade;
      h4.climate_frame8-title NURTURING NATURE
      p.climate_frame8-des
        | Ecosystems are delicate. That&rsquo;s why we believe it is important to
        | regenerate land, restore healthy ecosystems, and build resilience
        | against the impacts of climate change. So the land can thrive, while
        | also providing high-quality coffee to savor.
      div
        .climate_frame8-btn
          button
            router-link(to='')  FIND OUT MORE
            img(alt='logonew' src='/assets/images/LogoN.png')
    .conatiner.climate_frame2
      .climate_frame2-left
        h2.climate_frame2-left-heading TRANSPORTATION MEASURES
        ul.climate_frame2-left-list
          li Maritime transportation for the long distances
          li 100% of green coffee travels by rail from European ports
          li
            | More rail transportation in Europe and optimized pallet contents
      .climate_frame2-right(style='width: 100%; height: 100%')
        img(src='/assets/images/sustainability&recycling/climate_3.png' style='width: 100%; height: 100%')
    .climate_frame7
      .climate_frame7-right(style='width: 100%; height: 100%')
        img(src='/assets/images/sustainability&recycling/climate_4.png' style='width: 100%; height: 100%')
      .climate_frame7-left
        h2.climate_frame7-left-heading OPERATIONS
        ul.climate_frame7-left-list
          li
            | 100% of electricity in factories generated from renewable sources
          li Romont production site awarded LEED&reg; Gold certification
          li Production centers &apos;zero waste to landfill&apos; since 2014
          li Photovoltaic solar panels - 50&apos;000 kWh / year
          li
            | Used coffee grounds generate renewable energy in Switzerland
    .climate_frame2
      .climate_frame2-left
        h2.climate_frame2-left-heading BOUTIQUE TRANSFORMATIONS
        p.climate_frame2-left-des
        ul.climate_frame2-left-list
          li Inspired by BREEAM/LEED certification
          li New shops eco-designed with sustainably sourced materials
          li Furniture made from coffee grounds
      .climate_frame2-right(style='width: 100%; height: 100%')
        img(src='/assets/images/sustainability&recycling/climate_5.png' style='width: 100%; height: 100%')
  .background-3
  .container(style='padding-bottom: 40px')
    div(style='padding-top: 40px; padding-bottom: 48px')
      .climate_frame6
        h3.climate_frame6-heading REGENERATIVE COFFEEE
        p.climate_frame6-des
          | For almost 20 years, we&rsquo;ve supported AAA farmers in cultivating
          | high-quality coffee, while protecting nature. We&rsquo;ve also launched
          | our first organic coffees from Peru, Indonesia and the Democratic
          | Republic of Congo.
    .container.climate_frame3
      .climate_frame3-item
        h3.climate_frame3-item-heading BIODIVERSITY
        p.climate_frame3-item-des Protect and monitor wildlife
        .climate_frame3-item-img
          img(src='/assets/images/sustainability&recycling/climate_10.png' alt='' width='100%' height='100%')
      .climate_frame3-item
        h3.climate_frame3-item-heading NATURE
        p.climate_frame3-item-des Promote regenerative practices
        .climate_frame3-item-img
          img(src='/assets/images/sustainability&recycling/climate_7.png' alt='' width='100%' height='100%')
      .climate_frame3-item
        h3.climate_frame3-item-heading ORGANIC
        p.climate_frame3-item-des Work in harmony with nature
        .climate_frame3-item-img
          img(src='/assets/images/sustainability&recycling/climate_8.png' alt='' width='100%' height='100%')
      .climate_frame3-item
        h3.climate_frame3-item-heading AGROFORESTRY
        p.climate_frame3-item-des
          | Plant trees to improve soil &amp; resilience
        .climate_frame3-item-img
          img(src='/assets/images/sustainability&recycling/climate_9.png' alt='' width='100%' height='100%')
</template>
