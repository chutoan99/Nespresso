<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingMachine",
  components: {},
});
</script>

<template lang="pug">
section#setting_my_machine
  form#form
    .setting_label My Machine
    .form_content
      .form_btn
        button(type='submit')
          span ADD AN MACHINE
</template>
