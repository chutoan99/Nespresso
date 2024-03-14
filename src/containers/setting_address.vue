<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class SettingAddress extends Vue {}
</script>

<template lang="pug">
section#setting_my_address
  form#form
    .setting_label My Address
    .form_content
      .form_content-left
        .form_content-info
          span ADDRESS
          span Mr Leon Lu
          span Calea Bucure&#x219;ti nr. 1-87
          span 500326 Bra&#x219;ov 
        .form_content-btn
          button(type='submit')
            span EDIT ADDRESS
        .form_content-title
          div
            svg(width='12' height='9' viewbox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M11.8047 0.528514C12.0651 0.788864 12.0651 1.21097 11.8047 1.47132L4.4714 8.80466C4.21106 9.06501 3.78894 9.06501 3.5286 8.80466L0.195262 5.47132C-0.0650874 5.21097 -0.0650874 4.78886 0.195262 4.52851C0.455612 4.26816 0.877722 4.26816 1.13807 4.52851L4 7.39044L10.8619 0.528514C11.1223 0.268165 11.5444 0.268165 11.8047 0.528514Z' fill='#3D8705')
            span My default delivery address
          div
            svg(width='12' height='9' viewbox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M11.8047 0.528514C12.0651 0.788864 12.0651 1.21097 11.8047 1.47132L4.4714 8.80466C4.21106 9.06501 3.78894 9.06501 3.5286 8.80466L0.195262 5.47132C-0.0650874 5.21097 -0.0650874 4.78886 0.195262 4.52851C0.455612 4.26816 0.877722 4.26816 1.13807 4.52851L4 7.39044L10.8619 0.528514C11.1223 0.268165 11.5444 0.268165 11.8047 0.528514Z' fill='#3D8705')
            span My default billing address
      div
        .form_content-heading
          h3 TELEPHONE NUMBER: (Private) 0778738991
    .setting_label2
      .form_btn
        button(type='submit')
          span ADD AN ADDRESS
</template>
