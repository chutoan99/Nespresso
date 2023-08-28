<script lang="ts">
import { defineComponent } from "vue";
//? APP

import HeaderCustom from "../containers/HeaderCustom.vue";
export default defineComponent({
  name: "SignUpLayout",
  components: { HeaderCustom },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <HeaderCustom />
      <router-view></router-view>
    </div>
  </div>
</template>
