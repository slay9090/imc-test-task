<template>
  <div class="wrapper">
    <div class="table-box">
      <b-table
        :table-heads="fields"
        :data-set="tableData"
        v-model:selectedRow="selectedTableRow"
      />

      <!--      {{formData}}-->
    </div>

    <div class="form-box">
      form
    ne moget   {{selectedTableRow._sex}}
      <form-element
          :type="2"
          title="sdfdfs"
          v-model="selectedTableRow._sex"
      >
        <template #options>
          <option v-for="item in formData[2].sl" :key="item.id" :selected="selectedTableRow._sex === item.id" :value="item.id">{{item.name}}</option>
        </template>

      </form-element>

      <input v-model="selectedTableRow._name" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";

import { useStore } from "@/store";
import FormElement from "@/components/formElement.vue";
// import { inputType } from "@/types/enums/inputType";

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
