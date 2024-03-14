<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityBcorp",
  components: {},
});
</script>

<template lang="pug">
section#Bcorp.Bcorp
  .background-1
    .Bcorp_frame-content
      h3.Bcorp_frame-content-heading
        | WHAT ELSE... 
        br
        |           CAN WE DO?
  .container.Bcorp_frame1-container
    h3.Bcorp_frame1-heading WHAT IS A B CORP&trade;?
    p.Bcorp_frame1-des
      | B Corp certified companies are for-profit organizations that use the
      | power of business to build a more inclusive and sustainable economy.
    .Bcorp_frame1-img
      img(alt='' src='/assets/images/sustainability&recycling/bcorp_4.png' height='100%')
  .Bcorp_frame2.container
    .Bcorp_frame2-left
      h2.Bcorp_frame2-left-heading AN INSPIRING JOURNEY
      p.Bcorp_frame2-left-des
        | For us and 4,500 other B Corps, it&rsquo;s more than a label. It&rsquo;s a
        | movement and community of like-minded businesses looking to balance
        | purpose and profit. This certification reflects 30 years of Nespresso
        | commitments to sustainability and will inspire us as we continue this
        | journey together.
      span.Bcorp_frame2-left-find FIND OUT MORE
    .Bcorp_frame2-right(style='width: 100%; height: 100%')
      img(src='/assets/images/sustainability&recycling/commitment_4.png' style='width: 100%; height: 100%')
  div
    .Bcorp_frame4.container
      .Bcorp_frame4-right(style='width: 100%; height: 100%')
        img(src='/assets/images/sustainability&recycling/bcorp_3.png' style='width: 100%; height: 100%')
      .Bcorp_frame4-left
        h2.Bcorp_frame4-left-heading
          | INSPIRED BY A HOLISTIC APPROACH
        p.Bcorp_frame4-left-des
          | B Corp certified companies rethink their approach at every level and
          | implement practices that consider the impact on all stakeholders:
          | employees, partners, customers, society, and the environment. For
          | us, this means committing to circularity, climate and communities
          | through numerous programs, initiatives and structures like the
          | Nespresso AAA Sustainable Quality&trade; Program and our Sustainability
          | Advisory Board.
    .Bcorp_frame2.container
      .Bcorp_frame2-left
        h2.Bcorp_frame2-left-heading
          | DETERMINED TO GO FURTHER AND DO MORE
        p.Bcorp_frame2-left-des
          | B Corp certified companies are part of a global movement of
          | companies and consumers committed to pursuing a higher purpose than
          | just profit maximization. This is why we innovate, improve and
          | co-create, whether through new recycling initiatives or by teaming
          | up with partners like Rainforest Alliance, TechnoServe and
          | FairTrade.
        span.Bcorp_frame2-left-find DISCOVER MORE
      .Bcorp_frame2-right(style='width: 100%; height: 100%')
        img(src='/assets/images/sustainability&recycling/bcorp_6.png' style='width: 100%; height: 100%')
  .Bcorp_frame1.container(style='padding: 32px 0px')
    h3.Bcorp_frame1-heading
      | B CORP SCORE 
      br
      | 84 
      br
      | AND READY TO KEEP IMPROVING AND GO
      br
      | FURTHER
  .background-2
  .Bcorp_frame1.container
    h3.Bcorp_frame1-heading A NEW LEVEL OF COMMITMENT
    p.Bcorp_frame1-des
      | For Nespresso, B Corp certification reflects 30 years of commitment to
      | sustainability. Although it is not always the quickest or easiest path.
      | Being assessed by B Lab, the non-profit organization that confers the
      | certification, provides a benchmark to measure our actions &ndash;
      | highlighting both our weaknesses and strengths, as well as a roadmap to
      | improve and accelerate.
  .container.Bcorp_frame5
    .Bcorp_frame5-right(style='width: 100%; height: 100%')
      img(src='/assets/images/sustainability&recycling/bcorp_5.png' style='width: 100%; height: 100%')
    .Bcorp_frame5-left
      p.Bcorp_frame5-left-des
        | Ensuring Nespresso meets these rigorous verified standards of social
        | and environmental performance, transparency, and accountability, this
        | independently validated certification is based on strict criteria
        | across performance in five categories: governance, workers, customers,
        | community, and the environment. Detailed data and evidence need to be
        | provided, and the company&rsquo;s legal framework modified.
      p.Bcorp_frame5-left-des
        | More than just a certification, B Corp is a sustainability movement
        | bringing together 4,500 companies sharing the same desire to use
        | business as a force for good.
      p.Bcorp_frame5-left-des
        | A community we are proud and humbled to join.
  .container.Bcorp_frame1-container
    h3.Bcorp_frame1-heading ALL TOGETHER
    p.Bcorp_frame1-des
      | With the support of all our stakeholders, we are adapting the way we
      | work and looking at the impact of every action - always trying that bit
      | harder to create value that is good for everyone
  .container.Bcorp_frame3
    .Bcorp_frame3-item
      .Bcorp_frame3-item-wrapper
        h3.Bcorp_frame3-item-heading AMBASSADORS
        p.Bcorp_frame3-item-des
          | Share our vision of coffee as a force for good
      .Bcorp_frame3-item-img
        img(src='/assets/images/sustainability&recycling/bcorp_8.png' alt='' width='100%' height='100%')
    .Bcorp_frame3-item
      .Bcorp_frame3-item-wrapper
        h3.Bcorp_frame3-item-heading
          | SUSTAINABILITY ADVISORY BOARD
        p.Bcorp_frame3-item-des
          | Gather experts and thought leaders in sustainability
      .Bcorp_frame3-item-img
        img(src='/assets/images/sustainability&recycling/bcorp_7.png' alt='' width='100%' height='100%')
    .Bcorp_frame3-item
      .Bcorp_frame3-item-wrapper
        h3.Bcorp_frame3-item-heading FARMERS
        p.Bcorp_frame3-item-des
          | Promote sustainable practices for communities and the planet
      .Bcorp_frame3-item-img
        img(src='/assets/images/sustainability&recycling/bcorp_9.png' alt='' width='100%' height='100%')
  .background-1
    .Bcorp_frame-content
      h3.Bcorp_frame-content-heading
        | TIME TO START MY NESPRESSO MOMENTS
      .Bcorp_frame-content-btn
        button
          span DISCOVER MORE
</template>
