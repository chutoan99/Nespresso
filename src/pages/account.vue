<script lang="ts">
import "../css/pages/account.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountPage",
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
      <main>
        <section id="account">
          <div class="account">
            <div class="account_heading">
              <h3>ACCESS YOUR</h3>
              <span>NESPRESSO ACCOUNT</span>
            </div>
            <div class="account_title">
              <h4>
                Enter your email & password associated with your account and
                easily access your Nespresso account
              </h4>
            </div>
            <div class="container">
              <div class="account_body">
                <form class="account_body-login">
                  <div
                    style="
                      height: 100%;
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                    "
                  >
                    <div class="account_body-login-heading">
                      <h4>I AM A RETURNING CUSTOMER</h4>
                    </div>
                    <div
                      style="
                        margin-top: 20px;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                      "
                    >
                      <div class="account_body-login-field">
                        <label for="email_address">Email address * </label>
                        <input
                          name="email_address"
                          id="email_address"
                          title="Email Address"
                          value=""
                          class="input-text"
                          type="text"
                        />
                      </div>
                      <div class="field_mess">
                        <div></div>
                        <label data-valid=""
                          >The username and/or password entered are not valid.
                          Please confirm your entry.
                        </label>
                      </div>
                      <div class="account_body-login-field">
                        <label for="password">Password * </label>
                        <input
                          name="password"
                          id="password"
                          title="password"
                          value=""
                          class="input-text"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; width: 100%">
                    <div class="account_body-login-forgot">
                      <span>Forgot your password?</span>
                    </div>

                    <div class="account_body-login-check">
                      <label for="form_check"></label>
                      <input type="checkbox" id="form_check" />
                      <span>Remember me</span>
                    </div>

                    <button type="submit" class="account_body-login-btn">
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>

                <div class="account_body-info">
                  <h4 class="account_body-info-heading">I AM A NEW CUSTOMER</h4>
                  <div class="account_body-info-inner">
                    <div>
                      <span class="account_body-info-title"
                        >Create your Nespresso&You account</span
                      >
                      <ul class="account_body-info-list">
                        <li>
                          Order fast your favorite Nespresso original capsules
                        </li>
                        <li>Redeem your personalized offers</li>
                        <li>Free delivery for orders of minimum 100 lei</li>
                        <li>Secure payment methods with SSL encryption</li>
                      </ul>
                      <span class="account_body-info-title">
                        Already a Nespresso member, but first time ordering
                        online?
                      </span>
                      <div
                        class="account_body-info-wrapper hide_on-pc hide_on-tab show_on-mobile"
                      >
                        <div
                          class="account_body-info-img hide_on-pc hide_on-tab show_on-mobile"
                        ></div>
                      </div>
                      <button class="account_body-info-btn">
                        CREATE ACCOUNT
                      </button>
                    </div>
                    <div
                      class="account_body-info-wrapper2 show_on-pc hide_on-mobile"
                    >
                      <div class="account_body-info-img2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
