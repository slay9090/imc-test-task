<template>
  <div class="wrapper">
    <div class="table-box">
      <!--      {{ tableData[0]._name }}-->

      <b-table :table-heads="fields" />
    </div>

    <div class="form-box">
      form
      <input
        v-model="tableData[0]._name"
        :style="{ width: `${width_input}px` }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";

import { useStore } from "vuex";
import BTable from "@/components/base/table/BTable.vue";

export default defineComponent({
  components: { BTable },
  setup() {
    const store = useStore();
    store.dispatch("receiveTableProp");
    console.log(useStore());
    const tableData = computed(() => {
      return store.getters["getTableProp"];
    });

    const width_input: Ref<number> = ref(10);

    return { tableData, width_input };
  },

  name: "demo",

  data() {
    return {
      fields: [{ name: "xxxx" }, { name: "yyyyy" }],
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: flex;
  justify-content: space-between;
  .form-box,
  .table-box {
    width: 40%;
  }
}
</style>
