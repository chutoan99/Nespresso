<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "SignUpStartPage",
});
</script>

<template lang="pug">
main#signUp_start
  section.signUp
    .signUp-container
      .signUp-head
        p.signUp-heading
          | New customer? Welcome! Fill the form below (fields with * are
          | required) and create your account. Please be aware that, in order to
          | deliver your order successfully, it is very important for you to
          | provide the correct address, phone number and postal code.
        form.signUp-form(action='')
          .signUp-form__content
            label.signUp-form__label(for='firstname')
              | First name
              span *
            input#firstname.signUp-form__input(type='text' name='firstname')
          .signUp-form__content
            label.signUp-form__label(for='lastname')
              | Last name
              span *
            input#lastname.signUp-form__input(type='text' name='lastname')
          .signUp-form__content
            span.signUp-form__label
              | Sex
              span *
            .signUp-form__radio
              .signUp-form__check
                input#male(type='radio' name='sex' value='male' checked='')
                label(for='male') Male
              .signUp-form__check
                input#female(type='radio' name='sex' value='female')
                label(for='female') Female
          .signUp-form__content
            label.signUp-form__label(for='email')
              | Email address 
              span *
            input#email.signUp-form__input(type='email' name='email')
          .signUp-form__content
            label.signUp-form__label(for='password')
              | Password
              span *
            input#password.signUp-form__input(type='password' name='password')
          .signUp-form__required
            span Password must
            ul
              li have at least 8 characters
              li contain a number
              li Contain a lower case letter
              li contain a capital letter
      .signUp-footer
        .signUp-footer-wrapper
          span.signUp-footer__detail
            | By clicking the &quot;CONTINUE&quot; button, I declare I have read and I
            | agree with the
            router-link(to='/privacy_policy') Nespresso Privacy policy
            | .
          button.signUp-footer__btn
            router-link(to='/signUp_private_1')  Continue 
</template>
