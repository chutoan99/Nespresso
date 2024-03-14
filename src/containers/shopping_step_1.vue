<script lang="ts">
import { data_recommen } from "@/utils/data_recommen";
import ProductRecommenItem from "@/components/product_recommen_item.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShoppingStep1",
  components: { ProductRecommenItem },
  data() {
    return {
      dataRecommen: data_recommen,
    };
  },
  // Add other properties, methods, etc.
});
</script>

<template lang="pug">
section#shopping_step_1
  .container
    .shopping
      div
        .shopping_label
          svg(width='20' height='24' viewbox='0 0 20 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M10 0.935001L0 6.198V17.802L10 23.066L20 17.802V6.198L10 0.935001ZM10 2.065L18.427 6.5L14.885 8.364L6.685 3.809L10 2.065ZM9.5 21.672L1 17.198V7.328L9.5 11.802V21.672ZM1.573 6.5L5.63 4.366L13.828 8.921L10 10.935L1.573 6.5ZM19 17.198L10.5 21.672V11.802L14.5 9.697V12.799L15.5 12.303V9.17L19 7.328V17.198Z' fill='#17171A')
          div
            h3
              | Free Delivery for shoppings of total value of minimum 100 RON.
            h3
              | For shoppings that do not meet the specified criteria, the cost
              | of standard delivery is 15 RON.
        .shopping_content
          .shopping_content-header
            span.shopping_content-header-item ORIGINAL COFFEE CAPSULES(10)
            span.shopping_content-header-item Unit price
            span.shopping_content-header-item Quantity
            span.shopping_content-header-item Total
          .shopping_content-body
            .shopping_content-body-item
              .item_info
                .item_info-img
                  img(alt='item' src='/assets/images/shopping_bag/item.png')
                span.item_info-name Roma
              span.item_price 15,500&dstrok;
              .item_quantity
                span 10
              span.item_total 15,500&dstrok;
          .shopping_back
            svg(width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M6.83728 0.162718C6.62032 -0.0542395 6.26857 -0.0542395 6.05161 0.162718L0.496052 5.71827C0.279094 5.93523 0.279094 6.28699 0.496052 6.50395L6.05161 12.0595C6.26857 12.2765 6.62032 12.2765 6.83728 12.0595C7.05424 11.8425 7.05424 11.4908 6.83728 11.2738L1.67456 6.11111L6.83728 0.948393C7.05424 0.731435 7.05424 0.379676 6.83728 0.162718Z' fill='#876C43')
            router-link(to='overlay') Back to the online shop
          .shopping_content-label PROMOTION CODE
          .shopping_content-wrapper
            h4.shopping_content-wrapper-heading
              | TOTALORIGINAL COFFEE CAPSULES (10)
            .shopping_content-wrapper-item
              span SUB TOTAL
              label 155,000&dstrok;
            .shopping_content-wrapper-item
              span VAT
              label 0&dstrok;
          .shopping_content-footer
            span.shopping_content-footer-item TOTAL
            label.shopping_content-footer-item 155,000&dstrok;
          .shopping_button
            button
              router-link(to='/signUp_private_2')
                | PROCESS TO CHECKOUT
              svg(width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
        .shopping_label
          svg(width='28' height='26' viewbox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M27.5 0C19.05 0 14 4.322 14 8.5C14 10.328 14.896 11.732 16.351 12.455C15.3796 14.6842 14.7052 17.0312 14.345 19.436C13.953 18.473 13.406 17.529 12.769 16.622C13.519 15.892 14 14.861 14 13.5C14 9.488 8.227 5 0.5 5H0V5.5C0 12.042 4.29 18 9 18C10.05 18 11.103 17.749 11.97 17.228C13.166 18.926 14 20.741 14 22.5V26H15V24C15 19.47 15.994 15.752 17.287 12.8C17.743 12.919 18.224 13 18.75 13C23.505 13 28 6.925 28 0.5V0H27.5ZM9 17C5.005 17 1.223 11.727 1.01 6.007C7.801 6.195 13 10.116 13 13.5C13 14.562 12.66 15.3 12.176 15.817C9.086 11.845 4.527 8.789 4.238 8.597L3.686 9.431C3.754 9.477 8.342 12.555 11.375 16.429C10.425 16.949 9.349 17 9 17ZM18.75 12C18.3969 11.998 18.0449 11.9588 17.7 11.883C20.105 6.921 23.252 4.436 23.304 4.397L22.696 3.603C22.642 3.644 19.276 6.282 16.748 11.554C15.644 10.995 15 9.934 15 8.5C15 3.554 21.972 1.161 26.99 1.008C26.77 6.728 22.87 12 18.75 12Z' fill='#17171A')
          span
            | Every cup of Nespresso is carbon neutral. Coffee can be a force of
            | good!
      .product
        .product-title
          | Recommended products to complete your orders
        .product-list
          ProductRecommenItem(v-bind:data='dataRecommen')
</template>
