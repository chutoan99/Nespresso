<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingInfo",
  components: {},
});
</script>

<template>
  <section id="setting_my_info">
    <form id=" form">
      <div class="setting_label">My Personal Information</div>
      <div class="form_content">
        <span class="form_content-heading"
          >Fill in the form below to update your personal information.
        </span>
        <div class="form_content-field">
          <label for="first_name">First name* </label>
          <input
            name="first_name"
            id="first_name"
            title="First Name"
            value=""
            placeholder="Jonathan"
            class="input-text"
            type="text"
          />
          <label></label>
        </div>
        <div class="form_content-field">
          <label for="last_name">Last name* </label>
          <input
            name="last_name"
            id="last_name"
            title="last name"
            value=""
            placeholder="Wick"
            class="input-text"
          />
          <label></label>
        </div>
        <div class="form_content-field">
          <label for="email">Email Address* </label>
          <input
            name="email"
            id="email"
            placeholder="johnathanwick@continental.com"
            title="email"
            value=""
            class="input-text"
            type="text"
          />
          <label></label>
        </div>
        <div class="form_content-field">
          <label for="confirm_email">Confirm email address* </label>
          <input
            name="Confirm email"
            id="confirm_email"
            placeholder="johathanwick@continental.com"
            title="Confirm email"
            value=""
            class="input-text"
            type="email"
          />
          <label></label>
        </div>
        <div class="form_content-wrapper">
          <label></label>
          <div class="form_btn">
            <button type="submit">SAVE MY INFORMATION</button>
          </div>
          <label></label>
        </div>
      </div>
      <div class="setting_label">Change Password</div>
      <div class="form_content">
        <span class="form_content-heading"
          >Fill in the form below to update your personal information.
        </span>
        <div class="form_content-field">
          <label for="current_password">Current password* </label>
          <input
            name="current_password"
            id="current_password"
            title="Current password"
            value=""
            placeholder="Current Password"
            class="input-text"
            type="text"
          />
          <label></label>
        </div>

        <div class="form_content-field">
          <label for="new_password">New password* </label>
          <input
            name="new_password"
            id="new_password"
            title="new password"
            value=""
            placeholder="New Password"
            class="input-text"
          />
          <label></label>
        </div>

        <div class="form_content-mess">
          <label></label>
          <div>
            <p class="form_content-title">Password must:</p>
            <ul class="form_content-list">
              <li class="form_content-item">have at least 8 characters</li>
              <li class="form_content-item">contain a number</li>
              <li class="form_content-item">Contain a lower case letter</li>
              <li class="form_content-item">contain a capital letter</li>
            </ul>
          </div>

          <label></label>
        </div>

        <div class="form_content-field" style="margin-top: unset">
          <label for="confirm_password">Confirm new password* </label>
          <input
            name="Confirm password"
            id="confirm_password"
            placeholder="Confirm New Password"
            title="Confirm email"
            value=""
            class="input-text"
            type="email"
          />
          <label></label>
        </div>

        <div class="form_content-wrapper">
          <label></label>
          <div class="form_btn">
            <button type="submit">SAVE MY PASSWORD</button>
          </div>
          <label></label>
        </div>
      </div>
    </form>
  </section>
</template>
