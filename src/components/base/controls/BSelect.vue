<template>
  <select v-bind="$attrs" v-model="innerValue">
    <slot name="options"></slot>
  </select>
</template>

<script lang="ts">
import { watcher } from "@/components/base/compositions/watcher";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BSelect",
  props: {
    value: {},
  },
  setup(props) {
    return { ...watcher(props) };
  },
});
</script>

<style scoped></style>
