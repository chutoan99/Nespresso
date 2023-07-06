<script lang="ts">
import "../css/pages/machines.css";
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MachinesPage",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },
  // //Modal Filter
  // $(document).ready(function () {
  //   $("#filterButton").click(function () {
  //     var expanded = $(this).attr("aria-expanded");
  //     if (expanded === "false") {
  //       $(this).attr("aria-expanded", "true");
  //       // $("#modal").show();
  //       $("#modal").css("display", "flex");
  //     } else {
  //       $(this).attr("aria-expanded", "false");
  //       $("#modal").hide();
  //     }
  //   });
  // });

  // //Click filter color
  // const colorLabels = [...document.querySelectorAll(".filter-item__label")];

  // colorLabels.forEach(function (label) {
  //   label.addEventListener("click", function () {
  //     if (!label.classList.contains("filter-item__label--checked")) {
  //       colorLabels.forEach(function (otherLabel) {
  //         otherLabel.classList.remove("filter-item__label--checked");
  //       });
  //       label.classList.add("filter-item__label--checked");
  //     }
  //   });
  // });

  // //InputRange
  // const rangeInput = document.querySelectorAll(".range-input input"),
  //   priceInput = document.querySelectorAll(".price-input input"),
  //   range = document.querySelector(".slider .progress");
  // let priceGap = 100000;
  // priceInput.forEach((input) => {
  //   input.addEventListener("input", (e) => {
  //     let minPrice = parseInt(priceInput[0].value),
  //       maxPrice = parseInt(priceInput[1].value);

  //     if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
  //       if (e.target.className === "input-min") {
  //         rangeInput[0].value = minPrice;
  //         range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
  //       } else {
  //         rangeInput[1].value = maxPrice;
  //         range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
  //       }
  //     }
  //   });
  // });
  // rangeInput.forEach((input) => {
  //   input.addEventListener("input", (e) => {
  //     let minVal = parseInt(rangeInput[0].value),
  //       maxVal = parseInt(rangeInput[1].value);
  //     if (maxVal - minVal < priceGap) {
  //       if (e.target.className === "range-min") {
  //         rangeInput[0].value = maxVal - priceGap;
  //       } else {
  //         rangeInput[1].value = minVal + priceGap;
  //       }
  //     } else {
  //       priceInput[0].value = minVal;
  //       priceInput[1].value = maxVal;
  //       range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
  //       range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
  //     }
  //   });
  // });
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />
      <main id="machines">
        <section class="hero">
          <p class="banner__title">ORIGINAL COFFEE MACHINES</p>
          <p class="font_heading-5 banner__content">
            Free Delivery for any coffee machine.
          </p>
        </section>

        <section class="container">
          <div class="filter-machines">
            <div class="filter-number">
              <span>13 MACHINES</span>
            </div>
            <!-- <div class="filter-sublabel filter-toggle">
              <span>Filter</span>
            </div> -->
          </div>
          <div class="filter-wrapper">
            <div class="filter-button filter-toggle">
              <button
                id="filterButton"
                class="filter-sublabel"
                aria-expanded="false"
              >
                Filter
              </button>
            </div>

            <div id="modal" class="filter-list">
              <div class="filter-item">
                <p class="filter-item__name">color</p>
                <ul class="filter-item__ellipse">
                  <li class="filter-item__color">
                    <label
                      class="filter-item__label"
                      for="FilterColor-red"
                      style="background-color: #f10404"
                    >
                      <span class="VisuallyHidden">Red</span>
                    </label>
                    <input
                      type="radio"
                      name="FilterColor"
                      id="FilterColor-red"
                      value="red"
                    />
                  </li>
                  <li class="filter-item__color">
                    <label
                      class="filter-item__label"
                      for="FilterColor-black"
                      style="background-color: #000000"
                    >
                      <span class="VisuallyHidden">Black</span>
                    </label>
                    <input
                      type="radio"
                      name="FilterColor"
                      id="FilterColor-black"
                      value="black"
                    />
                  </li>
                  <li class="filter-item__color">
                    <label
                      class="filter-item__label"
                      for="FilterColor-white"
                      style="background-color: #ffffff"
                    >
                      <span class="VisuallyHidden">White</span>
                    </label>
                    <input
                      type="radio"
                      name="FilterColor"
                      id="FilterColor-white"
                      value="white"
                    />
                  </li>
                </ul>
              </div>

              <div class="filter-item">
                <p class="filter-item__name">PRICEV</p>
                <!-- <div class="filter-price">
                  <div class="filter-price__number">
                    <p class="font_body-1">400,000</p>
                    <p class="font_body-1">10,000,000</p>
                  </div>
                  <div class="filter-price__range">
                    <span></span>
                    <span></span>
                  </div>
                </div> -->

                <!-- InputRange -->
                <!-- <div class="filter-price__number">
                  <p class="font_body-1">400,000</p>
                  <p class="font_body-1">10,000,000</p>
                </div> -->

                <div class="price-input">
                  <div class="field">
                    <input type="number" class="input-min" value="400000" />
                  </div>
                  <div class="field" style="text-align: end">
                    <input type="number" class="input-max" value="10000000" />
                  </div>
                </div>
                <div class="slider">
                  <div class="progress"></div>
                </div>
                <div class="range-input">
                  <input
                    type="range"
                    class="range-min"
                    min="400000"
                    max="10000000"
                    value="400000"
                    step="100000"
                  />
                  <input
                    type="range"
                    class="range-max"
                    min="400000"
                    max="10000000"
                    value="10000000"
                    step="100000"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="banner">
            <img src="assets/images/machines/machines_icon1.png" alt="" />
            <div class="banner-desciption">
              <p class="banner-heading font_heading-5">MACHINE SUBSCRIPTION</p>
              <p class="banner-content font_body-1">
                Get your coffee machine for just 1 RON
              </p>
            </div>
            <button class="banner-btn">DISCOVER MORE</button>
          </div>

          <!-- Product List -->
          <div class="product-list">
            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_1.png"
                  alt="ESSENZA MINI"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">ESSENZA MINI</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_2.png"
                  alt="INISSIA"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">INISSIA</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_3.png"
                  alt="ESSENZA PLUS"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">ESSENZA PLUS</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img src="assets/images/machines/machines_4.png" alt="PIXIE" />
              </router-link>
              <!-- Name -->
              <p class="product-name">PIXIE</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">ONLINE EXCLUSUVE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_5.png"
                  alt="Essenza Mini Black & Aeroccino 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">Essenza Mini Black & Aeroccino 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_6.png"
                  alt="Essenza Mini Black & Aeroccino 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">Essenza Mini Black & Aeroccino 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_7.png"
                  alt="ESSENZA MINI WHITE & AEROCCINO 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">ESSENZA MINI WHITE & AEROCCINO 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_8.png"
                  alt="Inissia Black & Aeroccino 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">Inissia Black & Aeroccino 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_9.png"
                  alt="Inissia Red & Aeroccino 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">Inissia Red & Aeroccino 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_10.png"
                  alt="Pixie Red & Aeroccino 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">Pixie Red & Aeroccino 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_11.png"
                  alt="Pixie Titan & Aeroccino 3"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">Pixie Titan & Aeroccino 3</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_12.png"
                  alt="LATTISSIMA ONE"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">LATTISSIMA ONE</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>

            <!-- Product Item -->
            <div class="product-item">
              <!-- Product Tag -->
              <div class="product-tag">
                <span class="product-tag__name">PROMOTE</span>
              </div>
              <!-- Product Image -->
              <router-link to="/machines_detail" class="product-image">
                <img
                  src="assets/images/machines/machines_13.png"
                  alt="GRAN LATTISSIMA"
                />
              </router-link>
              <!-- Name -->
              <p class="product-name">GRAN LATTISSIMA</p>
              <!-- Description -->
              <p class="product-desc">Description, maximum 3 lines</p>
              <!-- Type -->
              <div class="product-type">
                <p class="product-type__text">Available colors:</p>
                <div class="product-type__color">
                  <span class="product-type__color--red"></span>
                  <span class="product-type__color--black"></span>
                  <span class="product-type__color--green"></span>
                  <span class="product-type__color--brick-red"></span>
                </div>
              </div>

              <!-- Price -->
              <div class="product-price">
                <p class="product-price__num">₫3,700,000</p>
              </div>

              <!-- View More -->
              <div class="product-btn">
                <router-link to="/machines_detail"
                  >VIEW MORE DETAILS
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
</template>
