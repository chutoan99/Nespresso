<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "MachinesComparePage",
});
</script>

<template lang="pug">
main#machines_compare
  .container
    section.intro
      h3.intro-heading COMPARE COFFEE MACHINES
      button.intro-button
        router-link(to='') Shop machines
        svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M7.66272 6.0516C7.87968 5.83465 8.23143 5.83465 8.44839 6.0516L14.0039 11.6072C14.2209 11.8241 14.2209 12.1759 14.0039 12.3928L8.44839 17.9484C8.23143 18.1653 7.87968 18.1653 7.66272 17.9484C7.44576 17.7314 7.44576 17.3797 7.66272 17.1627L12.8254 12L7.66272 6.83728C7.44576 6.62032 7.44576 6.26856 7.66272 6.0516Z' fill='#212121')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M10.9947 6.0516C11.2117 5.83465 11.5635 5.83465 11.7804 6.0516L17.336 11.6072C17.5529 11.8241 17.5529 12.1759 17.336 12.3928L11.7804 17.9484C11.5635 18.1653 11.2117 18.1653 10.9947 17.9484C10.7778 17.7314 10.7778 17.3797 10.9947 17.1627L16.1575 12L10.9947 6.83728C10.7778 6.62032 10.7778 6.26856 10.9947 6.0516Z' fill='#212121')
      p.intro-description
        | Compare all Nespresso coffee machines and discover which suits you
        | best. All our coffee machines are equipped high-pressure bar to
        | deliver perfect coffee, cup after cup. You can even bundle our
        | Espresso Machines with Aeroccino milk frother or simply go for the
        | One-Touch Milk Machine to create a creamy cup of Latte.
    section.product-filter
      .product-filter__select
        select#type-select.product-filter__list(name='type')
          option(value='Coffee Mug') Coffee Mug
          option(value='Spoons') Spoons
          option(value='Glasses') Glasses
          option(value='Sugar') Sugar
          option(value='Maintenance') Maintenance
          option(value='Food') Food
          option(value='Biscuits') Biscuits
          option(value='Capsule Dispenser') Capsule Dispenser
          option(value='Milk Solution') Milk Solution
      .product-filter__select
        select#type-select.product-filter__list(name='type')
          option(value='Coffee Mug') Coffee Mug
          option(value='Spoons') Spoons
          option(value='Glasses') Glasses
          option(value='Sugar') Sugar
          option(value='Maintenance') Maintenance
          option(value='Food') Food
          option(value='Biscuits') Biscuits
          option(value='Capsule Dispenser') Capsule Dispenser
          option(value='Milk Solution') Milk Solution
      .product-filter__select
        select#type-select.product-filter__list(name='type')
          option(value='Coffee Mug') Coffee Mug
          option(value='Spoons') Spoons
          option(value='Glasses') Glasses
          option(value='Sugar') Sugar
          option(value='Maintenance') Maintenance
          option(value='Food') Food
          option(value='Biscuits') Biscuits
          option(value='Capsule Dispenser') Capsule Dispenser
          option(value='Milk Solution') Milk Solution
    section.product-card
      .product-card__item
        .product-card__image
          img(src='assets/images/compare-machinse/product-1.png' alt='')
        .product-card__color
          span.product-card__color--red
          span.product-card__color--black
          span.product-card__color--green
          span.product-card__color--brick-red
        span.product-card__price &#x20AB;3,700,000
        button.product-card__btn
          router-link(to='')  VIEW DETAILS &amp; BUY 
      .product-card__item
        .product-card__image
          img(src='assets/images/compare-machinse/product-2.png' alt='')
        .product-card__color
          span.product-card__color--red
          span.product-card__color--black
          span.product-card__color--green
          span.product-card__color--brick-red
        span.product-card__price &#x20AB;3,700,000
        button.product-card__btn
          router-link(to='')  VIEW DETAILS &amp; BUY 
      .product-card__item
        .product-card__image
          img(src='assets/images/compare-machinse/product-3.png' alt='')
        .product-card__color
          span.product-card__color--red
          span.product-card__color--black
          span.product-card__color--green
          span.product-card__color--brick-red
        span.product-card__price &#x20AB; 3,700,000
        button.product-card__btn
          router-link(to='')  VIEW DETAILS &amp; BUY 
    section.product-selection
      .product-selection-group
        h4.product-selection-heading Coffee Selection
        .product-selection-list
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-small.png' alt='')
            span.product-selection-item__name Ristretto
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-small.png' alt='')
            span.product-selection-item__name Espresso
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-small.png' alt='')
            span.product-selection-item__name Espresso
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-large.png' alt='')
            span.product-selection-item__name Lungo
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-small.png' alt='')
            span.product-selection-item__name Espresso
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-large.png' alt='')
            span.product-selection-item__name Lungo
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/cup-large.png' alt='')
            span.product-selection-item__name Lungo
          .product-selection-item
      .product-selection-group
        h4.product-selection-heading Milk Recipes Selection
        .product-selection-list
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk.png' alt='')
            span.product-selection-item__name Ristretto
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-2.png' alt='')
            span.product-selection-item__name Espresso
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-3.png' alt='')
            span.product-selection-item__name Espresso
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-4.png' alt='')
            span.product-selection-item__name Lungo
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-5.png' alt='')
            span.product-selection-item__name Lungo
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-6.png' alt='')
            span.product-selection-item__name Espresso
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-5.png' alt='')
            span.product-selection-item__name Lungo
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-6.png' alt='')
            span.product-selection-item__name Espresso
      .product-selection-group
        h4.product-selection-heading Milk Functions
        .product-selection-wrapper
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/milk-functions.png' alt='')
            span.product-selection-item__name Detachable frother
          .product-selection-item
            .product-selection-item__image
              img(src='assets/images/compare-machinse/actions.png' alt='')
            span.product-selection-item__name Automated milk function
          .product-selection-item
            .product-selection-item__image
            span.product-selection-item__name Option to bundle with Aeroccino
            button.product-selection-item__btn
              router-link(to='')  Learn more 
              svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M7.32678 6.05163C7.54374 5.83468 7.8955 5.83468 8.11246 6.05163L13.668 11.6072C13.885 11.8241 13.885 12.1759 13.668 12.3929L8.11246 17.9484C7.8955 18.1654 7.54374 18.1654 7.32678 17.9484C7.10982 17.7315 7.10982 17.3797 7.32678 17.1627L12.4895 12L7.32678 6.83731C7.10982 6.62035 7.10982 6.26859 7.32678 6.05163Z' fill='#17171A')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M10.6588 6.05163C10.8758 5.83468 11.2275 5.83468 11.4445 6.05163L17 11.6072C17.217 11.8241 17.217 12.1759 17 12.3929L11.4445 17.9484C11.2275 18.1654 10.8758 18.1654 10.6588 17.9484C10.4419 17.7315 10.4419 17.3797 10.6588 17.1627L15.8215 12L10.6588 6.83731C10.4419 6.62035 10.4419 6.26859 10.6588 6.05163Z' fill='#17171A')
      .product-selection-group
        h4.product-selection-heading Key Features Selection
        .product-selection-wrapper
          .product-selection-paragraph
            ul
              li 30-sec heat up time
              li Foldable drip tray
              li Automatically off mode in 9 min
              li Descaling alert
              li One complimentary VIEW mug
          .product-selection-paragraph
            ul
              li 40-sec heat up time
              li Foldable drip tray
              li Automatically off mode in 9 min
              li Descaling alert
              li Easy rinsing system
          .product-selection-paragraph
            ul
              li 30-sec heat up time
              li Foldable drip tray
              li Automatically off mode in 9 min
      .product-selection-group
        h4.product-selection-heading Size and Weight
        .product-selection-wrapper
          .product-selection-context
            p
              | Width 
              br
              | 11.9cm
            p
              | Depth 
              br
              |                 43.4cm
            p
              | Height 
              br
              |                 27.9cm
            p
              | Weight 
              br
              |                 4.5kg
            p
              | Water tank
              br
              |                 1 Litre
          .product-selection-context
            p
              | Width 
              br
              |                 15.4cm
            p
              | Depth 
              br
              |                 32.4cm
            p
              | Height 
              br
              |                 25.6cm
            p
              | Weight 
              br
              |                 4.2kg
            p
              | Water tank
              br
              |                 1 Litre
          .product-selection-context
            p
              | Width 
              br
              |                 11cm
            p
              | Depth 
              br
              |                 32.5cm
            p
              | Height 
              br
              |                 20.5cm
            p
              | Weight 
              br
              |                 2.3kg
            p
              | Water tank
              br
              |                 0.6 Litre
</template>
