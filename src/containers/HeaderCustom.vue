<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderCustom extends Vue {}
</script>

<template>
  <header id="header" class="header">
    <div class="header_inner">
      <div class="header_logo">
        <router-link to="/">
          <img
            src="/assets/images/logoApp.png"
            alt="logoApp"
            style="width: 100%; height: 100%"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>
