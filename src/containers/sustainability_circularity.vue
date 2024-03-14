<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sustainabilityCircularityPage",
  components: {},
});
</script>

<template lang="pug">
section#circularity.circularity
  .background-1
    .circularity_frame-wrapper
      h3.circularity_frame-heading CIRCULARITY
      p.circularity_frame-des
        | A RESILIENT APPROACH THAT IS GOOD FOR BUSINESS, PEOPLE AND PLANET
  .container
    h3.circularity_frame1-heading AS A B CORP&trade;
    h3.circularity_frame1-title INFINITE POSSIBILITIES
    p.circularity_frame1-des
      | Since launching our first recycling scheme in 1991, we&rsquo;ve embarked on a
      | journey towards a more circular model, designed to use less and keep
      | materials in use for longer. At the heart of our commitment to B Corp
      | values, this ambition continues to grow. From precision consumption to
      | refurbished coffee machines.
    .circularity_frame1-img
      img(alt='' src='/assets/images/sustainability&recycling/circularity_3.png' height='100%')
  .circularity_frame6.container
    h3.circularity_frame6-heading ALL IN FOR RECYCLING
    p.circularity_frame6-des
      | Over the last 30 years, together, we&rsquo;ve strived to give the aluminum and
      | used coffee grounds in our capsules a new lease of life. 9 out of 10
      | customers now have a recycling collection point within 5km. This is just
      | the beginning, as we use more recycled content and extend recycling
      | through industry-wide collective systems.
    span.circularity_frame6-title
      | Infinitely recyclable aluminum
    span.circularity_frame6-title
      | 100,000+ collection points across the globe
    span.circularity_frame6-title
      | Original and Vertuo capsules made using 80%+ recycled aluminum, by end
      | 2022
  .container.circularity_frame2
    .circularity_frame2-left
      h2.circularity_frame2-left-heading DOING OUR BIT
      p.circularity_frame2-left-des
        | To make recycling easier and more convenient, we have created a
        | recycling scheme with more than 100,000 collection points worldwide,
        | including home collection and postal services. So your coffee grounds
        | can be transformed into renewable energy sources on compost, and your
        | capsules can become new aluminum objects.
      span.circularity_frame2-left-find DIVE IN
    .circularity_frame2-right(style='width: 100%; height: 100%')
      img(src='/assets/images/sustainability&recycling/circularity_2.png' style='width: 100%; height: 100%')
  .container(style='padding-top: 40px; padding-bottom: 48px')
    .circularity_frame6
      h3.circularity_frame6-heading RE-THINK. RE-USE. RE-LOVE.
      p.circularity_frame6-des
        | On our path as a B Corp, we&rsquo;re more committed than ever to optimizing
        | resources and minimizing waste. Every action has an impact. Each
        | innovative idea can make us more efficient. Together, we can continue
        | to bring this commitment to life.
  .container.circularity_frame3
    .circularity_frame3-item
      h3.circularity_frame3-item-heading PRECISION CONSUMPTION
      p.circularity_frame3-item-des
        | Just the right amount of water, energy and coffee
      .circularity_frame3-item-img
        img(src='/assets/images/sustainability&recycling/circularity_5.png' alt='' width='100%' height='100%')
    .circularity_frame3-item
      h3.circularity_frame3-item-heading ALUMINIUM
      p.circularity_frame3-item-des
        | The first global sustainable aluminium standard (ASI)
      .circularity_frame3-item-img
        img(src='/assets/images/sustainability&recycling/circularity_4.png' alt='' width='100%' height='100%')
    .circularity_frame3-item
      h3.circularity_frame3-item-heading RE-LOVE
      p.circularity_frame3-item-des
        | Longer machine lifespans, repairs and refurbishment
      .circularity_frame3-item-img
        img(src='/assets/images/sustainability&recycling/circularity_6.png' alt='' width='100%' height='100%')
</template>
