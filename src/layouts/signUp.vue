<script lang="ts">
import { defineComponent } from "vue";
//? APP

import HeaderCustom from "../containers/HeaderCustom.vue";
export default defineComponent({
  name: "SignUpLayout",
  components: { HeaderCustom },
});
</script>

<template lang="pug">
.wrapper
  .wrapper-innner
    HeaderCustom
    router-view
</template>
