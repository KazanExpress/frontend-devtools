<template>
  <div class="app">
    <KeDevtools
      :items="devtoolsItems"
      local-storage-key="ke-devtools-example"
      @change="onChange"
    >
      <template #item-example-save="{ active }">
        <span class="example" :class="{ active: active }">save local</span>
      </template>
      <template #item-example-not-save>
        <span class="example">not save local</span>
      </template>
    </KeDevtools>
    <div class="content">example content</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KeDevtools from "./components/KeDevtools.vue";
import { TChangePayload, TDevtoolsItem } from "./components/types";

const enum EDevtoolsExample {
  SAVE = "example-save",
  NOT_SAVE = "example-not-save",
}

const devtoolsItems: TDevtoolsItem<EDevtoolsExample>[] = [
  {
    key: EDevtoolsExample.SAVE,
  },
  {
    key: EDevtoolsExample.NOT_SAVE,
    saveLocal: false,
  },
];

export default Vue.extend({
  name: "App",
  components: {
    KeDevtools,
  },
  data() {
    return {
      devtoolsItems,
    };
  },
  methods: {
    onChange(payload: TChangePayload<EDevtoolsExample>) {
      switch (payload.key) {
        case EDevtoolsExample.SAVE:
          console.log(EDevtoolsExample.SAVE, payload.value);
          break;
        case EDevtoolsExample.NOT_SAVE:
          console.log(EDevtoolsExample.NOT_SAVE, payload.value);
          break;
        default:
          break;
      }
    },
  },
});
</script>

<style scoped>
.content {
  height: 100px;
  border: 1px solid aquamarine;
  cursor: pointer;
}

.example {
  color: white;
}

.example.active {
  color: aqua;
}
</style>
