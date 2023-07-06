<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubProfessional",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-professional">
    <router-link class="nav_list-item-link" to="/professional">
      <div class="img_professional-w">
        <img alt="professional" src="../assets/images/header/pro.png" />
      </div>
      <div class="img_professional-b">
        <img alt="location" src="../assets/images/header/location_b.png" />
      </div>
      <p>Professional</p>
    </router-link>
  </li>
</template>
