<script lang="ts">
import "../css/layouts/header.css";
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
      // this.IsLoggedInnDropdown = !this.IsLoggedInnDropdown;
      this.IsSignInDropdown = !this.IsSignInDropdown;
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

<template>
  <header id="header" class="header">
    <div class="header_inner">
      <div class="header_logo">
        <div class="icon_list hide_on-pc show_on-tab">
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label
              class="menu__btn"
              for="menu__toggle"
              v-on:click="CloseHeader"
            >
              <span></span>
            </label>
            <ul class="menu__box">
              <!-- List Item 1: Order -->
              <li>
                <div class="img_coffee-w">
                  <img alt="coffee" src="assets/images/header/order.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="">Order</router-link>
                </div>
              </li>
              <!-- List Item 2: Coffee -->
              <li>
                <div class="img_coffee-w">
                  <img
                    alt="coffee"
                    src="assets/images/header/coffee-capsule.png"
                  />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/coffee"
                    >Coffee</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 3: Machine -->
              <li>
                <div class="img_machine-w">
                  <img alt="machine" src="assets/images/header/machine.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/machines"
                    >Machine</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 4: Accessories -->
              <li>
                <div class="img_accessories-w">
                  <img
                    alt="accessories"
                    src="assets/images/header/accessories.png"
                  />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/accessories"
                    >Acceessories</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 5: Nespresso Benefits -->
              <li>
                <div class="img_accessories-w">
                  <img
                    alt="accessories"
                    src="assets/images/header/Benefits.png"
                  />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/benefits"
                    >Nespresso Benefits</router-link
                  >

                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 6: Sustainability & Recycling -->
              <li>
                <div class="img_recycle-w">
                  <img alt="recycle" src="assets/images/header/recycle.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/sustainability_recycling"
                    >Sustainability & Recycling</router-link
                  >

                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 7: Services -->
              <li>
                <div class="img_service-w">
                  <img alt="service" src="assets/images/header/service.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/service"
                    >Services</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 8: Store Locator -->
              <li>
                <div class="img_location-w">
                  <img alt="location" src="assets/images/header/location.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/store_location"
                    >Store Locator</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 9: SContact -->
              <li>
                <div class="img_contact-w">
                  <img alt="contact" src="assets/images/header/contact.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/contact_us"
                    >Contact</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
              <!-- List Item 10: Professional -->
              <li>
                <div class="img_professional-w">
                  <img alt="professional" src="assets/images/header/pro.png" />
                </div>
                <div class="menu__item-content">
                  <router-link class="menu__item" to="/professional"
                    >Professional</router-link
                  >
                  <div class="nav_icon">
                    <svg
                      v-on:click="HandelSubItem"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              class="sub_list hide_on-pc"
              id="sub_list"
              :class="{ open: IsSubList }"
            >
              <li><router-link to=""> ORIGINAL </router-link></li>
              <li>
                <router-link to=""> Order Original Capsules </router-link>
              </li>
              <li><router-link to=""> About Original </router-link></li>
              <li><router-link to=""> VERTUO </router-link></li>
              <li>
                <router-link to=""> Choose coffee subscription </router-link>
              </li>
              <li>
                <router-link to=""> Choose coffee subscription </router-link>
              </li>
              <li>
                <router-link to=""> About Nespresso Coffee </router-link>
              </li>
              <li><router-link to=""> Coffee Expertise </router-link></li>
              <li><router-link to=""> Coffee Recipes </router-link></li>
              <li><router-link to=""> System Quiz </router-link></li>
            </ul>
          </div>
        </div>
        <router-link to="/">
          <img
            src="assets/images/logoApp.png"
            alt="logoApp"
            style="width: 100%; height: 100%"
          />
        </router-link>
      </div>
      <div class="header_content">
        <div style="position: relative">
          <div
            class="search_icon2"
            style="width: 3.125rem; display: none"
            :style="{ display: isSearchMobile ? 'block' : 'none' }"
          >
            <svg
              @click="handleClickIcon"
              style="width: 1.875rem; height: 1.875rem"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8273 15.172C13.8178 15.1794 13.8167 15.1935 13.8252 15.2019L17.8223 19.199C18.1901 19.5669 18.7866 19.5669 19.1546 19.199C19.5225 18.831 19.5225 18.2345 19.1546 17.8666L15.1576 13.8696C15.1529 13.865 15.1452 13.8654 15.1411 13.8706C14.9592 14.1009 14.762 14.3231 14.5493 14.5358C14.3193 14.7658 14.078 14.978 13.8273 15.172Z"
                fill="white"
              />
              <path
                d="M14.0764 14.0628C16.6358 11.5034 16.6358 7.35376 14.0764 4.79435C11.517 2.23494 7.36734 2.23494 4.80793 4.79435C2.24852 7.35376 2.24852 11.5034 4.80793 14.0628C7.36734 16.6222 11.517 16.6222 14.0764 14.0628Z"
                fill="white"
              />
            </svg>
          </div>

          <div
            class="header_content-search"
            :class="{
              search_action: isSearchAction,
              search_mobile: isSearchMobile,
            }"
          >
            <svg
              @click="handleInputClick"
              :style="{ display: isSearchAction ? 'none' : 'block' }"
              class="header_content-search-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8273 15.172C13.8178 15.1794 13.8167 15.1935 13.8252 15.2019L17.8223 19.199C18.1901 19.5669 18.7866 19.5669 19.1546 19.199C19.5225 18.831 19.5225 18.2345 19.1546 17.8666L15.1576 13.8696C15.1529 13.865 15.1452 13.8654 15.1411 13.8706C14.9592 14.1009 14.762 14.3231 14.5493 14.5358C14.3193 14.7658 14.078 14.978 13.8273 15.172Z"
                fill="white"
              />
              <path
                d="M14.0764 14.0628C16.6358 11.5034 16.6358 7.35376 14.0764 4.79435C11.517 2.23494 7.36734 2.23494 4.80793 4.79435C2.24852 7.35376 2.24852 11.5034 4.80793 14.0628C7.36734 16.6222 11.517 16.6222 14.0764 14.0628Z"
                fill="white"
              />
            </svg>
            <input
              id="input_search"
              class="header_content-search-input"
              placeholder="SEARCH..."
              type="text"
              @focus="handleInputFocus"
              @blur="handleInputBlur"
            />
          </div>
          <!-- form_search -->
          <section
            id="form_search"
            :style="{ display: isSearchAction ? 'block' : 'none' }"
          >
            <div class="form_search-wrapper">
              <div class="form_search-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8272 15.172C13.8176 15.1794 13.8166 15.1935 13.8251 15.2019L17.8221 19.199C18.19 19.5669 18.7865 19.5669 19.1545 19.199C19.5224 18.831 19.5224 18.2345 19.1545 17.8666L15.1574 13.8696C15.1528 13.865 15.1451 13.8654 15.141 13.8706C14.9591 14.1009 14.7619 14.3231 14.5492 14.5358C14.3192 14.7658 14.0779 14.978 13.8272 15.172Z"
                    fill="#1B1B1B"
                  />
                  <path
                    d="M13.7227 5.1479C16.0869 7.51205 16.0869 11.3451 13.7227 13.7092C11.3586 16.0734 7.52551 16.0734 5.16136 13.7092C2.79721 11.3451 2.79721 7.51205 5.16136 5.1479C7.52551 2.78375 11.3586 2.78375 13.7227 5.1479Z"
                    stroke="#1B1B1B"
                  />
                </svg>
                <span>Purple </span>
              </div>
              <div class="form_search-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8272 15.172C13.8176 15.1794 13.8166 15.1935 13.8251 15.2019L17.8221 19.199C18.19 19.5669 18.7865 19.5669 19.1545 19.199C19.5224 18.831 19.5224 18.2345 19.1545 17.8666L15.1574 13.8696C15.1528 13.865 15.1451 13.8654 15.141 13.8706C14.9591 14.1009 14.7619 14.3231 14.5492 14.5358C14.3192 14.7658 14.0779 14.978 13.8272 15.172Z"
                    fill="#1B1B1B"
                  />
                  <path
                    d="M13.7227 5.1479C16.0869 7.51205 16.0869 11.3451 13.7227 13.7092C11.3586 16.0734 7.52551 16.0734 5.16136 13.7092C2.79721 11.3451 2.79721 7.51205 5.16136 5.1479C7.52551 2.78375 11.3586 2.78375 13.7227 5.1479Z"
                    stroke="#1B1B1B"
                  />
                </svg>
                <span>Purple pod </span>
              </div>
            </div>
          </section>
          <!-- form_result -->
          <section
            id="form_result"
            :style="{ display: isSearchAction ? 'block' : 'none' }"
          >
            <div class="form_result-wrapper">
              <div class="form_search-item">
                <div class="form_search-item-img">
                  <img src="assets/images/Rectangle_42.png" alt="" />
                </div>
                <div class="form_search-item-info">
                  <span>Altissio</span> <span>In</span>
                </div>
              </div>
              <div class="form_search-item">
                <div class="form_search-item-img">
                  <img src="assets/images/Rectangle_42.png" alt="" />
                </div>
                <div class="form_search-item-info">
                  <span>Altissio</span> <span>In</span>
                </div>
              </div>
              <div class="form_search-item">
                <div class="form_search-item-img">
                  <img src="assets/images/Rectangle_42.png" alt="" />
                </div>
                <div class="form_search-item-info">
                  <span>Altissio</span> <span>In</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- info login -->
        <div style="position: relative">
          <div class="header_content-btn btn_login" v-on:click="onHandleLogin">
            <div style="display: flex; gap: 0.25rem; align-items: center">
              <svg
                class="btn_login-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.0531C15.6045 13.0531 18.5265 10.1311 18.5265 6.52656C18.5265 2.92204 15.6045 0 12 0C8.39544 0 5.47339 2.92204 5.47339 6.52656C5.47339 10.1311 8.39544 13.0531 12 13.0531Z"
                  fill="white"
                />
                <path
                  d="M24 21.2218V23.3211H0V21.2218C0 17.4458 1.74597 14.0717 4.47577 11.8823C4.8499 11.5844 5.38338 11.5982 5.72287 11.9377C7.31641 13.559 9.54043 14.5636 12 14.5636C14.4596 14.5636 16.6836 13.559 18.2771 11.9377C18.6097 11.5982 19.1501 11.5775 19.5243 11.8823C22.2541 14.0786 24 17.4458 24 21.2218Z"
                  fill="white"
                />
              </svg>
              <span class="btn_login-text">SIGN IN OR REGISTER</span>
            </div>
          </div>
          <!-- dropdown_signIn -->
          <section id="dropdown_signIn" :class="{ open: IsSignInDropdown }">
            <div class="dropdown_signIn">
              <div>
                <h3 class="dropdown_signIn-heading">SIGN IN</h3>
                <span class="dropdown_signIn-title"
                  >Access your account and place order:</span
                >
                <div class="dropdown_signIn-filed">
                  <label for="email"></label>
                  <input id="email" placeholder="Your Email" />
                </div>
                <div class="dropdown_signIn-filed">
                  <label for="password"></label>
                  <input id="password" placeholder="Password*" />
                </div>
                <h3 class="dropdown_signIn-forgot">Forgot your password?</h3>
                <div class="dropdown_signIn-check">
                  <label for="form_check"></label>
                  <input type="checkbox" id="dropdown_check" />
                  <span>Remember me</span>
                </div>
                <button class="dropdown_signIn-btn">Login</button>
                <div class="dropdown_signIn-footer">
                  <span>Don't have an account yet ?</span>
                </div>
                <button class="dropdown_signIn-btn">Start registration</button>
              </div>
            </div>
          </section>
          <!-- dropdown_loggedIn -->
          <section
            id="dropdown_loggedIn"
            :class="{ open: IsLoggedInnDropdown }"
          >
            <div class="dropdown_loggedIn">
              <ul class="dropdown_loggedIn-list">
                <li class="dropdown_loggedIn-item">
                  <router-link
                    class="dropdown_loggedIn-item-link"
                    to="/setting_info"
                  >
                    My account
                  </router-link>
                </li>
                <li class="dropdown_loggedIn-item">
                  <router-link
                    class="dropdown_loggedIn-item-link"
                    to="/setting_order"
                    >My Orders
                  </router-link>
                </li>
                <li class="dropdown_loggedIn-item">
                  <router-link
                    class="dropdown_loggedIn-item-link"
                    to="/setting_info"
                  >
                    My Personal Information
                  </router-link>
                </li>
                <li class="dropdown_loggedIn-item">
                  <router-link
                    class="dropdown_loggedIn-item-link"
                    to="/setting_address"
                    >My Address
                  </router-link>
                </li>
                <li class="dropdown_loggedIn-item">
                  <router-link
                    class="dropdown_loggedIn-item-link"
                    to="/setting_machine"
                  >
                    My Machines
                  </router-link>
                </li>
                <li class="dropdown_loggedIn-item">
                  <router-link
                    class="dropdown_loggedIn-item-link"
                    to="/setting_contact"
                  >
                    Contact Preferences
                  </router-link>
                </li>
              </ul>
              <div class="dropdown_loggedIn-logout">
                <span>Logout</span>
              </div>
            </div>
          </section>
        </div>

        <div class="header_content-btn btn_cart" v-on:click="ShowCart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 3.75C8 1.67889 9.67889 0 11.75 0C13.8211 0 15.5 1.67889 15.5 3.75V6H20.75L21.5 24H2L2.75 6H8V3.75ZM8.75 6H14.75V3.75C14.75 2.09317 13.4068 0.75 11.75 0.75C10.0932 0.75 8.75 2.09317 8.75 3.75V6Z"
              fill="white"
            />
          </svg>
          <span>YOUR BASKET (0)</span>
        </div>
        <!-- cart -->
        <section id="overlay" :class="{ openCart: IsCartOverlay }">
          <div class="overlay">
            <router-link to="/" class="overlay_inner modalCart">
              <div class="modalCart_header">
                <h3>SHOPPING BAG</h3>
                <svg
                  v-on:click="CloseCart"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1L1 15"
                    stroke="#17171A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 15L1 1"
                    stroke="#17171A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="modalCart_title">
                <h4>Free shipping from</h4>
                <span>500,000đ</span>
              </div>
              <div class="modalCart_body">
                <!-- <div class="modalCart_empty">
                  <h3 class="modalCart_body-title">Your basket is empty</h3>
                  <button class="modalCart_btn">
                    <span> START SHOPPING </span>
                  </button>
                </div> -->
                <div style="width: 100%">
                  <div class="modalCart_body-name">
                    <span>Ispirazione Italiana (10)</span>
                  </div>
                  <div class="modalCart_body-item">
                    <div class="modalCart_body-content">
                      <div class="modalCart_body-content-img">
                        <img
                          src="assets/images/item_cart.png"
                          alt="item_cart.png"
                        />
                      </div>
                      <div class="modalCart_body-content-info">
                        <h4>Roma</h4>
                        <span>155,000đ <label>(10 x 15,500đ)</label> </span>
                      </div>
                    </div>
                    <div>
                      <span class="modalCart_body-item-quantity">10</span>
                    </div>
                  </div>
                </div>
                <div class="modalCart_footer">
                  <div class="modalCart_footer-total">
                    <span>Total</span> <span>155,000đ</span>
                  </div>
                  <div class="modalCart_footer-title">
                    <span
                      >Shipping costs will be reflected in the next step, after
                      authentification.</span
                    >
                  </div>
                  <button class="modalCart_btn">
                    <router-link to="/shopping_step_1"
                      >GO TO SHOPPING BAG</router-link
                    >
                  </button>
                </div>
              </div>
            </router-link>
          </div>
        </section>
        <!-- cart -->
      </div>
    </div>
  </header>
</template>
