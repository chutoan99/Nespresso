<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "AccountPage",
  // Add other properties, methods, etc.
});
</script>

<template lang="pug">
main#account
  section
    .account
      .account_heading
        h3 ACCESS YOUR
        span NESPRESSO ACCOUNT
      .account_title
        h4.
          Enter your email & password associated with your account and easily access your Nespresso account
      .container
        .account_body
          form.account_body-login
            div(style="height: 100%; width: 100%; display: flex; flex-direction: column;")
              .account_body-login-heading
                h4 I AM A RETURNING CUSTOMER
              div(style="margin-top: 20px; height: 100%; width: 100%; display: flex; flex-direction: column;")
                .account_body-login-field
                  label(for="email_address") Email address *
                  input#email_address.input-text(name="email_address", title="Email Address", type="text")
                .field_mess
                  div
                  label(data-valid).
                    The username and/or password entered are not valid. Please confirm your entry.
                .account_body-login-field
                  label(for="password") Password *
                  input#password.input-text(name="password", title="password", type="text")
            div(style="margin-top: 24px; width: 100%")
              .account_body-login-forgot
                span Forgot your password?
              .account_body-login-check
                label(for="form_check")
                input#form_check(type="checkbox")
                span Remember me
              button.account_body-login-btn(type="submit").
                CREATE ACCOUNT
          .account_body-info
            h4.account_body-info-heading I AM A NEW CUSTOMER
            .account_body-info-inner
              div
                span.account_body-info-title Create your Nespresso&You account
                ul.account_body-info-list
                  li Order fast your favorite Nespresso original capsules
                  li Redeem your personalized offers
                  li Free delivery for orders of minimum 100 lei
                  li Secure payment methods with SSL encryption
                span.account_body-info-title.
                  Already a Nespresso member, but first time ordering online?
                .account_body-info-wrapper.hide_on-pc.hide_on-tab.show_on-mobile
                  .account_body-info-img.hide_on-pc.hide_on-tab.show_on-mobile
                button.account_body-info-btn CREATE ACCOUNT
              .account_body-info-wrapper2.show_on-pc.hide_on-mobile
                .account_body-info-img2
</template>
