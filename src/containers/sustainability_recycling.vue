<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityRecyclingPage",
  components: {},
});
</script>

<template lang="pug">
section#commitment.commitment
  .background-1
    .commitment_frame-content.container
      h3.commitment_frame-content-heading DOING IS EVERYTHING
      p.commitment_frame-content-des
        | BECAUSE COFFEE CAN BE A FORCE FOR GOOD&trade;
  .container
    .commitment_frame1
      h3.commitment_frame1-heading
        | NESPRESSO IS A FRESHLY CERTIFIEDB CORP&trade;
      p.commitment_frame1-des
        | As a certified B Corp, Nespresso meets rigorous social and
        | environmental standards.
    .commitment_frame2
      .commitment_frame2-left
        h2.commitment_frame2-left-heading AN INSPIRING JOURNEY
        p.commitment_frame2-left-des
          | For us and 4,500 other B Corps, it&rsquo;s more than a label. It&rsquo;s a
          | movement and community of like-minded businesses looking to balance
          | purpose and profit. This certification reflects 30 years of
          | Nespresso commitments to sustainability and will inspire us as we
          | continue this journey together.
        span.commitment_frame2-left-find FIND OUT MORE
      .commitment_frame2-right(style='width: 100%; height: 100%')
        img(src='/assets/images/sustainability&recycling/commitment_4.png' style='width: 100%; height: 100%')
    .container.commitment_frame3-container
      h3.commitment_frame3-heading CONTINUING TO CARE
      p.commitment_frame3-des
        | For over 30 years, this has guided us in creating shared value for
        | all. There&rsquo;s a long way to go, but the course has been set. As a B
        | Corp, we are more committed than ever to climate, circularity, and
        | communities.
      div
        .commitment_frame3-btn
          button
            router-link(to='')
              | CHECK OUT OUR SUSTAINABILITY REPORT
            img(alt='logonew' src='/assets/images/LogoN.png')
    .commitment_frame3.container
      .commitment_frame3-item
        h3.commitment_frame3-item-heading
          | SUSTAINING 
          br
          |             QUALITY
        p.commitment_frame3-item-des
          | Support 120,000+ farmers through our AAA Sustainable Quality&trade;
          | Program
        .commitment_frame3-item-img
          img(src='/assets/images/sustainability&recycling/commitment_12.png' alt='' width='100%' height='100%')
      .commitment_frame3-item
        h3.commitment_frame3-item-heading
          | BUILDING 
          br
          |             RESILIENCE
        p.commitment_frame3-item-des
          | Maximize AAA farmer livelihoods with partners like Fairtrade
        .commitment_frame3-item-img
          img(src='/assets/images/sustainability&recycling/commitment_11.png' alt='' width='100%' height='100%')
      .commitment_frame3-item
        h3.commitment_frame3-item-heading
          | REVIVING 
          br
          | ORIGINS
        p.commitment_frame3-item-des
          | Restore coffee production in regions where it has disappeared
        .commitment_frame3-item-img
          img(src='/assets/images/sustainability&recycling/commitment_10.png' alt='' width='100%' height='100%')
  .background-2
  .container.commitment_frame3-container
    h3.commitment_frame3-heading CARING FOR CLIMATE
    p.commitment_frame3-des
      | Using the power of coffee to regenerate land, help restore ecosystems,
      | and build resilience against climate change
    div
      .commitment_frame3-btn
        button
          router-link(to='')  FIND OUT MORE
          img(alt='logonew' src='/assets/images/LogoN.png')
  .commitment_frame3.container
    .commitment_frame3-item
      h3.commitment_frame3-item-heading
        | SUSTAINABLE 
        br
        |           COFFEE SOURCING
      p.commitment_frame3-item-des
        | 93% sourced via the AAA Sustainable Quality&trade; Program
      .commitment_frame3-item-img
        img(src='/assets/images/sustainability&recycling/commitment_9.png' alt='' width='100%' height='100%')
    .commitment_frame3-item
      h3.commitment_frame3-item-heading
        | AGROFORESTRY 
        br
      p.commitment_frame3-item-des
        | 5.2 million+ trees planted with partners such as Pur Projet
      .commitment_frame3-item-img
        img(src='/assets/images/sustainability&recycling/commitment_8.png' alt='' width='100%' height='100%')
    .commitment_frame3-item
      h3.commitment_frame3-item-heading
        | CARBON 
        br
        | NEUTRALITY
      p.commitment_frame3-item-des
        | Committed to making every cup of coffee carbon neutral by end 2022
      .commitment_frame3-item-img
        img(src='/assets/images/sustainability&recycling/commitment_7.png' alt='' width='100%' height='100%')
  .background-3
  .container.commitment_frame3-container
    h3.commitment_frame3-heading CARING FOR CLIMATE
    p.commitment_frame3-des
      | Using the power of coffee to regenerate land, help restore ecosystems,
      | and build resilience against climate change
    div
      .commitment_frame3-btn
        button
          router-link(to='')  FIND OUT MORE
          img(alt='logonew' src='/assets/images/LogoN.png')
  .container.commitment_frame3
    .commitment_frame3-item
      h3.commitment_frame3-item-heading
        | MADE TO 
        br
        |           BERECYCLED
      p.commitment_frame3-item-des
        | Capsule recycling scheme in 59 countries
      .commitment_frame3-item-img
        img(src='/assets/images/sustainability&recycling/commitment_6.png' alt='' width='100%' height='100%')
    .commitment_frame3-item
      h3.commitment_frame3-item-heading
        | USING RECYCLED 
        br
        |           ALUMINIUM
      p.commitment_frame3-item-des
        | Capsules made using 80% recycled aluminium in Original and Vertuo
      .commitment_frame3-item-img
        img(src='/assets/images/sustainability&recycling/commitment_5.png' alt='' width='100%' height='100%')
    .commitment_frame3-item
      h3.commitment_frame3-item-heading
        | REDESIGN &amp; 
        br
        | REFURBISHMENT
      p.commitment_frame3-item-des
        | Machines designed for refurbishment, efficiency of materials and
        | energy use
      .commitment_frame3-item-img
        img(src='/assets/images/sustainability&recycling/commitment_13.png' alt='' width='100%' height='100%')
</template>
