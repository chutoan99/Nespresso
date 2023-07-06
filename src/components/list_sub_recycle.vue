<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubRecycle",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-recycle">
    <router-link class="nav_list-item-link" to="/sustainability_recycling">
      <div class="img_recycle-w">
        <img alt="recycle" src="../assets/images/header/recycle.png" />
      </div>
      <div class="img_recycle-b">
        <img alt="recycle" src="../assets/images/header/recycle_b.png" />
      </div>
      <p>Sustainability & Recycling</p>
    </router-link>
  </li>
</template>
