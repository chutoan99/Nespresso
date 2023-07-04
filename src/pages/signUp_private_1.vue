<script lang="ts">
import "../css/pages/signUp_private_1.css";
import HeaderCustom from "../containers/HeaderCustom.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "signUpPrivate1Page",
  components: { HeaderCustom },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <HeaderCustom />
      <main id="signUp">
        <section class="signUp">
          <div class="signUp_wrapper">
            <div class="signUp_inner">
              <form action="" method="post" id="form_signUp">
                <div class="form_signUp-inner">
                  <div class="form_signUp-heading">
                    <span
                      >New customer? Welcome! Fill the form below (fields with *
                      are required) and create your account. Please be aware
                      that, in order to deliver your order successfully, it is
                      very important for you to provide the correct address,
                      phone number and postal code.</span
                    >
                  </div>
                  <fieldset class="form_signUp-header">
                    <span>My delivery address is *</span>
                    <div class="form_signUp-header-wrapper">
                      <div>
                        <input type="radio" checked />
                        <label for="">Private</label>
                      </div>
                      <div>
                        <input type="radio" />
                        <label for="">Company</label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Title *</label>
                      <select>
                        <option></option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">First Name *</label>
                      <input type="text" placeholder="" />
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Last Name *</label>
                      <input type="text" placeholder="" />
                    </div>
                  </fieldset>

                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Phone number *</label>
                      <input type="number" placeholder="" />
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-body">
                    <div>
                      <label for="">Province *</label>
                      <select>
                        <option></option>
                      </select>
                    </div>
                    <div>
                      <label for="">District *</label>
                      <select>
                        <option></option>
                      </select>
                    </div>
                    <div>
                      <label for="">Ward *</label>
                      <select>
                        <option></option>
                      </select>
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-body">
                    <div>
                      <label for="">Street number *</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div>
                      <label for="">Street name *</label>
                      <input type="text" placeholder="" />
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Additional information</label>
                      <textarea placeholder=""></textarea>
                    </div>
                  </fieldset>
                  <figure class="form_signUp-img"></figure>
                </div>
                <div class="form_signUp-label">
                  <span>KEEP ME INFORMED</span>
                </div>
                <fieldset class="form_signUp-footer">
                  <div class="form_signUp-footer-wrapper">
                    <p>
                      Stay in touch with Nespresso family*.Be the first to get
                      the latest coffee news, offers and benefits for Nespresso
                      Members. Simply let us know how you’d like us to contact
                      you by selecting one or more of these options.
                    </p>
                    <div>
                      <input type="checkbox" />
                      <span>E-mail</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span
                        >Phone – I understand that I may be contacted by phone
                        by the Customer Relationship Center</span
                      >
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>SMS (text messages on my phone number)</span>
                    </div>
                  </div>
                </fieldset>
                <div class="form_signUp-button">
                  <button>
                    <router-link to="/signUp_company">Continue</router-link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
