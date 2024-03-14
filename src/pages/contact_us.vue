<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "ContactUsPage",
});
</script>

<template lang="pug">
.slideShow
  h2
    | Customer Service | E-Mail adress: nespressopro.romania@nespresso.com |
    | Free Toll: 0800 008 500
main#contact_us
  section.tagLine-event
    svg(width='28' height='27' viewbox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg')
      path(d='M27.5 0.5C19.05 0.5 14 4.822 14 9C14 10.828 14.896 12.232 16.351 12.955C15.3796 15.1842 14.7052 17.5312 14.345 19.936C13.953 18.973 13.406 18.029 12.769 17.122C13.519 16.392 14 15.361 14 14C14 9.988 8.227 5.5 0.5 5.5H0V6C0 12.542 4.29 18.5 9 18.5C10.05 18.5 11.103 18.249 11.97 17.728C13.166 19.426 14 21.241 14 23V26.5H15V24.5C15 19.97 15.994 16.252 17.287 13.3C17.743 13.419 18.224 13.5 18.75 13.5C23.505 13.5 28 7.425 28 1V0.5H27.5ZM9 17.5C5.005 17.5 1.223 12.227 1.01 6.507C7.801 6.695 13 10.616 13 14C13 15.062 12.66 15.8 12.176 16.317C9.086 12.345 4.527 9.289 4.238 9.097L3.686 9.931C3.754 9.977 8.342 13.055 11.375 16.929C10.425 17.449 9.349 17.5 9 17.5ZM18.75 12.5C18.3969 12.498 18.0449 12.4588 17.7 12.383C20.105 7.421 23.252 4.936 23.304 4.897L22.696 4.103C22.642 4.144 19.276 6.782 16.748 12.054C15.644 11.495 15 10.434 15 9C15 4.054 21.972 1.661 26.99 1.508C26.77 7.228 22.87 12.5 18.75 12.5Z' fill='#17171A')
    h3
      | EVERY CUP OF NESPRESSO COFFEE IS CARBON NEUTRAL.
      span MORE DETAILS.
  section.contact_frame
    .background-1
      .contact_frame-content.container
        h3 HOW TO BECOME A NESPRESSO PROFESSIONAL CUSTOMER?
  section.form_wrapper
    .container
      form#form
        h2.form_header
          | We are always happy to be of service and answer all of your
          | questions!
        p.form_title
          | Please fill in the form below and one of our colleagues will come
          | back to you with the needed details in the shortest possible time.
        div
          .form_label Your contact details
          .form_content
            span  All fields marked with * are mandatory 
            .form_content-field
              label(for='first_name') First name * 
              input#first_name.input-text(name='first_name' title='First Name' value='' type='text')
            .form_content-field
              label(for='last_name') Last name * 
              input#last_name.input-text(name='last_name' title='Last Name' value='' type='text')
            .form_content-field
              label(for='phone_number') Phone Number * 
              input#phone_number.input-text(name='phone_number' title='Phone Number' value='' type='number')
            .form_content-field
              label(for='email') Email Address * 
              input#email.input-text(name='email' title='email' value='' type='text')
            .form_content-check
              label(for='form_check')
              input#form_check(type='checkbox')
              span I&apos;d like to receive Nespresso updates by email
            hr.form_content-line
          .form_label Your message
          .form_content
            .form_content-field
              label(for='mess') Delivery Remark 
              textarea#mess.textarea-text(name='mess' title='mess' type='text')
        span.form_footer
          | All information will be kept strictly confidential. For further
          | details, please read the Nespresso Privacy Policy.
        .form_btn
          button(type='submit') Send
  div(style='width: 100%; height: 40px; background: #1b1b1b')
</template>
