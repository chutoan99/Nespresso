<script lang="ts">
import "../css/pages/shopping_bag3.css";
import Footer from "@/containers/Footer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "ShoppingStep3Page",
  components: {
    Footer,
  },
  // Add other properties, methods, etc.
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <header id="header" class="header">
        <div class="header_inner">
          <div class="header_logo">
            <router-link to="/">
              <img
                src="../assets/images/logoApp.png"
                alt="logoApp"
                width="100%"
                height="100%"
              />
            </router-link>
          </div>
        </div>
      </header>
      <!-- end header -->
      <section id="progressbar">
        <ul class="progressbar container">
          <li class="progressbar_item item-active">
            <router-link class="progressbar_item-link" to="/">
              <span
                >Step 1
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="hide_on-mobile">Shopping bag summary</span>
            </router-link>
          </li>
          <li class="progressbar_item item-active">
            <router-link class="progressbar_item-link" to="/">
              <span
                >Step 2
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span class="hide_on-mobile">Delivery setup</span>
            </router-link>
          </li>
          <li class="progressbar_item item-active">
            <router-link class="progressbar_item-link" to="/">
              <span
                >Step 3
                <!-- 
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">Payment</span>
            </router-link>
          </li>
          <li class="progressbar_item">
            <router-link class="progressbar_item-link" to="/">
              <span
                >Step 4
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">Order summary</span>
            </router-link>
          </li>
          <li class="progressbar_item">
            <router-link class="progressbar_item-link" to="/">
              <span
                >Step 5
                <!-- <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#3D8705"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> -->
              </span>
              <span class="hide_on-mobile">Order confirmation</span>
            </router-link>
          </li>
        </ul>
      </section>
      <main id="shopping_bag">
        <!-- step 3 payment -->
        <section id="payment">
          <div class="container">
            <div class="payment">
              <div class="payment_label">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5005 17V16H17.4245L16.4585 10.204L14.6515 9H12.3505L10.5435 10.204L9.57748 16H8.50048V17H18.5005ZM11.4585 10.796L12.6505 10H14.3485L15.5415 10.796L16.4085 16H10.5905L11.4585 10.796ZM14.7935 5H16.2075L14.2475 3.04C16.8998 3.21171 19.399 4.34275 21.2785 6.222C23.2796 8.22362 24.4282 10.9222 24.4835 13.752L25.4785 13.656C25.3945 10.699 24.2385 7.766 21.9855 5.515C19.899 3.43044 17.1148 2.19188 14.1695 2.038L16.2075 0H14.7935L12.2935 2.5L14.7935 5ZM5.01548 5.515C1.26548 9.265 0.528484 14.899 2.79148 19.397L0.0214844 18.655L0.729485 19.88L4.14448 20.795L5.05948 17.38L4.35248 16.155L3.63248 18.84C1.62448 14.734 2.31448 9.63 5.72248 6.222C6.34537 5.60363 7.04036 5.06241 7.79248 4.61L7.21048 3.794C6.4142 4.27971 5.67752 4.85797 5.01548 5.515ZM24.0635 18.705L20.6475 19.62L19.9405 20.845L22.6365 20.123C22.2445 20.706 21.7945 21.263 21.2785 21.778C17.7475 25.309 12.3955 25.927 8.21948 23.642L7.80348 24.556C9.55413 25.4996 11.5117 25.9938 13.5005 25.994C15.0762 25.9969 16.637 25.6884 18.0931 25.0862C19.5493 24.484 20.8721 23.6 21.9855 22.485C22.5755 21.895 23.0905 21.258 23.5325 20.586L24.2715 23.344L24.9785 22.119L24.0635 18.705Z"
                    fill="black"
                  />
                </svg>
                <span>
                  Don't forget to recycle! Select 'Swap the recyclable capsules'
                  and the courier will take them when delivering your order.
                </span>
              </div>
              <div class="payment_main">
                <div class="payment_aside">
                  <div class="payment_aside-label">DELIVERY ADDRESS</div>
                  <div class="payment_aside-content">
                    <div class="payment_aside-content-info">
                      <h5>Address</h5>
                      <ul>
                        <li>Mr Leon Lu</li>
                        <li>Calea București nr. 1-87</li>
                        <li>500326 Brașov</li>
                      </ul>
                      <h5>Currently set as your default delivery address</h5>
                    </div>
                    <div class="payment_aside-content-edit">
                      <span>Edit Address</span>
                      <svg
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
                          fill="#876C43"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="payment_aside-btn">
                    <button>
                      <span>ADD ANOTHER ADDRESS</span>
                    </button>
                  </div>
                  <div class="payment_aside-label" style="margin-top: 12px">
                    PAYMENT METHOD
                  </div>
                  <div class="payment_aside-label2">
                    We apply the highest safety standards in preparing and
                    delivering your order
                  </div>
                  <div class="payment_aside-main">
                    <div class="aside_main-left">
                      <div class="aside_main-left-check">
                        <label for=""></label>
                        <input type="radio" checked />
                      </div>
                      <div class="aside_main-left-img">
                        <img
                          src="../assets/images/shopping_bag/payment.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="aside_main-right">
                      <div class="aside_main-right">
                        <div class="aside_main-right-heading">
                          <h3>Online payment, by card</h3>
                        </div>
                        <div class="aside_main-right-email">
                          <span>Edit Address</span>
                          <svg
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
                              fill="#876C43"
                            />
                          </svg>
                        </div>
                        <div class="aside_main-right-des">
                          <p>
                            According to the EU Directive on payment services
                            (PSD2), online payments require multi-authentication
                            factors. If you encounter any problem with your
                            online payment, please reach your bank for
                            verification.
                          </p>
                        </div>
                        <form id="form_payment">
                          <div class="form_payment-filed">
                            <label for="password">Credit card number*</label>
                            <input id="password" placeholder="Card number" />
                          </div>
                          <div class="form_payment-filed">
                            <label for="password">CVC/CVV code*</label>
                            <input id="password" placeholder="CVC/ CVV code" />
                          </div>

                          <div class="form_payment-mess">
                            <label></label>
                            <div>
                              <span>What is CVC/ CVV?</span>
                              <svg
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
                                  fill="#876C43"
                                />
                              </svg>
                            </div>
                          </div>

                          <div class="form_payment-filed">
                            <label for="password">Expiry*</label>
                            <div class="form_payment-wrapper">
                              <select class="form_payment-select">
                                <option>Card number</option>
                              </select>
                              <select class="form_payment-select">
                                <option>Card number</option>
                              </select>
                            </div>
                          </div>
                          <div class="form_payment-filed">
                            <label for="password">Cardholder name*</label>
                            <input
                              id="password"
                              placeholder="Cardholder name"
                            />
                          </div>
                          <div class="form_payment-check">
                            <label for="payment"></label>
                            <input type="checkbox" id="payment" />
                            <span>Save this card for the future order</span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div class="payment_aside-main">
                    <div class="aside_main-left">
                      <div class="aside_main-left-check">
                        <label for=""></label>
                        <input type="radio" checked />
                      </div>
                      <div class="aside_main-left-img">
                        <img
                          src="../assets/images/shopping_bag/delivery.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="aside_main-right">
                      <div class="aside_main-right">
                        <div class="aside_main-right-heading">
                          <h3>Payment on Delivery</h3>
                        </div>
                        <div class="aside_main-right-des">
                          <p>
                            The total amount of your order can be paid upon
                            delivery either by cash, in RON, or by contactless
                            card. If you need further information about this
                            method, we recommend you to contact the courier
                            company or the delivery agent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="payment_aside-main">
                    <div class="aside_main-left">
                      <div class="aside_main-left-check">
                        <label for=""></label>
                        <input type="radio" checked />
                      </div>
                      <div class="aside_main-left-img icon_google">
                        <svg
                          width="40"
                          height="16"
                          viewBox="0 0 40 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_186_15526)">
                            <path
                              d="M18.7434 2.70327V6.49377H21.2368C21.8308 6.49377 22.322 6.30664 22.7105 5.93235C23.1093 5.55893 23.3091 5.1136 23.3091 4.59809C23.3091 4.09298 23.1093 3.65285 22.7105 3.27856C22.322 2.89475 21.8308 2.70241 21.2368 2.70241H18.7434V2.70327ZM18.7434 7.82806V12.225H17.2539V1.36902H21.2044C22.2082 1.36902 23.0604 1.68266 23.7624 2.30906C24.4749 2.93547 24.831 3.69877 24.831 4.59809C24.831 5.51821 24.4748 6.28671 23.7624 6.90269C23.0714 7.51963 22.2184 7.82719 21.2044 7.82719H18.7434V7.82806Z"
                              fill="#5F6368"
                            />
                            <path
                              d="M26.3364 9.9507C26.3364 10.3146 26.501 10.6178 26.8305 10.8604C27.1598 11.103 27.5456 11.2243 27.9879 11.2243C28.6142 11.2243 29.172 11.0068 29.6633 10.5728C30.1546 10.1379 30.3997 9.62757 30.3997 9.04188C29.9353 8.69788 29.2876 8.52632 28.4568 8.52632C27.8519 8.52632 27.3477 8.66326 26.9434 8.93613C26.539 9.20901 26.3364 9.54613 26.3364 9.9507ZM28.2635 4.55304C29.3644 4.55304 30.2332 4.82855 30.8707 5.37958C31.5072 5.93061 31.8254 6.68611 31.8254 7.64607V12.225H30.4007V11.194H30.3359C29.7206 12.043 28.9 12.4676 27.875 12.4676C27.0008 12.4676 26.2689 12.225 25.6814 11.7398C25.093 11.2546 24.7988 10.6482 24.7988 9.92038C24.7988 9.15188 25.1087 8.54101 25.7294 8.0862C26.3502 7.63138 27.1784 7.40351 28.2146 7.40351C29.0989 7.40351 29.828 7.55513 30.3997 7.85838V7.53951C30.3997 7.05432 30.1943 6.6428 29.7846 6.30403C29.3737 5.96527 28.8944 5.79632 28.344 5.79632C27.5122 5.79632 26.8546 6.12469 26.3688 6.78226L25.0569 6.00859C25.7804 5.03822 26.8489 4.55304 28.2635 4.55304Z"
                              fill="#5F6368"
                            />
                            <path
                              d="M39.9997 4.79565L35.0289 15.5H33.4912L35.337 11.7546L32.0664 4.79565H33.6855L36.0493 10.1327H36.0817L38.3807 4.79565H39.9997Z"
                              fill="#5F6368"
                            />
                            <path
                              d="M13.0587 6.88017C13.0587 6.4409 13.0189 6.01723 12.944 5.61176H6.66211V8.01429H10.2601C10.1056 8.79742 9.63837 9.46379 8.9297 9.90998V11.4704H11.077C12.3343 10.3839 13.0587 8.77842 13.0587 6.88017Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M6.66058 12.9762C8.45818 12.9762 9.97178 12.4234 11.0755 11.4704L8.92818 9.91001C8.33052 10.2869 7.56078 10.5069 6.66058 10.5069C4.92312 10.5069 3.4484 9.41007 2.92106 7.93201H0.708984V9.53919C1.80531 11.5769 4.05809 12.9762 6.66058 12.9762Z"
                              fill="#34A853"
                            />
                            <path
                              d="M2.92168 7.93196C2.7866 7.55508 2.71259 7.15308 2.71259 6.73809C2.71259 6.32308 2.7866 5.92107 2.92168 5.54419V3.93701H0.709604C0.256271 4.77916 0 5.73046 0 6.73809C0 7.74571 0.256271 8.69708 0.709604 9.53914L2.92168 7.93196Z"
                              fill="#FABB05"
                            />
                            <path
                              d="M6.66058 2.96924C7.64218 2.96924 8.52205 3.28548 9.21592 3.90496V3.90582L11.1171 2.12537C9.96252 1.11861 8.45725 0.5 6.66058 0.5C4.05809 0.5 1.80531 1.89924 0.708984 3.93701L2.92106 5.54419C3.4484 4.06611 4.92312 2.96924 6.66058 2.96924Z"
                              fill="#E94235"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_186_15526">
                              <rect
                                width="40"
                                height="15"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div class="aside_main-right">
                      <div
                        style="display: flex; align-items: center; height: 100%"
                      >
                        <div class="aside_main-right-heading">
                          <h3>Google Pay</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="payment_aside-footer">
                    <div class="payment_aside-footer-back">
                      <svg
                        width="7"
                        height="13"
                        viewBox="0 0 7 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.83728 0.162718C6.62032 -0.0542395 6.26857 -0.0542395 6.05161 0.162718L0.496052 5.71827C0.279094 5.93523 0.279094 6.28699 0.496052 6.50395L6.05161 12.0595C6.26857 12.2765 6.62032 12.2765 6.83728 12.0595C7.05424 11.8425 7.05424 11.4908 6.83728 11.2738L1.67456 6.11111L6.83728 0.948393C7.05424 0.731435 7.05424 0.379676 6.83728 0.162718Z"
                          fill="#876C43"
                        />
                      </svg>
                      <router-link to="/shopping_step_2"
                        >Back to shipping</router-link
                      >
                    </div>
                    <div class="payment_aside-footer-button">
                      <button>
                        <router-link to="/shopping_step_4">
                          ORDER SUMMARY
                        </router-link>
                        <svg
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
                      </button>
                    </div>
                  </div>
                </div>

                <div class="payment_content">
                  <div class="payment_content-img">
                    <img
                      alt=""
                      src="../assets/images/shopping_bag/image_45.png"
                    />
                  </div>

                  <div class="payment_content-body">
                    <div class="payment_content-body-heading">
                      <h3>ORDER DETAILS</h3>
                    </div>
                    <div class="payment_content-body-title">
                      <span>ORIGINAL COFFEE CAPSULES (10)</span>
                    </div>

                    <div class="payment_content-body-item">
                      <span>Rome x 10</span>
                      <label>155,000đ</label>
                    </div>
                    <div class="payment_content-body-item">
                      <span>SUB TOTAL</span>
                      <label>155,000đ</label>
                    </div>
                    <div class="payment_content-body-item">
                      <span>VAT</span>
                      <label>0đ</label>
                    </div>
                  </div>

                  <div class="payment_content-footer">
                    <span class="payment_content-footer-item">TOTAL</span>
                    <label class="payment_content-footer-item">155,000đ</label>
                  </div>
                  <button class="payment_content-btn">
                    <span>MODIFY</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <!-- start footer -->
      <Footer />
      <!--end footer -->
    </div>
  </div>
</template>
