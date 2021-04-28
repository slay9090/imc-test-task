<template>
  <div class="form-element">
    <div class="title-box">{{ title }}</div>

    <div class="control-box">
      <component
        :is="getComponent(type)"
        v-bind="$attrs"
        :value="modelValue"
        class="control-box__item"
      >
        <template #options>
          <slot name="options"></slot>
        </template>
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import BCheckBox from "@/components/base/controls/BCheckBox.vue";
import BSelect from "@/components/base/controls/BSelect.vue";
import BTextField from "@/components/base/inputs/BTextField.vue";

export default {
  name: "formElement",

  components: { BSelect, BCheckBox, BTextField },
  props: {
    type: {
      required: true,
      type: Number,
    },
    title: {
      type: String,
    },
    modelValue: {},
  },
  methods: {
    getComponent(type: number) {
      switch (type) {
        case 1:
          return BTextField.name;
        case 2:
          return BSelect.name;
        case 3:
          return BCheckBox.name;
        default:
          return BTextField.name;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-element {
  text-align: left;
  margin: 10px 10px;
  display: flex;
  align-items: center;
  .title-box {
    margin-right: 10px;
  }

  .control-box__item {
    width: auto !important;
  }
}
</style>
