<template>
  <div class="app">
    <KeDevtools
      :items="devtoolsItems"
      local-storage-key="ke-devtools-example"
      @init="onInit"
      @change="onChange"
    >
      <template #item-example-save="{ active }">
        <span class="example" :class="{ active: active }">save local</span>
      </template>
      <template #item-example-not-save>
        <span class="example">not save local</span>
      </template>
      <template #item-default-active-true="{ active }">
        <span class="example" :class="{ active: active }">
          default active true
        </span>
      </template>
    </KeDevtools>
    <div class="content">
      example content
      <div class="content" v-if="isVisibleSaveContent">
        content if save flag true
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KeDevtools from "./components/KeDevtools.vue";
import { TChangePayload, TDevtoolsItem } from "./components/types";

const enum EDevtoolsExample {
  SAVE = "example-save",
  NOT_SAVE = "example-not-save",
  DEFAULT_ACTIVE_TRUE = "default-active-true",
}

const devtoolsItems: TDevtoolsItem<EDevtoolsExample>[] = [
  {
    key: EDevtoolsExample.SAVE,
  },
  {
    key: EDevtoolsExample.NOT_SAVE,
    saveLocal: false,
  },
  {
    key: EDevtoolsExample.DEFAULT_ACTIVE_TRUE,
    defaultActive: true,
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
      isVisibleSaveContent: false,
    };
  },
  methods: {
    onInit(payload: EDevtoolsExample[]) {
      this.isVisibleSaveContent = payload.includes(EDevtoolsExample.SAVE);
    },
    onChange(payload: TChangePayload<EDevtoolsExample>) {
      switch (payload.key) {
        case EDevtoolsExample.SAVE:
          this.isVisibleSaveContent = payload.value;
          console.log(EDevtoolsExample.SAVE, payload.value);
          break;
        case EDevtoolsExample.NOT_SAVE:
          console.log(EDevtoolsExample.NOT_SAVE, payload.value);
          break;
        case EDevtoolsExample.DEFAULT_ACTIVE_TRUE:
          console.log(EDevtoolsExample.DEFAULT_ACTIVE_TRUE, payload.value);
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
