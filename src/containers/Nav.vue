<script lang="ts">
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

<template lang="pug">
nav#nav
  .nav
    ul.nav_list
      li.nav_list-item.nav_list-item-coffee(v-for='item in data' :key='item.name')
        router-link.nav_list-item-link(:to='item.path')
          .img_coffee-w
            img(:src='item.image' :alt='item.name')
          .img_coffee-b
            img(:src='item.image_b' :alt='item.name')
          p {{ item.name }}
        #list-sub-coffee.list_item-submenu(v-if='item?.sub_nav?.length > 0')
          .list_item-submenu-inner
            fragment(v-for='subItem in item.sub_nav' :key='subItem.name')
              .list_item-submenu-item
                div
                  router-link(:to='subItem.path')
                    img(:src='subItem.image' :alt='subItem.name')
                .list_item-submenu-content
                  p {{ subItem.name }}
                  p {{ subItem.content }}
              span.list_item-submenu-item-hr
            .list_item-submenu-item(v-if='item?.sub_nav_2?.length > 0' style='display: flex; flex-direction: column')
              fragment(v-for='subItem2 in item.sub_nav_2' :key='subItem2.name')
                div(style='display: flex; gap: 4px; align-items: center')
                  div
                    img(:src='subItem2.image' :alt='subItem2.name')
                  .list_item-submenu-content
                    p {{ subItem2.name }}
                    p {{ subItem2.content }}
                span.list_item-submenu-item-hr2
            span.list_item-submenu-item-hr
            .list_item-submenu-item
              div(style='padding: 0 8px')
                img(alt='' :src='item.background' style='width: 100%; height: 100%')
  .hide_on-pc.show_on-tab
    .icon_hambuger
      svg(width='16' height='16' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M15 1L1 15' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
        path(d='M15 15L1 1' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
</template>
