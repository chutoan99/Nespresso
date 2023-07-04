<script lang="ts">
import "../css/pages/setting_machine.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingMachine",
  components: {},
});
</script>

<template>
  <div class="setting_main">
    <section id="setting_my_machine">
      <form id=" form">
        <div class="setting_label">My Machine</div>
        <div class="form_content">
          <div class="form_btn">
            <button type="submit">
              <span>ADD AN MACHINE</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
