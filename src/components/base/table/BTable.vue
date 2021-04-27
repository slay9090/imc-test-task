<template>
  <table border="1">
    <!--    <caption>-->
    <!--      Таблица -->
    <!--    </caption>-->
    <tr>
      <th v-for="item in tableHeads" :key="item.id">{{ item.name }}</th>
    </tr>
    <tr
      v-for="(item, index) in dataSet"
      :key="index"
      @click="$emit('update:selectedRow', item)"
    >
      <td v-for="item in dataSet[index]" :key="item.id">{{ item }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ITableHeader } from "@/types/interfaces/base/ITable";
export default {
  name: "BTable",
  emits: ["update:selectedRow"],
  props: {
    tableHeads: {
      required: true,
      type: Object as () => PropType<ITableHeader>,
    },
    dataSet: {},
  },
  methods: {
    getRowNumber(index: number): void {
      console.log(index);
    },
  },
};
</script>

<style scoped></style>
