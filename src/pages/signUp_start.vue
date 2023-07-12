<script lang="ts">
import { defineComponent } from "vue";
//? APP
import HeaderCustom from "../containers/HeaderCustom.vue";

export default defineComponent({
  name: "SignUpStartPage",
  components: { HeaderCustom },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <HeaderCustom />
      <main id="signUp_start">
        <section class="signUp">
          <div class="signUp-container">
            <div class="signUp-head">
              <p class="signUp-heading">
                New customer? Welcome! Fill the form below (fields with * are
                required) and create your account. Please be aware that, in
                order to deliver your order successfully, it is very important
                for you to provide the correct address, phone number and postal
                code.
              </p>

              <form action="" class="signUp-form">
                <div class="signUp-form__content">
                  <label for="firstname" class="signUp-form__label"
                    >First name
                    <span>*</span>
                  </label>
                  <input
                    class="signUp-form__input"
                    type="text"
                    name="firstname"
                    id="firstname"
                  />
                </div>

                <div class="signUp-form__content">
                  <label for="lastname" class="signUp-form__label"
                    >Last name
                    <span>*</span>
                  </label>
                  <input
                    class="signUp-form__input"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div>

                <div class="signUp-form__content">
                  <span class="signUp-form__label">
                    Sex
                    <span>*</span>
                  </span>
                  <div class="signUp-form__radio">
                    <div class="signUp-form__check">
                      <input
                        type="radio"
                        name="sex"
                        id="male"
                        value="male"
                        checked
                      />
                      <label for="male">Male</label>
                    </div>
                    <div class="signUp-form__check">
                      <input
                        type="radio"
                        name="sex"
                        id="female"
                        value="female"
                      />
                      <label for="female">Female</label>
                    </div>
                  </div>
                </div>

                <div class="signUp-form__content">
                  <label for="email" class="signUp-form__label"
                    >Email address <span>*</span></label
                  >
                  <input
                    class="signUp-form__input"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div class="signUp-form__content">
                  <label for="password" class="signUp-form__label"
                    >Password
                    <span>*</span>
                  </label>
                  <input
                    class="signUp-form__input"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>

                <div class="signUp-form__required">
                  <span>Password must</span>
                  <ul>
                    <li>have at least 8 characters</li>
                    <li>contain a number</li>
                    <li>Contain a lower case letter</li>
                    <li>contain a capital letter</li>
                  </ul>
                </div>
              </form>
            </div>

            <div class="signUp-footer">
              <div class="signUp-footer-wrapper">
                <span class="signUp-footer__detail"
                  >By clicking the "CONTINUE" button, I declare I have read and
                  I agree with the
                  <router-link to="/privacy_policy"
                    >Nespresso Privacy policy</router-link
                  >.</span
                >
                <button class="signUp-footer__btn">
                  <router-link to="/signUp_private_1"> Continue </router-link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
