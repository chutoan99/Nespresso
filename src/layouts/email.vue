<script lang="ts">
import { defineComponent } from "vue";
//? APP
import HeaderSimple from "@/containers/HeaderSimple.vue";

export default defineComponent({
  name: "EmailLayout",
  components: {
    HeaderSimple,
  },
});
</script>

<template>
  <div class="wrapper">
    <main id="email_verification">
      <div class="wrapper-sm">
        <HeaderSimple />
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
