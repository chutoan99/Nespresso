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

<template>
  <main id="signUp_company">
    <section class="signUp">
      <div class="signUp_wrapper">
        <div class="signUp_inner">
          <form action="" method="post" id="form_signUp">
            <div class="form_signUp-inner">
              <div class="form_signUp-heading">
                <span
                  >New customer? Welcome! Fill the form below (fields with * are
                  required) and create your account. Please be aware that, in
                  order to deliver your order successfully, it is very important
                  for you to provide the correct address, phone number and
                  postal code.</span
                >
              </div>
              <fieldset class="form_signUp-header">
                <span>My delivery address is *</span>
                <div class="form_signUp-header-wrapper">
                  <div>
                    <input type="radio" id="Private" checked />
                    <label for="Private">Private</label>
                  </div>
                  <div>
                    <input type="radio" id="Company" />
                    <label for="Company">Company</label>
                  </div>
                </div>
              </fieldset>

              <div id="form_Private" v-show="privateChecked">
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
                    <label for="">Country *</label>
                    <input type="text" placeholder="" />
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
                <hr class="line" />

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 1 *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 2</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Post code *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">City *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <hr class="line" />

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Phone number *</label>
                    <input type="number" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Delivery Remark</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>
              </div>

              <div
                id="form_Company"
                style="display: none"
                v-show="companyChecked"
              >
                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Country *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Contact name *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Company name *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>
                <hr class="line" />

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 1 *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 2</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Post code *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">City *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <hr class="line" />

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Phone number *</label>
                    <input type="number" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Delivery Remark</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 2</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Post code *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">City *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="form_signUp-label">
              <span>BILLING ADDRESS</span>
            </div>

            <div class="form_signUp-inner" style="padding: 16px">
              <fieldset class="form_signUp-header" style="margin: unset">
                <span>My billing address</span>
                <div class="form_signUp-header-wrapper">
                  <div>
                    <input type="radio" id="Same" checked />
                    <label for="Same">is the same as my delivery address</label>
                  </div>
                  <div>
                    <input type="radio" id="Different" />
                    <label for="Different"
                      >is different from my delivery address</label
                    >
                  </div>
                </div>
              </fieldset>
              <div
                style="display: none"
                id="form_Different"
                v-show="differentChecked"
              >
                <fieldset class="form_signUp-header">
                  <span>My delivery address is *</span>
                  <div class="form_signUp-header-wrapper">
                    <div>
                      <input type="radio" checked id="different_Private" />
                      <label for="different_Private">Private</label>
                    </div>
                    <div>
                      <input type="radio" id="different_Company" />
                      <label for="different_Company">Company</label>
                    </div>
                  </div>
                </fieldset>

                <div
                  id="form_Different_Private"
                  v-show="differentPrivateChecked"
                >
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

                  <hr class="line" />
                </div>
                <div
                  id="form_Different_Company"
                  style="display: none"
                  v-show="differentCompanyChecked"
                >
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Country *</label>
                      <select>
                        <option></option>
                      </select>
                    </div>
                  </fieldset>

                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Contact name *</label>
                      <input type="text" placeholder="" />
                    </div>
                  </fieldset>

                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Company name *</label>
                      <input type="text" placeholder="" />
                    </div>
                  </fieldset>

                  <hr class="line" />
                </div>
                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 1 *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Address line 2</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">Post code *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>

                <fieldset class="form_signUp-content">
                  <div>
                    <label for="">City *</label>
                    <input type="text" placeholder="" />
                  </div>
                </fieldset>
                <hr class="line" />
                <div class="form_signUp-inner">
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Phone number *</label>
                      <input type="number" placeholder="" />
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Type and country</label>
                      <div
                        style="display: flex; align-items: center; gap: 20px"
                      >
                        <select style="width: 100%">
                          <option></option>
                        </select>
                        <select style="width: 100%">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Phone number 2 *</label>
                      <input type="number" placeholder="" />
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Type and country</label>
                      <div
                        style="display: flex; align-items: center; gap: 20px"
                      >
                        <select style="width: 100%">
                          <option></option>
                        </select>
                        <select style="width: 100%">
                          <option></option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="form_signUp-content">
                    <div>
                      <label for="">Delivery Remark</label>
                      <textarea placeholder=""></textarea>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="form_signUp-label">
              <span>TAX INFORMATION</span>
            </div>
            <div class="form_signUp-inner" style="padding: 16px">
              <fieldset class="form_signUp-content">
                <div>
                  <label for="">Tax Identification Number *</label>
                  <input type="text" placeholder="" />
                </div>
              </fieldset>

              <fieldset class="form_signUp-content">
                <div>
                  <label for="">State Inscription Number *</label>
                  <input type="text" placeholder="" />
                </div>
              </fieldset>
            </div>
            <div class="form_signUp-label">
              <span>KEEP ME INFORMED</span>
            </div>

            <fieldset class="form_signUp-footer">
              <div class="form_signUp-footer-wrapper">
                <p>
                  Stay in touch with Nespresso family*.Be the first to get the
                  latest coffee news, offers and benefits for Nespresso Members.
                  Simply let us know how you’d like us to contact you by
                  selecting one or more of these options.
                </p>
                <div>
                  <input type="checkbox" />
                  <span>E-mail</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span
                    >Phone – I understand that I may be contacted by phone by
                    the Customer Relationship Center</span
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
                <router-link to="/signUp_private">Continue</router-link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
