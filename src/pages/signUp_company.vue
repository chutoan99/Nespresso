<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "signUpCompanyPage",
  data() {
    return {
      privateChecked: false,
      companyChecked: false,
      differentChecked: false,
      differentPrivateChecked: false,
      differentCompanyChecked: false,
    };
  },
  mounted() {
    const inputPrivate = document.getElementById("Private") as HTMLInputElement;
    const inputCompany = document.getElementById("Company") as HTMLInputElement;
    const form_Private = document.getElementById("form_Private");
    const form_Company = document.getElementById("form_Company");

    if (inputPrivate) {
      inputPrivate.addEventListener("click", () => {
        if (form_Company) form_Company.style.display = "none";
        if (form_Private) form_Private.style.display = "block";
        if (inputCompany) inputCompany.checked = false;
        this.privateChecked = true;
        this.companyChecked = false;
      });
    }

    if (inputCompany) {
      inputCompany.addEventListener("click", () => {
        if (form_Company) form_Company.style.display = "block";
        if (form_Private) form_Private.style.display = "none";
        if (inputPrivate) inputPrivate.checked = false;
        this.privateChecked = false;
        this.companyChecked = true;
      });
    }

    const inputSame = document.getElementById("Same") as HTMLInputElement;
    const inputDifferent = document.getElementById(
      "Different"
    ) as HTMLInputElement;
    const form_Different = document.getElementById("form_Different");

    if (inputSame) {
      inputSame.addEventListener("click", () => {
        if (form_Different) form_Different.style.display = "none";
        if (inputDifferent) inputDifferent.checked = false;
        this.differentChecked = false;
      });
    }

    if (inputDifferent) {
      inputDifferent.addEventListener("click", () => {
        if (form_Different) form_Different.style.display = "block";
        if (inputSame) inputSame.checked = false;
        this.differentChecked = true;
      });
    }

    const input_Different_Company = document.getElementById(
      "different_Company"
    ) as HTMLInputElement;
    const input_Different_Private = document.getElementById(
      "different_Private"
    ) as HTMLInputElement;
    const form_Different_Private = document.getElementById(
      "form_Different_Private"
    );
    const form_Different_Company = document.getElementById(
      "form_Different_Company"
    );

    if (input_Different_Private) {
      input_Different_Private.addEventListener("click", () => {
        if (form_Different_Company)
          form_Different_Company.style.display = "none";
        if (form_Different_Private)
          form_Different_Private.style.display = "block";
        if (input_Different_Company) input_Different_Company.checked = false;
        this.differentPrivateChecked = true;
        this.differentCompanyChecked = false;
      });
    }

    if (input_Different_Company) {
      input_Different_Company.addEventListener("click", () => {
        if (form_Different_Company)
          form_Different_Company.style.display = "block";
        if (form_Different_Private)
          form_Different_Private.style.display = "none";
        if (input_Different_Private) input_Different_Private.checked = false;
        this.differentPrivateChecked = false;
        this.differentCompanyChecked = true;
      });
    }
  },
});
</script>

<template lang="pug">
main#signUp_company
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
                  input#Private(type="radio", checked)
                  label(for="Private") Private
                div
                  input#Company(type="radio")
                  label(for="Company") Company
            #form_Private(v-show="privateChecked")
              fieldset.form_signUp-content
                div
                  label(for) Title *
                  select
                    option
              fieldset.form_signUp-content
                div
                  label(for) Country *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) First Name *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Last Name *
                  input(type="text", placeholder)
              hr.line
              fieldset.form_signUp-content
                div
                  label(for) Address line 1 *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Address line 2
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Post code *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) City *
                  input(type="text", placeholder)
              hr.line
              fieldset.form_signUp-content
                div
                  label(for) Phone number *
                  input(type="number", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Delivery Remark
                  input(type="text", placeholder)
            #form_Company(style="display: none", v-show="companyChecked")
              fieldset.form_signUp-content
                div
                  label(for) Country *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Contact name *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Company name *
                  input(type="text", placeholder)
              hr.line
              fieldset.form_signUp-content
                div
                  label(for) Address line 1 *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Address line 2
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Post code *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) City *
                  input(type="text", placeholder)
              hr.line
              fieldset.form_signUp-content
                div
                  label(for) Phone number *
                  input(type="number", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Delivery Remark
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Address line 2
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Post code *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) City *
                  input(type="text", placeholder)
          .form_signUp-label
            span BILLING ADDRESS
          .form_signUp-inner(style="padding: 16px")
            fieldset.form_signUp-header(style="margin: unset")
              span My billing address
              .form_signUp-header-wrapper
                div
                  input#Same(type="radio", checked)
                  label(for="Same") is the same as my delivery address
                div
                  input#Different(type="radio")
                  label(for="Different") is different from my delivery address
            #form_Different(style="display: none", v-show="differentChecked")
              fieldset.form_signUp-header
                span My delivery address is *
                .form_signUp-header-wrapper
                  div
                    input#different_Private(type="radio", checked)
                    label(for="different_Private") Private
                  div
                    input#different_Company(type="radio")
                    label(for="different_Company") Company
              #form_Different_Private(v-show="differentPrivateChecked")
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
                hr.line
              #form_Different_Company(style="display: none", v-show="differentCompanyChecked")
                fieldset.form_signUp-content
                  div
                    label(for) Country *
                    select
                      option
                fieldset.form_signUp-content
                  div
                    label(for) Contact name *
                    input(type="text", placeholder)
                fieldset.form_signUp-content
                  div
                    label(for) Company name *
                    input(type="text", placeholder)
                hr.line
              fieldset.form_signUp-content
                div
                  label(for) Address line 1 *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Address line 2
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) Post code *
                  input(type="text", placeholder)
              fieldset.form_signUp-content
                div
                  label(for) City *
                  input(type="text", placeholder)
              hr.line
              .form_signUp-inner
                fieldset.form_signUp-content
                  div
                    label(for) Phone number *
                    input(type="number", placeholder)
                fieldset.form_signUp-content
                  div
                    label(for) Type and country
                    div(style="display: flex; align-items: center; gap: 20px")
                      select(style="width: 100%")
                        option
                      select(style="width: 100%")
                        option
                fieldset.form_signUp-content
                  div
                    label(for) Phone number 2 *
                    input(type="number", placeholder)
                fieldset.form_signUp-content
                  div
                    label(for) Type and country
                    div(style="display: flex; align-items: center; gap: 20px")
                      select(style="width: 100%")
                        option
                      select(style="width: 100%")
                        option
                fieldset.form_signUp-content
                  div
                    label(for) Delivery Remark
                    textarea(placeholder)
          .form_signUp-label
            span TAX INFORMATION
          .form_signUp-inner(style="padding: 16px")
            fieldset.form_signUp-content
              div
                label(for) Tax Identification Number *
                input(type="text", placeholder)
            fieldset.form_signUp-content
              div
                label(for) State Inscription Number *
                input(type="text", placeholder)
          .form_signUp-label
            span KEEP ME INFORMED
          fieldset.form_signUp-footer
            .form_signUp-footer-wrapper
              p Stay in touch with Nespresso family*.Be the first to get the latest coffee news, offers and benefits for Nespresso Members. Simply let us know how you’d like us to contact you by selecting one or more of these options.
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
              router-link(to="/signUp_private") Continue
</template>
