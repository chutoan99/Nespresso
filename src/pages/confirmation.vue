<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "OrderConfirmationPage",
});
</script>

<template lang="pug">
.banner
  img(src='assets/images/template/banner.png' alt='')
.main
  .main-content
    p.main-content__title
      | Welcome to
      strong [Customer&rsquo;s Name],
    p.main-content__desc
      | Thank you for ordering,
      br
      | Please contact Nespresso if you have any problems in term of the
      |         order.
      br
      br
      |         Regards,
      br
      strong  Nespresso 
.address-section
  .address-section-wrapper
    h2.address-section-title ADDRESS
    ul
      li.address-section-content Mr Leon Lu
      li.address-section-content Calea Bucure&#x219;ti nr. 1-87
      li.address-section-content 500326 Bra&#x219;ov
    span.address-section-title Currently set as your default delivery address
  .address-section-wrapper
    h2.address-section-title DELIVERY ADDRESS
    ul
      li.address-section-content Mr Leon Lu
      li.address-section-content Calea Bucure&#x219;ti nr. 1-87
      li.address-section-content 500326 Bra&#x219;ov
    span.address-section-title Currently set as your default delivery address
.delivery-section
  .delivery-section-content
    .delivery-section-image
      img(src='assets/svgs/car.svg' alt='')
    .delivery-section-desc
      h4 Standard Delivery
      p Your order will be delivered in 1- 2 working days.
  .delivery-section-content
    .delivery-section-image
      img(src='assets/images/template/card.png' alt='')
    .delivery-section-desc
      h4 Total
      p &dstrok;155,000
.order-detail
  .order-detail-head
    .order-detail-capsules
      p CAPSULES(10)
      span Roma
    .order-detail-price
      p Price
      span 10x15,500&dstrok;
    .order-detail-total
      p Total
      span 155,000&dstrok;
  .order-detail-subitem
    p SUB TOTAL
    span 155,000&dstrok;
  .order-detail-subitem
    p VAT
    span 0&dstrok;
  .order-detail-footer
    p TOTAL
    span 155,000&dstrok;
.presentation
  img(src='assets/images/template/banner-1.png' alt='')
.content
  .content-item
    .content-image
      img(src='assets/images/template/icon-3.png' alt='')
    .content-info
      p.content-title Title
      p.content-desc
        | Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        | sint. Velit officia consequat duis enim velit mollit.
  .content-item
    .content-image
      img(src='assets/images/template/icon-4.png' alt='')
    .content-info
      p.content-title Title
      p.content-desc
        | Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        | sint. Velit officia consequat duis enim velit mollit.
  .content-item
    .content-image
      img(src='assets/images/template/icon-2.png' alt='')
    .content-info
      p.content-title Title
      p.content-desc
        | Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        | sint. Velit officia consequat duis enim velit mollit.
  .content-item
    .content-image
      img(src='assets/images/template/icon-1.png' alt='')
    .content-info
      p.content-title Title
      p.content-desc
        | Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        | sint. Velit officia consequat duis enim velit mollit.
.menu-list
  .menu-item
    p MENU ACTION
    svg(width='9' height='23' viewbox='0 0 9 23' fill='none' xmlns='http://www.w3.org/2000/svg')
      path(fill-rule='evenodd' clip-rule='evenodd' d='M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z' fill='black')
  .menu-item
    p MENU ACTION
    svg(width='9' height='23' viewbox='0 0 9 23' fill='none' xmlns='http://www.w3.org/2000/svg')
      path(fill-rule='evenodd' clip-rule='evenodd' d='M0.205949 0.0956672C0.429276 -0.0667519 0.741984 -0.0173769 0.904403 0.205949L8.9044 11.2059C9.03191 11.3813 9.03191 11.6188 8.9044 11.7941L0.904403 22.7941C0.741984 23.0174 0.429276 23.0668 0.205949 22.9044C-0.0173769 22.742 -0.0667519 22.4293 0.0956672 22.2059L7.88179 11.5L0.0956672 0.794121C-0.0667519 0.570795 -0.0173769 0.258086 0.205949 0.0956672Z' fill='black')
.social-media
  span.social-media-title Follow Nespresso on
  ul.social-media-list
    li.social-media-item
      router-link(to='https://www.facebook.com/nespresso/')
        svg(width='9' height='16' viewbox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M8.921 4.853H5.991V3.525C5.991 2.901 6.399 2.755 6.686 2.755H8.737V0.0100002L5.766 0C3.071 0 2.559 2.048 2.559 3.358V4.853H0.5V7.64H2.56V16H5.991V7.64H8.635L8.921 4.853Z' fill='black')
    li.social-media-item
      router-link(to='https://twitter.com/Nespresso')
        svg(width='17' height='13' viewbox='0 0 17 13' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M16.5 1.51501C15.8999 1.77683 15.2643 1.94836 14.614 2.02401C15.2972 1.62399 15.8107 0.988125 16.058 0.236012C15.424 0.606012 14.721 0.876012 13.973 1.02101C13.6637 0.697229 13.2919 0.439744 12.88 0.264221C12.468 0.0886974 12.0247 -0.00119492 11.577 1.19939e-05C9.764 1.19939e-05 8.295 1.44701 8.295 3.23101C8.295 3.48501 8.325 3.73101 8.38 3.96701C7.07954 3.90533 5.80621 3.57326 4.64125 2.99199C3.47629 2.41072 2.44528 1.593 1.614 0.591012C1.32284 1.08301 1.16948 1.64431 1.17 2.21601C1.17 3.33601 1.75 4.32601 2.63 4.90601C2.10941 4.88967 1.59998 4.75092 1.143 4.50101V4.54101C1.143 6.10801 2.274 7.41401 3.776 7.71001C3.2925 7.83991 2.78592 7.85905 2.294 7.76601C2.50897 8.41199 2.91962 8.97507 3.469 9.37716C4.01838 9.77925 4.67926 10.0004 5.36 10.01C4.19208 10.9107 2.75787 11.3976 1.283 11.394C1.019 11.394 0.757 11.379 0.5 11.349C2.00601 12.2996 3.75108 12.8028 5.532 12.8C11.57 12.8 14.87 7.87601 14.87 3.60601C14.87 3.46601 14.867 3.32601 14.861 3.18801C15.5024 2.73212 16.0574 2.1656 16.5 1.51501Z' fill='black')
    li.social-media-item
      router-link(to='https://www.instagram.com/nespresso.belux/?utm_source=Email&utm_medium=EM&utm_content=EM%7CORI%7CRN%7CCRM%7Corder_confirmation%7CAlways-on%7CLinkAd%7CV1%7CLCL%7CDNP%7CNA%7CNA%7COther%7CNA%7Clink%20footer_social_link_3&utm_campaign=HQ%7C2021Sep%7CB2C%7CINT%7CTransactionalEmailGlobal%7CRecurrent%7CCON%7CCAP%7CAO%7CNo')
        svg(width='17' height='16' viewbox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M4.39298 8C4.39298 6.91049 4.82578 5.8656 5.59618 5.09521C6.36658 4.32481 7.41147 3.892 8.50098 3.892C9.59049 3.892 10.6354 4.32481 11.4058 5.09521C12.1762 5.8656 12.609 6.91049 12.609 8C12.609 9.08951 12.1762 10.1344 11.4058 10.9048C10.6354 11.6752 9.59049 12.108 8.50098 12.108C7.41147 12.108 6.36658 11.6752 5.59618 10.9048C4.82578 10.1344 4.39298 9.08951 4.39298 8ZM5.83398 8C5.83398 8.70733 6.11496 9.38569 6.61512 9.88585C7.11528 10.386 7.79364 10.667 8.50098 10.667C9.20831 10.667 9.88667 10.386 10.3868 9.88585C10.887 9.38569 11.168 8.70733 11.168 8C11.168 7.29267 10.887 6.61431 10.3868 6.11415C9.88667 5.61399 9.20831 5.333 8.50098 5.333C7.79364 5.333 7.11528 5.61399 6.61512 6.11415C6.11496 6.61431 5.83398 7.29267 5.83398 8ZM5.20298 0.0479999C4.35098 0.0869999 3.76998 0.222 3.26098 0.42C2.72713 0.620935 2.24355 0.935926 1.84398 1.343C1.39898 1.787 1.12498 2.233 0.920977 2.76C0.722977 3.269 0.587976 3.85 0.548976 4.702C0.509976 5.555 0.500977 5.827 0.500977 8C0.500977 10.173 0.510976 10.445 0.548976 11.298C0.587976 12.15 0.722977 12.731 0.920977 13.24C1.12498 13.766 1.39898 14.213 1.84398 14.657C2.28798 15.102 2.73398 15.376 3.26098 15.58C3.76998 15.778 4.35098 15.913 5.20298 15.952C6.05598 15.99 6.32798 16 8.49998 16C10.672 16 10.945 15.99 11.798 15.952C12.65 15.913 13.231 15.778 13.74 15.58C14.2738 15.379 14.7574 15.064 15.157 14.657C15.602 14.212 15.876 13.767 16.08 13.24C16.278 12.731 16.413 12.15 16.452 11.298C16.491 10.445 16.5 10.173 16.5 8C16.5 5.827 16.49 5.555 16.452 4.702C16.413 3.85 16.278 3.269 16.08 2.76C15.879 2.22617 15.564 1.74259 15.157 1.343C14.7574 0.935926 14.2738 0.620935 13.74 0.42C13.231 0.222 12.65 0.0869999 11.798 0.0479999C10.946 0.00999986 10.674 0 8.50098 0C6.32798 0 6.05598 0.00999986 5.20298 0.0479999ZM12.77 4.69C12.5154 4.69 12.2712 4.58886 12.0912 4.40882C11.9111 4.22879 11.81 3.98461 11.81 3.73C11.81 3.47539 11.9111 3.23121 12.0912 3.05118C12.2712 2.87114 12.5154 2.77 12.77 2.77C13.0246 2.77 13.2688 2.87114 13.4488 3.05118C13.6288 3.23121 13.73 3.47539 13.73 3.73C13.73 3.98461 13.6288 4.22879 13.4488 4.40882C13.2688 4.58886 13.0246 4.69 12.77 4.69Z' fill='black')
    li.social-media-item
      router-link(to='https://www.youtube.com/user/nespresso')
        svg(width='22' height='16' viewbox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M10.935 0C12.263 0.007 17.403 0.0620002 18.825 0.477C19.728 0.739 20.44 1.514 20.682 2.497C21.06 4.034 21.112 7.011 21.119 7.802L21.12 7.987V8.197C21.112 8.989 21.06 11.965 20.681 13.502C20.44 14.485 19.728 15.26 18.825 15.523C18.135 15.724 16.572 15.84 14.993 15.908L14.401 15.931C12.831 15.987 11.353 15.998 10.825 16H10.415C9.886 15.998 8.408 15.987 6.838 15.93L6.248 15.908C4.668 15.84 3.104 15.724 2.415 15.523C1.511 15.26 0.799995 14.485 0.557995 13.502C0.179995 11.965 0.127995 8.989 0.119995 8.197V7.802C0.127995 7.011 0.179995 4.034 0.557995 2.498C0.799995 1.514 1.511 0.739 2.415 0.477C3.837 0.0620002 8.977 0.007 10.305 0H10.935ZM8.472 4.623V11.377L13.96 8L8.47 4.623H8.472Z' fill='black')
.footer
  p
    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    | veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    | commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    | velit esse cillum dolore eu fugiat nulla pariatur. 
    br
    |       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    |       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    |       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    |       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    |       velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
    |       amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    |       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    |       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    |       aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    |       fugiat nulla pariatur. 
    br
    |       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    |       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    |       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    |       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    |       velit esse cillum dolore eu fugiat nulla pariatur. 
    br
    | Lorem ipsum dolor
    |       sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    |       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    |       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    |       aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    |       fugiat nulla pariatur.
</template>
