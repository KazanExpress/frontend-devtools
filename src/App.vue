<template>
  <KeDevtools :items="['asd']">
    <template #item-asd> asd </template>
  </KeDevtools>
</template>

<script lang="ts">
import Vue from "vue";
import KeDevtools from "./components/KeDevtools.vue";

export default Vue.extend({
  name: "App",
  components: {
    KeDevtools,
  },
});
</script>
