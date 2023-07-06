<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubCoffee",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-coffee">
    <router-link class="nav_list-item-link" to="/coffee">
      <div class="img_coffee-w">
        <img alt="coffee" src="../assets/images/header/coffee-capsule.png" />
      </div>
      <div class="img_coffee-b">
        <img alt="coffee" src="../assets/images/header/coffee-capsule_b.png" />
      </div>
      <p>Coffee</p>
    </router-link>
    <div class="list_item-submenu" id="list-sub-coffee">
      <div class="list_item-submenu-inner">
        <div class="list_item-submenu-item">
          <div>
            <router-link to="/coffee">
              <img src="../assets/images/image_56_2.png" alt="" />
            </router-link>
          </div>
          <div class="list_item-submenu-content">
            <p>Order Your Capsules</p>
            <p>Enjoy free delivery from 500,000đ</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div class="list_item-submenu-item">
          <div>
            <img src="../assets/images/image_56.png" alt="" />
          </div>
          <div class="list_item-submenu-content">
            <p>Discover the Range</p>
            <p>Explore Nespresso coffee selection</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div
          class="list_item-submenu-item"
          style="display: flex; flex-direction: column"
        >
          <div style="display: flex; gap: 4px; align-items: center">
            <div>
              <img src="../assets/images/image_56_1.png" alt="" />
            </div>
            <div class="list_item-submenu-content">
              <p>Our Coffee Stories</p>
              <p>Journey to the perfect cup</p>
            </div>
          </div>
          <span class="list_item-submenu-item-hr2"></span>
          <div style="display: flex; gap: 4px; align-items: center">
            <div>
              <img src="../assets/images/image_56_1.png" alt="" />
            </div>
            <div class="list_item-submenu-content">
              <p>Recipes</p>
              <p>Be your own barista</p>
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
