<script lang="ts">
import "../css/pages/setting_order.css";

import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingOrder",
  components: {},
});
</script>

<template>
  <div class="setting_main">
    <section id="setting_my_order">
      <form id=" form">
        <div class="setting_label">My Order</div>
        <div class="form_content">
          <span class="form_content-heading"
            >You did not order anything yet.
          </span>
          <span class="form_content-heading"
            >You can place your first order using the link below.</span
          >
          <div class="form_btn">
            <button type="submit">
              <span>GO TO THE ONLINE SHOP</span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.662718 0.162718C0.879676 -0.0542395 1.23143 -0.0542395 1.44839 0.162718L7.00395 5.71827C7.22091 5.93523 7.22091 6.28699 7.00395 6.50395L1.44839 12.0595C1.23143 12.2765 0.879676 12.2765 0.662718 12.0595C0.445761 11.8425 0.445761 11.4908 0.662718 11.2738L5.82544 6.11111L0.662718 0.948393C0.445761 0.731435 0.445761 0.379676 0.662718 0.162718Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
