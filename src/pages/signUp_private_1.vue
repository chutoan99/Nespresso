<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "signUpPrivate1Page",
});
</script>

<template lang="pug">
main#signUp_private_1
  section.signUp
    .signUp_wrapper
      .signUp_inner
        form#form_signUp(action, method="post")
          .form_signUp-inner
            .form_signUp-heading
              span New customer? Welcome! Fill the form below (fields with * are required) and create your account. Please be aware that, in order to deliver your order successfully, it is very important for you to provide the correct address, phone number and postal code.
            fieldset.form_signUp-header
              span My delivery address is *
              .form_signUp-header-wrapper
                div
                  input(type="radio", checked)
                  label(for) Private
                div
                  input(type="radio")
                  label(for) Company
            fieldset.form_signUp-content
              div
                label(for) Title *
                select
                  option
            fieldset.form_signUp-content
              div
                label(for) First Name *
                input(type="text", placeholder)
            fieldset.form_signUp-content
              div
                label(for) Last Name *
                input(type="text", placeholder)
            fieldset.form_signUp-content
              div
                label(for) Phone number *
                input(type="number", placeholder)
            fieldset.form_signUp-body
              div
                label(for) Province *
                select
                  option
              div
                label(for) District *
                select
                  option
              div
                label(for) Ward *
                select
                  option
            fieldset.form_signUp-body
              div
                label(for) Street number *
                input(type="text", placeholder)
              div
                label(for) Street name *
                input(type="text", placeholder)
            fieldset.form_signUp-content
              div
                label(for) Additional information
                textarea(placeholder)
            figure.form_signUp-img
          .form_signUp-label
            span KEEP ME INFORMED
          fieldset.form_signUp-footer
            .form_signUp-footer-wrapper
              p.
                Stay in touch with Nespresso family*.Be the first to get the latest coffee news, offers and benefits for Nespresso Members. Simply let us know how you’d like us to contact you by selecting one or more of these options.
              div
                input(type="checkbox")
                span E-mail
              div
                input(type="checkbox")
                span Phone – I understand that I may be contacted by phone by the Customer Relationship Center
              div
                input(type="checkbox")
                span SMS (text messages on my phone number)
          .form_signUp-button
            button
              router-link(to="/signUp_company") Continue
</template>
