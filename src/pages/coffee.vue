<script lang="ts">
import { defineComponent } from "vue";
//? APP
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import ProductCoffeeItem from "@/components/product_coffe_item.vue";
import {
  dat_category,
  data_barista,
  data_espresso,
  data_world,
  data_master,
  data_discovery,
  data_ispirazione,
} from "@/utils/data_coffee";
export default defineComponent({
  name: "CoffeePage",
  components: {
    Header,
    NavigationComponent,
    ProductCoffeeItem,
    Footer,
  },
  data() {
    return {
      isModalOpen: false,
      isDropdownOpen: false,
      isSortListOpen: false,
      dataCategory: dat_category,
      dataBarista: data_barista,
      dataEspresso: data_espresso,
      dataWorld: data_world,
      dataMaster: data_master,
      dataDiscovery: data_discovery,
      dataIspirazione: data_ispirazione,
    };
  },

  mounted() {
    window.addEventListener("click", this.handleOutsideClick);
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleSortList() {
      this.isSortListOpen = !this.isSortListOpen;
    },

    handleOutsideClick(event: any) {
      const modal = document.querySelector(".js-modal");
      const clickDrop = document.querySelector(".filter-container");
      const dropdownList = document.querySelector(".filter-dropdown__listbox");

      if (modal && event.target === modal) {
        this.closeModal();
      }

      if (clickDrop && dropdownList && !clickDrop.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />
      <div id="coffee">
        <section id="hero">
          <div class="hero-container">
            <div class="hero-main">
              <h3 class="hero-heading">ORIGINAL COFFEE CAPSULES</h3>
              <h5 class="hero-desc">Free Delivery for minimum 100 lei.</h5>
            </div>

            <div class="filter-bar">
              <div class="filter-left" @click="openModal">
                <img class="filter-img" src="assets/svgs/Filter.svg" alt="" />
                <p class="filter-desc">FILTER</p>
              </div>

              <!-- <div class="filter-center">
                <img class="filter-img" src="assets/svgs/Filter.svg" alt="" />
                <p class="filter-desc">ORIGINAL</p>
              </div> -->

              <div class="filter-right">
                <div class="filter-container" @click="toggleDropdown">
                  <div class="filter-right__header">
                    <p class="filter-right__desc">SORT BY</p>
                    <!-- <img
                      class="filter-img"
                      src="assets/svgs/Filter.svg"
                      alt=""
                    /> -->
                  </div>
                  <span class="filter-detail">Recommended</span>
                </div>
                <div class="filter-dropdown">
                  <div
                    class="filter-dropdown__listbox"
                    :class="{ 'is-open': isDropdownOpen }"
                  >
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m13.289 4 .711.688L6.44 12h-.735L2 8.407l.71-.688 3.363 3.26L13.289 4Z"
                        ></path>
                      </svg>
                      Recommended
                    </button>
                    <button>Lower Price</button>
                    <button>Higher Price</button>
                    <button>Lower intensity</button>
                    <button>Higher intensity</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="category">
              <div class="category-submenu">
                <ul class="category-list">
                  <li
                    class="category-item"
                    v-for="category in dataCategory"
                    :key="category.id"
                  >
                    <router-link :to="'#' + category.id">
                      <img
                        class="category-img"
                        :src="category.image"
                        :alt="category.alt"
                      />
                      <p class="category-desc">{{ category.desc }}</p>
                    </router-link>
                  </li>
                </ul>
              </div>

              <div class="category-banner">
                <img src="assets/images/product/promotion.png" alt="" />

                <div class="category-detail">
                  <p class="category-detail__heading">
                    ORIGINAL COFFEE CAPSULES
                  </p>
                  <p class="category-detail__desc">
                    Get 10% credit back in your accountwith Subscription by
                    Nespresso
                  </p>
                </div>

                <button class="category-btn" type="submit">
                  <span>SUBSCRIBE</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <main id="product_coffee">
          <section class="product background-1" id="ispirazione">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">ISPIRAZIONE ITALIANA</h4>
                <h5 class="product-header__desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h5>
              </div>

              <div class="product-list">
                <ProductCoffeeItem v-bind:data="dataIspirazione" />
              </div>
            </div>
          </section>

          <section class="product background-2" id="discovery">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">DISCOVERY OFFER</h4>
                <h5 class="product-header__desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </h5>
              </div>

              <div class="product-list">
                <ProductCoffeeItem v-bind:data="dataDiscovery" />
              </div>
            </div>
          </section>

          <section class="product background-3" id="master">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title white-text">MASTER ORIGINS</h4>
                <h5 class="product-header__desc white-text">
                  Explore a range of single origin coffees by local farming
                  communities who developed specific ways of processing coffee.
                </h5>
              </div>

              <div class="product-list">
                <ProductCoffeeItem v-bind:data="dataMaster" />
              </div>
            </div>
          </section>

          <section class="product background-4" id="world">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">WORLD EXPLORATIONS</h4>
                <h5 class="product-header__desc">
                  Travel the world through coffee – and discover unique and
                  typical tastes brought to you from cities around the world.
                </h5>
              </div>

              <div class="product-list">
                <ProductCoffeeItem v-bind:data="dataWorld" />
              </div>
            </div>
          </section>

          <section class="product background-5" id="barista">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title">BARISTA CREATIONS</h4>
                <h5 class="product-header__desc" style="width: 808px">
                  Perfect blends inspired by the creativity and expertise of
                  world’s finest baristas, these coffee capsules are designed to
                  make it easy for you to recreate the full spread of coffee
                  recipes at home.
                </h5>
              </div>

              <div class="product-list">
                <ProductCoffeeItem v-bind:data="dataBarista" />
              </div>
            </div>
          </section>

          <section class="product background-6" id="espresso">
            <div class="container product-wrapper">
              <div class="product-header">
                <h4 class="product-header__title white-text">ESPRESSO</h4>
                <h5 class="product-header__desc white-text">
                  With varying intensities and tastes, the audacious blends
                  offer an authentic coffee experience as an Espresso.
                </h5>
              </div>

              <div class="product-list">
                <ProductCoffeeItem v-bind:data="dataEspresso" />
              </div>
            </div>
          </section>

          <section class="product">
            <div class="product_ads">
              <img src="assets/images/product/banner.png" alt="banner" />
              <div class="product_ads__text">
                <p class="product_ads__title">ORIGINAL COFFEE CAPSULES</p>
                <p class="product_ads__desc">
                  Get 10% credit back in your accountwith Subscription by
                  Nespresso
                </p>
                <router-link to="#" class="product_ads__more"
                  >READ MORE</router-link
                >
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />

      <div id="coffee_modal">
        <div class="modal js-modal" :class="{ 'open-modal': isModalOpen }">
          <div class="modal-wrapper">
            <div class="modal-container">
              <button
                class="modal-mobile__close js-mobile-close"
                @click="closeModal"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill=""
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
              </button>

              <div
                class="modal-mobile modal-mobile__sort"
                :class="{ 'is-open': isSortListOpen }"
              >
                <div class="mobile__sort btn-sort" @click="toggleSortList">
                  <span class="mobile__sort-title">Sort By</span>
                  <span class="mobile__sort-recommend">Recommended</span>
                </div>
                <div class="mobile__sort-dropdown">
                  <div class="mobile__sort-listbox">
                    <button>Lower Price</button>
                    <button>Higher Price</button>
                    <button>Lower intensity</button>
                    <button>Higher intensity</button>
                  </div>
                </div>
              </div>
              <div class="modal-mobile">
                <div>
                  <header class="modal-head">
                    <h5 class="modal-title">FILTER</h5>
                    <button
                      class="modal-close js-modal-close"
                      @click="closeModal"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill=""
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
                    </button>
                  </header>
                  <fieldset>
                    <legend>Intensity</legend>
                    <div class="modal-content">
                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="light4-5" />

                        <label for="light4-5">
                          <span>Light 4 - 5</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="mild6-8" />

                        <label for="mild6-8">
                          <span>Mild 6 - 8</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input
                          type="checkbox"
                          name="options"
                          id="intense9-13"
                        />

                        <label for="intense9-13">
                          <span>Intense 9 - 13</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Extraction method</legend>
                    <div class="modal-content">
                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="lungo" />

                        <label for="lungo">
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.62 3.00902L14.083 -0.000976562H0.916992L2.87499 12.729C2.92853 13.0835 3.10783 13.4069 3.38012 13.64C3.65241 13.8732 3.99951 14.0006 4.35799 13.999H10.642C11.388 13.999 12.012 13.465 12.125 12.729L12.852 7.99902H13.5C15.98 7.99902 16.5 6.64102 16.5 5.49902C16.5 4.37902 15.987 3.05602 13.62 3.00902ZM12.917 0.999023L12.612 2.98202H2.38799L2.08299 1.00002L12.917 0.999023ZM11.137 12.576C11.1192 12.6944 11.0594 12.8024 10.9685 12.8802C10.8776 12.9581 10.7617 13.0006 10.642 13H4.35799C4.23847 13.0004 4.12281 12.9578 4.03212 12.8799C3.94142 12.8021 3.88175 12.6942 3.86399 12.576L2.54199 3.98202H12.458L11.137 12.576ZM13.5 7.00002H13.006L13.468 4.00002H13.5C15.258 4.00002 15.5 4.72002 15.5 5.50002C15.5 6.28002 15.258 7.00002 13.5 7.00002Z"
                              fill=""
                            />
                          </svg>

                          <span>Lungo</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="cappuccino" />

                        <label for="cappuccino">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.62 6.009L12.775 5H11.763L10.137 15.576C10.1192 15.6944 10.0594 15.8024 9.9685 15.8802C9.87759 15.9581 9.76169 16.0006 9.642 16H3.358C3.23848 16.0004 3.12282 15.9577 3.03213 15.8799C2.94143 15.8021 2.88176 15.6942 2.864 15.576L1.237 5H0.225L1.875 15.729C1.92832 16.0837 2.10753 16.4073 2.37984 16.6406C2.65215 16.874 2.99937 17.0016 3.358 17H9.642C10.388 17 11.012 16.465 11.125 15.729L11.852 11H12.5C14.98 11 15.5 9.64 15.5 8.5C15.5 7.38 14.987 6.056 12.62 6.009ZM12.5 10H12.006L12.468 7H12.5C14.258 7 14.5 7.72 14.5 8.5C14.5 9.28 14.258 10 12.5 10ZM13 4V3.5C13 2.753 12.708 1.5 10.75 1.5C10.434 1.5 10.174 1.542 9.939 1.6C9.274 0.605 8.059 0 6.5 0C4.94 0 3.726 0.605 3.061 1.6C2.79587 1.53309 2.52344 1.4995 2.25 1.5C0.292 1.5 0 2.753 0 3.5V4H13Z"
                              fill=""
                            />
                          </svg>

                          <span>Cappuccino & Latte Macchiato</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="ristretto" />

                        <label for="ristretto">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9999 2H10.7799L11.0809 0H0.919922L2.37792 9.723C2.48992 10.463 3.11392 11 3.86192 11H8.13992C8.87692 11 9.51492 10.451 9.62292 9.723L10.1069 6.5H10.9999C13.1749 6.5 13.4999 5.09 13.4999 4.25C13.4999 3.41 13.1749 2 10.9999 2ZM8.13892 10H3.85992C3.74045 9.99907 3.62519 9.95572 3.53471 9.8777C3.44423 9.79967 3.38441 9.69204 3.36592 9.574L2.90592 6.5H9.09492L8.63392 9.574C8.6156 9.69229 8.55569 9.80017 8.46496 9.87826C8.37423 9.95634 8.25862 9.99951 8.13892 10ZM9.24492 5.5H2.75492L2.08192 1H9.91992L9.24492 5.5ZM10.9999 5.5H10.2559L10.6309 3H10.9999C12.3179 3 12.4999 3.6 12.4999 4.25C12.4999 4.9 12.3179 5.5 10.9999 5.5Z"
                              fill=""
                            />
                          </svg>

                          <span>Ristretto</span>
                        </label>
                      </div>

                      <div class="modal-content__box">
                        <input type="checkbox" name="options" id="erspresso" />

                        <label for="erspresso">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9999 2H10.7799L11.0809 0H0.919922L2.37792 9.723C2.48992 10.463 3.11392 11 3.86192 11H8.13992C8.87692 11 9.51492 10.451 9.62292 9.723L10.1069 6.5H10.9999C13.1749 6.5 13.4999 5.09 13.4999 4.25C13.4999 3.41 13.1749 2 10.9999 2ZM9.91892 1L9.61892 3H2.38092L2.08092 1H9.91892ZM8.63392 9.574C8.6156 9.69229 8.55569 9.80017 8.46496 9.87826C8.37423 9.95634 8.25862 9.99951 8.13892 10H3.85992C3.74045 9.99907 3.62519 9.95572 3.53471 9.8777C3.44423 9.79967 3.38441 9.69204 3.36592 9.574L2.52992 4H9.46792L8.63392 9.574ZM10.9999 5.5H10.2559L10.6309 3H10.9999C12.3179 3 12.4999 3.6 12.4999 4.25C12.4999 4.9 12.3179 5.5 10.9999 5.5Z"
                              fill=""
                            />
                          </svg>
                          <span>Espresso</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
