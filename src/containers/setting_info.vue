<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingInfo",
  components: {},
});
</script>

<template lang="pug">
section#setting_my_info
  form#form
    .setting_label My Personal Information
    .form_content
      span.form_content-heading
        | Fill in the form below to update your personal information.
      .form_content-field
        label(for='first_name') First name* 
        input#first_name.input-text(name='first_name' title='First Name' value='' placeholder='Jonathan' type='text')
        label
      .form_content-field
        label(for='last_name') Last name* 
        input#last_name.input-text(name='last_name' title='last name' value='' placeholder='Wick')
        label
      .form_content-field
        label(for='email') Email Address* 
        input#email.input-text(name='email' placeholder='johnathanwick@continental.com' title='email' value='' type='text')
        label
      .form_content-field
        label(for='confirm_email') Confirm email address* 
        input#confirm_email.input-text(name='Confirm email' placeholder='johathanwick@continental.com' title='Confirm email' value='' type='email')
        label
      .form_content-wrapper
        label
        .form_btn
          button(type='submit') SAVE MY INFORMATION
        label
    .setting_label Change Password
    .form_content
      span.form_content-heading
        | Fill in the form below to update your personal information.
      .form_content-field
        label(for='current_password') Current password* 
        input#current_password.input-text(name='current_password' title='Current password' value='' placeholder='Current Password' type='text')
        label
      .form_content-field
        label(for='new_password') New password* 
        input#new_password.input-text(name='new_password' title='new password' value='' placeholder='New Password')
        label
      .form_content-mess
        label
        div
          p.form_content-title Password must:
          ul.form_content-list
            li.form_content-item have at least 8 characters
            li.form_content-item contain a number
            li.form_content-item Contain a lower case letter
            li.form_content-item contain a capital letter
        label
      .form_content-field(style='margin-top: unset')
        label(for='confirm_password') Confirm new password* 
        input#confirm_password.input-text(name='Confirm password' placeholder='Confirm New Password' title='Confirm email' value='' type='email')
        label
      .form_content-wrapper
        label
        .form_btn
          button(type='submit') SAVE MY PASSWORD
        label
</template>
