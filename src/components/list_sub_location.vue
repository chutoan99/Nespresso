<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubLocation",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-location">
    <router-link class="nav_list-item-link" to="/store_location">
      <div class="img_location-w">
        <img alt="location" src="../assets/images/header/location.png" />
      </div>
      <div class="img_location-b">
        <img alt="professional" src="../assets/images/header/pro_b.png" />
      </div>
      <p>Store Locator</p>
    </router-link>
  </li>
</template>
