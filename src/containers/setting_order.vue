<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SettingOrder",
  components: {},
});
</script>

<template lang="pug">
section#setting_my_order
  form#form
    .setting_label My Order
    .form_content
      span.form_content-heading
        | You did not order anything yet.
      span.form_content-heading You can place your first order using the link below.
      .form_btn
        button(type='submit')
          span GO TO THE ONLINE SHOP
          svg(width='8' height='13' viewbox='0 0 8 13' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(fill-rule='evenodd' clip-rule='evenodd' d='M0.662718 0.162718C0.879676 -0.0542395 1.23143 -0.0542395 1.44839 0.162718L7.00395 5.71827C7.22091 5.93523 7.22091 6.28699 7.00395 6.50395L1.44839 12.0595C1.23143 12.2765 0.879676 12.2765 0.662718 12.0595C0.445761 11.8425 0.445761 11.4908 0.662718 11.2738L5.82544 6.11111L0.662718 0.948393C0.445761 0.731435 0.445761 0.379676 0.662718 0.162718Z' fill='white')
</template>
