<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderSimple extends Vue {}
</script>

<template lang="pug">
.header
  .header-logo
    router-link(to='/')
      img(src='assets/images/template/logo.png' alt='logoApp')
</template>
