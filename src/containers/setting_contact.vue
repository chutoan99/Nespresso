<script lang="ts">
import "../css/pages/setting_contact.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingContact",
  components: {},
});
</script>

<template>
  <div class="setting_main">
    <section id="setting_my_contact">
      <form id=" form">
        <div class="setting_label">My contact preferences</div>
        <div class="setting_label2">CONTACT PREFERENCES</div>
        <div class="form_content">
          <span class="form_content-heading"
            >Stay in touch with Nespresso.Be the first to get the latest coffee
            news, offers and benefits For Nespresso Members*. Simply let us know
            how you’d like us to contact you by selecting one or more of these
            options. (*S.C. Nestlé Romania S.R.L., Divizia Nespresso):
          </span>
          <div class="form_content-check">
            <label for="form_check"></label>
            <input type="checkbox" id="form_check" />
            <span>E-mail</span>
          </div>
          <div class="form_content-check">
            <label for="form_check"></label>
            <input type="checkbox" id="form_check" />
            <span
              >By Phone – I understand that I may be contacted by phone by the
              Customer Relationship Center</span
            >
          </div>
          <div class="form_content-check">
            <label for="form_check"></label>
            <input type="checkbox" id="form_check" />
            <span>SMS (text messages on my phone number)</span>
          </div>
          <div class="form_btn">
            <button type="submit">
              <span>SAVE</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
