<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {},
  data() {
    return {
      currentScreenWidth: window.innerWidth,
      IsCartOverlay: false,
      IsLoggedInnDropdown: false,
      IsSignInDropdown: false,
      IsSubList: false,
      isSearchAction: false,
      isSearchMobile: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ShowCart(): void {
      this.IsCartOverlay = true;
      // this.IsLoggedInnDropdown = false;
      this.IsSignInDropdown = false;
    },
    CloseCart(): void {
      this.IsCartOverlay = false;
    },

    onHandleLogin(): void {
      this.IsLoggedInnDropdown = !this.IsLoggedInnDropdown;
      // this.IsSignInDropdown = !this.IsSignInDropdown;
    },
    HandelSubItem(): void {
      this.IsSubList = !this.IsSubList;
    },
    CloseHeader(): void {
      this.IsSubList = false;
    },

    // METHOS SEARCH
    handleInputFocus() {
      if (this.currentScreenWidth > 1023) {
        this.isSearchAction = true;
      }
    },
    handleInputBlur() {
      if (this.currentScreenWidth > 1023) {
        this.isSearchAction = false;
      }
      if (this.currentScreenWidth <= 1024) {
        this.handleClickIcon();
      }
    },

    handleInputClick() {
      if (this.currentScreenWidth <= 1024) {
        this.isSearchMobile = true;
      }
    },
    handleClickIcon() {
      if (this.currentScreenWidth <= 1024) {
        this.isSearchMobile = false;
      }
    },
    handleResize() {
      this.currentScreenWidth = window.innerWidth;
    },
  },
});
</script>

<template lang="pug">
header#header.header
  .header_inner
    .header_logo
      .icon_list.hide_on-pc.show_on-tab
        .hamburger-menu
          input#menu__toggle(type='checkbox')
          label.menu__btn(for='menu__toggle' v-on:click='CloseHeader')
            span
          ul.menu__box
            // List Item 1: Order
            li
              .img_coffee-w
                img(alt='coffee' src='/assets/images/header/order.png')
              .menu__item-content
                router-link.menu__item(to='') Order
            // List Item 2: Coffee
            li
              .img_coffee-w
                img(alt='coffee' src='/assets/images/header/coffee-capsule.png')
              .menu__item-content
                router-link.menu__item(to='/coffee') Coffee
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 3: Machine
            li
              .img_machine-w
                img(alt='machine' src='/assets/images/header/machine.png')
              .menu__item-content
                router-link.menu__item(to='/machines') Machine
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 4: Accessories
            li
              .img_accessories-w
                img(alt='accessories' src='/assets/images/header/accessories.png')
              .menu__item-content
                router-link.menu__item(to='/accessories') Acceessories
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 5: Nespresso Benefits
            li
              .img_accessories-w
                img(alt='accessories' src='/assets/images/header/Benefits.png')
              .menu__item-content
                router-link.menu__item(to='/benefits') Nespresso Benefits
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 6: Sustainability & Recycling
            li
              .img_recycle-w
                img(alt='recycle' src='/assets/images/header/recycle.png')
              .menu__item-content
                router-link.menu__item(to='/sustainability_recycling') Sustainability &amp; Recycling
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 7: Services
            li
              .img_service-w
                img(alt='service' src='/assets/images/header/service.png')
              .menu__item-content
                router-link.menu__item(to='/service') Services
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 8: Store Locator
            li
              .img_location-w
                img(alt='location' src='/assets/images/header/location.png')
              .menu__item-content
                router-link.menu__item(to='/store_location') Store Locator
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 9: SContact
            li
              .img_contact-w
                img(alt='contact' src='/assets/images/header/contact.png')
              .menu__item-content
                router-link.menu__item(to='/contact_us') Contact
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
            // List Item 10: Professional
            li
              .img_professional-w
                img(alt='professional' src='/assets/images/header/pro.png')
              .menu__item-content
                router-link.menu__item(to='/professional') Professional
                .nav_icon
                  svg(v-on:click='HandelSubItem' width='7' height='13' viewbox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg')
                    path(fill-rule='evenodd' clip-rule='evenodd' d='M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z' fill='white')
          ul#sub_list.sub_list.hide_on-pc(:class='{ open: IsSubList }')
            li
              router-link(to='')  ORIGINAL 
            li
              router-link(to='')  Order Original Capsules 
            li
              router-link(to='')  About Original 
            li
              router-link(to='')  VERTUO 
            li
              router-link(to='')  Choose coffee subscription 
            li
              router-link(to='')  Choose coffee subscription 
            li
              router-link(to='')  About Nespresso Coffee 
            li
              router-link(to='')  Coffee Expertise 
            li
              router-link(to='')  Coffee Recipes 
            li
              router-link(to='')  System Quiz 
      router-link(to='/')
        img(src='/assets/images/logoApp.png' alt='logoApp' style='width: 100%; height: 100%')
    .header_content
      div(style='position: relative')
        .search_icon2(style='width: 3.125rem; display: none' :style="{ display: isSearchMobile ? 'block' : 'none' }")
          svg(@click='handleClickIcon' style='width: 1.875rem; height: 1.875rem' width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(fill-rule='evenodd' clip-rule='evenodd' d='M13.8273 15.172C13.8178 15.1794 13.8167 15.1935 13.8252 15.2019L17.8223 19.199C18.1901 19.5669 18.7866 19.5669 19.1546 19.199C19.5225 18.831 19.5225 18.2345 19.1546 17.8666L15.1576 13.8696C15.1529 13.865 15.1452 13.8654 15.1411 13.8706C14.9592 14.1009 14.762 14.3231 14.5493 14.5358C14.3193 14.7658 14.078 14.978 13.8273 15.172Z' fill='white')
            path(d='M14.0764 14.0628C16.6358 11.5034 16.6358 7.35376 14.0764 4.79435C11.517 2.23494 7.36734 2.23494 4.80793 4.79435C2.24852 7.35376 2.24852 11.5034 4.80793 14.0628C7.36734 16.6222 11.517 16.6222 14.0764 14.0628Z' fill='white')
        .header_content-search(:class='{search_action: isSearchAction,search_mobile: isSearchMobile}')
          svg.header_content-search-icon(@click='handleInputClick' :style="{ display: isSearchAction ? 'none' : 'block' }" width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(fill-rule='evenodd' clip-rule='evenodd' d='M13.8273 15.172C13.8178 15.1794 13.8167 15.1935 13.8252 15.2019L17.8223 19.199C18.1901 19.5669 18.7866 19.5669 19.1546 19.199C19.5225 18.831 19.5225 18.2345 19.1546 17.8666L15.1576 13.8696C15.1529 13.865 15.1452 13.8654 15.1411 13.8706C14.9592 14.1009 14.762 14.3231 14.5493 14.5358C14.3193 14.7658 14.078 14.978 13.8273 15.172Z' fill='white')
            path(d='M14.0764 14.0628C16.6358 11.5034 16.6358 7.35376 14.0764 4.79435C11.517 2.23494 7.36734 2.23494 4.80793 4.79435C2.24852 7.35376 2.24852 11.5034 4.80793 14.0628C7.36734 16.6222 11.517 16.6222 14.0764 14.0628Z' fill='white')
          input#input_search.header_content-search-input(placeholder='SEARCH...' type='text' @focus='handleInputFocus' @blur='handleInputBlur')
        // form_search
        section#form_search(:style="{ display: isSearchAction ? 'block' : 'none' }")
          .form_search-wrapper
            .form_search-item
              svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M13.8272 15.172C13.8176 15.1794 13.8166 15.1935 13.8251 15.2019L17.8221 19.199C18.19 19.5669 18.7865 19.5669 19.1545 19.199C19.5224 18.831 19.5224 18.2345 19.1545 17.8666L15.1574 13.8696C15.1528 13.865 15.1451 13.8654 15.141 13.8706C14.9591 14.1009 14.7619 14.3231 14.5492 14.5358C14.3192 14.7658 14.0779 14.978 13.8272 15.172Z' fill='#1B1B1B')
                path(d='M13.7227 5.1479C16.0869 7.51205 16.0869 11.3451 13.7227 13.7092C11.3586 16.0734 7.52551 16.0734 5.16136 13.7092C2.79721 11.3451 2.79721 7.51205 5.16136 5.1479C7.52551 2.78375 11.3586 2.78375 13.7227 5.1479Z' stroke='#1B1B1B')
              span Purple 
            .form_search-item
              svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M13.8272 15.172C13.8176 15.1794 13.8166 15.1935 13.8251 15.2019L17.8221 19.199C18.19 19.5669 18.7865 19.5669 19.1545 19.199C19.5224 18.831 19.5224 18.2345 19.1545 17.8666L15.1574 13.8696C15.1528 13.865 15.1451 13.8654 15.141 13.8706C14.9591 14.1009 14.7619 14.3231 14.5492 14.5358C14.3192 14.7658 14.0779 14.978 13.8272 15.172Z' fill='#1B1B1B')
                path(d='M13.7227 5.1479C16.0869 7.51205 16.0869 11.3451 13.7227 13.7092C11.3586 16.0734 7.52551 16.0734 5.16136 13.7092C2.79721 11.3451 2.79721 7.51205 5.16136 5.1479C7.52551 2.78375 11.3586 2.78375 13.7227 5.1479Z' stroke='#1B1B1B')
              span Purple pod 
        // form_result
        section#form_result(:style="{ display: isSearchAction ? 'block' : 'none' }")
          .form_result-wrapper
            .form_search-item
              .form_search-item-img
                img(src='/assets/images/Rectangle_42.png' alt='')
              .form_search-item-info
                span Altissio
                span In
            .form_search-item
              .form_search-item-img
                img(src='/assets/images/Rectangle_42.png' alt='')
              .form_search-item-info
                span Altissio
                span In
            .form_search-item
              .form_search-item-img
                img(src='/assets/images/Rectangle_42.png' alt='')
              .form_search-item-info
                span Altissio
                span In
      // info login
      div(style='position: relative')
        .header_content-btn.btn_login(v-on:click='onHandleLogin')
          div(style='display: flex; gap: 0.25rem; align-items: center')
            svg.btn_login-icon(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M12 13.0531C15.6045 13.0531 18.5265 10.1311 18.5265 6.52656C18.5265 2.92204 15.6045 0 12 0C8.39544 0 5.47339 2.92204 5.47339 6.52656C5.47339 10.1311 8.39544 13.0531 12 13.0531Z' fill='white')
              path(d='M24 21.2218V23.3211H0V21.2218C0 17.4458 1.74597 14.0717 4.47577 11.8823C4.8499 11.5844 5.38338 11.5982 5.72287 11.9377C7.31641 13.559 9.54043 14.5636 12 14.5636C14.4596 14.5636 16.6836 13.559 18.2771 11.9377C18.6097 11.5982 19.1501 11.5775 19.5243 11.8823C22.2541 14.0786 24 17.4458 24 21.2218Z' fill='white')
            span.btn_login-text SIGN IN OR REGISTER
        // dropdown_signIn
        section#dropdown_signIn(:class='{ open: IsSignInDropdown }')
          .dropdown_signIn
            div
              h3.dropdown_signIn-heading SIGN IN
              span.dropdown_signIn-title Access your account and place order:
              .dropdown_signIn-filed
                label(for='email')
                input#email(placeholder='Your Email')
              .dropdown_signIn-filed
                label(for='password')
                input#password(placeholder='Password*')
              h3.dropdown_signIn-forgot Forgot your password?
              .dropdown_signIn-check
                label(for='form_check')
                input#dropdown_check(type='checkbox')
                span Remember me
              button.dropdown_signIn-btn Login
              .dropdown_signIn-footer
                span Don&apos;t have an account yet ?
              button.dropdown_signIn-btn Start registration
        // dropdown_loggedIn
        section#dropdown_loggedIn(:class='{ open: IsLoggedInnDropdown }')
          .dropdown_loggedIn
            ul.dropdown_loggedIn-list
              li.dropdown_loggedIn-item
                router-link.dropdown_loggedIn-item-link(to='/setting/info')
                  | My account
              li.dropdown_loggedIn-item
                router-link.dropdown_loggedIn-item-link(to='/setting/order')
                  | My Orders
              li.dropdown_loggedIn-item
                router-link.dropdown_loggedIn-item-link(to='/setting/info')
                  | My Personal Information
              li.dropdown_loggedIn-item
                router-link.dropdown_loggedIn-item-link(to='/setting/address')
                  | My Address
              li.dropdown_loggedIn-item
                router-link.dropdown_loggedIn-item-link(to='/setting/machine')
                  | My Machines
              li.dropdown_loggedIn-item
                router-link.dropdown_loggedIn-item-link(to='/setting/contact')
                  | Contact Preferences
            .dropdown_loggedIn-logout
              span Logout
      .header_content-btn.btn_cart(v-on:click='ShowCart')
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z' fill='white')
        span YOUR BASKET (0)
      // cart
      section#overlay(:class='{ openCart: IsCartOverlay }')
        .overlay
          router-link.overlay_inner.modalCart(to='/')
            .modalCart_header
              h3 SHOPPING BAG
              svg(v-on:click='CloseCart' width='16' height='16' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M15 1L1 15' stroke='#17171A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
                path(d='M15 15L1 1' stroke='#17171A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
            .modalCart_title
              h4 Free shipping from
              span 500,000&dstrok;
            .modalCart_body
              //
                <div class="modalCart_empty">
                <h3 class="modalCart_body-title">Your basket is empty</h3>
                <button class="modalCart_btn">
                <span> START SHOPPING </span>
                </button>
                </div>
              div(style='width: 100%')
                .modalCart_body-name
                  span Ispirazione Italiana (10)
                .modalCart_body-item
                  .modalCart_body-content
                    .modalCart_body-content-img
                      img(src='/assets/images/item_cart.png' alt='item_cart.png')
                    .modalCart_body-content-info
                      h4 Roma
                      span
                        | 155,000&dstrok; 
                        label (10 x 15,500&dstrok;)
                  div
                    span.modalCart_body-item-quantity 10
              .modalCart_footer
                .modalCart_footer-total
                  span Total
                  span 155,000&dstrok;
                .modalCart_footer-title
                  span
                    | Shipping costs will be reflected in the next step, after
                    | authentification.
                button.modalCart_btn
                  router-link(to='/shopping/step_1') GO TO SHOPPING BAG
</template>
