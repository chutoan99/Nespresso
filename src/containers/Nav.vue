<script lang="ts">
import "../css/layouts/nav.css";

import { DataNavigation } from "@/utils/data_navigation";
import ListSubCoffee from "@/components/list_sub_coffee.vue";
import ListSubAccessories from "@/components/list_sub_accessories.vue";
import ListSubMachine from "@/components/list_sub_machine.vue";
import ListSubService from "@/components/list_sub_service.vue";
import ListSubRecycle from "@/components/list_sub_recycle.vue";
import ListSubContact from "@/components/list_sub_contact.vue";
import ListSubProfessional from "@/components/list_sub_professional.vue";
import ListSubLocation from "@/components/list_sub_location.vue";
import ListSubLogonew from "@/components/list_sub_logonew.vue";
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationComponent",
  components: {
    // ListSubCoffee,
    // ListSubAccessories,
    // ListSubMachine,
    // ListSubService,
    // ListSubRecycle,
    // ListSubContact,
    // ListSubProfessional,
    // ListSubLocation,
    // ListSubLogonew,
  },
  data() {
    return {
      data: DataNavigation,
    };
  },
  created() {
    console.log(this.data);
  },
});
</script>

<template>
  <nav id="nav">
    <div class="nav">
      <!-- <ul>
        <li>
          <router-link>
            <img :src="item.image" :alt="item.name" />
          </router-link>

          <ul v-if="item.sub_nav">
            <li v-for="subItem in item.sub_nav" :key="subItem.name">
              <div></div>
              <div>
                <p>{{ subItem.name }}</p>
                <p>{{ subItem.content }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul> -->
      <ul class="nav_list">
        <li
          class="nav_list-item nav_list-item-coffee"
          v-for="item in data"
          :key="item.name"
        >
          <router-link class="nav_list-item-link" :to="item.path">
            <div class="img_coffee-w">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="img_coffee-b">
              <img :src="item.image_b" :alt="item.name" />
            </div>
            <p>{{ item.name }}</p>
          </router-link>
          <!-- <div class="list_item-submenu" id="list-sub-coffee">
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
          </div> -->
        </li>
        <!-- <ListSubCoffee />
        <ListSubMachine />
        <ListSubAccessories />
        <ListSubLogonew />
        <ListSubService />
        <ListSubRecycle />
        <ListSubLocation />
        <ListSubContact />
        <ListSubProfessional /> -->
      </ul>
    </div>
    <div class="hide_on-pc show_on-tab">
      <div class="icon_hambuger">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L1 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 15L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>
