<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSubContact",
  components: {},
});
</script>

<template>
  <li class="nav_list-item nav_list-item-contact">
    <router-link class="nav_list-item-link" to="/contact_us">
      <div class="img_contact-w">
        <img alt="contact" src="../assets/images/header/contact.png" />
      </div>
      <div class="img_contact-b">
        <img alt="contact" src="../assets/images/header/contact_b.png" />
      </div>
      <p>Contact</p>
    </router-link>
    <div class="list_item-submenu" id="list-sub-contact">
      <div class="list_item-submenu-inner">
        <div class="list_item-submenu-item">
          <div>
            <router-link to="/contact_us">
              <img src="../assets/images/service_2.png" alt="" />
            </router-link>
          </div>
          <div class="list_item-submenu-content">
            <p>FAQs</p>
            <p>We answer your frequently asked questions</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div class="list_item-submenu-item">
          <div>
            <img src="../assets/images/contact_1.png" alt="" />
          </div>
          <div class="list_item-submenu-content">
            <p>Email us</p>
            <p>Our coffee specialists are ready to help you</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div class="list_item-submenu-item">
          <div>
            <img src="../assets/images/contact_2.png" alt="" />
          </div>
          <div class="list_item-submenu-content">
            <p>Call us 1800 234 506</p>
            <p>Lines are open Mon - Sat, from 8:30 am to 6pm</p>
          </div>
        </div>
        <span class="list_item-submenu-item-hr"></span>
        <div class="list_item-submenu-item">
          <div style="padding: 0 8px">
            <img
              alt=""
              src="../assets/images/image_62.png"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
