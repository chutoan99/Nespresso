<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubLogonew",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-logonew">
    <router-link class="nav_list-item-link" to="">
      <div>
        <img alt="logonew" src="../assets/images/LogoN.png" />
      </div>
      <p>New To Nespresso</p>
    </router-link>
  </li>
</template>
