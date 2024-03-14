<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShoppingStep",
  components: {},
  // Add other properties, methods, etc.
});
</script>

<template lang="pug">
section#shopping_step_4
  .container
    .order
      .order_label
        svg(width="26", height="26", viewBox="0 0 26 26", fill="none", xmlns="http://www.w3.org/2000/svg")
          path(d="M18.5005 17V16H17.4245L16.4585 10.204L14.6515 9H12.3505L10.5435 10.204L9.57748 16H8.50048V17H18.5005ZM11.4585 10.796L12.6505 10H14.3485L15.5415 10.796L16.4085 16H10.5905L11.4585 10.796ZM14.7935 5H16.2075L14.2475 3.04C16.8998 3.21171 19.399 4.34275 21.2785 6.222C23.2796 8.22362 24.4282 10.9222 24.4835 13.752L25.4785 13.656C25.3945 10.699 24.2385 7.766 21.9855 5.515C19.899 3.43044 17.1148 2.19188 14.1695 2.038L16.2075 0H14.7935L12.2935 2.5L14.7935 5ZM5.01548 5.515C1.26548 9.265 0.528484 14.899 2.79148 19.397L0.0214844 18.655L0.729485 19.88L4.14448 20.795L5.05948 17.38L4.35248 16.155L3.63248 18.84C1.62448 14.734 2.31448 9.63 5.72248 6.222C6.34537 5.60363 7.04036 5.06241 7.79248 4.61L7.21048 3.794C6.4142 4.27971 5.67752 4.85797 5.01548 5.515ZM24.0635 18.705L20.6475 19.62L19.9405 20.845L22.6365 20.123C22.2445 20.706 21.7945 21.263 21.2785 21.778C17.7475 25.309 12.3955 25.927 8.21948 23.642L7.80348 24.556C9.55413 25.4996 11.5117 25.9938 13.5005 25.994C15.0762 25.9969 16.637 25.6884 18.0931 25.0862C19.5493 24.484 20.8721 23.6 21.9855 22.485C22.5755 21.895 23.0905 21.258 23.5325 20.586L24.2715 23.344L24.9785 22.119L24.0635 18.705Z", fill="black")
        span.
          Don't forget to recycle! Select 'Swap the recyclable capsules' and the courier will take them when delivering your order.
      .order_main
        .order_aside
          .order_aside-label DELIVERY ADDRESS
          .order_aside-content
            .order_aside-content-info
              h5 Address
              ul
                li Mr Leon Lu
                li Calea București nr. 1-87
                li 500326 Brașov
              h5 Currently set as your default delivery address
            .order_aside-content-edit
              span Edit Address
              svg(width="7", height="13", viewBox="0 0 7 13", fill="none", xmlns="http://www.w3.org/2000/svg")
                path(fill-rule="evenodd", clip-rule="evenodd", d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z", fill="#876C43")
          .order_aside-btn
            button
              span ADD ANOTHER ADDRESS
          .order_aside-footer
            svg(width="38", height="24", viewBox="0 0 38 24", fill="none", xmlns="http://www.w3.org/2000/svg")
              path(fill-rule="evenodd", clip-rule="evenodd", d="M0.199219 1.19999L0.599219 0.799988H24.2392C26.5143 0.799988 28.6139 2.12933 29.5999 4.18714L29.6144 4.22127L31.31 8.80719L37.5355 11.0639L37.7992 11.44V20L37.3992 20.4H32.9992V19.6H36.9992V11.7205L30.8629 9.49604L30.624 9.25871L28.8706 4.51643C28.0133 2.74359 26.1981 1.59999 24.2392 1.59999H0.999219V19.6H3.39922V20.4H0.599219L0.199219 20V1.19999Z", fill="black")
              path(fill-rule="evenodd", clip-rule="evenodd", d="M9.79922 19.6H26.5992V20.4H9.79922V19.6Z", fill="black")
              path(fill-rule="evenodd", clip-rule="evenodd", d="M6.51922 16.92C4.94013 16.92 3.67922 18.1809 3.67922 19.76C3.67922 21.3023 4.94333 22.6 6.51922 22.6C8.06152 22.6 9.35922 21.3359 9.35922 19.76C9.35922 18.1809 8.0983 16.92 6.51922 16.92ZM2.87922 19.76C2.87922 17.7391 4.4983 16.12 6.51922 16.12C8.54013 16.12 10.1592 17.7391 10.1592 19.76C10.1592 21.7841 8.49691 23.4 6.51922 23.4C4.4951 23.4 2.87922 21.7377 2.87922 19.76Z", fill="black")
              path(fill-rule="evenodd", clip-rule="evenodd", d="M32.5992 19.76C32.5992 17.8352 30.6773 16.3586 28.6267 17.1718L28.6114 17.1775C27.937 17.4135 27.3752 17.9981 27.0912 18.7072C26.1443 21.13 28.4452 23.4208 30.9284 22.4295C31.9329 22.0128 32.5992 21.0025 32.5992 19.88V19.76ZM28.3393 16.4252C30.9259 15.405 33.3992 17.2872 33.3992 19.76V19.88C33.3992 21.3166 32.5464 22.6258 31.2322 23.1696L31.2278 23.1714C28.1123 24.4176 25.1353 21.5101 26.3467 18.4142L26.3478 18.4114C26.703 17.5236 27.4178 16.7506 28.3393 16.4252Z", fill="black")
              path(fill-rule="evenodd", clip-rule="evenodd", d="M16.1992 3.19999L16.5992 2.79999H22.9992C24.6104 2.79999 26.0834 3.86906 26.5784 5.3926L27.857 9.06858L27.4792 9.59999H16.5992L16.1992 9.19999V3.19999ZM16.9992 3.59999V8.79999H26.9166L25.8214 5.6514L25.8186 5.64312C25.4323 4.44892 24.2665 3.59999 22.9992 3.59999H16.9992Z", fill="black")
            .order_aside-footer-title
              span Standard Delivery 
              span Your order will be delivered in 1- 2 working days.
          .order_aside-label(style="margin-top: 1rem").
            PAYMENT METHOD
          //  Online payment, by card 
          .order_aside-payment
            .order_aside-main(style="display: flex; gap: 8px; align-items: center")
              .order_aside-left(style="display: flex; gap: 8px; justify-content: center; align-items: center;")
                .order_aside-left-check
                  label(for)
                  input(type="radio", checked)
                .order_aside-left-img
                  img(src="/assets/images/shopping_bag/payment.png", alt)
              .order_aside-right-heading
                h3 Online payment, by card
          //  Payment on Delivery 
             <div class="order_aside-payment">
                          <div
                            class="order_aside-main"
                            style="display: flex; gap: 8px; align-items: center"
                          >
                            <div
                              class="order_aside-left"
                              style="
                                display: flex;
                                gap: 8px;
                                justify-content: center;
                                align-items: center;
                              "
                            >
                              <div class="order_aside-left-check">
                                <label for=""></label>
                                <input type="radio" checked />
                              </div>
                              <div class="order_aside-left-img">
                                <img
                                  src="/assets/images/shopping_bag/delivery.png"
                                  alt=""
                                />
                              </div>
                            </div>
            
                            <div class="order_aside-right-heading">
                              <h3>Payment on Delivery</h3>
                            </div>
                          </div>
                        </div> 
          //  Google Pay 
             <div class="order_aside-payment">
                          <div
                            class="order_aside-main"
                            style="display: flex; gap: 8px; align-items: center"
                          >
                            <div
                              style="
                                display: flex;
                                gap: 8px;
                                justify-content: center;
                                align-items: center;
                              "
                            >
                              <div class="order_aside-check">
                                <label for=""></label>
                                <input type="radio" checked />
                              </div>
                              <div class="order_aside-img icon_google">
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
                            <div class="order_aside-right-heading">
                              <h3>Google Pay</h3>
                            </div>
                          </div>
                        </div> 
          .order_aside-email
            span Edit Payment Method
            svg(width="7", height="13", viewBox="0 0 7 13", fill="none", xmlns="http://www.w3.org/2000/svg")
              path(fill-rule="evenodd", clip-rule="evenodd", d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z", fill="#876C43")
        .order_content
          .order_content-label EXPRESS CHECK OUT
          .order_content-header
            span.order_content-header-item CAPSULES(10)
            span.order_content-header-item Unit price
            span.order_content-header-item Quantity
            span.order_content-header-item Total
          .order_content-body
            .order_content-body-item
              .item_info
                .item_info-img
                  img(alt="item", src="/assets/images/shopping_bag/item.png")
                span.item_info-name Roma
              span.item_price 15,500đ
              .item_quantity
                span 10
              span.item_total 15,500đ
          .order_content-wrapper
            .order_content-wrapper-item
              span SUB TOTAL
              label 155,000đ
            .order_content-wrapper-item
              span VAT
              label 0đ
          .order_content-footer
            span.order_content-footer-item TOTAL
            label.order_content-footer-item 155,000đ
          .order_content-check
            label(for="form_check")
            input#form_check(type="checkbox")
            span
              | I have read and accept with Nespresso’s
              router-link(to) Terms of Services
              | and
              router-link(to) Privacy Policy
          .order_footer
            .order_footer
              .order_footer-back
                svg(width="7", height="13", viewBox="0 0 7 13", fill="none", xmlns="http://www.w3.org/2000/svg")
                  path(fill-rule="evenodd", clip-rule="evenodd", d="M6.83728 0.162718C6.62032 -0.0542395 6.26857 -0.0542395 6.05161 0.162718L0.496052 5.71827C0.279094 5.93523 0.279094 6.28699 0.496052 6.50395L6.05161 12.0595C6.26857 12.2765 6.62032 12.2765 6.83728 12.0595C7.05424 11.8425 7.05424 11.4908 6.83728 11.2738L1.67456 6.11111L6.83728 0.948393C7.05424 0.731435 7.05424 0.379676 6.83728 0.162718Z", fill="#876C43")
                router-link(to="/shopping/step_3") Back to shipping
              .order_footer-button
                button
                  router-link(to="/shopping/step_5").
                    PLACE ORDER
                  svg(width="7", height="13", viewBox="0 0 7 13", fill="none", xmlns="http://www.w3.org/2000/svg")
                    path(fill-rule="evenodd", clip-rule="evenodd", d="M0.162718 0.162718C0.379676 -0.0542395 0.731435 -0.0542395 0.948393 0.162718L6.50395 5.71827C6.72091 5.93523 6.72091 6.28699 6.50395 6.50395L0.948393 12.0595C0.731435 12.2765 0.379676 12.2765 0.162718 12.0595C-0.0542395 11.8425 -0.0542395 11.4908 0.162718 11.2738L5.32544 6.11111L0.162718 0.948393C-0.0542395 0.731435 -0.0542395 0.379676 0.162718 0.162718Z", fill="white")
</template>
