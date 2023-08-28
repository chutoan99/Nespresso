<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
//? APP

export default defineComponent({
  name: "BenefitsPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },

  methods: {
    getSlidesBanner() {
      if (window.innerWidth >= 1024) {
        return 8;
      } else if (window.innerWidth >= 480) {
        return 6;
      } else {
        return 3;
      }
    },
  },
});
</script>

<template>
  <main id="benefits">
    <section class="benefits">
      <div class="background-1">
        <div class="benefits_frame container">
          <h3 class="benefits_frame-heading">Nespresso & You</h3>
          <p class="benefits_frame-des">Our new way of caring for you</p>
          <p class="benefits_frame-des">
            It’s our shared passion for coffee which brings us together, so why
            not make the most of it?By becoming a Nespresso member, a world of
            benefits. Rewards and coffee-inspired discoveries open to you. All
            these benefits are made for you to enjoy your coffee moments, every
            day.To make loving coffee even more rewarding.
          </p>
          <div class="benefits_frame-footer">
            <button>Join now Nespresso</button>
            <span>Or</span>
            <button>Already member? Login</button>
          </div>
        </div>
      </div>
    </section>
    <!--start slider -->
    <section class="slider">
      <div class="slider-bg">
        <h3 class="slider_heading">
          Time flies. The longer you’ve been with us, the more benefits
          Nespresso has for you.
        </h3>
        <div class="container slider-wrapper">
          <div class="slider_list">
            <swiper
              :modules="modules"
              :slides-per-view="getSlidesBanner()"
              :space-between="0"
              :pagination="{ clickable: true }"
              navigation
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/car.png"
                        alt="DELIVERY"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>FREE DELIVERY</span>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/RECYCLING_AT_HOME.png"
                        alt="RECYCLING"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>RECYCLING AT HOME</span>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/LOAN_MACHINE_DURING_REPAIR.png"
                        alt="MACHINE"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>LOAN MACHINE DURING REPAIR</span>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/MASTERCLASSES.png"
                        alt="MASTERCLASSES"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>MASTERCLASSES</span>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/DISCOUNT.png"
                        alt="DISCOUNT"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>10% EXTRA DISCOUNT</span>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/FREE_DESCALING_KIT.png"
                        alt="DESCALING"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>FREE DESCALING KIT</span>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/REFFER_A_FRIEND.png"
                        alt="REFFER"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>REFFER A FRIEND</span>
                  </div>
                </div></swiper-slide
              >

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/EXTENDED_WARRANTY.png"
                        alt="EXTENDED"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>EXTENDED WARRANTY</span>
                  </div>
                </div></swiper-slide
              >

              <swiper-slide>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="assets/images/benefits/EXTENDED_WARRANTY.png"
                        alt="EXTENDED"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>EXTENDED WARRANTY</span>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <!--end slider -->
    <section class="container benefits" style="position: relative">
      <div class="benefits_img hide_on-pc hide_on-tab show_on-mobile">
        <img src="assets/images/benefits/Untitled.png" alt="" />
      </div>
      <div class="background-2">
        <div class="benefits_frame3">
          <h2 class="benefits_frame3-heading">
            Benefit from your Membership right today
          </h2>
          <p class="benefits_frame3-des">
            Why let special rewards, unique offers and tailor-made treats pass
            you by? Just sign-up for Nespresso emails now and get more of the
            things you love.
          </p>
          <button class="benefits_frame3-btn">Login</button>
        </div>
      </div>
    </section>

    <section class="benefits_frame2">
      <div class="benefits_frame2-wrapper container">
        <div class="benefits_frame2-item">
          <div class="benefits_frame2-item-img">
            <img src="assets/images/benefits/Group_321.png" alt="carthand" />
          </div>
          <div class="benefits_frame2-item-content">
            <h3>Free delivery in the next 48 hours</h3>
            <p>
              Receive your coffee in just 48 hours at an address of your choice.
            </p>
          </div>
        </div>
        <div class="benefits_frame2-item">
          <div class="benefits_frame2-item-img">
            <img src="assets/images/benefits/carthand.png" alt="carthand" />
          </div>
          <div class="benefits_frame2-item-content">
            <h3>Pick up in a boutique today</h3>
            <p>
              Order online and collect your order at your favourite Boutique
              just 2 hours later.
            </p>
          </div>
        </div>
        <div class="benefits_frame2-item">
          <div class="benefits_frame2-item-img">
            <img src="assets/images/benefits/Group_321.png" alt="carthand" />
          </div>
          <div class="benefits_frame2-item-content">
            <h3>Assistance for your machine</h3>
            <p>Need help with your machine? Our experts are here for you.</p>
          </div>
        </div>
        <div class="benefits_frame2-item">
          <div class="benefits_frame2-item-img">
            <img src="assets/images/benefits/Group_320.png" alt="carthand" />
          </div>
          <div class="benefits_frame2-item-content">
            <h3>Secured payment transactions</h3>
            <p>
              SSL encryption means sensitive information is always transmitted
              securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
