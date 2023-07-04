<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderSimple extends Vue {}
</script>

<template>
  <div class="header">
    <div class="header-logo">
      <a href="/">
        <img src="../assets/images/template/logo.png" alt="logoApp" />
      </a>
    </div>
  </div>
</template>
