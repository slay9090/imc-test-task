<template>
  <div class="wrapper">
    <div class="table-box">
      <b-table
        :table-heads="fields"
        :data-set="tableData"
        v-model:selectedRow="selectedTableRow"
      />
    </div>

    <div class="form-box">
      form
      <input v-model="selectedTableRow._name" />
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
    store.dispatch("receiveTableData");
    console.log(useStore());
    const tableData = computed(() => {
      return store.getters["getTableData"];
    });

    const width_input: Ref<number> = ref(10);

    return { tableData, width_input };
  },

  name: "demo",

  data() {
    return {
      fields: [
        { name: "ID", key: "id" },
        { name: "Иностранец", key: "_foreigner" },
        { name: "Имя", key: "_name" },
        { name: "Пол", key: "_sex" },
      ],
      selectedTableRow: {},
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
