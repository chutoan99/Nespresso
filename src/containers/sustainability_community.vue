<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
export default defineComponent({
  name: "SustainabilityCommunityPage",
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
  methods: {
    getSlidesCommunity() {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 480) {
        return 2;
      } else {
        return 1;
      }
    },
    shouldShowNavigation() {
      return window.innerWidth >= 480;
    },
  },
});
</script>

<template lang="pug">
section#community.community
  .background-1
    .community_frame-wrapper
      h3.community_frame-heading MAKING COFFEE WORK FOR EVERYONE
      p.community_frame-des
        | SO PEOPLE AND COMMUNITIES CAN FLOURISH
  .container
    .community_frame1
      h3.community_frame1-heading AS A B CORP&trade;
      h3.community_frame1-title
        | COMMITTED TO WORKING HAND IN HAND
      p.community_frame1-des
        | Since 2003, our desire to create shared value for all stakeholders in
        | our value chain has been channeled through the AAA Sustainable
        | Quality&trade; Program. In line with B Corp values, our aim is to foster
        | conditions to improve yields, quality of harvests, and help protect
        | the environment while promoting sustainable livelihoods.
    .container.community_frame2
      .community_frame2-item
        .community_frame2-item-img
          img(src='/assets/images/sustainability&recycling/community_7.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading SUSTAINABLE PRODUCTION
        p.community_frame2-item-des
          | Empower farmers with the support of the Rainforest Alliance
      .community_frame2-item
        .community_frame2-item-img
          img(src='/assets/images/sustainability&recycling/community_8.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading SUSTAINABLE LIVELIHOODS
        p.community_frame2-item-des
          | Offer farmers better prices, premiums and diversification
      .community_frame2-item
        .community_frame2-item-img
          img(src='/assets/images/sustainability&recycling/community_9.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading INCLUSIVITY
        p.community_frame2-item-des
          | Continue improving access to 
          br
          | opportunities for all
  .community_wrapper
    .container.community_frame3
      .community_frame3-left
        .community_frame3-left-content
          h3 120,000+ FARMERS
          span
            | committed to high-quality production and sustainable
            | practices
        .community_frame3-left-content
          h3 93% OF NESPRESSO COFFEE
          span  is sourced through the AAA Program
        .community_frame3-left-content
          h3 NEARLY 20 YEARS
          span  partnering with the Rainforest Alliance
      .community_frame3-right
        .community_frame3-right-img
          img(src='/assets/images/sustainability&recycling/community_2.png' alt='')
  section#tabs2
    .tabs2
      input#corp-insurance(type='radio' name='tabs2' checked='')
      label.tabs_heading(for='corp-insurance')
        | CROP
        br
        | INSURANCE
      .tab2
      input#farmer-pensions(type='radio' name='tabs2')
      label.tabs_heading(for='farmer-pensions')
        | FARMER
        br
        | PENSIONS
      .tab2
      input#master-origins(type='radio' name='tabs2')
      label.tabs_heading(for='master-origins')
        | MASTER
        br
        | ORIGINS
      .tab2
      input#reviving-origins(type='radio' name='tabs2')
      label.tabs_heading(for='reviving-origins')
        | REVIVING
        br
        | ORIGINS
      .tab2
  .community_frame4
    .community_frame4-mark
      .container
        .community_frame4-mark2
        .container.community_frame4-main(style='height: 100%')
          .community_frame4-right
            .community_frame4-right-img
              img(src='/assets/images/sustainability&recycling/community_3.png' alt='')
          .community_frame4-left
            h3.community_frame4-left-heading CROP INSURANCE
            p.community_frame4-left-des
              | Climate shocks can have devastating impacts on coffee farmers,
              | which are rarely fully covered by insurers. With Blue Marble
              | Microinsurance and Fairtrade, we cross-reference real-time and
              | historic weather data to calculate which farms are affected and
              | provide automated payouts. In Aguadas and Norte Caldas,
              | Colombia, 4,700+ farmers and 15,000 hectares are already
              | protected.
  .community_frame5
    .background-2
      .community_frame5-wrapper.container
        swiper(:modules='modules' :slides-per-view='getSlidesCommunity()' :space-between='24' :pagination='{ clickable: true }' :navigation='shouldShowNavigation()' @swiper='onSwiper' @slidechange='onSlideChange')
          swiper-slide
            .community_frame5-item
              h3.community_frame5-item-heading INISSIA
              .community_frame5-item-img
                img(src='/assets/images/sustainability&recycling/community_12.png' alt='product' width='160' height='160')
              .community_frame5-item-price
                span &dstrok;4,200,000
              .community_frame5-item-btn
                button
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
                  span  ADD TO BASKET 
          swiper-slide
            .community_frame5-item
              h3.community_frame5-item-heading INISSIA
              .community_frame5-item-img
                img(src='/assets/images/sustainability&recycling/community_12.png' alt='product' width='160' height='160')
              .community_frame5-item-price
                span &dstrok;4,200,000
              .community_frame5-item-btn
                button
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
                  span  ADD TO BASKET 
          swiper-slide
            .community_frame5-item
              h3.community_frame5-item-heading INISSIA
              .community_frame5-item-img
                img(src='/assets/images/sustainability&recycling/community_12.png' alt='product' width='160' height='160')
              .community_frame5-item-price
                span &dstrok;4,200,000
              .community_frame5-item-btn
                button
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
                  span  ADD TO BASKET 
          swiper-slide
            .community_frame5-item
              h3.community_frame5-item-heading INISSIA
              .community_frame5-item-img
                img(src='/assets/images/sustainability&recycling/community_12.png' alt='product' width='160' height='160')
              .community_frame5-item-price
                span &dstrok;4,200,000
              .community_frame5-item-btn
                button
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
                  span  ADD TO BASKET 
          swiper-slide
            .community_frame5-item
              h3.community_frame5-item-heading INISSIA
              .community_frame5-item-img
                img(src='/assets/images/sustainability&recycling/community_12.png' alt='product' width='160' height='160')
              .community_frame5-item-price
                span &dstrok;4,200,000
              .community_frame5-item-btn
                button
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
                  span  ADD TO BASKET 
  .container
    .community_frame1
      h3.community_frame1-heading MANY STORIES, ONE COMMITMENT
      p.community_frame1-des
        | Each farmer and agronomist has a story to tell. Each is different, yet
        | united by a shared commitment to quality and sustainability. Through
        | access to training, we strive to provide tools tailored to the reality
        | of the local land and community.
    .community_frame2.container
      .community_frame2-item
        .community_frame2-item-img2
          img(src='/assets/images/sustainability&recycling/community_10.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading ISWANDI
        p.community_frame2-item-des
          | Like over 1,800 farmers, Iswandi enjoys improved socioeconomic
          | conditions, productivity, and coffee quality as a member of the
          | coffee cooperative in Aceh, Indonesia &ndash; set up with Nespresso,
          | Fairtrade and coffee trader Olam.
      .community_frame2-item
        .community_frame2-item-img2
          img(src='/assets/images/sustainability&recycling/community_4.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading ALBA MARIA
        p.community_frame2-item-des
          | Alba was ready to give up her 7,200 coffee trees in Colombia&rsquo;s
          | Caldas province due to unpredictable weather patterns resulting from
          | climate change. Joining Nespresso and Blue Marble&rsquo;s crop insurance
          | plan gives her peace of mind.
      .community_frame2-item
        .community_frame2-item-img2
          img(src='/assets/images/sustainability&recycling/community_5.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading TAFADZWA NYAKUCHENA
        p.community_frame2-item-des
          | This Zimbabwean agronomist saw drought and economic crisis almost
          | wipe out his country&rsquo;s coffee industry. Working within Nespresso&rsquo;s
          | AAA Sustainable Quality&trade; Program, he provides advice on sustainable
          | farming practices during door-to-door coffee farm visits.
    .community_frame1
      h3.community_frame1-heading ON THE GROUND
      p.community_frame1-des
        | Dive in to discover what&rsquo;s going on locally
    .community_frame2.container
      .community_frame2-item
        .community_frame2-item-img2
          img(src='/assets/images/sustainability&recycling/community_6.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading FOOD AID IN ITALY
        p.community_frame2-item-des
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          | ligula et dui mollis porttitor. Aliquam mollis, est a tincidunt
          | tincidunt, diam libero rhoncus urna, non bibendum sem urna vitae
          | sapien
      .community_frame2-item
        .community_frame2-item-img2
          img(src='/assets/images/sustainability&recycling/community_6.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading BRAZIL IN ACTION
        p.community_frame2-item-des
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          | ligula et dui mollis porttitor. Aliquam mollis, est a tincidunt
          | tincidunt, diam libero rhoncus urna, non bibendum sem urna vitae
          | sapien
      .community_frame2-item
        .community_frame2-item-img2
          img(src='/assets/images/sustainability&recycling/community_6.png' alt='commitment_7' width='100%' height='100%')
        h3.community_frame2-item-heading HISPANIC HERITAGE MONTH
        p.community_frame2-item-des
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
          | ligula et dui mollis porttitor. Aliquam mollis, est a tincidunt
          | tincidunt, diam libero rhoncus urna, non bibendum sem urna vitae
          | sapien
</template>
