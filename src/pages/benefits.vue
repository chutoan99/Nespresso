<script lang="ts">
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
//? APP

export default defineComponent({
  name: "BenefitsPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
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
    getSlidesBanner() {
      if (window.innerWidth >= 1024) {
        return 8;
      } else if (window.innerWidth >= 480) {
        return 6;
      } else {
        return 3;
      }
    },
  },
});
</script>

<template lang="pug">
main#benefits
  section.benefits
    .background-1
      .benefits_frame.container
        h3.benefits_frame-heading Nespresso &amp; You
        p.benefits_frame-des Our new way of caring for you
        p.benefits_frame-des
          | It&rsquo;s our shared passion for coffee which brings us together, so why
          | not make the most of it?By becoming a Nespresso member, a world of
          | benefits. Rewards and coffee-inspired discoveries open to you. All
          | these benefits are made for you to enjoy your coffee moments, every
          | day.To make loving coffee even more rewarding.
        .benefits_frame-footer
          button Join now Nespresso
          span Or
          button Already member? Login
  // start slider
  section.slider
    .slider-bg
      h3.slider_heading
        | Time flies. The longer you&rsquo;ve been with us, the more benefits
        | Nespresso has for you.
      .container.slider-wrapper
        .slider_list
          swiper(:modules='modules' :slides-per-view='getSlidesBanner()' :space-between='0' :pagination='{ clickable: true }' navigation='' @swiper='onSwiper' @slidechange='onSlideChange')
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/car.png' alt='DELIVERY')
                .slider_item-title
                  span FREE DELIVERY
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/RECYCLING_AT_HOME.png' alt='RECYCLING')
                .slider_item-title
                  span RECYCLING AT HOME
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/LOAN_MACHINE_DURING_REPAIR.png' alt='MACHINE')
                .slider_item-title
                  span LOAN MACHINE DURING REPAIR
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/MASTERCLASSES.png' alt='MASTERCLASSES')
                .slider_item-title
                  span MASTERCLASSES
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/DISCOUNT.png' alt='DISCOUNT')
                .slider_item-title
                  span 10% EXTRA DISCOUNT
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/FREE_DESCALING_KIT.png' alt='DESCALING')
                .slider_item-title
                  span FREE DESCALING KIT
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/REFFER_A_FRIEND.png' alt='REFFER')
                .slider_item-title
                  span REFFER A FRIEND
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/EXTENDED_WARRANTY.png' alt='EXTENDED')
                .slider_item-title
                  span EXTENDED WARRANTY
            swiper-slide
              .slider_item
                .slider_item-wrapper
                  .slider_item-img
                    img(src='assets/images/benefits/EXTENDED_WARRANTY.png' alt='EXTENDED')
                .slider_item-title
                  span EXTENDED WARRANTY
  // end slider
  section.container.benefits(style='position: relative')
    .benefits_img.hide_on-pc.hide_on-tab.show_on-mobile
      img(src='assets/images/benefits/Untitled.png' alt='')
    .background-2
      .benefits_frame3
        h2.benefits_frame3-heading
          | Benefit from your Membership right today
        p.benefits_frame3-des
          | Why let special rewards, unique offers and tailor-made treats pass
          | you by? Just sign-up for Nespresso emails now and get more of the
          | things you love.
        button.benefits_frame3-btn Login
  section.benefits_frame2
    .benefits_frame2-wrapper.container
      .benefits_frame2-item
        .benefits_frame2-item-img
          img(src='assets/images/benefits/Group_321.png' alt='carthand')
        .benefits_frame2-item-content
          h3 Free delivery in the next 48 hours
          p
            | Receive your coffee in just 48 hours at an address of your choice.
      .benefits_frame2-item
        .benefits_frame2-item-img
          img(src='assets/images/benefits/carthand.png' alt='carthand')
        .benefits_frame2-item-content
          h3 Pick up in a boutique today
          p
            | Order online and collect your order at your favourite Boutique
            | just 2 hours later.
      .benefits_frame2-item
        .benefits_frame2-item-img
          img(src='assets/images/benefits/Group_321.png' alt='carthand')
        .benefits_frame2-item-content
          h3 Assistance for your machine
          p Need help with your machine? Our experts are here for you.
      .benefits_frame2-item
        .benefits_frame2-item-img
          img(src='assets/images/benefits/Group_320.png' alt='carthand')
        .benefits_frame2-item-content
          h3 Secured payment transactions
          p
            | SSL encryption means sensitive information is always transmitted
            | securely.
</template>
