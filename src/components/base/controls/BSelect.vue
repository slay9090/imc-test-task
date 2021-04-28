<template>
  <select v-bind="$attrs" v-model="innerValue">
    <slot name="options"></slot>
  </select>
</template>

<script>
export default {
  name: "BSelect",
  props: {
    value: {},
  },
  data() {
    return {
      innerValue: "",
    };
  },
  watch: {
    value(newVal) {
      this.innerValue = newVal;
    },
  },
};
</script>

<style scoped></style>
