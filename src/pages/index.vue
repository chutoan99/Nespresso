<script lang="ts">
import { defineComponent } from "vue";
//? APP
import ProductItem from "@/components/product_item.vue";
import MoreItem from "@/components/more_item.vue";
import { data_product } from "@/utils/data_product";

export default defineComponent({
  name: "IndexPage",
  components: {
    ProductItem,
    MoreItem,
  },
  data() {
    return {
      data_product: data_product,
      dataInfo2: [
        {
          heading: "Mocha Coffee Recipe featuring Ispirazione Roma",
          title:
            "Foamy, milky sweet and lightly chocolatey, a delicious Mocha Latte is ideal for a classic coffee indulgence. Mocha Coffee Recipe featuring Ispirazione Roma",
          image: "assets/images/Rectangle_2.png",
        },
        {
          heading: "Cappuccino",
          title:
            "Make your morning moment just a little more special with a quick Cappuccino.",
          image: "assets/images/Rectangle_1.png",
        },
      ],
      dataInfo: [
        {
          heading: "B-Corp Certification",
          title:
            "For Nespresso, this certification represents 30 years of continuous sustainability actions",
          image: "assets/images/Rectangle_5.png",
        },
        {
          heading: "Think outside the cup",
          title:
            "Committed to sustainable farming since 2003-it's time to go further, with a shift to regenerative agriculture",
          image: "assets/images/Rectangle_3.png",
        },
        {
          heading: "NESPRESSO RECYCLING PLAN",
          title:
            "Discover Nespresso sustainability commitment. We provide a solution for recycling your used aluminum capsules and fulfilling your commitment to protecting the environment.",
          image: "assets/images/Rectangle_4.png",
        },
      ],
      dataFeatured: [
        {
          heading: "FREE DELIVERY",
          tiltle: "for orders of min. 100 lei.",
          des: "for orders of total value of minimum 100 lei. For orders that do not meet the specified criteria, the cost of standard delivery is 15 lei.",
          image: "assets/images/Calque_1.png",
        },
        {
          heading: "RECYCLE CAPSULES",
          tiltle: "via couriers",
          des: "Together let’s protect the environment with every cup of coffee! Collect your Nespresso used capsules and return them by courier, ticking the option Swap of Used Capsules when you place your online order or bring them upon your next visit to our Nespresso Boutiques.",
          image: "assets/images/Layer_1.png",
        },
        {
          heading: "EXCLUSIVE BENEFITS",
          tiltle: "for Nespresso Members",
          des: "It’s our shared passion for coffee which brings us together, so why not make the most of it? By becoming a Nespresso member, a world of benefits, rewards, and coffee-inspired discoveries open to you. All these benefits are made for you to enjoy your coffee moments, every day. To make loving coffee even more rewarding.",
          image: "assets/images/Frame.png",
        },
      ],
    };
  },
});
</script>

<template lang="pug">
main#indexPage
  // BANNER
  section#banner
    img(src='assets/images/banner-1.png' alt='banner' style="width: '100%'; height: '100%'")
  main#index
    // TAGLINE
    section.tagLine-event
      svg(width='28' height='27' viewbox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M27.5 0.5C19.05 0.5 14 4.822 14 9C14 10.828 14.896 12.232 16.351 12.955C15.3796 15.1842 14.7052 17.5312 14.345 19.936C13.953 18.973 13.406 18.029 12.769 17.122C13.519 16.392 14 15.361 14 14C14 9.988 8.227 5.5 0.5 5.5H0V6C0 12.542 4.29 18.5 9 18.5C10.05 18.5 11.103 18.249 11.97 17.728C13.166 19.426 14 21.241 14 23V26.5H15V24.5C15 19.97 15.994 16.252 17.287 13.3C17.743 13.419 18.224 13.5 18.75 13.5C23.505 13.5 28 7.425 28 1V0.5H27.5ZM9 17.5C5.005 17.5 1.223 12.227 1.01 6.507C7.801 6.695 13 10.616 13 14C13 15.062 12.66 15.8 12.176 16.317C9.086 12.345 4.527 9.289 4.238 9.097L3.686 9.931C3.754 9.977 8.342 13.055 11.375 16.929C10.425 17.449 9.349 17.5 9 17.5ZM18.75 12.5C18.3969 12.498 18.0449 12.4588 17.7 12.383C20.105 7.421 23.252 4.936 23.304 4.897L22.696 4.103C22.642 4.144 19.276 6.782 16.748 12.054C15.644 11.495 15 10.434 15 9C15 4.054 21.972 1.661 26.99 1.508C26.77 7.228 22.87 12.5 18.75 12.5Z' fill='#17171A')
      h3
        | EVERY CUP OF NESPRESSO COFFEE IS CARBON NEUTRAL.
        span MORE DETAILS.
    // FEATURED
    section.featured.container
      #featured.featured_wrapper
        .featured_item(v-for='item in dataFeatured' :key='item.heading')
          .featured_item-content
            h3.featured_item-content-heading
              | {{ item.heading }}
            p.featured_item-content-des {{ item.des }}
            .featured_item-content-btn
              button FIND OUT MORE
          .featured_item-inner
            .featured_item-img
              img(:src='item.image' :alt='item.heading')
            .featured_item-main
              h3.featured_item-header {{ item.heading }}
              p.featured_item-des {{ item.tiltle }}
            .featured_item-btn
              button
                svg.icon_plus(width='17' height='16' viewbox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                  path(d='M1.33337 9H7.33337V15C7.33337 15.6 7.73337 16 8.33337 16C8.93337 16 9.33337 15.6 9.33337 15V9H15.3334C15.9334 9 16.3334 8.6 16.3334 8C16.3334 7.4 15.9334 7 15.3334 7H9.33337V1C9.33337 0.4 8.93337 0 8.33337 0C7.73337 0 7.33337 0.4 7.33337 1V7H1.33337C0.733374 7 0.333374 7.4 0.333374 8C0.333374 8.6 0.733374 9 1.33337 9Z' fill='white')
                svg.icon_minus(width='17' height='16' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                  title
                    g#Complete
                      g#minus
                        line(fill='none' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' x1='4' x2='20' y1='12' y2='12')
    // MORE INFO
    section#moreInfo.moreInfo
      .container.moreInfo_list
        MoreItem(v-bind:data='dataInfo2')
    // PRODUCT
    section#product.product
      h2.product_heading DISCOVER THE NESPRESSO PRODUCTS
      .container.product_list
        ProductItem(v-bind:data='data_product')
      .product_seemore
        span SEE MORE
    // MORE INFO
    section#moreInfo
      .container.moreInfo_list(style='grid-template-columns: 1fr 1fr 1fr')
        MoreItem(v-bind:data='dataInfo')
    // PRODUCT
    section#product.product
      h2.product_heading Recomment for you you
      .container.product_list
        ProductItem(v-bind:data='data_product')
      .product_seemore
        span SEE MORE
</template>
