<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "CoffeeOriginalPage",
  data() {
    return {
      tabs: [
        { label: "ispirazione italiana", route: "#ispirazione-italiana" },
        { label: "Espresso & Lungo", route: "#espresso-lungo" },
        { label: "Master Origins", route: "#master-origins" },
        { label: "Barista Creations", route: "#barista-creations" },
      ],
      selectedIndex: 0,
      navItems: [
        { label: "ORIGIN" },
        { label: "INTENSITY" },
        { label: "AROMATIC NOTES" },
        { label: "CUP SIZE" },
      ],
      selectedTab: 0,
    };
  },
  methods: {
    OnShowModal(): void {
      const modal = document.querySelector(".js-modal") as HTMLElement;
      const body = document.body as HTMLElement;
      modal.classList.add("open-modal");
      body.style.overflow = "hidden";
    },
    OnCloseModal(): void {
      const modal = document.querySelector(".js-modal") as HTMLElement;
      const body = document.body as HTMLElement;
      modal.classList.remove("open-modal");
      modal.classList.remove("popinSlide");
      body.style.overflow = "";
    },
    OnBackModal(): void {
      const modal = document.querySelector(".js-modal") as HTMLElement;
      modal.classList.remove("popinSlide");
    },

    selectTab(index: number): void {
      this.selectedTab = index;
    },
  },
});
</script>

<template lang="pug">
main#coffee_original
  section.banner.background-1
    .banner__context
      h3.banner__context-title YOUR CLASSIC ESPRESSO EXPERIENCE
  section.choice
    .container
      .choice-context
        h3.choice-context__heading COFFEE EXPERTISE IN A CUP
        h5.choice-context__title
          | With original, live your authentic coffee experience from a milder
          | fruity Espresso to the Neapolitan style short Ristretto, with or
          | without milk.
        p.choice-context__subtitle
          | Coffee pleasure is no accident: it must be deliberately created,
          | consistently and without compromise, cup after cup from coffee
          | origins to capsules, by living our principles.
      .choice-image
        img(src='assets/images/coffee-original/coffee-expertise.png' alt='Coffee Expertise')
  section.banner.background-2
  section.discover
    .container
      .discover-context
        h3.discover-context__heading
          | DISCOVER NESPRESSOCOFFEE CAPSULES
        h5.discover-context__title
          | Enjoy your authentic coffee experience with a wide variety of
          | capsules,
          br
          |             each has its own distinctive character and aroma, with or without
          |             milk.
      .discover-list
        .discover-item
          .discover-item__image
            img(src='assets/images/coffee-original/discover-capsules.png' alt='RISTRETTO')
          h5.discover-item__name RISTRETTO
          span.discover-item__type 25 ml
        .discover-item
          .discover-item__image
            img(src='assets/images/coffee-original/discover-capsules.png' alt='ESPRESSO')
          h5.discover-item__name ESPRESSO
          span.discover-item__type 25 ml
        .discover-item
          .discover-item__image
            img(src='assets/images/coffee-original/discover-capsules.png' alt='LUNGO')
          h5.discover-item__name LUNGO
          span.discover-item__type 25 ml
  section.product-nav
    ul
      li.tab-menu(v-for='(tab, index) in tabs' :key='index' @click='selectTab(index)' :class="{ 'tab-menu--selected': selectedTab === index }")
        router-link(:to='tab.route') {{ tab?.label }}
    //
      <ul>
      <li class="tab-menu tab-menu--selected">
      <router-link to="ispirazione-italiana"
      >ispirazione italiana</router-link
      >
      </li>
      <li class="tab-menu">
      <router-link to="espresso-lungo">Espresso & Lungo</router-link>
      </li>
      <li class="tab-menu">
      <router-link to="master-origins">Master Origins</router-link>
      </li>
      <li class="tab-menu">
      <router-link to="barista-creations"
      >Barista Creations</router-link
      >
      </li>
      </ul>
  section#ispirazione-italiana.hero.background-1
    .hero-image
      div
        img(src='assets/images/coffee-original/ispirazione-italiana.png' alt='Inspired by italian roasting tradition')
      div
        img(src='assets/images/coffee-original/cup.png' alt='')
    .hero-content
      h6.hero-content__heading
        | inspired by italian roasting tradition
      .hero-content__list
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M23.6008 7.19995H21.8008L22.5008 4.09995L21.8008 3.19995H1.00078L0.300781 4.19995L4.50078 24L5.20078 24.6H17.4008L18.1008 24L20.1008 14.8H23.5008C25.6008 14.8 27.3008 13.1 27.3008 11C27.3008 8.89995 25.7008 7.19995 23.6008 7.19995ZM20.8008 4.79995L18 17.5H4.5L1.90078 4.79995H20.8008ZM17 23H6L5 19H17.5L17 23ZM23.6008 13.2H20.7008L21.7008 8.69995H23.6008C24.8008 8.69995 25.8008 9.69995 25.8008 10.9C25.8008 12.1 24.8008 13.2 23.6008 13.2Z' fill='white')
          span.hero-content__item-name Ristretto 25ml
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M23.6008 7.19995H21.8008L22.5008 4.09995L21.8008 3.19995H1.00078L0.300781 4.19995L4.50078 24L5.20078 24.6H17.4008L18.1008 24L20.1008 14.8H23.5008C25.6008 14.8 27.3008 13.1 27.3008 11C27.3008 8.89995 25.7008 7.19995 23.6008 7.19995ZM20.8008 4.79995L19.7008 9.99995H3.00078L1.90078 4.79995H20.8008ZM16.8008 23H5.80078L3.40078 11.5H19.4008L16.8008 23ZM23.6008 13.2H20.7008L21.7008 8.69995H23.6008C24.8008 8.69995 25.8008 9.69995 25.8008 10.9C25.8008 12.1 24.8008 13.2 23.6008 13.2Z' fill='white')
          span.hero-content__item-name Espresso 40 ml
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M22.8337 21.1193L24.062 21.1327C24.4416 21.1327 24.75 21.4379 24.75 21.8163C24.75 22.1947 24.4416 22.5 24.062 22.5H3.93901C3.56002 22.5 3.25 22.1945 3.25 21.8163C3.25 21.4382 3.56002 21.1327 3.93901 21.1327C4.17453 21.1308 4.29795 21.1292 4.30927 21.1279L5.1693 21.1271C5.28318 20.8903 5.36939 20.6523 5.40714 20.4358C5.43261 20.2872 5.53297 19.5772 5.67607 18.5343C5.78835 17.7227 5.83647 17.3695 6.16996 14.9158L6.91136 9.42808C6.94046 9.22953 6.97569 9.07484 7.02376 8.93747C7.08267 8.76718 7.16588 8.61648 7.27393 8.48953C7.40969 8.33141 7.53694 8.23573 7.8153 8.0677L7.89751 8.01983C8.07641 7.9103 8.38431 7.73564 9.29045 7.22631L9.36765 7.18292L10.7864 6.38863C10.9218 6.3066 11.0284 6.24693 11.1468 6.19016C11.4126 6.06459 11.6705 6.00191 11.9317 6.00191L16.0566 6C16.3135 6 16.5686 6.06144 16.8403 6.18661C16.9522 6.23984 17.0409 6.28981 17.1851 6.37675L18.6164 7.17883C19.3498 7.5874 19.8867 7.89064 20.0884 8.01219L20.1804 8.06763C20.3595 8.17371 20.4478 8.23189 20.5459 8.31591C20.7356 8.47554 20.8805 8.68729 20.9666 8.93283C21.0143 9.07645 21.0477 9.22993 21.074 9.41848C21.0961 9.56492 21.1446 9.91973 21.3997 11.7937C21.6024 13.2793 21.7196 14.1374 21.8296 14.9415L21.8384 15.0061C22.0404 16.4827 22.1986 17.6326 22.323 18.5271C22.489 19.7409 22.57 20.3036 22.594 20.4263C22.6303 20.6432 22.7149 20.875 22.8337 21.1193ZM8.13301 11.0939C7.85187 13.1774 7.7479 13.9471 7.58542 15.1457L7.57489 15.2234C7.38199 16.6462 7.2215 17.8232 7.09664 18.7289C6.94396 19.8323 6.84833 20.5034 6.81844 20.6763C6.79352 20.8178 6.75418 20.9643 6.69848 21.1279H21.3028C21.2448 20.9611 21.2047 20.8148 21.1797 20.6717C21.148 20.4896 21.0479 19.7859 20.9015 18.7205C20.682 17.145 20.548 16.1749 20.4025 15.0984C20.036 12.3976 19.7582 10.36 19.6772 9.78019L19.6196 9.43479C19.6072 9.38809 19.608 9.38945 19.6078 9.38918C19.6096 9.39153 19.5217 9.33451 19.3551 9.23413C19.1607 9.11868 18.5813 8.79083 17.9153 8.41873L16.4605 7.60452C16.3533 7.54081 16.3263 7.52519 16.2803 7.50114C16.2534 7.48733 16.2534 7.48733 16.2265 7.4746C16.1492 7.43839 16.0947 7.4237 16.0567 7.4237L11.9318 7.42561C11.8922 7.42561 11.8387 7.43995 11.7625 7.47529C11.7067 7.50159 11.6788 7.51736 11.5332 7.60281L10.0713 8.4234C9.29816 8.85696 8.81749 9.12953 8.64062 9.23687C8.44349 9.35224 8.40473 9.37624 8.37584 9.40138C8.37472 9.41251 8.37386 9.41559 8.36631 9.44495L8.13301 11.0939Z' fill='white')
          span.hero-content__item-name Intensity 8-12
      button.hero-content__btn.js-click-modal(v-on:click='OnShowModal')
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
  section#espresso-lungo.hero.background-2
    .hero-image
      div
        img(src='assets/images/coffee-original/espresso&lungo.png' alt='Traditional is best')
      div
        img(src='assets/images/coffee-original/espresso&lungo-cup.png' alt='Traditional is best')
    .hero-content
      h6.hero-content__heading Traditional is best
      .hero-content__list
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M23.6008 7.19995H21.8008L22.5008 4.09995L21.8008 3.19995H1.00078L0.300781 4.19995L4.50078 24L5.20078 24.6H17.4008L18.1008 24L20.1008 14.8H23.5008C25.6008 14.8 27.3008 13.1 27.3008 11C27.3008 8.89995 25.7008 7.19995 23.6008 7.19995ZM20.8008 4.79995L19.7008 9.99995H3.00078L1.90078 4.79995H20.8008ZM16.8008 23H5.80078L3.40078 11.5H19.4008L16.8008 23ZM23.6008 13.2H20.7008L21.7008 8.69995H23.6008C24.8008 8.69995 25.8008 9.69995 25.8008 10.9C25.8008 12.1 24.8008 13.2 23.6008 13.2Z' fill='white')
          span.hero-content__item-name Espresso 40 ml
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M22.8337 21.1193L24.062 21.1327C24.4416 21.1327 24.75 21.4379 24.75 21.8163C24.75 22.1947 24.4416 22.5 24.062 22.5H3.93901C3.56002 22.5 3.25 22.1945 3.25 21.8163C3.25 21.4382 3.56002 21.1327 3.93901 21.1327C4.17453 21.1308 4.29795 21.1292 4.30927 21.1279L5.1693 21.1271C5.28318 20.8903 5.36939 20.6523 5.40714 20.4358C5.43261 20.2872 5.53297 19.5772 5.67607 18.5343C5.78835 17.7227 5.83647 17.3695 6.16996 14.9158L6.91136 9.42808C6.94046 9.22953 6.97569 9.07484 7.02376 8.93747C7.08267 8.76718 7.16588 8.61648 7.27393 8.48953C7.40969 8.33141 7.53694 8.23573 7.8153 8.0677L7.89751 8.01983C8.07641 7.9103 8.38431 7.73564 9.29045 7.22631L9.36765 7.18292L10.7864 6.38863C10.9218 6.3066 11.0284 6.24693 11.1468 6.19016C11.4126 6.06459 11.6705 6.00191 11.9317 6.00191L16.0566 6C16.3135 6 16.5686 6.06144 16.8403 6.18661C16.9522 6.23984 17.0409 6.28981 17.1851 6.37675L18.6164 7.17883C19.3498 7.5874 19.8867 7.89064 20.0884 8.01219L20.1804 8.06763C20.3595 8.17371 20.4478 8.23189 20.5459 8.31591C20.7356 8.47554 20.8805 8.68729 20.9666 8.93283C21.0143 9.07645 21.0477 9.22993 21.074 9.41848C21.0961 9.56492 21.1446 9.91973 21.3997 11.7937C21.6024 13.2793 21.7196 14.1374 21.8296 14.9415L21.8384 15.0061C22.0404 16.4827 22.1986 17.6326 22.323 18.5271C22.489 19.7409 22.57 20.3036 22.594 20.4263C22.6303 20.6432 22.7149 20.875 22.8337 21.1193ZM8.13301 11.0939C7.85187 13.1774 7.7479 13.9471 7.58542 15.1457L7.57489 15.2234C7.38199 16.6462 7.2215 17.8232 7.09664 18.7289C6.94396 19.8323 6.84833 20.5034 6.81844 20.6763C6.79352 20.8178 6.75418 20.9643 6.69848 21.1279H21.3028C21.2448 20.9611 21.2047 20.8148 21.1797 20.6717C21.148 20.4896 21.0479 19.7859 20.9015 18.7205C20.682 17.145 20.548 16.1749 20.4025 15.0984C20.036 12.3976 19.7582 10.36 19.6772 9.78019L19.6196 9.43479C19.6072 9.38809 19.608 9.38945 19.6078 9.38918C19.6096 9.39153 19.5217 9.33451 19.3551 9.23413C19.1607 9.11868 18.5813 8.79083 17.9153 8.41873L16.4605 7.60452C16.3533 7.54081 16.3263 7.52519 16.2803 7.50114C16.2534 7.48733 16.2534 7.48733 16.2265 7.4746C16.1492 7.43839 16.0947 7.4237 16.0567 7.4237L11.9318 7.42561C11.8922 7.42561 11.8387 7.43995 11.7625 7.47529C11.7067 7.50159 11.6788 7.51736 11.5332 7.60281L10.0713 8.4234C9.29816 8.85696 8.81749 9.12953 8.64062 9.23687C8.44349 9.35224 8.40473 9.37624 8.37584 9.40138C8.37472 9.41251 8.37386 9.41559 8.36631 9.44495L8.13301 11.0939Z' fill='white')
          span.hero-content__item-name Intensity 4-6
      button.hero-content__btn.js-click-modal(v-on:click='OnShowModal')
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
  section#master-origins.hero.background-3
    .hero-image
      div
        img(src='assets/images/coffee-original/master-origins.png' alt='')
      div
        img(src='assets/images/coffee-original/master-cup.png' alt='')
    .hero-content
      h6.hero-content__heading Master Origin
      .hero-content__list
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M23.6008 7.19995H21.8008L22.5008 4.09995L21.8008 3.19995H1.00078L0.300781 4.19995L4.50078 24L5.20078 24.6H17.4008L18.1008 24L20.1008 14.8H23.5008C25.6008 14.8 27.3008 13.1 27.3008 11C27.3008 8.89995 25.7008 7.19995 23.6008 7.19995ZM20.8008 4.79995L18 17.5H4.5L1.90078 4.79995H20.8008ZM17 23H6L5 19H17.5L17 23ZM23.6008 13.2H20.7008L21.7008 8.69995H23.6008C24.8008 8.69995 25.8008 9.69995 25.8008 10.9C25.8008 12.1 24.8008 13.2 23.6008 13.2Z' fill='white')
          span.hero-content__item-name Espresso 40 ml
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M23.6008 7.19995H21.8008L22.5008 4.09995L21.8008 3.19995H1.00078L0.300781 4.19995L4.50078 24L5.20078 24.6H17.4008L18.1008 24L20.1008 14.8H23.5008C25.6008 14.8 27.3008 13.1 27.3008 11C27.3008 8.89995 25.7008 7.19995 23.6008 7.19995ZM20.8008 4.79995L19.7008 9.99995H3.00078L1.90078 4.79995H20.8008ZM16.8008 23H5.80078L3.40078 11.5H19.4008L16.8008 23ZM23.6008 13.2H20.7008L21.7008 8.69995H23.6008C24.8008 8.69995 25.8008 9.69995 25.8008 10.9C25.8008 12.1 24.8008 13.2 23.6008 13.2Z' fill='white')
          span.hero-content__item-name Lungo 110 ml
        .hero-content__item
          .hero-content__item-image
            svg(width='28' height='28' viewbox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M22.8337 21.1193L24.062 21.1327C24.4416 21.1327 24.75 21.4379 24.75 21.8163C24.75 22.1947 24.4416 22.5 24.062 22.5H3.93901C3.56002 22.5 3.25 22.1945 3.25 21.8163C3.25 21.4382 3.56002 21.1327 3.93901 21.1327C4.17453 21.1308 4.29795 21.1292 4.30927 21.1279L5.1693 21.1271C5.28318 20.8903 5.36939 20.6523 5.40714 20.4358C5.43261 20.2872 5.53297 19.5772 5.67607 18.5343C5.78835 17.7227 5.83647 17.3695 6.16996 14.9158L6.91136 9.42808C6.94046 9.22953 6.97569 9.07484 7.02376 8.93747C7.08267 8.76718 7.16588 8.61648 7.27393 8.48953C7.40969 8.33141 7.53694 8.23573 7.8153 8.0677L7.89751 8.01983C8.07641 7.9103 8.38431 7.73564 9.29045 7.22631L9.36765 7.18292L10.7864 6.38863C10.9218 6.3066 11.0284 6.24693 11.1468 6.19016C11.4126 6.06459 11.6705 6.00191 11.9317 6.00191L16.0566 6C16.3135 6 16.5686 6.06144 16.8403 6.18661C16.9522 6.23984 17.0409 6.28981 17.1851 6.37675L18.6164 7.17883C19.3498 7.5874 19.8867 7.89064 20.0884 8.01219L20.1804 8.06763C20.3595 8.17371 20.4478 8.23189 20.5459 8.31591C20.7356 8.47554 20.8805 8.68729 20.9666 8.93283C21.0143 9.07645 21.0477 9.22993 21.074 9.41848C21.0961 9.56492 21.1446 9.91973 21.3997 11.7937C21.6024 13.2793 21.7196 14.1374 21.8296 14.9415L21.8384 15.0061C22.0404 16.4827 22.1986 17.6326 22.323 18.5271C22.489 19.7409 22.57 20.3036 22.594 20.4263C22.6303 20.6432 22.7149 20.875 22.8337 21.1193ZM8.13301 11.0939C7.85187 13.1774 7.7479 13.9471 7.58542 15.1457L7.57489 15.2234C7.38199 16.6462 7.2215 17.8232 7.09664 18.7289C6.94396 19.8323 6.84833 20.5034 6.81844 20.6763C6.79352 20.8178 6.75418 20.9643 6.69848 21.1279H21.3028C21.2448 20.9611 21.2047 20.8148 21.1797 20.6717C21.148 20.4896 21.0479 19.7859 20.9015 18.7205C20.682 17.145 20.548 16.1749 20.4025 15.0984C20.036 12.3976 19.7582 10.36 19.6772 9.78019L19.6196 9.43479C19.6072 9.38809 19.608 9.38945 19.6078 9.38918C19.6096 9.39153 19.5217 9.33451 19.3551 9.23413C19.1607 9.11868 18.5813 8.79083 17.9153 8.41873L16.4605 7.60452C16.3533 7.54081 16.3263 7.52519 16.2803 7.50114C16.2534 7.48733 16.2534 7.48733 16.2265 7.4746C16.1492 7.43839 16.0947 7.4237 16.0567 7.4237L11.9318 7.42561C11.8922 7.42561 11.8387 7.43995 11.7625 7.47529C11.7067 7.50159 11.6788 7.51736 11.5332 7.60281L10.0713 8.4234C9.29816 8.85696 8.81749 9.12953 8.64062 9.23687C8.44349 9.35224 8.40473 9.37624 8.37584 9.40138C8.37472 9.41251 8.37386 9.41559 8.36631 9.44495L8.13301 11.0939Z' fill='white')
          span.hero-content__item-name Intensity 5-11
      button.hero-content__btn.js-click-modal(v-on:click='OnShowModal')
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
  section#barista-creations.hero.background-4
    .hero-image
      div
        img(src='assets/images/coffee-original/barista-creations.png' alt='Designed for the full spread of the coffee recipes')
      div
        img(src='assets/images/coffee-original/barista-cup.png' alt='')
    .hero-content
      h6.hero-content__heading
        | Designed for the full spread of the coffee recipes
      .hero-content__list
        .hero-content__item
          .hero-content__item-image
            svg(width='56' height='57' viewbox='0 0 56 57' fill='none' xmlns='http://www.w3.org/2000/svg')
              g#Frame
                path#Vector(d='M10.0234 28.6024C12.9552 27.3302 15.5472 26.0618 18.2419 25.074C20.7904 24.1416 23.3744 23.7583 25.8953 25.5245C27.4441 26.6071 29.2972 26.4214 30.7986 25.3743C33.6948 23.3553 36.4607 23.9203 39.183 25.5403C41.3917 26.86 43.549 28.2508 45.9751 29.282C43.3752 29.6969 40.8148 27.3697 38.2308 26.453C36.3145 25.7734 34.4179 25.7892 32.4976 26.6427C29.5619 27.9505 26.6223 28.1836 23.6826 26.4767C22.359 25.7102 20.7983 25.6075 19.3087 25.8959C16.3413 26.4609 13.3938 29.2741 10.0234 28.6024ZM44.8766 30.7677C44.2168 31.2023 43.5095 31.5658 42.7904 31.8977C38.7681 33.6718 34.5404 34.0195 30.2889 33.494C28.3173 33.0396 26.6776 33.2885 24.1528 34.5173C29.795 36.6865 38.1122 35.3313 42.1187 33.1463C42.2886 33.0554 42.4585 32.9566 42.6284 32.8499C42.7035 32.8025 42.7825 32.7591 42.8536 32.7077C43.0156 32.5971 43.1737 32.4746 43.3317 32.3481C43.3949 32.2968 43.4621 32.2494 43.5214 32.2019C44.0237 31.7743 44.4781 31.2934 44.8766 30.7677Z' fill='white')
          span.hero-content__item-name Flavoured
        .hero-content__item
          .hero-content__item-image
            svg(width='57' height='62' viewbox='0 0 57 62' fill='none' xmlns='http://www.w3.org/2000/svg')
              g(clip-path='url(#clip0_2314_59501)')
                path(d='M8.95033 33.0064C9.32941 33.0064 9.70849 32.964 10.0962 32.8793C10.7475 32.7334 11.3629 32.4621 11.9071 32.0811C12.4512 31.7002 12.9133 31.217 13.2666 30.6596C13.9817 29.5243 14.2143 28.1857 13.9042 26.881C13.5596 25.3983 12.5774 24.4918 11.7159 23.6954C11.3713 23.3735 11.0353 23.0685 10.7423 22.7296C9.92387 21.7976 9.69987 21.1453 9.76018 20.8488C9.76879 20.7894 9.80326 20.6454 10.122 20.476L9.32079 18.9764C9.32079 18.9764 9.31218 18.9849 9.30356 18.9849C9.29495 18.9849 9.28633 18.9933 9.28633 18.9933C8.68325 19.3068 2.50602 22.7804 3.99649 29.1261C4.25641 30.2274 4.8872 31.21 5.78646 31.9144C6.68572 32.6187 7.80067 33.0036 8.95033 33.0064ZM8.18356 21.84C8.39895 22.4585 8.81249 23.1193 9.43279 23.831C9.78602 24.2376 10.1651 24.585 10.5356 24.9239C11.3196 25.6525 12.0002 26.2794 12.2328 27.2622C12.4396 28.1264 12.2845 29.0075 11.8106 29.7615C11.3368 30.5156 10.5959 31.0324 9.7171 31.2272C9.28604 31.3252 8.83958 31.3387 8.40322 31.2669C7.96686 31.1952 7.54915 31.0396 7.17393 30.8091C6.79872 30.5786 6.47336 30.2776 6.21642 29.9234C5.95949 29.5693 5.77602 29.1688 5.67649 28.7449C4.91833 25.5254 6.65864 23.1956 8.18356 21.84ZM55.8439 31.7101C55.7146 31.0069 55.4476 30.3122 55.0513 29.6599C54.8445 29.321 54.5946 28.9906 54.3276 28.6771L39.7676 12.1986C38.4149 10.6736 37.1657 9.77556 35.322 9.00459C34.5725 8.69112 32.7288 7.92014 28.2229 6.00542L27.9989 5.91223C27.8094 5.83598 27.7405 5.78514 27.7233 5.7682C27.6911 5.73731 27.6622 5.70324 27.6371 5.66653C27.6113 5.63264 27.6026 5.59875 27.5854 5.57334C27.5673 5.52156 27.5586 5.46709 27.5596 5.41236C27.5596 5.31917 27.5682 5.27681 27.5768 5.25987C27.594 5.20903 27.6199 5.1582 27.6543 5.09042L27.7491 4.88709C27.818 4.73459 27.8869 4.5482 27.93 4.33639C28.0076 3.98056 28.0076 3.59931 27.93 3.24348C27.8783 2.98931 27.7836 2.74362 27.6629 2.52334C27.5251 2.28612 27.3442 2.06584 27.1288 1.87945C26.7928 1.59139 26.3879 1.38806 25.9485 1.29487C25.6211 1.22709 25.2851 1.22709 24.9405 1.28639C24.4753 1.37112 24.0531 1.56598 23.7085 1.8625L14.0679 10.106C13.818 10.3178 13.6113 10.5635 13.4734 10.8346C13.2925 11.165 13.1891 11.5547 13.1805 11.936C13.1719 12.2579 13.2149 12.5714 13.3269 12.8679C13.4217 13.1306 13.5509 13.3678 13.7146 13.5796C13.9645 13.9015 14.2919 14.1472 14.6796 14.3251C14.938 14.4353 15.2051 14.5115 15.4722 14.5454C15.9029 14.5963 16.2648 14.5285 16.4974 14.4776C16.6094 14.4522 16.7214 14.4183 16.842 14.3844C16.9023 14.3675 16.954 14.3506 16.9885 14.3421C16.9885 14.3421 17.0316 14.3336 17.1263 14.3506C17.2211 14.3675 17.2642 14.3844 17.2814 14.4014C17.3073 14.4183 17.3331 14.4353 17.3676 14.4607C17.4193 14.5031 17.4451 14.5454 17.4623 14.5624C17.4709 14.5793 17.5054 14.6471 17.5657 14.8504L17.9879 16.3585C18.5393 18.341 19.1165 20.3913 19.6593 22.4076C19.9177 23.365 20.2451 24.1953 20.65 24.9408C21.0463 25.6779 21.5719 26.4065 22.2611 27.186L36.8211 43.656C37.0968 43.9694 37.3983 44.249 37.7085 44.5032C38.3116 44.9776 38.9663 45.3335 39.6642 45.5622C40.1639 45.7232 40.6636 45.8079 41.1633 45.8249H41.3356C41.7319 45.8249 42.1368 45.7825 42.5245 45.6893C43.0242 45.5792 43.5239 45.3843 43.9977 45.1301C44.4371 44.8929 44.8593 44.5964 45.2986 44.2236L53.7676 36.9883C54.2069 36.6071 54.5688 36.2343 54.8617 35.8531C55.1805 35.4294 55.4389 34.9719 55.6285 34.4975C55.7922 34.0739 55.9042 33.6333 55.9559 33.1928C55.9559 32.7183 55.93 32.2185 55.8439 31.7101ZM54.1897 33.0233C54.1553 33.3199 54.0863 33.6079 53.9743 33.896C53.8451 34.2264 53.6642 34.5483 53.4316 34.8533C53.2162 35.1414 52.9405 35.4294 52.5959 35.726L44.1269 42.9613C43.7823 43.2578 43.4549 43.4865 43.1276 43.656C42.7916 43.8339 42.4469 43.9694 42.0937 44.0457C41.7922 44.1135 41.482 44.1474 41.1805 44.1389C40.8445 44.1304 40.5085 44.0711 40.1639 43.961C39.6479 43.7934 39.1686 43.5318 38.7509 43.19C38.5183 43.0036 38.2943 42.7918 38.0876 42.5546L23.5276 26.0761C22.9331 25.3983 22.4765 24.7714 22.1405 24.1444C21.7959 23.5175 21.5202 22.8058 21.2962 21.9756C20.7448 19.9507 20.1762 17.9004 19.6162 15.9094L19.194 14.4014C19.1337 14.1981 19.0562 13.9439 18.9269 13.7151C18.8149 13.5203 18.6513 13.3339 18.4617 13.1729C18.3343 13.0656 18.1957 12.9719 18.0482 12.8933C17.8673 12.8001 17.6519 12.7239 17.4193 12.6815C17.2642 12.6561 17.1263 12.6392 16.9799 12.6392C16.8679 12.6392 16.7645 12.6476 16.6525 12.6646C16.5663 12.6815 16.4457 12.7154 16.3251 12.7493C16.2389 12.7747 16.1528 12.8001 16.0666 12.8171C15.9546 12.8425 15.8082 12.8679 15.6445 12.851C15.5497 12.8425 15.4549 12.8171 15.3602 12.7747C15.2357 12.7226 15.1263 12.6411 15.0414 12.5375C14.9876 12.4689 14.9468 12.3915 14.9208 12.3088C14.8863 12.2071 14.8691 12.0969 14.8691 11.9868C14.8777 11.8513 14.9036 11.7242 14.9639 11.614C15.0069 11.5293 15.0759 11.4446 15.162 11.3768L24.8026 3.13334C24.9146 3.04014 25.0525 2.98084 25.2162 2.94695C25.3368 2.92153 25.4574 2.93 25.5694 2.94695C25.7159 2.98084 25.8537 3.04862 25.9657 3.14181C26.0346 3.20112 26.0949 3.26889 26.138 3.34514C26.1725 3.41292 26.2069 3.48917 26.2242 3.57389C26.25 3.70098 26.25 3.83653 26.2242 3.97209C26.1983 4.07375 26.1639 4.15848 26.138 4.22625L26.0605 4.40417C26.0002 4.53125 25.9485 4.64987 25.9226 4.73459C25.8451 4.96334 25.8106 5.20903 25.8279 5.48014C25.8365 5.70889 25.8796 5.9207 25.9485 6.12403C26.0088 6.285 26.0777 6.4375 26.1725 6.57306C26.3017 6.78486 26.474 6.96278 26.6549 7.10681C26.8703 7.27625 27.1202 7.38639 27.3183 7.47111L27.5423 7.56431C32.0654 9.47903 33.9005 10.2585 34.65 10.5635C36.2525 11.2328 37.2863 11.9783 38.4666 13.3085L53.0266 29.7869C53.2334 30.0242 53.4143 30.2699 53.5694 30.524C53.8623 30.9985 54.0519 31.4983 54.1466 32.0067C54.2069 32.3625 54.2242 32.7014 54.1897 33.0233ZM16.8679 47.2651H15.9116L16.0149 46.4179H16.0063V45.1725C16.0063 43.3679 14.6537 41.9954 12.8531 41.9954C12.5429 41.9954 12.2328 42.0378 11.9399 42.131C11.1731 41.1058 10.0014 40.4874 8.71772 40.4874C7.43402 40.4874 6.25372 41.0974 5.49556 42.131C5.20264 42.0378 4.89249 41.9954 4.58233 41.9954C2.80756 41.9954 1.36018 43.4696 1.36018 45.2826V46.4179H1.35156L3.08325 60.9224L3.94479 61.6679H13.4217L14.2746 60.9224L15.1448 53.6617V54.0429H16.8679C18.2549 54.0429 20.314 53.1364 20.314 50.654C20.314 48.1717 18.2549 47.2651 16.8679 47.2651ZM3.08325 45.2826C3.08325 44.4015 3.75525 43.6899 4.58233 43.6899C4.85802 43.6899 5.11649 43.7661 5.36633 43.9271L6.62418 43.5797C7.0291 42.724 7.83033 42.1903 8.72633 42.1903C9.62233 42.1903 10.4236 42.724 10.8285 43.5797L12.0863 43.9271C12.3276 43.7661 12.5946 43.6899 12.8617 43.6899C13.706 43.6899 14.2919 44.2999 14.2919 45.1725V46.4179H3.08325V45.2826ZM3.29002 48.1124H14.0765L13.8697 49.8068H3.49679L3.29002 48.1124ZM12.6549 59.9735H4.71156L3.69495 51.5013H13.6629L12.6549 59.9735ZM16.8679 52.3485H15.2999L15.7048 48.9596H16.8679C17.1522 48.9596 18.5909 49.0443 18.5909 50.654C18.5909 52.2044 17.2642 52.34 16.8679 52.3485Z' fill='white')
              defs
                clippath#clip0_2314_59501
                  rect(width='56' height='61' fill='white' transform='translate(0.5 0.667969)')
          span.hero-content__item-name For milk recipes
      button.hero-content__btn.js-click-modal(v-on:click='OnShowModal')
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
  section.intro.intro-explore
    .intro-description
      h4.intro-heading EXPLORE OUR COFFEE WORLD
      ul.intro-nav
        li.intro-nav__item(v-for='(item, index) in navItems' :key='index' :class="{ 'intro-nav__item--selected': selectedTab === index }" @click='selectTab(index)')
          button {{ item.label }}
      .intro-context
        p
          | The taste of a Nespresso coffee depends on its blend composition and
          | terroir.
        p
          | BLEND 
          br
          |             Various types of Arabicas and Robustas.
        p
          | TERROIR
          br
          |             Altitude, soil composition and climate temperature.
    .intro-image
      img(src='assets/images/coffee-original/explore.png' alt='EXPLORE OUR COFFEE WORLD')
  section.intro.intro-sustainable
    .intro-image
      img(src='assets/images/coffee-original/sustainable-company.png' alt='SUSTAINABLE COMPANY')
    .intro-description
      h4.intro-heading SUSTAINABLE COMPANY
      .intro-paragraph
        p.intro-paragraph__heading INSPIRING SUSTAINABILITY
        p.intro-paragraph__context
          | Ever since our journey began with coffee more than 25 years ago, we
          | have been supporting sustainability with the same passion and
          | expertise. We are committed to ensuring the highest quality. and
          | sustainability of your coffee through a comprehensive program, with
          | observable results. Because sustainability justifies the means.
        button.intro-paragraph__btn
          router-link(to='')  More about sustainability 
          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            g(clip-path='url(#clip0_1177_14592)')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M8.20595 1.09567C8.42928 0.933248 8.74198 0.982623 8.9044 1.20595L16.9044 12.2059C17.0319 12.3813 17.0319 12.6188 16.9044 12.7941L8.9044 23.7941C8.74198 24.0174 8.42928 24.0668 8.20595 23.9044C7.98262 23.742 7.93325 23.4293 8.09567 23.2059L15.8818 12.5L8.09567 1.79412C7.93325 1.57079 7.98262 1.25809 8.20595 1.09567Z' fill='#876C43')
            defs
              clippath#clip0_1177_14592
                rect(width='24' height='24' fill='white')
      .intro-paragraph
        p.intro-paragraph__heading
          | RESPONSIBILITY MEANS RECYCLABILITY
        p.intro-paragraph__context
          | Nespresso capsules are made from aluminum to guarantee the freshness
          | of the carefully crafted aromas and rich flavours of your coffee. By
          | adding capsule recycling to your coffee ritual, your Nespresso won&apos;t
          | only taste good, it feels good too.
        button.intro-paragraph__btn
          router-link(to='')  More about sustainability 
          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            g(clip-path='url(#clip0_1177_14592)')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M8.20595 1.09567C8.42928 0.933248 8.74198 0.982623 8.9044 1.20595L16.9044 12.2059C17.0319 12.3813 17.0319 12.6188 16.9044 12.7941L8.9044 23.7941C8.74198 24.0174 8.42928 24.0668 8.20595 23.9044C7.98262 23.742 7.93325 23.4293 8.09567 23.2059L15.8818 12.5L8.09567 1.79412C7.93325 1.57079 7.98262 1.25809 8.20595 1.09567Z' fill='#876C43')
            defs
              clippath#clip0_1177_14592
                rect(width='24' height='24' fill='white')
  section.recommend
    h3.recommend-heading NESPRESSO. WHAT ELSE?
    p.recommend-context
      | Get the most out of your Nespresso coffee experience knowing we&apos;re
      | committed to making a positive impact on the environment and on sourcing
      | the highest quality coffee to create a wide variety of authentic
      | flavours - all at the touch of a button.
    button.recommend-btn
      router-link(to='')  More about sustainability 
      svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
        g(clip-path='url(#clip0_1177_14592)')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M8.20595 1.09567C8.42928 0.933248 8.74198 0.982623 8.9044 1.20595L16.9044 12.2059C17.0319 12.3813 17.0319 12.6188 16.9044 12.7941L8.9044 23.7941C8.74198 24.0174 8.42928 24.0668 8.20595 23.9044C7.98262 23.742 7.93325 23.4293 8.09567 23.2059L15.8818 12.5L8.09567 1.79412C7.93325 1.57079 7.98262 1.25809 8.20595 1.09567Z' fill='#876C43')
        defs
          clippath#clip0_1177_14592
            rect(width='24' height='24' fill='white')
  section.service
    .service-container
      .service-description
        .service-description__image
          img(src='assets/images/coffee-original/assistance.png' alt='')
        h6.service-description__title
          | ASSISTANCE FOR YOUR MACHINE
        p.service-description__context
          | Need help with your machine? Our experts are here for you.
      .service-description
        .service-description__image
          img(src='assets/images/coffee-original/payment.png' alt='')
        h6.service-description__title
          | SECURED PAYMENT TRANSACTIONS
        p.service-description__context
          | SSL encryption means sensitive information is always transmitted
          | securely.
#coffee_original_modal
  .modal.js-modal
    .modal-Overlay
    .modal-fixed
      .modal-container
        button.modal-close.popin-close.js-modal-close(v-on:click='OnCloseModal')
          span close
          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M19 5L5 19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            path(d='M19 19L5 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
        .modal-content.modal-popin
          .lefCol
            .table
              .table-header
                .table-header__title
                  h4 ispirazione italiana
                  p
                    | These intense multi-origin blends provide a powerful and
                    | strong coffee experience. Enjoy in a 25ml Ristretto or
                    | 40ml Espresso cup.
              .table-main
                ul.table-list
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
                  li.table-item.open-rigtCol
                    router-link(to='Roma')
                      .table-item__image
                        img(src='assets/images/coffee-original/item.png' alt='ROMA')
                      .table-item__desc
                        p.table-item__desc-title(style='color: #000')
                          | ROMA
                        p.table-item__desc-subtitle
                          | Full and Balanced
                        p.table-item__desc-subtitle Intensity 8
                      .table-item__btn
                        p.table-item__btn-price &#x20AB;15500
                        span.table-item__btn-add
                          svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                            path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
          .rightCol
            .table
              .table-banner
                button.popin-back.btn-back(v-on:click='OnBackModal')
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    g(clip-path='url(#clip0_1_4)')
                      path(fill-rule='evenodd' clip-rule='evenodd' d='M15.7941 22.9044C15.5708 23.0668 15.2581 23.0174 15.0956 22.7941L7.09563 11.7941C6.96812 11.6188 6.96812 11.3812 7.09563 11.2059L15.0956 0.205914C15.2581 -0.0174112 15.5708 -0.0667868 15.7941 0.0956335C16.0174 0.258052 16.0668 0.57076 15.9044 0.794087L8.11825 11.5L15.9044 22.2059C16.0668 22.4292 16.0174 22.7419 15.7941 22.9044Z' fill='black')
                    defs
                      clippath#clip0_1_4
                        rect(width='24' height='24' fill='white' transform='matrix(-1 0 0 -1 24 24)')
                .table-banner__product
                  .table-banner__image
              .table-subtitle
                h3 Roma
                p Full and Balanced
                p Intensity 8
              .table-inner
                .table-section
                  h2.table-title FULL AND BALANCED
                  .flex-container.table-attribute
                    .flex-item.table-attribute__properties
                      ul
                        li
                          h3 Roastiness
                          |                             &#x25A0; &#x25A0; &#x25A0; &squ; &squ;
                        li
                          h3 Acidity
                          |                             &#x25A0; &#x25A0; &#x25A0; &#x25A0; &squ;
                    .flex-item.table-attribute__capsule
                      img(src='assets/images/coffee-original/capsules.png' alt='')
                    .flex-item.table-attribute__properties
                      ul
                        li
                          h3 Bitterness
                          |                             &#x25A0; &#x25A0; &#x25A0; &#x25A0; &squ;
                        li
                          h3 Body
                          |                             &#x25A0; &#x25A0; &#x25A0; &squ; &squ;
                .table-keyvisual
                  img.table-keyvisual__mobile(src='assets/images/coffee-original/kv_roma_S.jpg')
                  img.table-keyvisual__desktop(src='assets/images/coffee-original/kv_roma_L.png')
                .table-paragraph
                  h2
                    | Ispirazione Roma is inspired by the different layers of
                    | civilization towering up to the present day, where the
                    | Modern adds its layer of elegance to the history of the
                    | city. The coffee has a popular taste forged by time and
                    | the rich southern Italian influences, enlivened by a dash
                    | of modern elegance found in its delicate acidity.
                    strong Roman
                    |  roasters shrewdly developed their
                    |                       roasting techniques to achieve an aromatic profile that
                    |                       wisely combined the popular ancient taste with a twist of
                    |                       modernity. To mirror their skill, we gave Ispirazione
                    strong Roma
                    |  the shortest and lightest roast of
                    |                       our range. It results in a subtle balance between the
                    |                       intensity and depth of the woodsy, cereal notes, and the
                    |                       finesse of the acidity and elegant aromatics - true to
                    |                       Rome&rsquo;s rich history of contrasts.. A shot of this Intenso
                    |                       coffee and you&rsquo;re headed straight into a virtual Roman
                    |                       holiday.
              .table-btn
                span.table-btn__price &#x20AB;15500
                .table-btn__add
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
                  span Add to cart
                  svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7C11 6.44772 11.4477 6 12 6Z' fill='white')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z' fill='white')
</template>
