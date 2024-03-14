<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "CoffeeDetailPage",
  data() {
    return {
      images: [
        { src: "assets/images/product_detail/product-detail-2.png", alt: "" },
        { src: "assets/images/product_detail/product-detail-2.png", alt: "" },
        { src: "assets/images/product_detail/product-detail-2.png", alt: "" },
        { src: "assets/images/product_detail/product-detail-2.png", alt: "" },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    handleImageClick(index: number): void {
      this.activeIndex = index;
    },
  },
});
</script>

<template lang="pug">
main#coffee-detail
  .product-detail
    .container
      .product-main
        .product-media
          router-link.product-link(to='/coffee')
            span.product-more SEE ALL COFFEES
          .product-image
            img(src='assets/images/product_detail/product_detail-1.png' alt='ISPIRAZIONE NAPOLI')
          .product-slide
            div(v-for='(image, index) in images' :key='index' :class="['product-slide__image', { active: index === activeIndex }]" @click='handleImageClick(index)')
              img(:src='image.src' :alt='image.alt')
        .product-wrapper
          .product-card
            .product-card__heading
              span ORIGINAL
              p ISPIRAZIONE ITALIANA - LIMITED EDITION
            h4.product-card__name ISPIRAZIONE NAPOLI
            span.product-card__sleeve 10-sleeve assortment
            .product-card__delivery
              .product-card__service
                img(src='assets/svgs/shipping-car.svg' alt='')
                p.product-card__service-text Free delivery
              .product-card__service
                img(src='assets/svgs/bell.svg' alt='')
                p.product-card__service-text Coffee set included
            //
              <span class="product-card__special-gift">
              The special gift when you purchase over VND 3,000,000
              </span>
            span.product-card__intensity Intensity 13
          .product-footer
            .product-price
              h5.product-price-num &#x20AB;1,658,000
              span.product-price-capsule 1 sleeve (10 capsules)
              span.product-price__special-gift
                | The special gift when you purchase over VND 3,000,000
            button.product-btn(type='submit')
              img(src='assets/svgs/cart.svg' alt='')
              span ADD TO BASKET
  .detail-banner
    img(src='assets/images/product/banner.png' alt='')
    .detail-banner-info
      span.detail-banner-title ORIGINAL COFFEE CAPSULES
      h6.detail-banner-desc
        | Get 10% credit back in your accountwith Subscription by Nespresso
      span.detail-banner-more READ MORE
    button.detail-banner-btn(type='submit')
      svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
      span  Buy Now 
  .container
    .detail-content
      .product-content
        .detail-content-image
          img(src='assets/images/product_detail/product_detail-3.png' alt='')
        .detail-content-text
          | Nespresso and the Rainforest Alliance have partnered since 2003 to
          | develop the Nespresso AAA Sustainable Quality Program&trade; to produce
          | exceptional coffee while protecting the environment and also
          | ensuring the farmers&rsquo; livelihoods and the welfare of their families
          | and communities.
      .product-content
        .detail-content-left
          span.detail-content-title NAPOLI COFFEE CAPSULE
          .detail-content-text
            | Ispirazione Napoli pays tribute to the short, strong and dark
            | espressos of this southern Italian coastal city &ndash; a thing of grit
            | and beauty. It&rsquo;s a velvety, creamy cup with an extremely thick
            | body and a kiss of pleasant bitterness in its aftertaste. It takes
            | real skill to roast to the intensity they do in Naples. As we push
            | coffee further into to such extreme roasting degrees, a
            | split-second could mean the difference between a beautiful,
            | intense roast and a carbonized failure. This is why we started
            | with Robusta beans that are particularly dense and rich in oils,
            | allowing us to develop it for longer before it burns away. A fine
            | grind helps bringing out the extremely thick body and delicious
            | bitter notes that linger in its aftertaste. We created Ispirazione
            | Napoli as a blend of Robusta from Uganda touched with Arabica from
            | South America. We carefully selected coffees that could stand up
            | to the intense roasting this blend calls for &ndash; bold coffees that
            | would develop the gritty yet beautiful aromas, tastes, and
            | textures that reflect Naples&rsquo; deep-rooted coffee history and
            | traditions.
    .detail-description
      .detail-served
        .detail-served-filter
          .detail-served-name BEST SERVED AS
          .detail-served-items
            .detail-served-item
              svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M17.9535 8.00867L18.4163 5H5.25024L7.20874 17.7286C7.32251 18.4649 7.94604 19 8.69116 19H14.9749C15.721 19 16.345 18.4649 16.4583 17.7286L17.1857 13H17.8333C20.3128 13 20.8333 11.6407 20.8333 10.5C20.8333 9.37976 20.3204 8.05591 17.9535 8.00867ZM17.2503 6L16.9454 7.98242H6.72119L6.41626 6H17.2503ZM15.47 17.5762C15.4319 17.8213 15.2239 18 14.9749 18H8.69116C8.44262 18 8.23511 17.8213 8.19702 17.5762L6.87506 8.98242H16.7916L15.47 17.5762ZM17.8333 12H17.3395L17.801 9H17.8333C19.5911 9 19.8333 9.7207 19.8333 10.5C19.8333 11.2793 19.5911 12 17.8333 12Z' fill='black')
              span Lungo 110ml
            .detail-served-item
              svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M3.20275 2H17.1307L17.6667 2.563V17C17.6667 17.7956 17.3507 18.5587 16.7881 19.1213C16.2255 19.6839 15.4624 20 14.6667 20H5.66675C4.8711 20 4.10804 19.6839 3.54543 19.1213C2.98282 18.5587 2.66675 17.7956 2.66675 17V2.562L3.20275 2ZM5.66675 19H14.6667C15.1972 19 15.7059 18.7893 16.081 18.4142C16.456 18.0391 16.6667 17.5304 16.6667 17V6H3.66675V17C3.66675 17.5304 3.87746 18.0391 4.25253 18.4142C4.62761 18.7893 5.13632 19 5.66675 19ZM3.66675 5V3H16.6667V5H3.66675Z' fill='black')
                path(d='M18.6667 5H19.1667C20.095 5 20.9852 5.36875 21.6416 6.02513C22.298 6.6815 22.6667 7.57174 22.6667 8.5C22.6667 9.42826 22.298 10.3185 21.6416 10.9749C20.9852 11.6313 20.095 12 19.1667 12H18.6667V11H19.1667C19.8298 11 20.4657 10.7366 20.9345 10.2678C21.4034 9.79893 21.6667 9.16304 21.6667 8.5C21.6667 7.83696 21.4034 7.20107 20.9345 6.73223C20.4657 6.26339 19.8298 6 19.1667 6H18.6667V5Z' fill='black')
              span Cappuccino &amp; Latte Macchiato
        .detail-served-filter
          .detail-served-name BEST SERVED AS
          .detail-served-items
            .detail-served-item
              svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M22.3333 9C22.3333 8.373 22.1083 7.858 21.7253 7.506C22.1103 7.156 22.3333 6.641 22.3333 6C22.3333 4.804 21.5293 4 20.3333 4C20.3333 2.785 19.5483 2 18.3333 2C17.7063 2 17.1913 2.225 16.8393 2.608C16.4893 2.223 15.9743 2 15.3333 2C14.7063 2 14.1913 2.225 13.8393 2.608C13.4893 2.223 12.9743 2 12.3333 2C11.7063 2 11.1913 2.225 10.8393 2.608C10.4893 2.223 9.97425 2 9.33325 2C8.70625 2 8.19125 2.225 7.83925 2.608C7.48925 2.223 6.97425 2 6.33325 2C5.13725 2 4.33325 2.804 4.33325 4C3.11825 4 2.33325 4.785 2.33325 6C2.33325 6.627 2.55825 7.142 2.94025 7.494C2.55625 7.844 2.33325 8.36 2.33325 9C2.33325 9.627 2.55825 10.142 2.94025 10.494C2.55625 10.844 2.33325 11.36 2.33325 12C2.33325 12.627 2.55825 13.142 2.94025 13.494C2.55625 13.844 2.33325 14.36 2.33325 15C2.33325 15.627 2.55825 16.142 2.94025 16.494C2.55625 16.844 2.33325 17.36 2.33325 18C2.33325 19.196 3.13725 20 4.33325 20C4.33325 21.215 5.11825 22 6.33325 22C6.96025 22 7.47525 21.775 7.82725 21.393C8.17725 21.777 8.69225 22 9.33325 22C9.96025 22 10.4753 21.775 10.8273 21.393C11.1773 21.777 11.6923 22 12.3333 22C12.9603 22 13.4753 21.775 13.8273 21.393C14.1773 21.777 14.6923 22 15.3333 22C15.9603 22 16.4753 21.775 16.8273 21.393C17.1773 21.777 17.6923 22 18.3333 22C19.5293 22 20.3333 21.196 20.3333 20C21.5483 20 22.3333 19.215 22.3333 18C22.3333 17.373 22.1083 16.858 21.7253 16.506C22.1103 16.156 22.3333 15.641 22.3333 15C22.3333 14.373 22.1083 13.858 21.7253 13.506C22.1103 13.156 22.3333 12.641 22.3333 12C22.3333 11.373 22.1083 10.858 21.7253 10.506C22.1103 10.156 22.3333 9.641 22.3333 9ZM20.3333 11C20.6333 11 21.3333 11.098 21.3333 12C21.3333 12.826 20.7893 13 20.3333 13V14C20.6333 14 21.3333 14.098 21.3333 15C21.3333 15.826 20.7893 16 20.3333 16V17C20.6333 17 21.3333 17.098 21.3333 18C21.3333 18.826 20.7893 19 20.3333 19H19.3333V20C19.3333 20.3 19.2353 21 18.3333 21C17.5073 21 17.3333 20.456 17.3333 20H16.3333C16.3333 20.3 16.2353 21 15.3333 21C14.5073 21 14.3333 20.456 14.3333 20H13.3333C13.3333 20.3 13.2353 21 12.3333 21C11.5063 21 11.3333 20.456 11.3333 20H10.3333C10.3333 20.3 10.2353 21 9.33325 21C8.50625 21 8.33325 20.456 8.33325 20H7.33325C7.33325 20.3 7.23525 21 6.33325 21C5.50625 21 5.33325 20.456 5.33325 20V19H4.33325C4.03325 19 3.33325 18.902 3.33325 18C3.33325 17.174 3.87725 17 4.33325 17V16C4.03325 16 3.33325 15.902 3.33325 15C3.33325 14.174 3.87725 14 4.33325 14V13C4.03325 13 3.33325 12.902 3.33325 12C3.33325 11.173 3.87725 11 4.33325 11V10C4.03325 10 3.33325 9.902 3.33325 9C3.33325 8.173 3.87725 8 4.33325 8V7C4.03325 7 3.33325 6.902 3.33325 6C3.33325 5.173 3.87725 5 4.33325 5H5.33325V4C5.33325 3.7 5.43125 3 6.33325 3C7.16025 3 7.33325 3.544 7.33325 4H8.33325C8.33325 3.7 8.43125 3 9.33325 3C10.1603 3 10.3333 3.544 10.3333 4H11.3333C11.3333 3.7 11.4313 3 12.3333 3C13.1593 3 13.3333 3.544 13.3333 4H14.3333C14.3333 3.7 14.4313 3 15.3333 3C16.1593 3 16.3333 3.544 16.3333 4H17.3333C17.3333 3.7 17.4313 3 18.3333 3C19.1593 3 19.3333 3.544 19.3333 4V5H20.3333C20.6333 5 21.3333 5.098 21.3333 6C21.3333 6.827 20.7893 7 20.3333 7V8C20.6333 8 21.3333 8.098 21.3333 9C21.3333 9.827 20.7893 10 20.3333 10V11Z' fill='black')
                path(d='M11.3333 7H10.3333V8H11.3333V7ZM8.33325 10H7.33325V11H8.33325V10ZM14.3333 10H13.3333V11H14.3333V10ZM17.3333 7H16.3333V8H17.3333V7ZM11.3333 13H10.3333V14H11.3333V13ZM17.3333 13H16.3333V14H17.3333V13ZM8.33325 16H7.33325V17H8.33325V16ZM14.3333 16H13.3333V17H14.3333V16Z' fill='black')
              span Biscuity
            .detail-served-item
              svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M12.6667 3C6.12475 3 2.66675 5.957 2.66675 11.553C2.66675 17.673 11.0037 22 12.6667 22C14.3287 22 22.6667 17.674 22.6667 11.553C22.6667 6.037 19.1147 3 12.6667 3ZM18.5397 5.341C18.0167 6.11 15.8437 7 12.6667 7C9.44975 7 7.25775 6.086 6.77175 5.312C8.22975 4.443 10.1917 4 12.6667 4C14.6567 4 16.8267 4.314 18.5397 5.341ZM12.6667 21C11.5467 21 3.66675 17.175 3.66675 11.553C3.66675 9.03 4.43575 7.135 5.95975 5.873C6.81275 7.116 9.45275 8 12.6667 8C15.8507 8 18.4747 7.133 19.3527 5.907C20.7387 7.054 21.6667 8.835 21.6667 11.553C21.6667 17.175 13.7877 21 12.6667 21Z' fill='black')
              span Hazelnut
      .detail-flavors
        .detail-flavors__header
          .detail-flavors__content
            p.detail-flavors__text BITTERNESS
            div
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
          .detail-flavors__content
            p.detail-flavors__text ACIDITY
            div
              span.detail-flavors--selected
              span
              span
              span
              span
          .detail-flavors__content
            p.detail-flavors__text ROASTINESS
            div
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
          .detail-flavors__content
            p.detail-flavors__text BODY
            div
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
              span.detail-flavors--selected
        .detail-flavors__filter
          p Content &amp; Allergens
          img(src='assets/svgs/Filter.svg' alt='')
  .detail-context
    .detail-context__image
      img(src='assets/images/product_detail/detail_context.png' alt='')
    p.detail-context__heading
      | THE MOST INTENSE COFFEE &ndash; INTENSE ROASTED NOTES
    span.detail-context__text
      | From the streets of Naples, the local deep-rooted coffee ritual inspired
      | our dark roasting method, which masterfully developed the coffee to an
      | intense degree. Leavened with Robusta, the result is a velvety, creamy
      | cup with an extremely thick body and a pleasant, bitter aftertaste. A
      | tribute to the roasting proficiency of the Italian capital of coffee.
</template>
