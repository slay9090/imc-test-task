<template>
  <input type="checkbox" v-bind="$attrs" v-model="innerValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { watcher } from "@/components/base/compositions/watcher";

export default defineComponent({
  name: "BCheckBox",
  props: {
    value: Boolean,
  },
  setup(props) {
    return { ...watcher(props) };
  },
});
</script>

<style scoped></style>
