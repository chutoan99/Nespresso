<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "AccessoriesDetailPage",

  data() {
    return {
      isModalOpen: false,
      dataListCoffee: [
        {
          image: "assets/images/accessories/accessories-10.png",
          name: "NUDE ESPRESSO CUPS X 2 (80ML)",
          price: "₫550,000",
        },
        {
          image: "assets/images/accessories/accessories-10.png",
          name: "NUDE ESPRESSO CUPS X 2 (80ML)",
          price: "₫550,000",
        },
        {
          image: "assets/images/accessories/accessories-10.png",
          name: "NUDE ESPRESSO CUPS X 2 (80ML)",
          price: "₫550,000",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
</script>

<template lang="pug">
main#accessories_detail
  // Product Card
  section.product
    .product-detail.container
      .product-media
        button
          router-link(to='/accessories') SEE ALL COFFEES
        .product-image
          img(src='assets/images/accessories-detail/accessories-detail-1.png' alt='')
      .product-wrapper
        .product-card
          p.product-card__title ORIGINAL
          h4.product-card__name MILANO TOUCH GOLDEN TRAVEL MUG
          .product-card__accessories
            span  [Accessories details] 
            ul
              li The property 1
              li The property 2
              li The property 3
              li The property 4
          .product-card__delivery
            .product-card__service
              img(src='assets/svgs/shipping-car.svg' alt='')
              p.product-card__service-text Free delivery
            .product-card__service
              img(src='assets/svgs/bell.svg' alt='')
              p.product-card__service-text Coffee set included
        .product-footer
          span.product-footer__price &#x20AB;600,000
          span.product-card__special-gift
            | The special gift when you purchase over VND 3,000,000
          button.product-footer__add(type='submit')
            img(src='assets/svgs/cart.svg' alt='')
            span ADD TO BASKET
  // Banner
  section.banner
    .banner-image
      img(src='assets/images/accessories-detail/accessories-detail-2.png' alt='')
    .banner-text
      h4.banner-text__heading MACHINE SUBSCRIPTION
      span.banner-text__desc Get your coffee machine for just 1 RON
    button.banner-btn DISCOVER MORE
  // Content
  section.content
    .content-container
      .content-caption
        h4.content-caption__heading GOLDEN TRAVEL MUG
        .content-caption__desc
          p
            | Inspired by Chiara Ferragni&rsquo;s vision of Milan, the Golden Travel
            | Mug is by your side here, there, and everywhere. A stylish way to
            | keep your drinks warm or cold, the mug holds all your favourite
            | coffee recipes: Espresso or Lungo, black or with milk. Its double
            | stainless-steel exterior comes in gold, a nod to Milan&rsquo;s artistic
            | heritage, luxurious lifestyle and timeless elegance. Bringing
            | together form, function, and inspiration; on the move.
            br
            |               Dimension (Height, Diameter): 16.4 cm, 9.3 cmCapacity: 345
            |               mlDishwasher safe
      .content-filter
        .content-filter-left
          span.content-filter__text Content &amp; Allergens
          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M0 6.20067H14.5M14.5 6.20067C14.5 7.96798 16 8.00067 16.8 8.00067C17.6 8.00067 19 7.96798 19 6.20067M14.5 6.20067C14.5 4.43336 16.1 4.50067 16.8 4.50067C17.5 4.50067 19 4.43336 19 6.20067M19 6.20067H24' stroke='black')
            path(d='M24 11.8007L9.5 11.8007M9.5 11.8007C9.5 10.0334 8 10.0007 7.2 10.0007C6.4 10.0007 5 10.0334 5 11.8007M9.5 11.8007C9.5 13.568 7.9 13.5007 7.2 13.5007C6.5 13.5007 5 13.568 5 11.8007M5 11.8007L0 11.8007' stroke='black')
            path(d='M0 17.2013H14.5M14.5 17.2013C14.5 18.9687 16 19.0013 16.8 19.0013C17.6 19.0013 19 18.9687 19 17.2013M14.5 17.2013C14.5 15.434 16.1 15.5013 16.8 15.5013C17.5 15.5013 19 15.434 19 17.2013M19 17.2013H24' stroke='black')
  // Accessories-recommend
  section.accessories-recommend
    h4.accessories-recommend-title ENHANCE YOUR COFFEE RITUAL
    p.accessories-recommend-desc
      | Choose our recommended coffee assortments to ensure a perfect coffee
      | tasting experience.
    .accessories-list
      .accessories-item(v-for='accessory in dataListCoffee' :key='accessory.name')
        .accessories-item-head
          .accessories-item__image
            img(:src='accessory.image' alt='')
          span.accessories-item__name {{ accessory?.name }}
        .accessories-item-body
          span.accessories-item__price {{ accessory?.price }}
          button.accessories-item__btn
            svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
            span Ask to basket
  // Accessories-footer
  section.accessories-footer
    .accessories-footer-left
      h4.accessories-footer__title
        | DISCOVER THE RECOMMENDED RECIPE
      span.accessories-footer__desc Treat yourself to signature recipe for Nespresso.
    .accessories-footer-right.js-modal-click(@click='openModal')
      img(src='assets/images/accessories-detail/accessories-detail-3.png' alt='')
      span THYME AND GRAPEFRUIT ETHIOPIA JAMMING
  section.modal.js-modal(:class="{ 'open-modal': isModalOpen }" @click='closeModal')
    .modal-container
      button.modal-close.js-modal-close(@click='closeModal')
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M19 5L5 19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
          path(d='M19 19L5 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
      .modal-image
        img(src='assets/images/accessories-detail/accessories-detail-4.png' alt='THYME AND GRAPEFRUIT ETHIOPIA JAMMING')
      .modal-content
        h4.modal-name
          | THYME AND GRAPEFRUIT 
          br
          |             ETHIOPIA JAMMING
        .modal-search
          .modal-search__item
            svg(width='20' height='20' viewbox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M17.5 17.5L13.875 13.875' stroke='#45495A' stroke-linecap='round' stroke-linejoin='round')
              path(d='M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z' stroke='#45495A' stroke-linecap='round' stroke-linejoin='round')
            span 2 min
          .modal-search__item
            svg(width='20' height='20' viewbox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M17.5 17.5L13.875 13.875' stroke='#45495A' stroke-linecap='round' stroke-linejoin='round')
              path(d='M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z' stroke='#45495A' stroke-linecap='round' stroke-linejoin='round')
            span 2 min
        .modal-body
          .modal-left
            .modal-info
              h5.modal-label INGREDIENTS
              .modal-list
                .modal-item
                  span.modal-item__type 4buc
                  span.modal-item__name Glacon
                .modal-item
                  span.modal-item__type 90ml
                  span.modal-item__name Tonic water
                .modal-item
                  span.modal-item__type 10ml
                  span.modal-item__name Pink grapefruit syrup
                .modal-item
                  span.modal-item__type 1buc
                  span.modal-item__name Spring of thyme
            button.modal-button
              span GO TO RECIPE PAGE
          .modal-right
            .modal-info
              h5.modal-label MATERIALS
              .modal-list
                .modal-item
                  span.modal-item__num
                  span.modal-item__name View Recipe Glass
                .modal-item
                  span.modal-item__num
                  span.modal-item__name Ice Cube tray
            .modal-info
              h5.modal-label HOW TO MAKE
              .modal-list
                .modal-item
                  span.modal-item__num 01
                  span.modal-item__name undefined

</template>
