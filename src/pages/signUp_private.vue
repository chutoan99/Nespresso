<script lang="ts">
import { defineComponent } from "vue";
//? APP
import ProductCartItem from "@/components/product_cart_item.vue";
import { data_cart } from "@/utils/data_cart";

export default defineComponent({
  name: "SignUpPrivatePage",
  components: { ProductCartItem },
  data() {
    return {
      privateOption: "",
      dataCart: data_cart,
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

<template lang="pug">
main#signUp_private
  section.private
    .private_wrapper
      .private_inner
        #private_form.container
          .private_form-inner
            h3.private_form-heading COFFEE MACHINE
            h4.private_form-title Register your coffee machine
            .private_form-header
              input#signUp_private-yes(type='radio' v-model='privateOption' value='yes' @click='onYesClicked' ref='inputYes')
              label(for='signUp_private-yes') I already own a machine.
            .private_form-header
              input#signUp_private-no(type='radio' v-model='privateOption' value='no' @click='onNoClicked' ref='inputNo')
              label(for='signUp_private-no') I don&apos;t have any machine yet.
          .private_form-label
            span SELECT YOUR RANGE
          .private_form-label2
            span STEP 1/3 SELECT YOUR RANGE
          #card-list.card-list
            productcartitem(v-bind:data='dataCart')
          .private_form-label2
            span STEP 2/3 SELECT YOUR MACHINE COLOR
          .card-list
            productcartitem(v-bind:data='dataCart')
          .private_form-label2
            span STEP 3/3 ENTER YOUR MACHINE INFORMATION
          .private_form-footer(style='background-color: white')
            .private_form-body
              h3.private_form-heading
                | Inissia Inissia Ruby Red Coffee Machine
              fieldset.private_form-content
                div
                  label(for='') Machine serial number :
                  input(type='text' placeholder='')
                span.private_form-mess Help me find my number
              fieldset.private_form-content
                div
                  label(for='') Date of purchase* :
                  div(style='display: flex; gap: 4px')
                    select(style='width: 100%')
                      option
                    select(style='width: 100%')
                      option
                    select(style='width: 100%')
                      option
              fieldset.private_form-content
                div
                  label(for='') How did you obtain your machine?*
                  select
                    option
            .private_form-img
              .private_form-wrapper
                img(src='assets/images/sigup/Rectangle_7.png')
          .private_form-button
            button
              router-link(to='/signUp_private_step_2') Continue

</template>
