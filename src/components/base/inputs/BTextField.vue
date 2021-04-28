<template>
  <input type="text" v-bind="$attrs" v-model="innerValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { watcher } from "@/components/base/compositions/watcher";

export default defineComponent({
  name: "BTextField",
  props: {
    value: String,
  },
  setup(props) {
    return { ...watcher(props) };
  },
});
</script>

<style scoped></style>
