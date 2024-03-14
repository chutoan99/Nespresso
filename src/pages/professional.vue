<script lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
//? APP

import {
  data_capsules,
  data_banner,
  data_discover,
  data_machine,
  data_professional,
  data_solution,
} from "@/utils/data_professional";

export default defineComponent({
  name: "ProfessionalPage",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      dataCapsules: data_capsules,
      dataBanner: data_banner,
      dataDiscover: data_discover,
      dataMachine: data_machine,
      dataProfessional: data_professional,
      dataSolution: data_solution,
    };
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
        return 5;
      } else if (window.innerWidth >= 480) {
        return 3;
      } else {
        return 1;
      }
    },

    getSlidesCapsules() {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 480) {
        return 2;
      } else {
        return 1;
      }
    },
    getSlidesPro() {
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
main#professional
  div(style='width: 100vw; display: flex; justify-content: center')
    .professional_banner
      swiper(:modules='modules' :slides-per-view='1' :space-between='0' :pagination='{ clickable: true }' :speed='500' :autoplay='true' @swiper='onSwiper' @slidechange='onSlideChange')
        swiper-slide(v-for='slide in dataBanner' :key='slide.imageSrc')
          .professional_banner-item
            .professional_banner-image
              img(:src='slide.imageSrc' alt='')
            .professional_banner-context
              h4.professional_banner-heading
                | {{ slide.heading }}
              p.professional_banner-title {{ slide.title }}
              button.professional_banner-btn
                span {{ slide.buttonText }}
  div(id='professional_pr container')
    .professional_pr2
      .professional_pr2-container.container
        .professional_pr2-heading
          h3 DISCOVER OUR COFFEE SOLUTION ADAPTED TO PROFESSIONAL
        .professional_pr2-wrapper
          .professional_pr2-item(v-for='item in dataDiscover' :key='item.title')
            .professional_pr2-item-img
              img(:src='item.imageSrc' alt='product')
            .professional_pr2-item-body
              .professional_pr2-item-title
                span {{ item.title }}
              .professional_pr2-item-des
                p {{ item.description }}
        .professional_pr2-contact
          p Call us at 1800 234 506 or email us at pro@nespresso.vn
          button
            span CONTACT US
    .professional_slide
      .professional_slide-container.container
        h4.professional_slide-heading
          | A RANGE OF PROFESSIONAL COFFEE MACHINES DESIGNED TO MEET YOUR
          | BUSINESS NEEDS
    #professional_slide-list.container
      swiper(:modules='modules' :slides-per-view='getSlidesBanner()' :space-between='24' :pagination='{ clickable: true }' :speed='300' navigation='' @swiper='onSwiper' @slidechange='onSlideChange')
        swiper-slide(v-for='slide in dataMachine' :key='slide.imageSrc')
          router-link(:to='slide.link')
            .professional_slide-wrapper-img
              img(:src='slide.imageSrc' :alt='slide.alt')
            p.professional_slide-name {{ slide.name }}
    .professional_slide
      .professional_slide-wrapper
        h4.professional_slide-heading.container
          | 15 OFFICE COFFEE CAPSULES TO SUIT EVERY TASTE. AT ANY TIME OF THE
          | DAY
        .professional_slide-capsules
          swiper(:modules='modules' :slides-per-view='getSlidesCapsules()' :space-between='0' :pagination='{ clickable: true }' :speed='300' navigation='' @swiper='onSwiper' @slidechange='onSlideChange')
            swiper-slide(v-for='slide in dataCapsules' :key='slide.title')
              .professional_slide-capsules-item
                .professional_slide-capsules__image
                  img(v-for='(imageUrl, index) in slide.imageUrls' :key='index' :src='imageUrl' :alt='slide.title')
                .professional_slide-capsules__text
                  h4 {{ slide.title }}
                  p {{ slide.description }}
                .professional_slide-capsules__type
                  .professional_slide-capsules__type-size
                    svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
                      path(d='M22.3 8H20.5L21 5.9L20.3 5H2.7L2 5.9L5.6 22.4L6.3 23H16.6L17.3 22.4L18.7 16H22.2C24.4 16 26.2 14.2 26.2 12C26.2 9.8 24.5 8 22.3 8ZM19.3 6.5L17.2 16H5.7L3.7 6.5H19.3ZM16 21.5H6.9L6 17.5H16.9L16 21.5ZM22.3 14.4H19.2L20.3 9.6H22.3C23.6 9.6 24.7 10.7 24.7 12C24.7 13.3 23.6 14.4 22.3 14.4Z' fill='black')
                    span {{ slide.size }}
                  .professional_slide-capsules__type-size
                    svg(width='27' height='26' viewbox='0 0 27 26' fill='none' xmlns='http://www.w3.org/2000/svg')
                      g(clip-path='url(#clip0_789_58810)')
                        path(d='M13.5 25.75C6.45837 25.75 0.75 20.0416 0.75 13C0.75 5.95837 6.45837 0.25 13.5 0.25C20.5416 0.25 26.25 5.95837 26.25 13C26.25 20.0416 20.5416 25.75 13.5 25.75ZM13.5 24.25C19.7132 24.25 24.75 19.2132 24.75 13C24.75 6.7868 19.7132 1.75 13.5 1.75C7.2868 1.75 2.25 6.7868 2.25 13C2.25 19.2132 7.2868 24.25 13.5 24.25Z' fill='black')
                        path(d='M13.4995 22.3397C8.3415 22.3397 4.16016 18.1584 4.16016 13.0004C4.16016 7.84248 8.3415 3.66113 13.4995 3.66113C18.6574 3.66113 22.8388 7.84248 22.8388 13.0004C22.8388 18.1584 18.6574 22.3397 13.4995 22.3397ZM13.4995 20.8397C17.829 20.8397 21.3388 17.33 21.3388 13.0004C21.3388 8.67091 17.829 5.16113 13.4995 5.16113C9.16993 5.16113 5.66016 8.67091 5.66016 13.0004C5.66016 17.33 9.16993 20.8397 13.4995 20.8397Z' fill='black')
                      defs
                        clippath#clip0_789_58810
                          rect(width='26' height='26' fill='white' transform='translate(0.5)')
                    span {{ slide.intensity }}
                div(style='display: flex; justify-content: center')
                  button.professional_slide-capsules__btn
                    svg(width='12' height='12' viewbox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg')
                      path(fill-rule='evenodd' clip-rule='evenodd' d='M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z' fill='white')
                      path(fill-rule='evenodd' clip-rule='evenodd' d='M0 6C0 5.44772 0.447715 5 1 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H1C0.447715 7 0 6.55228 0 6Z' fill='white')
    .professional_pr
      .professional_pr-container.container
        h3.professional_pr-heading
          | WHAT DO YOU VALUE MOST WHEN CHOOSING YOUR COFFEE SOLUTION?
        .professional_pr-wrapper.container
          swiper(:modules='modules' :space-between='24' :slides-per-view='getSlidesPro()' :pagination='{ clickable: true }' :navigation='shouldShowNavigation()' :speed='300' @swiper='onSwiper' @slidechange='onSlideChange')
            swiper-slide(v-for='(slide, index) in dataSolution' :key='index')
              .professional_pr-item
                .professional_pr-item-img
                  img(:src='slide.imgSrc' alt='product')
                .professional_pr-item-body
                  div
                    .professional_pr-item-title
                      span {{ slide.title }}
                    .professional_pr-item-des
                      p {{ slide.description }}
                  .professional_pr-item-btn
                    button
                      span ASK FOR DEMO
    // frame 2
    section.professional_container2
      div
        .container(style='display: flex; justify-content: center')
          h3.professional_container2-heading
            | MAKE THE RIGHT CHOICE FOR YOUR BUSINESS TODAY
        .container(style='display: flex; justify-content: center')
          p.professional_container2-des
            | You know magic is in the details. You know that quality counts. So
            | why not put some love into the coffee you serve? Offering
            | Nespresso to your employees, customers and partners shows that you
            | care about them.
        .professional_container2-list
          .professional_container2-item(v-for='item in dataProfessional' :key='item.item_title.span')
            .item_img
              img(:src='item.item_img.src')
            .item_title
              span {{ item.item_title.span }}
        .professional_container2-button
          button
            span  GET IN CONTACT 
  div(style='width: 100%; display: flex; justify-content: center; background: #1b1b1b')
    section.professional_container
      .professional_container-wrapper
        .professional_container-img
          img(src='assets/images/professional/Rectangle_8.png' alt='bg')
        di.professional_container-content
          h3.professional_container-heading SUSTAINABLE COMPANY
          span.professional_container-title INSPIRING SUSTAINABILITY
          p.professional_container-des
            | Ever since our journey began with coffee more than 25 years ago,
            | we have been supporting sustainability with the same passion and
            | expertise. We are committed to ensuring the highest quality. and
            | sustainability of your coffee through a comprehensive program,
            | with observable results. Because sustainability justifies the
            | means.
          .professional_container-more
            span More about sustainability
            svg(width='9' height='23' viewbox='0 0 9 23' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z' fill='#876C43')
          span.professional_container-title RESPONSIBILITY MEANS RECYCLABILITY
          p.professional_container-des
            | Nespresso capsules are made from aluminum to guarantee the
            | freshness of the carefully crafted aromas and rich flavours of
            | your coffee. By adding capsule recycling to your coffee ritual,
            | your Nespresso won&apos;t only taste good, it feels good too.
          .professional_container-more
            span More about sustainability
            svg(width='9' height='23' viewbox='0 0 9 23' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z' fill='#876C43')
  div(style='width: 100%; display: flex; justify-content: center;background-color: #931650')
    form.form_pro
      h2.form_pro-heading LET&apos;S HAVE A COFFEE TOGETHER
      p.form_pro-des
        | Contact us to find out more about how to improve your coffee
        | experience - digitally or physically.
      .form_pro-filed2
        div
          label(for='') First name *
          select
            option
        div
          label(for='') Last name *
          select
            option
      .form_pro-filed
        label(for='') Email *
        input(type='text' placeholder='')
      .form_pro-filed
        label(for='') Corporation *
        input(type='text' placeholder='')
      .form_pro-filed
        label(for='') Phone number *
        input(type='text' placeholder='')
      .form_btn
        button
          span  SUBMIT 
</template>
