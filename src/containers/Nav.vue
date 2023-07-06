<script lang="ts">
import "../css/layouts/nav.css";

import { DataNavigation } from "@/utils/data_navigation";
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavigationComponent",
  components: {},
  data() {
    return {
      data: DataNavigation,
    };
  },
});
</script>

<template>
  <nav id="nav">
    <div class="nav">
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

          <div
            class="list_item-submenu"
            id="list-sub-coffee"
            v-if="item?.sub_nav?.length > 0"
          >
            <div class="list_item-submenu-inner">
              <Fragment v-for="subItem in item.sub_nav" :key="subItem.name">
                <div class="list_item-submenu-item">
                  <div>
                    <router-link :to="subItem.path">
                      <img :src="subItem.image" :alt="subItem.name" />
                    </router-link>
                  </div>
                  <div class="list_item-submenu-content">
                    <p>{{ subItem.name }}</p>
                    <p>{{ subItem.content }}</p>
                  </div>
                </div>
                <span class="list_item-submenu-item-hr"></span>
              </Fragment>

              <div
                v-if="item?.sub_nav_2?.length > 0"
                class="list_item-submenu-item"
                style="display: flex; flex-direction: column"
              >
                <Fragment
                  v-for="subItem2 in item.sub_nav_2"
                  :key="subItem2.name"
                >
                  <div style="display: flex; gap: 4px; align-items: center">
                    <div>
                      <img :src="subItem2.image" :alt="subItem2.name" />
                    </div>
                    <div class="list_item-submenu-content">
                      <p>{{ subItem2.name }}</p>
                      <p>{{ subItem2.content }}</p>
                    </div>
                  </div>
                  <span class="list_item-submenu-item-hr2"></span>
                </Fragment>
              </div>

              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div style="padding: 0 8px">
                  <img
                    alt=""
                    :src="item.background"
                    style="width: 100%; height: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
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
