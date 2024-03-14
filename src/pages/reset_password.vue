<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "ResetPasswordPage",
});
</script>

<template lang="pug">
main#reset_pass
  section.forget-pass
    .forget-pass-container.container
      h5.forget-pass__heading Forgotten your password ?
      form.forget-pass__form(action='')
        label(for='email')
          | Email address
          span *
        input#email(type='email' name='email')
      p.forget-pass__paragraph
        | We will send you an email with a link which will allow you to reset
        | your password. 
        br
        span Good to know:
        |  when you reset your Nespresso account
        |           password, your bank account details are automatically deleted from
        |           Nespresso system. In order to process payments related to Nespresso
        |           subscriptions, as well as any online orders, it is necessary to
        |           re-enter your bank card details in your Nespresso account.
      button.forget-pass__btn
        router-link(to='/shopping/step_5') CONTINUE
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M9.16272 6.16272C9.37968 5.94576 9.73143 5.94576 9.94839 6.16272L15.5039 11.7183C15.7209 11.9352 15.7209 12.287 15.5039 12.5039L9.94839 18.0595C9.73143 18.2765 9.37968 18.2765 9.16272 18.0595C8.94576 17.8425 8.94576 17.4908 9.16272 17.2738L14.3254 12.1111L9.16272 6.94839C8.94576 6.73143 8.94576 6.37968 9.16272 6.16272Z' fill='white')
    .forget-pass-container.container
      h5.forget-pass__heading Forgotten your password ?
      p.forget-pass__paragraph
        | If the email address 
        span [youremail@email.com]
        |  is associated
        |           with a Nespresso account, you will shortly receive an email from
        |           Nespresso with instructions on how to reset your password. If you do
        |           not receive this email, please check your junk mail folder or contact
        |           Nespresso for further assistance.
      button.forget-pass__back
        router-link(to='/shopping/step_5') GO BACK TO THE HOMEPAGE
        svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(fill-rule='evenodd' clip-rule='evenodd' d='M9.16272 6.16272C9.37968 5.94576 9.73143 5.94576 9.94839 6.16272L15.5039 11.7183C15.7209 11.9352 15.7209 12.287 15.5039 12.5039L9.94839 18.0595C9.73143 18.2765 9.37968 18.2765 9.16272 18.0595C8.94576 17.8425 8.94576 17.4908 9.16272 17.2738L14.3254 12.1111L9.16272 6.94839C8.94576 6.73143 8.94576 6.37968 9.16272 6.16272Z' fill='black')
</template>
