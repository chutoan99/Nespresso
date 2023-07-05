<script lang="ts">
import "../css/pages/benefits.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BenefitsPage",
  components: {
    Header,
    Nav,
    Footer,
  },

  // $(document).ready(function () {
  //       $(".slider_list").slick({
  //         slidesToShow: 8,
  //         slidesToScroll: 1,
  //         dots: false,
  //         centerMode: true,
  //         focusOnSelect: true,
  //         prevArrow:
  //           '<button type="button" class="slick-prev"> <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.83728 0.162718C6.62032 -0.0542395 6.26857 -0.0542395 6.05161 0.162718L0.496052 5.71827C0.279094 5.93523 0.279094 6.28699 0.496052 6.50395L6.05161 12.0595C6.26857 12.2765 6.62032 12.2765 6.83728 12.0595C7.05424 11.8425 7.05424 11.4908 6.83728 11.2738L1.67456 6.11111L6.83728 0.948393C7.05424 0.731435 7.05424 0.379676 6.83728 0.162718Z" fill="#212121" fill="white"/></svg></button>',
  //         nextArrow:
  //           '<button type="button" class="slick-next"> <svg  width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z" fill="#212121" fill="white" /></svg></button>',
  //         responsive: [
  //           {
  //             breakpoint: 1024,
  //             settings: {
  //               slidesToShow: 8,
  //               slidesToScroll: 1,
  //               infinite: true,
  //               dots: false,
  //             },
  //           },

  //           {
  //             breakpoint: 768,
  //             settings: {
  //               arrows: false,
  //               centerMode: true,
  //               Infinity: true,
  //               slidesToShow: 4,
  //               slidesToScroll: 2,
  //               dots: false,
  //             },
  //           },
  //         ],
  //       });
  //     });
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <Nav />
      <main id="benefits">
        <section class="benefits">
          <div class="background-1">
            <div class="benefits_frame container">
              <h3 class="benefits_frame-heading">Nespresso & You</h3>
              <p class="benefits_frame-des">Our new way of caring for you</p>
              <p class="benefits_frame-des">
                It’s our shared passion for coffee which brings us together, so
                why not make the most of it?By becoming a Nespresso member, a
                world of benefits. Rewards and coffee-inspired discoveries open
                to you. All these benefits are made for you to enjoy your coffee
                moments, every day.To make loving coffee even more rewarding.
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
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/car.png"
                        alt="DELIVERY"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>FREE DELIVERY</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/RECYCLING_AT_HOME.png"
                        alt="RECYCLING"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>RECYCLING AT HOME</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/LOAN_MACHINE_DURING_REPAIR.png"
                        alt="MACHINE"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>LOAN MACHINE DURING REPAIR</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/MASTERCLASSES.png"
                        alt="MASTERCLASSES"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>MASTERCLASSES</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/DISCOUNT.png"
                        alt="DISCOUNT"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>10% EXTRA DISCOUNT</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/FREE_DESCALING_KIT.png"
                        alt="DESCALING"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>FREE DESCALING KIT</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/REFFER_A_FRIEND.png"
                        alt="REFFER"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>REFFER A FRIEND</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/EXTENDED_WARRANTY.png"
                        alt="EXTENDED"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>EXTENDED WARRANTY</span>
                  </div>
                </div>
                <div class="slider_item">
                  <div class="slider_item-wrapper">
                    <div class="slider_item-img">
                      <img
                        src="../assets/images/benefits/EXTENDED_WARRANTY.png"
                        alt="EXTENDED"
                      />
                    </div>
                  </div>
                  <div class="slider_item-title">
                    <span>EXTENDED WARRANTY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--end slider -->
        <section class="container benefits" style="position: relative">
          <div class="benefits_img hide_on-pc hide_on-tab show_on-mobile">
            <img src="../assets/images/benefits/Untitled.png" alt="" />
          </div>
          <div class="background-2">
            <div class="benefits_frame3">
              <h2 class="benefits_frame3-heading">
                Benefit from your Membership right today
              </h2>
              <p class="benefits_frame3-des">
                Why let special rewards, unique offers and tailor-made treats
                pass you by? Just sign-up for Nespresso emails now and get more
                of the things you love.
              </p>
              <button class="benefits_frame3-btn">Login</button>
            </div>
          </div>
        </section>

        <section class="benefits_frame2">
          <div class="benefits_frame2-wrapper container">
            <div class="benefits_frame2-item">
              <div class="benefits_frame2-item-img">
                <img
                  src="../assets/images/benefits/Group_321.png"
                  alt="carthand"
                />
              </div>
              <div class="benefits_frame2-item-content">
                <h3>Free delivery in the next 48 hours</h3>
                <p>
                  Receive your coffee in just 48 hours at an address of your
                  choice.
                </p>
              </div>
            </div>
            <div class="benefits_frame2-item">
              <div class="benefits_frame2-item-img">
                <img
                  src="../assets/images/benefits/carthand.png"
                  alt="carthand"
                />
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
                <img
                  src="../assets/images/benefits/Group_321.png"
                  alt="carthand"
                />
              </div>
              <div class="benefits_frame2-item-content">
                <h3>Assistance for your machine</h3>
                <p>
                  Need help with your machine? Our experts are here for you.
                </p>
              </div>
            </div>
            <div class="benefits_frame2-item">
              <div class="benefits_frame2-item-img">
                <img
                  src="../assets/images/benefits/Group_320.png"
                  alt="carthand"
                />
              </div>
              <div class="benefits_frame2-item-content">
                <h3>Secured payment transactions</h3>
                <p>
                  SSL encryption means sensitive information is always
                  transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
</template>
