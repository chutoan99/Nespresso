<script lang="ts">
import "../css/pages/professional.css";
import Header from "@/containers/Header.vue";
import NavigationComponent from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfessionalPage",
  components: {
    Header,
    NavigationComponent,
    Footer,
  },

  // $(".professional_pr-wrapper").slick({
  //       dots: false,
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //           },
  //         },
  //         {
  //           breakpoint: 768,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //             infinite: true,
  //             dots: false,
  //           },
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: "unslick",
  //         },
  //       ],
  //       prevArrow:
  //         '<button type="button" class="slick-prev"> <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.0122891C11.198 0.0123311 11.3913 0.071003 11.5557 0.180887C11.7201 0.290772 11.8482 0.446936 11.9239 0.629635C11.9996 0.812334 12.0194 1.01337 11.9808 1.20732C11.9422 1.40127 11.847 1.57944 11.7072 1.71929L2.41421 11.0123L11.7072 20.3053C11.8894 20.4939 11.9902 20.7465 11.9879 21.0087C11.9856 21.2709 11.8804 21.5217 11.695 21.7071C11.5096 21.8925 11.2588 21.9977 10.9966 22C10.7344 22.0022 10.4818 21.9014 10.2932 21.7193L0.293211 11.7193C0.10574 11.5318 0.000425355 11.2775 0.000425332 11.0123C0.000425309 10.7471 0.10574 10.4928 0.293211 10.3053L10.2932 0.305288C10.4807 0.117739 10.735 0.0123464 11.0002 0.0122891Z" fill="white"/></svg></button>',
  //       nextArrow:
  //         '<button type="button" class="slick-next"> <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z" fill="white" /></svg></button>',
  //     });

  //     $(".professional_slide-capsules").slick({
  //       centerMode: true,
  //       slidesToShow: 3,
  //       dots: true,
  //       responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 768,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //           },
  //         },
  //       ],
  //       prevArrow:
  //         '<button type="button" class="slick-prev"> <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.0122891C11.198 0.0123311 11.3913 0.071003 11.5557 0.180887C11.7201 0.290772 11.8482 0.446936 11.9239 0.629635C11.9996 0.812334 12.0194 1.01337 11.9808 1.20732C11.9422 1.40127 11.847 1.57944 11.7072 1.71929L2.41421 11.0123L11.7072 20.3053C11.8894 20.4939 11.9902 20.7465 11.9879 21.0087C11.9856 21.2709 11.8804 21.5217 11.695 21.7071C11.5096 21.8925 11.2588 21.9977 10.9966 22C10.7344 22.0022 10.4818 21.9014 10.2932 21.7193L0.293211 11.7193C0.10574 11.5318 0.000425355 11.2775 0.000425332 11.0123C0.000425309 10.7471 0.10574 10.4928 0.293211 10.3053L10.2932 0.305288C10.4807 0.117739 10.735 0.0123464 11.0002 0.0122891Z" fill="white"/></svg></button>',
  //       nextArrow:
  //         '<button type="button" class="slick-next"> <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z" fill="white" /></svg></button>',
  //     });

  //     $(".professional_banner").slick({
  //       dots: true,
  //       speed: 300,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       autoplay: true,
  //       autoplaySpeed: 6000,
  //       arrows: false,
  //       responsive: [
  //         {
  //           breakpoint: 768,
  //           settings: {
  //             autoplay: true,
  //             autoplaySpeed: 6000,
  //             slidesToShow: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             autoplay: true,
  //             autoplaySpeed: 6000,
  //             slidesToShow: 1,
  //           },
  //         },
  //       ],
  //     });

  //     $("#professional_slide-list").slick({
  //       dots: true,
  //       speed: 300,
  //       slidesToShow: 5,
  //       slidesToScroll: 1,
  //       responsive: [
  //         {
  //           breakpoint: 1024,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 768,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //           },
  //         },
  //       ],
  //       prevArrow:
  //         '<button type="button" class="slick-prev"> <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.0122891C11.198 0.0123311 11.3913 0.071003 11.5557 0.180887C11.7201 0.290772 11.8482 0.446936 11.9239 0.629635C11.9996 0.812334 12.0194 1.01337 11.9808 1.20732C11.9422 1.40127 11.847 1.57944 11.7072 1.71929L2.41421 11.0123L11.7072 20.3053C11.8894 20.4939 11.9902 20.7465 11.9879 21.0087C11.9856 21.2709 11.8804 21.5217 11.695 21.7071C11.5096 21.8925 11.2588 21.9977 10.9966 22C10.7344 22.0022 10.4818 21.9014 10.2932 21.7193L0.293211 11.7193C0.10574 11.5318 0.000425355 11.2775 0.000425332 11.0123C0.000425309 10.7471 0.10574 10.4928 0.293211 10.3053L10.2932 0.305288C10.4807 0.117739 10.735 0.0123464 11.0002 0.0122891Z" fill="white"/></svg></button>',
  //       nextArrow:
  //         '<button type="button" class="slick-next"> <svg width="9" height="23" viewBox="0 0 9 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z" fill="white" /></svg></button>',
  //     });
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <NavigationComponent />

      <main id="professional">
        <div style="width: 100vw; display: flex; justify-content: center">
          <div class="professional_banner">
            <div class="professional_banner-item">
              <div class="professional_banner-image">
                <img src="assets/images/professional/banner.png" alt="" />
              </div>
              <div class="professional_banner-context">
                <h4 class="professional_banner-heading">
                  EXPERIENCE NESPRESSO PROFESSIONAL
                </h4>
                <p class="professional_banner-title">
                  We offer 1 month trial. Experience very best Nespresso coffee
                  and elevate your coffee experience
                </p>
                <button class="professional_banner-btn">
                  <span>ASK FOR DEMO</span>
                </button>
              </div>
            </div>
            <div class="professional_banner-item">
              <div class="professional_banner-image">
                <img src="assets/images/professional/banner.png" alt="" />
              </div>
              <div class="professional_banner-context">
                <h4 class="professional_banner-heading">
                  EXPERIENCE NESPRESSO PROFESSIONAL
                </h4>
                <p class="professional_banner-title">
                  We offer 1 month trial. Experience very best Nespresso coffee
                  and elevate your coffee experience
                </p>
                <button class="professional_banner-btn">
                  <span>ASK FOR DEMO</span>
                </button>
              </div>
            </div>
            <div class="professional_banner-item">
              <div class="professional_banner-image">
                <img src="assets/images/professional/banner.png" alt="" />
              </div>
              <div class="professional_banner-context">
                <h4 class="professional_banner-heading">
                  EXPERIENCE NESPRESSO PROFESSIONAL
                </h4>
                <p class="professional_banner-title">
                  We offer 1 month trial. Experience very best Nespresso coffee
                  and elevate your coffee experience
                </p>
                <button class="professional_banner-btn">
                  <span>ASK FOR DEMO</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="professional_pr container">
          <div class="professional_pr2">
            <div class="professional_pr2-container container">
              <div class="professional_pr2-heading">
                <h3>DISCOVER OUR COFFEE SOLUTION ADAPTED TO PROFESSIONAL</h3>
              </div>

              <div class="professional_pr2-wrapper">
                <div class="professional_pr2-item">
                  <div class="professional_pr2-item-img">
                    <img
                      src="assets/images/professional/image_67.png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr2-item-body">
                    <div class="professional_pr2-item-title">
                      <span>OFFICE</span>
                    </div>
                    <div class="professional_pr2-item-des">
                      <p>
                        Offering a great quality cup of coffee shows you care
                        about small detail and it creates a positive impression
                        of your workplace. It can open a conversation, close a
                        deal and make employees and customers feel special.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="professional_pr2-item">
                  <div class="professional_pr2-item-img">
                    <img
                      src="assets/images/professional/image_67_(1).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr2-item-body">
                    <div class="professional_pr2-item-title">
                      <span>HOTEL</span>
                    </div>
                    <div class="professional_pr2-item-des">
                      <p>
                        To choose Nespresso coffee capsules and coffee machines
                        for your hotel is a symbol of your passion for
                        excellence and commitment to your customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="professional_pr2-item">
                  <div class="professional_pr2-item-img">
                    <img
                      src="assets/images/professional/image_67_(2).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr2-item-body">
                    <div class="professional_pr2-item-title">
                      <span>RESTAURANT AND CAFE</span>
                    </div>
                    <div class="professional_pr2-item-des">
                      <p>
                        Delight the discerning palates of your customers. All
                        Nespresso Grand Crus deliver consistent and perfect
                        coffee, cup after cup.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="professional_pr2-contact">
                <p>Call us at 1800 234 506 or email us at pro@nespresso.vn</p>
                <button>
                  <span>CONTACT US</span>
                </button>
              </div>
            </div>
          </div>

          <div class="professional_slide">
            <div class="professional_slide-container container">
              <h4 class="professional_slide-heading">
                A RANGE OF PROFESSIONAL COFFEE MACHINES DESIGNED TO MEET YOUR
                BUSINESS NEEDS
              </h4>
            </div>
          </div>
          <div
            class="container"
            id="professional_slide-list"
            style="padding-bottom: 3.75rem"
          >
            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide1.png"
                  alt="Nespresso Momento Coffee 100"
                />
              </div>

              <p class="professional_slide-name">
                Nespresso Momento Coffee 100
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide2.png"
                  alt="Nespresso Momento Coffee & Milk 120"
                />
              </div>

              <p class="professional_slide-name">
                Nespresso Momento Coffee & Milk 120
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide3.png"
                  alt="Nespresso Momento Coffee 200"
                />
              </div>
              <p class="professional_slide-name">
                Nespresso Momento Coffee 200
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img src="assets/images/professional/slide4.png" alt="Zenius" />
              </div>
              <p class="professional_slide-name">Zenius</p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide5.png"
                  alt="Zenius Offer for Small Offices"
                />
              </div>
              <p class="professional_slide-name">
                Zenius Offer for Small Offices
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide1.png"
                  alt="Nespresso Momento Coffee 100"
                />
              </div>
              <p class="professional_slide-name">
                Nespresso Momento Coffee 100
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide2.png"
                  alt="Nespresso Momento Coffee & Milk 120"
                />
              </div>
              <p class="professional_slide-name">
                Nespresso Momento Coffee & Milk 120
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide3.png"
                  alt="Nespresso Momento Coffee 200"
                />
              </div>
              <p class="professional_slide-name">
                Nespresso Momento Coffee 200
              </p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img src="assets/images/professional/slide4.png" alt="Zenius" />
              </div>
              <p class="professional_slide-name">Zenius</p>
            </router-link>

            <router-link to="/professional_detail">
              <div class="professional_slide-wrapper-img">
                <img
                  src="assets/images/professional/slide5.png"
                  alt="Zenius Offer for Small Offices"
                />
              </div>
              <p class="professional_slide-name">
                Zenius Offer for Small Offices
              </p>
            </router-link>
          </div>
          <div class="professional_slide">
            <div class="professional_slide-wrapper">
              <h4 class="professional_slide-heading container">
                15 OFFICE COFFEE CAPSULES TO SUIT EVERY TASTE. AT ANY TIME OF
                THE DAY
              </h4>
              <div class="professional_slide-capsules">
                <div class="professional_slide-capsules-item">
                  <div class="professional_slide-capsules__image">
                    <img
                      src="assets/images/professional/capsules1.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules2.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules3.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules4.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules5.png"
                      alt=""
                    />
                  </div>

                  <div class="professional_slide-capsules__text">
                    <h4>Origins</h4>
                    <p>A balance of land and bean</p>
                  </div>

                  <div class="professional_slide-capsules__type">
                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3 8H20.5L21 5.9L20.3 5H2.7L2 5.9L5.6 22.4L6.3 23H16.6L17.3 22.4L18.7 16H22.2C24.4 16 26.2 14.2 26.2 12C26.2 9.8 24.5 8 22.3 8ZM19.3 6.5L17.2 16H5.7L3.7 6.5H19.3ZM16 21.5H6.9L6 17.5H16.9L16 21.5ZM22.3 14.4H19.2L20.3 9.6H22.3C23.6 9.6 24.7 10.7 24.7 12C24.7 13.3 23.6 14.4 22.3 14.4Z"
                          fill="black"
                        />
                      </svg>
                      <span>25 / 40 / 110 ml</span>
                    </div>

                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_789_58810)">
                          <path
                            d="M13.5 25.75C6.45837 25.75 0.75 20.0416 0.75 13C0.75 5.95837 6.45837 0.25 13.5 0.25C20.5416 0.25 26.25 5.95837 26.25 13C26.25 20.0416 20.5416 25.75 13.5 25.75ZM13.5 24.25C19.7132 24.25 24.75 19.2132 24.75 13C24.75 6.7868 19.7132 1.75 13.5 1.75C7.2868 1.75 2.25 6.7868 2.25 13C2.25 19.2132 7.2868 24.25 13.5 24.25Z"
                            fill="black"
                          />
                          <path
                            d="M13.4995 22.3397C8.3415 22.3397 4.16016 18.1584 4.16016 13.0004C4.16016 7.84248 8.3415 3.66113 13.4995 3.66113C18.6574 3.66113 22.8388 7.84248 22.8388 13.0004C22.8388 18.1584 18.6574 22.3397 13.4995 22.3397ZM13.4995 20.8397C17.829 20.8397 21.3388 17.33 21.3388 13.0004C21.3388 8.67091 17.829 5.16113 13.4995 5.16113C9.16993 5.16113 5.66016 8.67091 5.66016 13.0004C5.66016 17.33 9.16993 20.8397 13.4995 20.8397Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_789_58810">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Intensity 4-10</span>
                    </div>
                  </div>
                  <div style="display: flex; justify-content: center">
                    <button class="professional_slide-capsules__btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 5.44772 0.447715 5 1 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H1C0.447715 7 0 6.55228 0 6Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="professional_slide-capsules-item">
                  <div class="professional_slide-capsules__image">
                    <img
                      src="assets/images/professional/capsules1.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules2.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules3.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules4.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules5.png"
                      alt=""
                    />
                  </div>

                  <div class="professional_slide-capsules__text">
                    <h4>Origins</h4>
                    <p>A balance of land and bean</p>
                  </div>

                  <div class="professional_slide-capsules__type">
                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3 8H20.5L21 5.9L20.3 5H2.7L2 5.9L5.6 22.4L6.3 23H16.6L17.3 22.4L18.7 16H22.2C24.4 16 26.2 14.2 26.2 12C26.2 9.8 24.5 8 22.3 8ZM19.3 6.5L17.2 16H5.7L3.7 6.5H19.3ZM16 21.5H6.9L6 17.5H16.9L16 21.5ZM22.3 14.4H19.2L20.3 9.6H22.3C23.6 9.6 24.7 10.7 24.7 12C24.7 13.3 23.6 14.4 22.3 14.4Z"
                          fill="black"
                        />
                      </svg>
                      <span>25 / 40 / 110 ml</span>
                    </div>

                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_789_58810)">
                          <path
                            d="M13.5 25.75C6.45837 25.75 0.75 20.0416 0.75 13C0.75 5.95837 6.45837 0.25 13.5 0.25C20.5416 0.25 26.25 5.95837 26.25 13C26.25 20.0416 20.5416 25.75 13.5 25.75ZM13.5 24.25C19.7132 24.25 24.75 19.2132 24.75 13C24.75 6.7868 19.7132 1.75 13.5 1.75C7.2868 1.75 2.25 6.7868 2.25 13C2.25 19.2132 7.2868 24.25 13.5 24.25Z"
                            fill="black"
                          />
                          <path
                            d="M13.4995 22.3397C8.3415 22.3397 4.16016 18.1584 4.16016 13.0004C4.16016 7.84248 8.3415 3.66113 13.4995 3.66113C18.6574 3.66113 22.8388 7.84248 22.8388 13.0004C22.8388 18.1584 18.6574 22.3397 13.4995 22.3397ZM13.4995 20.8397C17.829 20.8397 21.3388 17.33 21.3388 13.0004C21.3388 8.67091 17.829 5.16113 13.4995 5.16113C9.16993 5.16113 5.66016 8.67091 5.66016 13.0004C5.66016 17.33 9.16993 20.8397 13.4995 20.8397Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_789_58810">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Intensity 4-10</span>
                    </div>
                  </div>
                  <div style="display: flex; justify-content: center">
                    <button class="professional_slide-capsules__btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 5.44772 0.447715 5 1 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H1C0.447715 7 0 6.55228 0 6Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="professional_slide-capsules-item">
                  <div class="professional_slide-capsules__image">
                    <img
                      src="assets/images/professional/capsules1.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules2.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules3.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules4.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules5.png"
                      alt=""
                    />
                  </div>

                  <div class="professional_slide-capsules__text">
                    <h4>Origins</h4>
                    <p>A balance of land and bean</p>
                  </div>

                  <div class="professional_slide-capsules__type">
                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3 8H20.5L21 5.9L20.3 5H2.7L2 5.9L5.6 22.4L6.3 23H16.6L17.3 22.4L18.7 16H22.2C24.4 16 26.2 14.2 26.2 12C26.2 9.8 24.5 8 22.3 8ZM19.3 6.5L17.2 16H5.7L3.7 6.5H19.3ZM16 21.5H6.9L6 17.5H16.9L16 21.5ZM22.3 14.4H19.2L20.3 9.6H22.3C23.6 9.6 24.7 10.7 24.7 12C24.7 13.3 23.6 14.4 22.3 14.4Z"
                          fill="black"
                        />
                      </svg>
                      <span>25 / 40 / 110 ml</span>
                    </div>

                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_789_58810)">
                          <path
                            d="M13.5 25.75C6.45837 25.75 0.75 20.0416 0.75 13C0.75 5.95837 6.45837 0.25 13.5 0.25C20.5416 0.25 26.25 5.95837 26.25 13C26.25 20.0416 20.5416 25.75 13.5 25.75ZM13.5 24.25C19.7132 24.25 24.75 19.2132 24.75 13C24.75 6.7868 19.7132 1.75 13.5 1.75C7.2868 1.75 2.25 6.7868 2.25 13C2.25 19.2132 7.2868 24.25 13.5 24.25Z"
                            fill="black"
                          />
                          <path
                            d="M13.4995 22.3397C8.3415 22.3397 4.16016 18.1584 4.16016 13.0004C4.16016 7.84248 8.3415 3.66113 13.4995 3.66113C18.6574 3.66113 22.8388 7.84248 22.8388 13.0004C22.8388 18.1584 18.6574 22.3397 13.4995 22.3397ZM13.4995 20.8397C17.829 20.8397 21.3388 17.33 21.3388 13.0004C21.3388 8.67091 17.829 5.16113 13.4995 5.16113C9.16993 5.16113 5.66016 8.67091 5.66016 13.0004C5.66016 17.33 9.16993 20.8397 13.4995 20.8397Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_789_58810">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Intensity 4-10</span>
                    </div>
                  </div>
                  <div style="display: flex; justify-content: center">
                    <button class="professional_slide-capsules__btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 5.44772 0.447715 5 1 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H1C0.447715 7 0 6.55228 0 6Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="professional_slide-capsules-item">
                  <div class="professional_slide-capsules__image">
                    <img
                      src="assets/images/professional/capsules1.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules2.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules3.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules4.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules5.png"
                      alt=""
                    />
                  </div>

                  <div class="professional_slide-capsules__text">
                    <h4>Origins</h4>
                    <p>A balance of land and bean</p>
                  </div>

                  <div class="professional_slide-capsules__type">
                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3 8H20.5L21 5.9L20.3 5H2.7L2 5.9L5.6 22.4L6.3 23H16.6L17.3 22.4L18.7 16H22.2C24.4 16 26.2 14.2 26.2 12C26.2 9.8 24.5 8 22.3 8ZM19.3 6.5L17.2 16H5.7L3.7 6.5H19.3ZM16 21.5H6.9L6 17.5H16.9L16 21.5ZM22.3 14.4H19.2L20.3 9.6H22.3C23.6 9.6 24.7 10.7 24.7 12C24.7 13.3 23.6 14.4 22.3 14.4Z"
                          fill="black"
                        />
                      </svg>
                      <span>25 / 40 / 110 ml</span>
                    </div>

                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_789_58810)">
                          <path
                            d="M13.5 25.75C6.45837 25.75 0.75 20.0416 0.75 13C0.75 5.95837 6.45837 0.25 13.5 0.25C20.5416 0.25 26.25 5.95837 26.25 13C26.25 20.0416 20.5416 25.75 13.5 25.75ZM13.5 24.25C19.7132 24.25 24.75 19.2132 24.75 13C24.75 6.7868 19.7132 1.75 13.5 1.75C7.2868 1.75 2.25 6.7868 2.25 13C2.25 19.2132 7.2868 24.25 13.5 24.25Z"
                            fill="black"
                          />
                          <path
                            d="M13.4995 22.3397C8.3415 22.3397 4.16016 18.1584 4.16016 13.0004C4.16016 7.84248 8.3415 3.66113 13.4995 3.66113C18.6574 3.66113 22.8388 7.84248 22.8388 13.0004C22.8388 18.1584 18.6574 22.3397 13.4995 22.3397ZM13.4995 20.8397C17.829 20.8397 21.3388 17.33 21.3388 13.0004C21.3388 8.67091 17.829 5.16113 13.4995 5.16113C9.16993 5.16113 5.66016 8.67091 5.66016 13.0004C5.66016 17.33 9.16993 20.8397 13.4995 20.8397Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_789_58810">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Intensity 4-10</span>
                    </div>
                  </div>
                  <div style="display: flex; justify-content: center">
                    <button class="professional_slide-capsules__btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 5.44772 0.447715 5 1 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H1C0.447715 7 0 6.55228 0 6Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="professional_slide-capsules-item">
                  <div class="professional_slide-capsules__image">
                    <img
                      src="assets/images/professional/capsules1.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules2.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules3.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules4.png"
                      alt=""
                    />
                    <img
                      src="assets/images/professional/capsules5.png"
                      alt=""
                    />
                  </div>

                  <div class="professional_slide-capsules__text">
                    <h4>Origins</h4>
                    <p>A balance of land and bean</p>
                  </div>

                  <div class="professional_slide-capsules__type">
                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3 8H20.5L21 5.9L20.3 5H2.7L2 5.9L5.6 22.4L6.3 23H16.6L17.3 22.4L18.7 16H22.2C24.4 16 26.2 14.2 26.2 12C26.2 9.8 24.5 8 22.3 8ZM19.3 6.5L17.2 16H5.7L3.7 6.5H19.3ZM16 21.5H6.9L6 17.5H16.9L16 21.5ZM22.3 14.4H19.2L20.3 9.6H22.3C23.6 9.6 24.7 10.7 24.7 12C24.7 13.3 23.6 14.4 22.3 14.4Z"
                          fill="black"
                        />
                      </svg>
                      <span>25 / 40 / 110 ml</span>
                    </div>

                    <div class="professional_slide-capsules__type-size">
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_789_58810)">
                          <path
                            d="M13.5 25.75C6.45837 25.75 0.75 20.0416 0.75 13C0.75 5.95837 6.45837 0.25 13.5 0.25C20.5416 0.25 26.25 5.95837 26.25 13C26.25 20.0416 20.5416 25.75 13.5 25.75ZM13.5 24.25C19.7132 24.25 24.75 19.2132 24.75 13C24.75 6.7868 19.7132 1.75 13.5 1.75C7.2868 1.75 2.25 6.7868 2.25 13C2.25 19.2132 7.2868 24.25 13.5 24.25Z"
                            fill="black"
                          />
                          <path
                            d="M13.4995 22.3397C8.3415 22.3397 4.16016 18.1584 4.16016 13.0004C4.16016 7.84248 8.3415 3.66113 13.4995 3.66113C18.6574 3.66113 22.8388 7.84248 22.8388 13.0004C22.8388 18.1584 18.6574 22.3397 13.4995 22.3397ZM13.4995 20.8397C17.829 20.8397 21.3388 17.33 21.3388 13.0004C21.3388 8.67091 17.829 5.16113 13.4995 5.16113C9.16993 5.16113 5.66016 8.67091 5.66016 13.0004C5.66016 17.33 9.16993 20.8397 13.4995 20.8397Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_789_58810">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Intensity 4-10</span>
                    </div>
                  </div>
                  <div style="display: flex; justify-content: center">
                    <button class="professional_slide-capsules__btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1C5 0.447715 5.44772 0 6 0Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 6C0 5.44772 0.447715 5 1 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H1C0.447715 7 0 6.55228 0 6Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="professional_pr">
            <div class="professional_pr-container container">
              <h3 class="professional_pr-heading">
                WHAT DO YOU VALUE MOST WHEN CHOOSING YOUR COFFEE SOLUTION?
              </h3>
              <div class="professional_pr-wrapper container">
                <div class="professional_pr-item">
                  <div class="professional_pr-item-img">
                    <img
                      src="assets/images/professional/image_77_(5).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr-item-body">
                    <div>
                      <div class="professional_pr-item-title">
                        <span>Full services</span>
                      </div>
                      <div class="professional_pr-item-des">
                        <p>
                          Rent a professional machine and enjoy a proactive
                          service contract. Just order your coffee online, we
                          take care of the rest - recycling of your capsules is
                          included.
                        </p>
                      </div>
                    </div>
                    <div class="professional_pr-item-btn">
                      <button>
                        <span> ASK FOR DEMO </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="professional_pr-item">
                  <div class="professional_pr-item-img">
                    <img
                      src="assets/images/professional/image_77_(6).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr-item-body">
                    <div>
                      <div class="professional_pr-item-title">
                        <span>Full services</span>
                      </div>
                      <div class="professional_pr-item-des">
                        <p>
                          Our subscription is easy to activate. All inclusive
                          machine, coffee and service, quarterly collection and
                          recycling, collection or cancellation at any time.
                        </p>
                      </div>
                    </div>
                    <div class="professional_pr-item-btn">
                      <button>
                        <span> ASK FOR DEMO </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="professional_pr-item">
                  <div class="professional_pr-item-img">
                    <img
                      src="assets/images/professional/image_77_(7).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr-item-body">
                    <div>
                      <div class="professional_pr-item-title">
                        <span>Full services</span>
                      </div>
                      <div class="professional_pr-item-des">
                        <p>
                          Sometimes it's easier to buy. As always, we are happy
                          to collect and recycle your capsules. As always, we
                          are happy to collect and recycle your capsules.
                        </p>
                      </div>
                    </div>
                    <div class="professional_pr-item-btn">
                      <button>
                        <span> ASK FOR DEMO </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="professional_pr-item">
                  <div class="professional_pr-item-img">
                    <img
                      src="assets/images/professional/image_77_(5).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr-item-body">
                    <div>
                      <div class="professional_pr-item-title">
                        <span>Full services</span>
                      </div>
                      <div class="professional_pr-item-des">
                        <p>
                          Rent a professional machine and enjoy a proactive
                          service contract. Just order your coffee online, we
                          take care of the rest - recycling of your capsules is
                          included.
                        </p>
                      </div>
                    </div>
                    <div class="professional_pr-item-btn">
                      <button>
                        <span> ASK FOR DEMO </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="professional_pr-item">
                  <div class="professional_pr-item-img">
                    <img
                      src="assets/images/professional/image_77_(6).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr-item-body">
                    <div>
                      <div class="professional_pr-item-title">
                        <span>Full services</span>
                      </div>
                      <div class="professional_pr-item-des">
                        <p>
                          Our subscription is easy to activate. All inclusive
                          machine, coffee and service, quarterly collection and
                          recycling, collection or cancellation at any time.
                        </p>
                      </div>
                    </div>
                    <div class="professional_pr-item-btn">
                      <button>
                        <span> ASK FOR DEMO </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="professional_pr-item">
                  <div class="professional_pr-item-img">
                    <img
                      src="assets/images/professional/image_77_(7).png"
                      alt="product"
                    />
                  </div>
                  <div class="professional_pr-item-body">
                    <div>
                      <div class="professional_pr-item-title">
                        <span>Full services</span>
                      </div>
                      <div class="professional_pr-item-des">
                        <p>
                          Sometimes it's easier to buy. As always, we are happy
                          to collect and recycle your capsules. As always, we
                          are happy to collect and recycle your capsules.
                        </p>
                      </div>
                    </div>
                    <div class="professional_pr-item-btn">
                      <button>
                        <span> ASK FOR DEMO </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- frame 2 -->
          <section class="professional_container2">
            <div class="">
              <div
                class="container"
                style="display: flex; justify-content: center"
              >
                <h3 class="professional_container2-heading">
                  MAKE THE RIGHT CHOICE FOR YOUR BUSINESS TODAY
                </h3>
              </div>
              <div
                class="container"
                style="display: flex; justify-content: center"
              >
                <p class="professional_container2-des">
                  You know magic is in the details. You know that quality
                  counts. So why not put some love into the coffee you serve?
                  Offering Nespresso to your employees, customers and partners
                  shows that you care about them.
                </p>
              </div>
              <div class="professional_container2-list">
                <div class="professional_container2-item">
                  <div class="item_img">
                    <img src="assets/images/professional/image_78.png" />
                  </div>
                  <div class="item_title">
                    <span>Installation & coffee training</span>
                  </div>
                </div>
                <div class="professional_container2-item">
                  <div class="item_img">
                    <img src="assets/images/professional/image_79.png" />
                  </div>
                  <div class="item_title">
                    <span>Easy ordering & live chat & live chat</span>
                  </div>
                </div>
                <div class="professional_container2-item">
                  <div class="item_img">
                    <div>
                      <img src="assets/images/professional/image_80.png" />
                    </div>
                  </div>
                  <div class="item_title">
                    <span>Delivery within 48 hours</span>
                  </div>
                </div>
                <div class="professional_container2-item">
                  <div class="item_img">
                    <div>
                      <img src="assets/images/professional/image_81.png" />
                    </div>
                  </div>
                  <div class="item_title">
                    <span>Fast repair & loan machine</span>
                  </div>
                </div>
                <div class="professional_container2-item">
                  <div class="item_img">
                    <div>
                      <img src="assets/images/professional/image_82.png" />
                    </div>
                  </div>
                  <div class="item_title">
                    <span>Recycling & collection</span>
                  </div>
                </div>
              </div>
              <div class="professional_container2-button">
                <button><span> GET IN CONTACT </span></button>
              </div>
            </div>
          </section>
          <!-- frame 3 -->
        </div>
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            background: #1b1b1b;
          "
        >
          <section class="professional_container">
            <div class="professional_container-wrapper">
              <div class="professional_container-img">
                <img
                  src="assets/images/professional/Rectangle_8.png"
                  alt="bg"
                />
              </div>
              <di class="professional_container-content">
                <h3 class="professional_container-heading">
                  SUSTAINABLE COMPANY
                </h3>
                <span class="professional_container-title"
                  >INSPIRING SUSTAINABILITY</span
                >
                <p class="professional_container-des">
                  Ever since our journey began with coffee more than 25 years
                  ago, we have been supporting sustainability with the same
                  passion and expertise. We are committed to ensuring the
                  highest quality. and sustainability of your coffee through a
                  comprehensive program, with observable results. Because
                  sustainability justifies the means.
                </p>
                <div class="professional_container-more">
                  <span>More about sustainability</span>
                  <svg
                    width="9"
                    height="23"
                    viewBox="0 0 9 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z"
                      fill="#876C43"
                    />
                  </svg>
                </div>
                <span class="professional_container-title"
                  >RESPONSIBILITY MEANS RECYCLABILITY</span
                >
                <p class="professional_container-des">
                  Nespresso capsules are made from aluminum to guarantee the
                  freshness of the carefully crafted aromas and rich flavours of
                  your coffee. By adding capsule recycling to your coffee
                  ritual, your Nespresso won't only taste good, it feels good
                  too.
                </p>
                <div class="professional_container-more">
                  <span>More about sustainability</span>
                  <svg
                    width="9"
                    height="23"
                    viewBox="0 0 9 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z"
                      fill="#876C43"
                    />
                  </svg>
                </div>
              </di>
            </div>
          </section>
        </div>
        <!-- form  -->
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #931650;
          "
        >
          <form class="form_pro">
            <h2 class="form_pro-heading">LET'S HAVE A COFFEE TOGETHER</h2>
            <p class="form_pro-des">
              Contact us to find out more about how to improve your coffee
              experience - digitally or physically.
            </p>
            <div class="form_pro-filed2">
              <div>
                <label for="">First name *</label>
                <select>
                  <option></option>
                </select>
              </div>
              <div>
                <label for="">Last name *</label>
                <select>
                  <option></option>
                </select>
              </div>
            </div>
            <div class="form_pro-filed">
              <label for="">Email *</label>
              <input type="text" placeholder="" />
            </div>
            <div class="form_pro-filed">
              <label for="">Corporation *</label>
              <input type="text" placeholder="" />
            </div>
            <div class="form_pro-filed">
              <label for="">Phone number *</label>
              <input type="text" placeholder="" />
            </div>
            <div class="form_btn">
              <button><span> SUBMIT </span></button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
