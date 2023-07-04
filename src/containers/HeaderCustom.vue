<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderCustom extends Vue {}
</script>

<template>
  <header id="header" class="header">
    <div class="header_inner">
      <div class="header_logo">
        <a href="./index.html">
          <img
            src="../assets/images/logoApp.png"
            alt="logoApp"
            width="100%"
            height="100%"
          />
        </a>
      </div>
    </div>
  </header>
</template>
