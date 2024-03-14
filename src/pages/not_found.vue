<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "NotFound2Page",
});
</script>

<template lang="pug">
main#pageNotFound
  .container.messages
    p.messages-text Oops! That page can&rsquo;t be found.
</template>
