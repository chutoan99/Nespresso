<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingMachine",
  components: {},
});
</script>

<template>
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
</template>
