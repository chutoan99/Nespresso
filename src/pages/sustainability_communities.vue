<script>
import "../css/pages/sustainability_communities.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityCommunitiesPage",
  components: {
    Header,
    Nav,
    Footer,
  },
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        prevArrow:
          '<button type="button" class="slick-prev"> <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.0122891C11.198 0.0123311 11.3913 0.071003 11.5557 0.180887C11.7201 0.290772 11.8482 0.446936 11.9239 0.629635C11.9996 0.812334 12.0194 1.01337 11.9808 1.20732C11.9422 1.40127 11.847 1.57944 11.7072 1.71929L2.41421 11.0123L11.7072 20.3053C11.8894 20.4939 11.9902 20.7465 11.9879 21.0087C11.9856 21.2709 11.8804 21.5217 11.695 21.7071C11.5096 21.8925 11.2588 21.9977 10.9966 22C10.7344 22.0022 10.4818 21.9014 10.2932 21.7193L0.293211 11.7193C0.10574 11.5318 0.000425355 11.2775 0.000425332 11.0123C0.000425309 10.7471 0.10574 10.4928 0.293211 10.3053L10.2932 0.305288C10.4807 0.117739 10.735 0.0123464 11.0002 0.0122891Z" fill="white"/></svg></button>',
        nextArrow:
          '<button type="button" class="slick-next"> <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z" fill="white" /></svg></button>',
      },
    };
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <!-- Header -->
      <Nav />
      <!-- Navigation -->
      <section id="tabs">
        <div class="tabs">
          <a href="./sustainability_recycling" class="tabs_heading"
            >COMMITMENT</a
          >
          <a href="./sustainability_bcorp" class="tabs_heading">B CORP</a>
          <a href="./sustainability_circularity" class="tabs_heading"
            >CIRCULARITY</a
          >
          <a href="./sustainability_climate" class="tabs_heading">CLIMATE</a>
          <a href="./sustainability_communities" class="tabs_heading tab_active"
            >COMMUNITY</a
          >
        </div>
      </section>

      <section id="community" class="community">
        <div class="background-1">
          <div class="community_frame-wrapper">
            <h3 class="community_frame-heading">
              MAKING COFFEE WORK FOR EVERYONE
            </h3>
            <p class="community_frame-des">
              SO PEOPLE AND COMMUNITIES CAN FLOURISH
            </p>
          </div>
        </div>
        <div class="container">
          <div class="community_frame1">
            <h3 class="community_frame1-heading">AS A B CORP™</h3>
            <h3 class="community_frame1-title">
              COMMITTED TO WORKING HAND IN HAND
            </h3>
            <p class="community_frame1-des">
              Since 2003, our desire to create shared value for all stakeholders
              in our value chain has been channeled through the AAA Sustainable
              Quality™ Program. In line with B Corp values, our aim is to foster
              conditions to improve yields, quality of harvests, and help
              protect the environment while promoting sustainable livelihoods.
            </p>
          </div>
          <div class="container community_frame2">
            <div class="community_frame2-item">
              <div class="community_frame2-item-img">
                <img
                  src="../assets/images/sustainability&recycling/community_7.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">
                SUSTAINABLE PRODUCTION
              </h3>
              <p class="community_frame2-item-des">
                Empower farmers with the support of the Rainforest Alliance
              </p>
            </div>
            <div class="community_frame2-item">
              <div class="community_frame2-item-img">
                <img
                  src="../assets/images/sustainability&recycling/community_8.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">
                SUSTAINABLE LIVELIHOODS
              </h3>
              <p class="community_frame2-item-des">
                Offer farmers better prices, premiums and diversification
              </p>
            </div>
            <div class="community_frame2-item">
              <div class="community_frame2-item-img">
                <img
                  src="../assets/images/sustainability&recycling/community_9.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">INCLUSIVITY</h3>
              <p class="community_frame2-item-des">
                Continue improving access to <br />opportunities for all
              </p>
            </div>
          </div>
        </div>
        <div class="community_wrapper">
          <div class="container community_frame3">
            <div class="community_frame3-left">
              <div class="community_frame3-left-content">
                <h3>120,000+ FARMERS</h3>
                <span>
                  committed to high-quality production and sustainable
                  practices</span
                >
              </div>
              <div class="community_frame3-left-content">
                <h3>93% OF NESPRESSO COFFEE</h3>
                <span> is sourced through the AAA Program</span>
              </div>
              <div class="community_frame3-left-content">
                <h3>NEARLY 20 YEARS</h3>
                <span> partnering with the Rainforest Alliance</span>
              </div>
            </div>
            <div class="community_frame3-right">
              <div class="community_frame3-right-img">
                <img
                  src="../assets/images/sustainability&recycling/community_2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <section id="tabs2">
          <div class="tabs2">
            <input type="radio" id="corp-insurance" name="tabs2" checked />
            <label class="tabs_heading" for="corp-insurance"
              >CROP<br />INSURANCE</label
            >
            <div class="tab2"></div>

            <input type="radio" id="farmer-pensions" name="tabs2" />
            <label class="tabs_heading" for="farmer-pensions"
              >FARMER<br />PENSIONS</label
            >
            <div class="tab2"></div>

            <input type="radio" id="master-origins" name="tabs2" />
            <label class="tabs_heading" for="master-origins"
              >MASTER<br />ORIGINS</label
            >
            <div class="tab2"></div>

            <input type="radio" id="reviving-origins" name="tabs2" />
            <label class="tabs_heading" for="reviving-origins"
              >REVIVING<br />ORIGINS</label
            >
            <div class="tab2"></div>
          </div>
        </section>
        <div class="community_frame4">
          <div class="community_frame4-mark">
            <div class="container">
              <div class="community_frame4-mark2"></div>
              <div class="container community_frame4-main" style="height: 100%">
                <div class="community_frame4-right">
                  <div class="community_frame4-right-img">
                    <img
                      src="../assets/images/sustainability&recycling/community_3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="community_frame4-left">
                  <h3 class="community_frame4-left-heading">CROP INSURANCE</h3>
                  <p class="community_frame4-left-des">
                    Climate shocks can have devastating impacts on coffee
                    farmers, which are rarely fully covered by insurers. With
                    Blue Marble Microinsurance and Fairtrade, we cross-reference
                    real-time and historic weather data to calculate which farms
                    are affected and provide automated payouts. In Aguadas and
                    Norte Caldas, Colombia, 4,700+ farmers and 15,000 hectares
                    are already protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="community_frame5">
          <div class="background-2">
            <div class="community_frame5-wrapper container">
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="../assets/images/sustainability&recycling/community_12.png"
                    alt="product"
                    width="160"
                    height="160"
                  />
                </div>
                <div class="community_frame5-item-price">
                  <span>đ4,200,000</span>
                </div>
                <div class="community_frame5-item-btn">
                  <button>
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
                    <span> ADD TO BASKET </span>
                  </button>
                </div>
              </div>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="../assets/images/sustainability&recycling/community_12.png"
                    alt="product"
                    width="160"
                    height="160"
                  />
                </div>
                <div class="community_frame5-item-price">
                  <span>đ4,200,000</span>
                </div>
                <div class="community_frame5-item-btn">
                  <button>
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
                    <span> ADD TO BASKET </span>
                  </button>
                </div>
              </div>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="../assets/images/sustainability&recycling/community_12.png"
                    alt="product"
                    width="160"
                    height="160"
                  />
                </div>
                <div class="community_frame5-item-price">
                  <span>đ4,200,000</span>
                </div>
                <div class="community_frame5-item-btn">
                  <button>
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
                    <span> ADD TO BASKET </span>
                  </button>
                </div>
              </div>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="../assets/images/sustainability&recycling/community_12.png"
                    alt="product"
                    width="160"
                    height="160"
                  />
                </div>
                <div class="community_frame5-item-price">
                  <span>đ4,200,000</span>
                </div>
                <div class="community_frame5-item-btn">
                  <button>
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
                    <span> ADD TO BASKET </span>
                  </button>
                </div>
              </div>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="../assets/images/sustainability&recycling/community_12.png"
                    alt="product"
                    width="160"
                    height="160"
                  />
                </div>
                <div class="community_frame5-item-price">
                  <span>đ4,200,000</span>
                </div>
                <div class="community_frame5-item-btn">
                  <button>
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
                    <span> ADD TO BASKET </span>
                  </button>
                </div>
              </div>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="../assets/images/sustainability&recycling/community_12.png"
                    alt="product"
                    width="160"
                    height="160"
                  />
                </div>
                <div class="community_frame5-item-price">
                  <span>đ4,200,000</span>
                </div>
                <div class="community_frame5-item-btn">
                  <button>
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
                    <span> ADD TO BASKET </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="community_frame5-number">
              <span>1</span>/ <span>4</span>
            </div> -->
        </div>
        <div class="container">
          <div class="community_frame1">
            <h3 class="community_frame1-heading">
              MANY STORIES, ONE COMMITMENT
            </h3>
            <p class="community_frame1-des">
              Each farmer and agronomist has a story to tell. Each is different,
              yet united by a shared commitment to quality and sustainability.
              Through access to training, we strive to provide tools tailored to
              the reality of the local land and community.
            </p>
          </div>

          <div class="community_frame2 container">
            <div class="community_frame2-item">
              <div class="community_frame2-item-img2">
                <img
                  src="../assets/images/sustainability&recycling/community_10.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">ISWANDI</h3>
              <p class="community_frame2-item-des">
                Like over 1,800 farmers, Iswandi enjoys improved socioeconomic
                conditions, productivity, and coffee quality as a member of the
                coffee cooperative in Aceh, Indonesia – set up with Nespresso,
                Fairtrade and coffee trader Olam.
              </p>
            </div>
            <div class="community_frame2-item">
              <div class="community_frame2-item-img2">
                <img
                  src="../assets/images/sustainability&recycling/community_4.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">ALBA MARIA</h3>
              <p class="community_frame2-item-des">
                Alba was ready to give up her 7,200 coffee trees in Colombia’s
                Caldas province due to unpredictable weather patterns resulting
                from climate change. Joining Nespresso and Blue Marble’s crop
                insurance plan gives her peace of mind.
              </p>
            </div>
            <div class="community_frame2-item">
              <div class="community_frame2-item-img2">
                <img
                  src="../assets/images/sustainability&recycling/community_5.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">TAFADZWA NYAKUCHENA</h3>
              <p class="community_frame2-item-des">
                This Zimbabwean agronomist saw drought and economic crisis
                almost wipe out his country’s coffee industry. Working within
                Nespresso’s AAA Sustainable Quality™ Program, he provides advice
                on sustainable farming practices during door-to-door coffee farm
                visits.
              </p>
            </div>
          </div>
          <div class="community_frame1">
            <h3 class="community_frame1-heading">ON THE GROUND</h3>
            <p class="community_frame1-des">
              Dive in to discover what’s going on locally
            </p>
          </div>
          <div class="community_frame2 container">
            <div class="community_frame2-item">
              <div class="community_frame2-item-img2">
                <img
                  src="../assets/images/sustainability&recycling/community_6.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">FOOD AID IN ITALY</h3>
              <p class="community_frame2-item-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ligula et dui mollis porttitor. Aliquam mollis, est a tincidunt
                tincidunt, diam libero rhoncus urna, non bibendum sem urna vitae
                sapien
              </p>
            </div>
            <div class="community_frame2-item">
              <div class="community_frame2-item-img2">
                <img
                  src="../assets/images/sustainability&recycling/community_6.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">BRAZIL IN ACTION</h3>
              <p class="community_frame2-item-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ligula et dui mollis porttitor. Aliquam mollis, est a tincidunt
                tincidunt, diam libero rhoncus urna, non bibendum sem urna vitae
                sapien
              </p>
            </div>
            <div class="community_frame2-item">
              <div class="community_frame2-item-img2">
                <img
                  src="../assets/images/sustainability&recycling/community_6.png"
                  alt="commitment_7"
                  width="100%"
                  height="100%"
                />
              </div>
              <h3 class="community_frame2-item-heading">
                HISPANIC HERITAGE MONTH
              </h3>
              <p class="community_frame2-item-des">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                ligula et dui mollis porttitor. Aliquam mollis, est a tincidunt
                tincidunt, diam libero rhoncus urna, non bibendum sem urna vitae
                sapien
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
