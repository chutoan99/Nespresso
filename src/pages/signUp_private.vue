<script lang="ts">
import "../css/pages/signUp_private.css";
import { defineComponent } from "vue";
import HeaderCustom from "../containers/HeaderCustom.vue";

export default defineComponent({
  name: "SignUpPrivatePage",
  components: { HeaderCustom },
  data() {
    return {
      privateOption: "",
    };
  },
  methods: {
    onNoClicked() {
      this.privateOption = "no";
      (this.$refs.inputYes as HTMLInputElement).checked = false;
    },
    onYesClicked() {
      this.privateOption = "yes";
      (this.$refs.inputNo as HTMLInputElement).checked = false;
    },
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <HeaderCustom />
      <main id="signUp_private">
        <section class="private">
          <div class="private_wrapper">
            <div class="private_inner">
              <div class="container" id="private_form">
                <div class="private_form-inner">
                  <h3 class="private_form-heading">COFFEE MACHINE</h3>
                  <h4 class="private_form-title">
                    Register your coffee machine
                  </h4>
                  <div class="private_form-header">
                    <input
                      type="radio"
                      id="signUp_private-yes"
                      v-model="privateOption"
                      value="yes"
                      @click="onYesClicked"
                      ref="inputYes"
                    />
                    <label for="signUp_private-yes"
                      >I already own a machine.</label
                    >
                  </div>
                  <div class="private_form-header">
                    <input
                      type="radio"
                      id="signUp_private-no"
                      v-model="privateOption"
                      value="no"
                      @click="onNoClicked"
                      ref="inputNo"
                    />
                    <label for="signUp_private-no"
                      >I don't have any machine yet.</label
                    >
                  </div>
                </div>
                <div class="private_form-label">
                  <span>SELECT YOUR RANGE</span>
                </div>

                <div class="private_form-label2">
                  <span>STEP 1/3 SELECT YOUR RANGE</span>
                </div>
                <div class="card-list" id="card-list">
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                </div>
                <div class="private_form-label2">
                  <span>STEP 2/3 SELECT YOUR MACHINE COLOR</span>
                </div>
                <div class="card-list">
                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>

                  <div class="card_item">
                    <div class="card_item-img">
                      <img src="assets/images/sigup/Rectangle_1.png" />
                    </div>
                    <div class="card_item-title">
                      <span>Pixie</span>
                    </div>
                  </div>
                </div>
                <div class="private_form-label2">
                  <span>STEP 3/3 ENTER YOUR MACHINE INFORMATION</span>
                </div>
                <div
                  class="private_form-footer"
                  style="background-color: white"
                >
                  <div class="private_form-body">
                    <h3 class="private_form-heading">
                      Inissia Inissia Ruby Red Coffee Machine
                    </h3>
                    <fieldset class="private_form-content">
                      <div>
                        <label for="">Machine serial number :</label>
                        <input type="text" placeholder="" />
                      </div>
                      <span class="private_form-mess"
                        >Help me find my number</span
                      >
                    </fieldset>
                    <fieldset class="private_form-content">
                      <div>
                        <label for="">Date of purchase* :</label>
                        <div style="display: flex; gap: 4px">
                          <select style="width: 100%">
                            <option></option>
                          </select>
                          <select style="width: 100%">
                            <option></option>
                          </select>
                          <select style="width: 100%">
                            <option></option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset class="private_form-content">
                      <div>
                        <label for="">How did you obtain your machine?*</label>
                        <select>
                          <option></option>
                        </select>
                      </div>
                    </fieldset>
                  </div>
                  <div class="private_form-img">
                    <div class="private_form-wrapper">
                      <img src="assets/images/sigup/Rectangle_7.png" />
                    </div>
                  </div>
                </div>
                <div class="private_form-button">
                  <button>
                    <router-link to="/signUp_private_step_2"
                      >Continue</router-link
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
