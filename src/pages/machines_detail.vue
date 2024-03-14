<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "MachinesDetailPage",
  data() {
    return {
      firstUseItems: [
        { id: 1, label: "FIRST USE", isActive: true },
        { id: 2, label: "DESCALING", isActive: false },
        { id: 3, label: "COFFEE SIZES", isActive: false },
        { id: 4, label: "CLEANING", isActive: false },
      ],
      methodItems: [
        { id: 1, label: "PAYMENT METHOD", isActive: true },
        { id: 2, label: "DELIVERY METHOD", isActive: false },
        { id: 3, label: "RETURN POLICY", isActive: false },
      ],
      imageItems: [
        {
          id: 1,
          src: "assets/images/machines-detail/detail-1.png",
          alt: "",
          isActive: true,
        },
        {
          id: 2,
          src: "assets/images/machines-detail/detail-2.png",
          alt: "",
          isActive: false,
        },
        {
          id: 3,
          src: "assets/images/machines-detail/detail-3.png",
          alt: "",
          isActive: false,
        },
        {
          id: 4,
          src: "assets/images/machines-detail/detail-4.png",
          alt: "",
          isActive: false,
        },
      ],

      dataFaqs: [
        {
          question: "What does 19 bars mean?",
          answer:
            "All the Nespresso machines are equipped with a 19-bar pressure pump, which provides the power needed to pierce the film of the capsule and release the coffee's 900 or so different aromas. The shape of the Nespresso capsule has been specially designed to ensure that the pressurized water flows evenly through the ground coffee during extraction. The temperature and flow time are also set to ensure that each precious aroma is expressed.",
        },
        {
          question: "How do I take care of my machine?",
          answer:
            "For your machine to stay as clean and flowing as on the first day, it’s best to descale it regularly. You can check how to do that by watching the “how to descale” video on YouTube. First of all, your machine should be descaled at least once a year if you use soft water. Note: for hard water, it’s best to descale twice a year. (If you don't know what type of water you have, check the water tank - hard water tends to leave white marks). Order your descaling kit. Eject your capsules after each use. Change the water tank regularly, and refill it with fresh drinking water. Empty and clean the capsule container and drip tray on a regular basis. For integrated milk devices, activate the cleaning procedure after each use. Before your first coffee, brew water without a capsule by pressing any coffee button. When you do this, you pre-heat your coffee cup while rinsing the extraction system for a better coffee experience.",
        },
        {
          question:
            "What does the blinking/no light on my Inissia machine mean?",
          answer:
            "If both buttons blink fast and simultaneously, the machine might be in descaling mode. To exit descaling mode, press both buttons for 3 seconds. The machine should stop blinking. If there is no light, it means that the machine had switched itself OFF automatically after 9 min. This time can be changed to 30 min. Procedure: Switch the machine OFF. Press the Espresso button for 3 seconds. The Espresso button will blink to indicate the current setting (once for 9 mins, twice for 30 mins). Press the Espresso button one time for Auto Off mode after 30 min., one more time for Auto Off mode after 9 min. Finally, to exit press the Lungo button for 3 seconds. If there is irregular blinking, please contact our Customer Service.",
        },
        {
          question:
            "My machine has little or no coffee flow. What should I do?",
          answer:
            "If there is no coffee flow, please check that: The main supply cord is not trapped between the water tank and the machine. The water tank is sufficiently full and correctly positioned. Your machine is turned ON (lights ON). If there is low coffee flow, it means you need to descale your machine.",
        },
        {
          question:
            "My capsules are not puncturing/my machine may have an air bubble",
          answer:
            "Sometimes, your machine can have an air bubble. Air bubbles can block the flow of water through the spout. Air bubbles happen when you run the machine without water in the tank of if you haven’t used your machine in a while. To fix the problem, fill the water tank, eject any capsule that may be in the chamber, close the coffee lever and press the large cup button. That should get water to flow from the coffee outlet.",
        },
      ],
    };
  },
  methods: {
    activateFirstUseItem(item: any) {
      this.firstUseItems.forEach((i) => {
        i.isActive = false;
      });
      item.isActive = true;
    },
    activateMethodItem(item: any) {
      this.methodItems.forEach((i) => {
        i.isActive = false;
      });
      item.isActive = true;
    },
    activateImageItem(item: any) {
      this.imageItems.forEach((i) => {
        i.isActive = false;
      });
      item.isActive = true;
    },
  },
});
</script>

<template lang="pug">
main#machines-detail
  section.container
    .product-main
      .product-media
        .product-media__image
          img(src='assets/images/machines-detail/machines-detail.png' alt='Inissia Ruby Red Coffee Machine')
        .product-media__detail
          .product-media__detail-link(v-for='item in imageItems' :key='item.id' :class='{ active: item.isActive }' @click='activateImageItem(item)')
            img(:src='item.src' :alt='item.alt')
          .product-media__detail-video
            img(src='assets/images/machines-detail/youtube.png' alt='')
      .product-wrapper
        .product-card
          p.product-card__name Inissia Ruby Red Coffee Machine
          .product-card__desc
            p.product-card__desc-subtitle
              | Tiny foot print, compact, light weight.
            .product-card__desc-index
              p Options: Espresso, Lungo
              p Dimensions: 12 x 32.1 x 23 cm
              p Weight: 2.4 kg
              p Removal water tank: 0.7 l
              p Pressure: 19 Bari
              p Auto-off after after 9 minutes
              p Fast Heat-up in 25 sec
          .product-card__delivery
            .product-card__service
              img(src='assets/svgs/shipping-car.svg' alt='')
              p.product-card__service-text Free delivery
            .product-card__service
              img(src='assets/svgs/bell.svg' alt='')
              p.product-card__service-text Coffee set included
          //
            <p class="product-card__special-gift">
            The special gift when you purchase over VND 3,000,000
            </p>
          .product-card__type
            p.product-card__type-text Colors:
            .product-card__colors
              router-link.product-card__colors-link(to='#' style='background-color: rgb(255, 0, 0)')
              router-link.product-card__colors-link(to='#' style='background-color: rgb(0, 0, 0)')
          .product-card__price &#x20AB; 4,200,000
          p.product-card__special-gift
            | The special gift when you purchase over VND 3,000,000
        .product-btn
          button.product-btn__add
            img(src='assets/svgs/cart.svg' alt='')
            span ADD TO BASKET
          button.product-btn__view
            span VIEW IN REAL LIFE
    .banner
      .product-banner
        img(src='assets/svgs/promote.svg' alt='promote')
        .product-banner__text
          p.product-banner__text-heading
            strong MACHINE PROMOTE:
            |  -25% ON INISSIA
          p.product-banner__text-description
            | if you purchase 100 Original coffee capsules in the same order
            | with the machine. Offer valid between 3rd of April 2023 - 15th of
            | May 2023, ending at 9 AM.
            span The discount can...
          p.product-banner__text-more
            router-link(to='') READ MORE
          //
            <div class="product-banner__text-more">
            <button>
            <svg
            class="closed"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 26"
            >
            <path
            fill-rule="evenodd"
            d="M10.538 12.356 3 4.818l1.462-1.462L12 10.894l7.538-7.538L21 4.818l-7.538 7.538L21 19.894l-1.462 1.462L12 13.818l-7.538 7.538L3 19.894l7.538-7.538Z"
            clip-rule="evenodd"
            ></path>
            </svg>
            </button>
            </div>
  section.product-content
    .product-description
      .product-context
        .product-heading
          p.product-heading__title
            | DISCOVER THE INISSIA COFFEE MACHINE
          p.product-heading__desc
            | Tiny foot print, compact, light weight and equipped with an
            | ergonomic handle, the Inissia coffee machine fits perfectly into
            | any interior design.
          p.product-heading__features
            | Inissia has been smartly designed to make your life easier. We&apos;ve
            | thought of everything, from two cup-size settings to the automatic
            | switch-off after 9 minutes. In just one touch and 25 seconds, the
            | water reaches the perfect temperature to make coffee without
            | having to refill the 0.7 L tank. Compact and lightweight, with an
            | ergonomic handle, Inissia fits perfectly into any interior design.
        .product-list
          .product-item
            img(src='assets/svgs/double-cup.svg' alt='')
            span.product-item__desc 2 PROGRAMMABLE CUP SIZES
          .product-item
            img(src='assets/svgs/container.svg' alt='')
            span.product-item__desc COMPACT AND LIGHT
          .product-item
            img(src='assets/svgs/fast-time.svg' alt='')
            span.product-item__desc FAST HEAT-UP IN 25 SECONDS
          .product-item
            img(src='assets/svgs/stopwatch.svg' alt='')
            span.product-item__desc AUTOMATIC SWTICH-OFF AFTER 9 MINS
        .product-price-detail
          img(src='assets/svgs/recyle.svg' alt='recyle')
          span The price includes Green Stamp of 4 RON + VAT.
  section.machines-info
    .machines-container
      p.machines-tilte PLAYFUL COLORS. UNIQUE PLEASURE.
      ul.machines-specifications
        .machines-specifications-list
          li.machines-specifications-item
            p.machines-specifications-item__title WEIGHT
            p.machines-specifications-item__desc 2.4kg
          li.machines-specifications-item
            p.machines-specifications-item__title DIMESSIONS
            p.machines-specifications-item__desc 19 bar
          li.machines-specifications-item
            p.machines-specifications-item__title PRESSURE
            p.machines-specifications-item__desc 19 bar
          li.machines-specifications-item
            p.machines-specifications-item__title
              | CAPSULE CONTAINER CAPACITY
            p.machines-specifications-item__desc 11 capsules
        .machines-specifications-list
          li.machines-specifications-item
            p.machines-specifications-item__title WARRANTY
            p.machines-specifications-item__desc 2 years
          li.machines-specifications-item
            p.machines-specifications-item__title
              | REMOVABLE WATER TANK
            p.machines-specifications-item__desc 0.7 L
          li.machines-specifications-item
            p.machines-specifications-item__title
              | ENERGY SAVING MODES
            p.machines-specifications-item__desc
              | Eco-mode after 2min. Auto-off after 9 min.
  section.extraction-method
    h4.extraction-method-title EXTRACTION METHOD
    .extraction-method-list
      .extraction-method-item
        img(src='assets/images/machines-detail/ESPRESSO.png' alt='ESPRESSO')
        span ESPRESSO
      .extraction-method-item
        img(src='assets/images/machines-detail/LUNGO.png' alt='LUNGO')
        span LUNGO
  section.machines-banner
    .machines-banner-image
      img(src='assets/images/machines-detail/coffee.png' alt='cofffee')
    .machines-banner-video
      img(src='assets/images/machines-detail/machines.png' alt='')
      span
        | WATCH THE VIDEO
        svg(width='18' height='19' viewbox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M9 0.5C13.9706 0.5 18 4.52944 18 9.5C18 14.4706 13.9706 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5ZM6.82759 5.25862V13.7414L13.6552 9.5L6.82759 5.25862Z')
  section.storytelling
    .container
      h4.storytelling-title
        | NESPRESSO 
        br
        |           MACHINE ASSISTANCE
      ul.storytelling-menu
        li.storytelling-item(v-for='item in firstUseItems' :key='item.id' :class="{ 'is-active': item.isActive }" @click='activateFirstUseItem(item)')
          span {{ item.label }}
      .storytelling-container
        .storytelling-description
          .storytelling-caption
            p MACHINE ASSISTANCE
            h6 HOW TO FIRST USE YOUR MACHINE
          p.storytelling-paragraph
            | Nespresso shows you what steps to undertake before first using
            | your coffee machine.
        .storytelling-video
          .storytelling-video__player
            span WATCH THE VIDEO
            svg(width='18' height='19' viewbox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M9 0.5C13.9706 0.5 18 4.52944 18 9.5C18 14.4706 13.9706 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5ZM6.82759 5.25862V13.7414L13.6552 9.5L6.82759 5.25862Z')
          .storytelling-video__background
            img(src='assets/images/machines-detail/MACHINE-ASSISTANCE.png' alt='')
  section.card-slider
    .container
      .card-slider-wrapper
        .card-slider-content
          h4.card-slider-heading DESCALING KIT
          .card-slider-paragraph
            | Set of 2 descaling kits for Nespresso coffee machines. The
            | descaling agent gently eliminates the lime scale that builds up in
            | your machine over time to ensure that your tasting experience is
            | as perfect as the first day. For complete information on descaling
            | please refer to the user manual of your machine or the descaling
            | information by visiting the Nespresso Machine Assistance page.
          span.card-slider-price
            span &#x20AB;
            span  15,900 
          button.card-slider-button
            svg(width='21' height='24' viewbox='0 0 21 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M6.90002 3.75C6.90002 1.67889 8.57892 0 10.65 0C12.7211 0 14.4 1.67889 14.4 3.75V6H19.65L20.4 24H0.900024L1.65002 6H6.90002V3.75ZM7.65002 6H13.65V3.75C13.65 2.09317 12.3069 0.75 10.65 0.75C8.99319 0.75 7.65002 2.09317 7.65002 3.75V6Z' fill='white')
            span ADD TO BASKET
        .card-slider-image
          img(src='assets/images/machines-detail/descaing-kit.png' alt='')
  section.faq
    .container
      .faq-left
        details.faq-left__list(v-for='faq in dataFaqs' :key='faq.question')
          summary.faq-left__list-question
            svg(width='23' height='24' viewbox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M11.5 1.5C17.299 1.5 22 6.20101 22 12C22 17.799 17.299 22.5 11.5 22.5C5.70101 22.5 1 17.799 1 12C1 6.20101 5.70101 1.5 11.5 1.5ZM11.5 0.5C5.14873 0.5 0 5.64873 0 12C0 18.3513 5.14873 23.5 11.5 23.5C17.8513 23.5 23 18.3513 23 12C23 5.64873 17.8513 0.5 11.5 0.5Z' fill='black')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M11.4927 14.9497L15.7354 10.7071L15.0282 10L11.4924 13.536L7.95718 10L7.25007 10.7071L11.1392 14.5962L11.4927 14.9497Z' fill='black')
            span {{ faq.question }}
          p.faq-left__list-answer {{ faq.answer }}
        .faq-left__button
          router-link(to='')  Check user manual 
  section.storytelling
    .container
      ul.storytelling-menu
        li.storytelling-link(v-for='item in methodItems' :key='item.id' :class="{ 'is-active': item.isActive }" @click='activateMethodItem(item)')
          span {{ item.label }}
      .storytelling-content
        h4.storytelling-content__heading PAYMENT METHOD
        .storytelling-content__icon
          svg(width='39' height='28' viewbox='0 0 39 28' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M37.4939 24.2665C37.4939 25.9932 36.1599 27.3332 34.5797 27.3332H4.09649C2.51632 27.3332 1.18359 25.9932 1.18359 24.2665V3.73317C1.18359 2.0065 2.51497 0.666504 4.09649 0.666504H34.5797C36.1599 0.666504 37.4939 2.0065 37.4939 3.73317V24.2665Z' fill='white' stroke='#B2B2B2')
            path(d='M23.6826 20.6505H15.8853V6.70117H23.6839L23.6826 20.6505Z' fill='#FF5F00')
            path(d='M16.3841 13.6747C16.3841 10.8454 17.7155 8.32407 19.7879 6.70007C18.221 5.46921 16.2799 4.80048 14.2808 4.80274C9.35876 4.80274 5.36865 8.77607 5.36865 13.6747C5.36865 18.5747 9.35876 22.5467 14.2808 22.5467C16.2799 22.549 18.221 21.8803 19.7879 20.6494C18.7255 19.8178 17.8673 18.758 17.2779 17.5499C16.6886 16.3417 16.3821 15.0168 16.3841 13.6747Z' fill='#EB001B')
            path(d='M34.2004 13.6747C34.2004 18.5747 30.2103 22.5467 25.2882 22.5467C23.2887 22.5491 21.3472 21.8804 19.7798 20.6494C20.8427 19.8181 21.7015 18.7585 22.2914 17.5503C22.8812 16.3422 23.1867 15.017 23.1849 13.6747C23.1849 10.8454 21.8535 8.32407 19.7798 6.70007C21.3472 5.46921 23.2887 4.80049 25.2882 4.80274C30.2103 4.80274 34.2004 8.77607 34.2004 13.6747Z' fill='#F79E1B')
          svg(width='39' height='28' viewbox='0 0 39 28' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M1.18359 3.99984C1.18359 3.11578 1.53781 2.26794 2.16832 1.64281C2.79883 1.01769 3.65399 0.666504 4.54566 0.666504H34.1319C34.5734 0.666504 35.0106 0.752723 35.4185 0.920239C35.8264 1.08775 36.197 1.33329 36.5092 1.64281C36.8214 1.95234 37.0691 2.31981 37.238 2.72423C37.407 3.12864 37.4939 3.5621 37.4939 3.99984V23.9998C37.4939 24.4376 37.407 24.871 37.238 25.2754C37.0691 25.6799 36.8214 26.0473 36.5092 26.3569C36.197 26.6664 35.8264 26.9119 35.4185 27.0794C35.0106 27.2469 34.5734 27.3332 34.1319 27.3332H4.54566C4.10415 27.3332 3.66696 27.2469 3.25905 27.0794C2.85115 26.9119 2.48052 26.6664 2.16832 26.3569C1.53781 25.7317 1.18359 24.8839 1.18359 23.9998V3.99984Z' fill='white' stroke='#B2B2B2')
            path(fill-rule='evenodd' clip-rule='evenodd' d='M17.3175 19.2775H14.7206L16.3438 8.84418H18.9407L17.3175 19.2775ZM26.7299 9.09884C25.99 8.80223 25.1988 8.65142 24.4007 8.65484C21.8361 8.65484 20.03 10.0762 20.0192 12.1082C19.9991 13.6055 21.313 14.4375 22.2947 14.9375C23.3006 15.4482 23.6409 15.7815 23.6409 16.2362C23.6315 16.9362 22.8299 17.2575 22.0809 17.2575C21.0454 17.2575 20.4899 17.0922 19.6467 16.7028L19.3038 16.5362L18.9407 18.8788C19.5499 19.1668 20.6715 19.4228 21.8361 19.4335C24.5607 19.4335 26.3346 18.0348 26.3547 15.8708C26.3655 14.6828 25.6716 13.7722 24.1761 13.0282C23.2683 12.5508 22.7116 12.2295 22.7116 11.7415C22.7224 11.2975 23.1823 10.8415 24.207 10.8415C24.8749 10.8218 25.538 10.9589 26.1422 11.2415L26.3762 11.3522L26.7299 9.09884ZM31.3777 8.84418H33.3855L35.4807 19.2775H33.0762C33.0762 19.2775 32.8408 18.0788 32.7669 17.7122H29.4317C29.3376 17.9895 28.8884 19.2775 28.8884 19.2775H26.1638L30.0207 9.70951C30.287 9.03218 30.7577 8.84418 31.3777 8.84418ZM31.2163 12.6628L30.1808 15.5828H32.3392C32.2316 15.0602 31.7408 12.5628 31.7408 12.5628L31.5592 11.6642C31.4826 11.8948 31.3709 12.2135 31.297 12.4282L31.2163 12.6628ZM12.5514 8.84418L10.0097 15.9588L9.73131 14.5162C9.26063 12.8508 7.78669 11.0415 6.14062 10.1428L8.46987 19.2668H11.216L15.2976 8.84418H12.5514Z' fill='#0742A6')
            path(fill-rule='evenodd' clip-rule='evenodd' d='M7.64817 8.84424H3.46979L3.42676 9.0549C6.68662 9.92157 8.84372 12.0082 9.73131 14.5162L8.82221 9.72157C8.67159 9.0549 8.21434 8.8669 7.64817 8.84424Z' fill='#0742A6')
        .storytelling-content__text
          p
            | Payment by credit card is immediately due and payable. Your credit
            | card details will be encrypted for security purposes.
          br
          h3 Cash on delivery
          p
            | The payment on delivery can be made in cash or, if the delivery
            | takes place in Bucharest, you can also pay by card. Upon delivery
            | please specify to the courier the payment method of your choice.
</template>
