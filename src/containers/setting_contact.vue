<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingContact",
  components: {},
});
</script>

<template lang="pug">
section#setting_my_contact
  form#form
    .setting_label My contact preferences
    .setting_label2 CONTACT PREFERENCES
    .form_content
      span.form_content-heading
        | Stay in touch with Nespresso.Be the first to get the latest coffee
        | news, offers and benefits For Nespresso Members*. Simply let us know
        | how you&rsquo;d like us to contact you by selecting one or more of these
        | options. (*S.C. Nestl&eacute; Romania S.R.L., Divizia Nespresso):
      .form_content-check
        label(for='form_check')
        input#form_check(type='checkbox')
        span E-mail
      .form_content-check
        label(for='form_check')
        input#form_check(type='checkbox')
        span
          | By Phone &ndash; I understand that I may be contacted by phone by the
          | Customer Relationship Center
      .form_content-check
        label(for='form_check')
        input#form_check(type='checkbox')
        span SMS (text messages on my phone number)
      .form_btn
        button(type='submit')
          span SAVE
</template>
