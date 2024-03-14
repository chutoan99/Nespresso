<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderCustom extends Vue {}
</script>

<template lang="pug">
header#header.header
  .header_inner
    .header_logo
      router-link(to="/")
        img(src="/assets/images/logoApp.png", alt="logoApp", style="width: 100%; height: 100%")
</template>
