<script>
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
export default defineComponent({
  name: "SustainabilityCommunityPage",
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = (swiper) => {
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
    getSlidesCommunity() {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 480) {
        return 2;
      } else {
        return 1;
      }
    },
    shouldShowNavigation() {
      return window.innerWidth >= 480;
    },
  },
});
</script>

<template>
  <section id="community" class="community">
    <div class="background-1">
      <div class="community_frame-wrapper">
        <h3 class="community_frame-heading">MAKING COFFEE WORK FOR EVERYONE</h3>
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
          Since 2003, our desire to create shared value for all stakeholders in
          our value chain has been channeled through the AAA Sustainable
          Quality™ Program. In line with B Corp values, our aim is to foster
          conditions to improve yields, quality of harvests, and help protect
          the environment while promoting sustainable livelihoods.
        </p>
      </div>
      <div class="container community_frame2">
        <div class="community_frame2-item">
          <div class="community_frame2-item-img">
            <img
              src="/assets/images/sustainability&recycling/community_7.png"
              alt="commitment_7"
              width="100%"
              height="100%"
            />
          </div>
          <h3 class="community_frame2-item-heading">SUSTAINABLE PRODUCTION</h3>
          <p class="community_frame2-item-des">
            Empower farmers with the support of the Rainforest Alliance
          </p>
        </div>
        <div class="community_frame2-item">
          <div class="community_frame2-item-img">
            <img
              src="/assets/images/sustainability&recycling/community_8.png"
              alt="commitment_7"
              width="100%"
              height="100%"
            />
          </div>
          <h3 class="community_frame2-item-heading">SUSTAINABLE LIVELIHOODS</h3>
          <p class="community_frame2-item-des">
            Offer farmers better prices, premiums and diversification
          </p>
        </div>
        <div class="community_frame2-item">
          <div class="community_frame2-item-img">
            <img
              src="/assets/images/sustainability&recycling/community_9.png"
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
              src="/assets/images/sustainability&recycling/community_2.png"
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
                  src="/assets/images/sustainability&recycling/community_3.png"
                  alt=""
                />
              </div>
            </div>
            <div class="community_frame4-left">
              <h3 class="community_frame4-left-heading">CROP INSURANCE</h3>
              <p class="community_frame4-left-des">
                Climate shocks can have devastating impacts on coffee farmers,
                which are rarely fully covered by insurers. With Blue Marble
                Microinsurance and Fairtrade, we cross-reference real-time and
                historic weather data to calculate which farms are affected and
                provide automated payouts. In Aguadas and Norte Caldas,
                Colombia, 4,700+ farmers and 15,000 hectares are already
                protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="community_frame5">
      <div class="background-2">
        <div class="community_frame5-wrapper container">
          <swiper
            :modules="modules"
            :slides-per-view="getSlidesCommunity()"
            :space-between="24"
            :pagination="{ clickable: true }"
            :navigation="shouldShowNavigation()"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="/assets/images/sustainability&recycling/community_12.png"
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
            </swiper-slide>

            <swiper-slide>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="/assets/images/sustainability&recycling/community_12.png"
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
            </swiper-slide>

            <swiper-slide>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="/assets/images/sustainability&recycling/community_12.png"
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
            </swiper-slide>

            <swiper-slide>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="/assets/images/sustainability&recycling/community_12.png"
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
            </swiper-slide>

            <swiper-slide>
              <div class="community_frame5-item">
                <h3 class="community_frame5-item-heading">INISSIA</h3>
                <div class="community_frame5-item-img">
                  <img
                    src="/assets/images/sustainability&recycling/community_12.png"
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
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="community_frame1">
        <h3 class="community_frame1-heading">MANY STORIES, ONE COMMITMENT</h3>
        <p class="community_frame1-des">
          Each farmer and agronomist has a story to tell. Each is different, yet
          united by a shared commitment to quality and sustainability. Through
          access to training, we strive to provide tools tailored to the reality
          of the local land and community.
        </p>
      </div>

      <div class="community_frame2 container">
        <div class="community_frame2-item">
          <div class="community_frame2-item-img2">
            <img
              src="/assets/images/sustainability&recycling/community_10.png"
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
              src="/assets/images/sustainability&recycling/community_4.png"
              alt="commitment_7"
              width="100%"
              height="100%"
            />
          </div>
          <h3 class="community_frame2-item-heading">ALBA MARIA</h3>
          <p class="community_frame2-item-des">
            Alba was ready to give up her 7,200 coffee trees in Colombia’s
            Caldas province due to unpredictable weather patterns resulting from
            climate change. Joining Nespresso and Blue Marble’s crop insurance
            plan gives her peace of mind.
          </p>
        </div>
        <div class="community_frame2-item">
          <div class="community_frame2-item-img2">
            <img
              src="/assets/images/sustainability&recycling/community_5.png"
              alt="commitment_7"
              width="100%"
              height="100%"
            />
          </div>
          <h3 class="community_frame2-item-heading">TAFADZWA NYAKUCHENA</h3>
          <p class="community_frame2-item-des">
            This Zimbabwean agronomist saw drought and economic crisis almost
            wipe out his country’s coffee industry. Working within Nespresso’s
            AAA Sustainable Quality™ Program, he provides advice on sustainable
            farming practices during door-to-door coffee farm visits.
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
              src="/assets/images/sustainability&recycling/community_6.png"
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
              src="/assets/images/sustainability&recycling/community_6.png"
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
              src="/assets/images/sustainability&recycling/community_6.png"
              alt="commitment_7"
              width="100%"
              height="100%"
            />
          </div>
          <h3 class="community_frame2-item-heading">HISPANIC HERITAGE MONTH</h3>
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
</template>
