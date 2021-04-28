<template>
  <div class="form-element">
    <div >{{ title }}</div>

    <div>
      <component :is="getComponent(type)" v-bind="$attrs" :value="modelValue">
        <template #options>
          <slot name="options"></slot>
        </template>
      </component>
    </div>

  </div>
</template>

<script lang="ts">

import BRadio from "@/components/base/controls/BRadio.vue";
import BSelect from "@/components/base/controls/BSelect.vue";
import BTextInput from "@/components/base/inputs/BTextField.vue";

export default {
  name: "formElement",

  components: { BSelect, BRadio, BTextInput },
  props: {
    type: {
      required: true,
      type: Number,
    },
    title: {
      type: String,
    },
    modelValue: Number,
  },
  methods: {
    getComponent(type: number) {
      switch (type) {
        case 1:
          return BTextInput.name;
        case 2:
          return BSelect.name;
        case 3:
          return BRadio.name;
        default:
          return BTextInput.name;
      }
    },
  },
};
</script>

<style scoped lang="scss">

.form-element {
  text-align: left;
}

</style>
