<template>
  <div class="devtools">
    <slot name="before" />
    <div class="devtools-panel" :class="{ active: isShowDevtools }">
      <button class="devtools-panel-activator" @click="toggleShowDevtools">
        <DevtoolsLogo />
      </button>
      <div class="devtools-panel-wrapper">
        <button
          v-for="item in items"
          :key="item"
          class="devtools-panel-button"
          @click="onClickItem(item)"
        >
          <slot :name="`item-${item}`" />
        </button>
      </div>
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import DevtoolsLogo from "@/assets/devtools.svg";

const LOCAL_STORAGE_KEY = "ke-devtools";

const processFlag = (item: string) => {
  let result = false;
  const localFlags = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
  );

  if (localFlags[item]) {
    delete localFlags[item];
  } else {
    localFlags[item] = true;
    result = true;
  }

  if (Object.keys(localFlags).length === 0) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localFlags));
  }

  return result;
};

export default Vue.extend({
  name: "ke-devtools",
  components: {
    DevtoolsLogo,
  },
  props: {
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  data() {
    return {
      isShowDevtools: false,
    };
  },
  methods: {
    toggleShowDevtools() {
      this.isShowDevtools = !this.isShowDevtools;
    },
    onClickItem(key: string) {
      const value = processFlag(key);
      this.$emit("update", { key, value });
    },
  },
});
</script>

<style scoped>
.devtools {
  position: absolute;
  width: 100%;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
}

.devtools-panel {
  transform: translateY(-100%);
  transition: 0.15s transform;
}

.devtools-panel.active {
  transform: translateY(0);
}

.devtools-panel-wrapper {
  z-index: 80;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  background-color: #2e3138;
}

.devtools-panel-button {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
}

.devtools-panel-activator {
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

.devtools-panel-activator svg {
  transform: translate(-4px, 26px);
}

.devtools-panel-activator:hover {
  background-color: #494b50;
}
</style>
