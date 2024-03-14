<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "signUpPrivate2Page",
});
</script>

<template lang="pug">
main#signUp_private_2
  section#private_2
    .private_2.container
      .private_2-banner
        img(src='assets/images/product/banner.png' alt='')
        .private_2-banner-info
          span.private_2-banner-title ORIGINAL COFFEE CAPSULES
          h6.private_2-banner-desc
            | Get 10% credit back in your accountwith Subscription by Nespresso
          span.private_2-banner-more READ MORE
        button.private_2-banner-btn(type='submit')
          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
          span  Button 
      .private_2-content
        .private_2-content-title
          h4 WELCOME TO NESPRESSO
        .private_2-content-img
          .private_2-content-img-wrapper
            img(src='assets/images/LogoN.png' alt='LogoN')
        hr.private_2-content-line
        .private_2-content-heading
          h3 YOUR NESPRESSO &amp; YOU ACCOUNT HAS BEEN CREATED!
        .private_2-content-des
          p
            | Enjoy the Nespresso benefits and take advantage of personalized
            | offers and rewards.
        ul.private_2-content-list
          li
            span
            | Order fast your favorite Nespresso original capsules
          li
            span
            | Redeem your personalized offers
          li
            span
            | Free delivery for orders of min. 100 lei
          li
            span
            | Secure payment methods with SSL encryption
          li
            span
            | Online assistance, step by step
        .private_2-content-footer
          button
            router-link(to='/') GO TO SHOP
</template>
