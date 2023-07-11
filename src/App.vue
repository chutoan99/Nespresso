<script lang="ts">
import "../src/css/index.css";

import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<template>
  <router-view></router-view>
</template>
