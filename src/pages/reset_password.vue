<script lang="ts">
import "../css/pages/forgot_password.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResetPasswordPage",
  components: {
    Header,
    Nav,
    Footer,
  },
  // Add other properties, methods, etc.
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <!-- Header -->
      <Nav />
      <!-- Navigation -->
      <main id="main">
        <section class="forget-pass">
          <div class="forget-pass-container container">
            <h5 class="forget-pass__heading">Forgotten your password ?</h5>
            <form action="" class="forget-pass__form">
              <label for="email"
                >Email address
                <span>*</span>
              </label>
              <input type="email" id="email" name="email" />
            </form>
            <p class="forget-pass__paragraph">
              We will send you an email with a link which will allow you to
              reset your password. <br />
              <span>Good to know:</span> when you reset your Nespresso account
              password, your bank account details are automatically deleted from
              Nespresso system. In order to process payments related to
              Nespresso subscriptions, as well as any online orders, it is
              necessary to re-enter your bank card details in your Nespresso
              account.
            </p>
            <button class="forget-pass__btn">
              <a href="./shoppingbag_step5.html">CONTINUE</a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.16272 6.16272C9.37968 5.94576 9.73143 5.94576 9.94839 6.16272L15.5039 11.7183C15.7209 11.9352 15.7209 12.287 15.5039 12.5039L9.94839 18.0595C9.73143 18.2765 9.37968 18.2765 9.16272 18.0595C8.94576 17.8425 8.94576 17.4908 9.16272 17.2738L14.3254 12.1111L9.16272 6.94839C8.94576 6.73143 8.94576 6.37968 9.16272 6.16272Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div class="forget-pass-container container">
            <h5 class="forget-pass__heading">Forgotten your password ?</h5>
            <p class="forget-pass__paragraph">
              If the email address <span>[youremail@email.com]</span> is
              associated with a Nespresso account, you will shortly receive an
              email from Nespresso with instructions on how to reset your
              password. If you do not receive this email, please check your junk
              mail folder or contact Nespresso for further assistance.
            </p>
            <button class="forget-pass__back">
              <a href="./shoppingbag_step5.html">GO BACK TO THE HOMEPAGE</a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.16272 6.16272C9.37968 5.94576 9.73143 5.94576 9.94839 6.16272L15.5039 11.7183C15.7209 11.9352 15.7209 12.287 15.5039 12.5039L9.94839 18.0595C9.73143 18.2765 9.37968 18.2765 9.16272 18.0595C8.94576 17.8425 8.94576 17.4908 9.16272 17.2738L14.3254 12.1111L9.16272 6.94839C8.94576 6.73143 8.94576 6.37968 9.16272 6.16272Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
