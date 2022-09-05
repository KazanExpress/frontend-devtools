<template>
  <div class="ke-devtools">
    <slot name="before" />
    <div class="ke-devtools-panel" :class="{ active: isShowDevtools }">
      <button class="ke-devtools-panel-activator" @click="toggleShowDevtools">
        <slot name="activator">
          <DevtoolsLogo />
        </slot>
      </button>
      <div class="ke-devtools-panel-wrapper">
        <button
          v-for="item in items"
          :key="item.key"
          class="ke-devtools-panel-button"
          @click="onClickItem(item)"
        >
          <slot :name="`item-${item.key}`" :active="flags.includes(item.key)" />
        </button>
      </div>
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import DevtoolsLogo from "@/assets/devtools.svg";
import { processFlag, DEFAULT_LOCAL_KEY, getInitialFlags } from "./business";
import { TChangePayload, TDevtoolsItem } from "./types";

export default Vue.extend({
  name: "ke-devtools",
  components: {
    DevtoolsLogo,
  },
  props: {
    items: {
      type: Array as PropType<TDevtoolsItem[]>,
      required: true,
    },
    localStorageKey: {
      type: String,
      default: DEFAULT_LOCAL_KEY,
    },
  },
  data() {
    return {
      isShowDevtools: false,
      flags: getInitialFlags(this.items, this.localStorageKey),
    };
  },
  methods: {
    toggleShowDevtools() {
      this.isShowDevtools = !this.isShowDevtools;
    },
    onClickItem(item: TDevtoolsItem) {
      let value = true;

      if (item.saveLocal !== false) {
        value = processFlag(item.key, this.localStorageKey);

        if (value) {
          this.flags.push(item.key);
        } else {
          this.flags.splice(this.flags.indexOf(item.key), 1);
        }
      }

      const changePayload: TChangePayload = {
        key: item.key,
        value,
      };

      this.$emit("change", changePayload);
    },
  },
});
</script>

<style scoped>
.ke-devtools {
  position: absolute;
  width: 100%;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  height: 0;
}

.ke-devtools-panel {
  transform: translateY(-100%);
  transition: 0.15s transform;
}

.ke-devtools-panel.active {
  transform: translateY(0);
}

.ke-devtools-panel-wrapper {
  z-index: 80;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  background-color: #2e3138;
  gap: 20px;
}

.ke-devtools-panel-button {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
}

.ke-devtools-panel-button:hover {
  background-color: #494b50;
}

.ke-devtools-panel-activator {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 50%;
  background-color: #2e3138;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.15s ease;
  outline: none;
  border: none;
  padding: 35px;
  transform: translate(32%, 42%);
}

.ke-devtools-panel-activator svg {
  transform: translate(-4px, 26px);
}

.ke-devtools-panel-activator:hover {
  background-color: #494b50;
}
</style>
