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
      <template
        v-for="(item, index) in sortByOrder(formData, 'gn')"
        :key="index"
      >
        <form-element
          :type="item.ct"
          :title="item.ns"
          :style="`width: ${item.cw}px`"
          v-model="selectedTableRow[`${item.rv}`]"
        >
          <template #options>
            <option
              v-for="item in formData[index].sl"
              :key="item.id"
              :selected="selectedTableRow[`${item.rv}`] === item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </template>
        </form-element>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";
import FormElement from "@/components/ElementForm.vue";

export default defineComponent({
  components: { FormElement },

  setup() {
    const store = useStore();
    // store.dispatch("draws/receiveFormData");
    store.dispatch("clients/receiveData");

    const tableData = computed(() => {
      return store.getters["clients/getData"].table;
    });

    const formData = computed(() => {
      return store.getters["clients/getData"].formData;
    });

    // const width_input: Ref<number> = ref(10);

    return { tableData, formData };
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
      test: 1,
    };
  },

  methods: {
    sortByOrder(arr: [], key: string): [] {
      return arr.sort((a, b) => parseFloat(a[key]) - parseFloat(b[key]));
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  display: flex;
  justify-content: space-between;
  .form-box,
  .table-box {
    width: 45%;
  }
  .form-box {
    border: 1px solid gray;
  }
  .table-box {
    display: flex;
    justify-content: center;
  }
}
</style>
