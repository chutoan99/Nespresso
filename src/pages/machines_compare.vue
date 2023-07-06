<script lang="ts">
import "../css/pages/machines_compare.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MachinesComparePage",
  components: {
    Header,
    Nav,
    Footer,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <Nav />

      <main id="machines_compare">
        <div class="container">
          <section class="intro">
            <h3 class="intro-heading">COMPARE COFFEE MACHINES</h3>
            <button class="intro-button">
              <router-link to="">Shop machines</router-link>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.66272 6.0516C7.87968 5.83465 8.23143 5.83465 8.44839 6.0516L14.0039 11.6072C14.2209 11.8241 14.2209 12.1759 14.0039 12.3928L8.44839 17.9484C8.23143 18.1653 7.87968 18.1653 7.66272 17.9484C7.44576 17.7314 7.44576 17.3797 7.66272 17.1627L12.8254 12L7.66272 6.83728C7.44576 6.62032 7.44576 6.26856 7.66272 6.0516Z"
                  fill="#212121"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9947 6.0516C11.2117 5.83465 11.5635 5.83465 11.7804 6.0516L17.336 11.6072C17.5529 11.8241 17.5529 12.1759 17.336 12.3928L11.7804 17.9484C11.5635 18.1653 11.2117 18.1653 10.9947 17.9484C10.7778 17.7314 10.7778 17.3797 10.9947 17.1627L16.1575 12L10.9947 6.83728C10.7778 6.62032 10.7778 6.26856 10.9947 6.0516Z"
                  fill="#212121"
                />
              </svg>
            </button>

            <p class="intro-description">
              Compare all Nespresso coffee machines and discover which suits you
              best. All our coffee machines are equipped high-pressure bar to
              deliver perfect coffee, cup after cup. You can even bundle our
              Espresso Machines with Aeroccino milk frother or simply go for the
              One-Touch Milk Machine to create a creamy cup of Latte.
            </p>
          </section>

          <section class="product-filter">
            <div class="product-filter__select">
              <select name="type" id="type-select" class="product-filter__list">
                <option value="Coffee Mug">Coffee Mug</option>
                <option value="Spoons">Spoons</option>
                <option value="Glasses">Glasses</option>
                <option value="Sugar">Sugar</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Food">Food</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Capsule Dispenser">Capsule Dispenser</option>
                <option value="Milk Solution">Milk Solution</option>
              </select>
            </div>

            <div class="product-filter__select">
              <select name="type" id="type-select" class="product-filter__list">
                <option value="Coffee Mug">Coffee Mug</option>
                <option value="Spoons">Spoons</option>
                <option value="Glasses">Glasses</option>
                <option value="Sugar">Sugar</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Food">Food</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Capsule Dispenser">Capsule Dispenser</option>
                <option value="Milk Solution">Milk Solution</option>
              </select>
            </div>

            <div class="product-filter__select">
              <select name="type" id="type-select" class="product-filter__list">
                <option value="Coffee Mug">Coffee Mug</option>
                <option value="Spoons">Spoons</option>
                <option value="Glasses">Glasses</option>
                <option value="Sugar">Sugar</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Food">Food</option>
                <option value="Biscuits">Biscuits</option>
                <option value="Capsule Dispenser">Capsule Dispenser</option>
                <option value="Milk Solution">Milk Solution</option>
              </select>
            </div>
          </section>

          <section class="product-card">
            <div class="product-card__item">
              <div class="product-card__image">
                <img
                  src="assets/images/compare-machinse/product-1.png"
                  alt=""
                />
              </div>
              <div class="product-card__color">
                <span class="product-card__color--red"></span>
                <span class="product-card__color--black"></span>
                <span class="product-card__color--green"></span>
                <span class="product-card__color--brick-red"></span>
              </div>

              <span class="product-card__price">₫3,700,000</span>

              <button class="product-card__btn">
                <router-link to=""> VIEW DETAILS & BUY </router-link>
              </button>
            </div>

            <div class="product-card__item">
              <div class="product-card__image">
                <img
                  src="assets/images/compare-machinse/product-2.png"
                  alt=""
                />
              </div>
              <div class="product-card__color">
                <span class="product-card__color--red"></span>
                <span class="product-card__color--black"></span>
                <span class="product-card__color--green"></span>
                <span class="product-card__color--brick-red"></span>
              </div>

              <span class="product-card__price">₫3,700,000</span>

              <button class="product-card__btn">
                <router-link to=""> VIEW DETAILS & BUY </router-link>
              </button>
            </div>

            <div class="product-card__item">
              <div class="product-card__image">
                <img
                  src="assets/images/compare-machinse/product-3.png"
                  alt=""
                />
              </div>
              <div class="product-card__color">
                <span class="product-card__color--red"></span>
                <span class="product-card__color--black"></span>
                <span class="product-card__color--green"></span>
                <span class="product-card__color--brick-red"></span>
              </div>

              <span class="product-card__price">₫ 3,700,000</span>

              <button class="product-card__btn">
                <router-link to=""> VIEW DETAILS & BUY </router-link>
              </button>
            </div>
          </section>

          <section class="product-selection">
            <div class="product-selection-group">
              <h4 class="product-selection-heading">Coffee Selection</h4>

              <div class="product-selection-list">
                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-small.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Ristretto</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-small.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-small.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-large.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Lungo</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-small.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-large.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Lungo</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/cup-large.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Lungo</span>
                </div>

                <div class="product-selection-item"></div>
              </div>
            </div>

            <div class="product-selection-group">
              <h4 class="product-selection-heading">Milk Recipes Selection</h4>

              <div class="product-selection-list">
                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img src="assets/images/compare-machinse/milk.png" alt="" />
                  </div>
                  <span class="product-selection-item__name">Ristretto</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-2.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-3.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-4.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Lungo</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-5.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Lungo</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-6.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-5.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Lungo</span>
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-6.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name">Espresso</span>
                </div>
              </div>
            </div>

            <div class="product-selection-group">
              <h4 class="product-selection-heading">Milk Functions</h4>

              <div class="product-selection-wrapper">
                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/milk-functions.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name"
                    >Detachable frother</span
                  >
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image">
                    <img
                      src="assets/images/compare-machinse/actions.png"
                      alt=""
                    />
                  </div>
                  <span class="product-selection-item__name"
                    >Automated milk function</span
                  >
                </div>

                <div class="product-selection-item">
                  <div class="product-selection-item__image"></div>
                  <span class="product-selection-item__name"
                    >Option to bundle with Aeroccino</span
                  >

                  <button class="product-selection-item__btn">
                    <router-link to=""> Learn more </router-link>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.32678 6.05163C7.54374 5.83468 7.8955 5.83468 8.11246 6.05163L13.668 11.6072C13.885 11.8241 13.885 12.1759 13.668 12.3929L8.11246 17.9484C7.8955 18.1654 7.54374 18.1654 7.32678 17.9484C7.10982 17.7315 7.10982 17.3797 7.32678 17.1627L12.4895 12L7.32678 6.83731C7.10982 6.62035 7.10982 6.26859 7.32678 6.05163Z"
                        fill="#17171A"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6588 6.05163C10.8758 5.83468 11.2275 5.83468 11.4445 6.05163L17 11.6072C17.217 11.8241 17.217 12.1759 17 12.3929L11.4445 17.9484C11.2275 18.1654 10.8758 18.1654 10.6588 17.9484C10.4419 17.7315 10.4419 17.3797 10.6588 17.1627L15.8215 12L10.6588 6.83731C10.4419 6.62035 10.4419 6.26859 10.6588 6.05163Z"
                        fill="#17171A"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="product-selection-group">
              <h4 class="product-selection-heading">Key Features Selection</h4>

              <div class="product-selection-wrapper">
                <div class="product-selection-paragraph">
                  <ul>
                    <li>30-sec heat up time</li>
                    <li>Foldable drip tray</li>
                    <li>Automatically off mode in 9 min</li>
                    <li>Descaling alert</li>
                    <li>One complimentary VIEW mug</li>
                  </ul>
                </div>

                <div class="product-selection-paragraph">
                  <ul>
                    <li>40-sec heat up time</li>
                    <li>Foldable drip tray</li>
                    <li>Automatically off mode in 9 min</li>
                    <li>Descaling alert</li>
                    <li>Easy rinsing system</li>
                  </ul>
                </div>

                <div class="product-selection-paragraph">
                  <ul>
                    <li>30-sec heat up time</li>
                    <li>Foldable drip tray</li>
                    <li>Automatically off mode in 9 min</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="product-selection-group">
              <h4 class="product-selection-heading">Size and Weight</h4>

              <div class="product-selection-wrapper">
                <div class="product-selection-context">
                  <p>Width <br />11.9cm</p>
                  <p>
                    Depth <br />
                    43.4cm
                  </p>
                  <p>
                    Height <br />
                    27.9cm
                  </p>
                  <p>
                    Weight <br />
                    4.5kg
                  </p>
                  <p>
                    Water tank<br />
                    1 Litre
                  </p>
                </div>

                <div class="product-selection-context">
                  <p>
                    Width <br />
                    15.4cm
                  </p>
                  <p>
                    Depth <br />
                    32.4cm
                  </p>
                  <p>
                    Height <br />
                    25.6cm
                  </p>
                  <p>
                    Weight <br />
                    4.2kg
                  </p>
                  <p>
                    Water tank<br />
                    1 Litre
                  </p>
                </div>

                <div class="product-selection-context">
                  <p>
                    Width <br />
                    11cm
                  </p>
                  <p>
                    Depth <br />
                    32.5cm
                  </p>
                  <p>
                    Height <br />
                    20.5cm
                  </p>
                  <p>
                    Weight <br />
                    2.3kg
                  </p>
                  <p>
                    Water tank<br />
                    0.6 Litre
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
