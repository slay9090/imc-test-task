<template>
  <input v-bind="$attrs" v-model="innerValue" />
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { watcher } from "@/components/base/compositions/watcher";

export default defineComponent({
  name: "BTextField",
  props: {
    value: String,
  },

  setup(props) {
    const innerValue = ref(...watcher(props));
    // watch(
    //   () => props.value,
    //   (newValue) => {
    //     innerValue.value = newValue;
    //   }
    // );
    // return {
    //   innerValue,
    // };

    return { innerValue };
  },
});
</script>

<style scoped></style>
