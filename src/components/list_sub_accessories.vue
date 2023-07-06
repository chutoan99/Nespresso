<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubAccessories",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-machine">
    <router-link class="nav_list-item-link" to="/machines">
      <div class="img_machine-w">
        <img alt="machine" src="../assets/images/header/machine.png" />
      </div>
      <div class="img_machine-b">
        <img alt="machine" src="../assets/images/header/machine_b.png" />
      </div>
      <p>Machine</p>
    </router-link>
    <div class="list_item-submenu" id="list-sub-machine">
      <div class="list_item-submenu-inner">
        <div class="list_item-submenu-item">
          <div>
            <router-link to="/machines">
              <img src="../assets/images/machine_1.png" alt="" />
            </router-link>
          </div>
          <div class="list_item-submenu-content">
            <p>Order Your Machine</p>
            <p>Free delivery for every machine purchase</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div class="list_item-submenu-item">
          <div>
            <router-link to="/machines">
              <img src="../assets/images/machine_1.png" alt="" />
            </router-link>
          </div>
          <div class="list_item-submenu-content">
            <p>Compare machine</p>
            <p>Benefit from 2 years warranty</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div
          class="list_item-submenu-item"
          style="display: flex; flex-direction: column"
        >
          <div style="display: flex; gap: 4px; align-items: center">
            <div>
              <img src="../assets/images/machine_3.png" alt="" />
            </div>
            <div class="list_item-submenu-content">
              <p>Descaling your machine regularly</p>
            </div>
          </div>
          <span class="list_item-submenu-item-hr2"></span>
          <div style="display: flex; gap: 4px; align-items: center">
            <div>
              <img src="../assets/images/machine_2.png" alt="" />
            </div>
            <div class="list_item-submenu-content">
              <p>Register your machine</p>
            </div>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div class="list_item-submenu-item">
          <div style="padding: 0 8px">
            <img
              alt=""
              src="../assets/images/image_59.png"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
