<template>
  <table border="1">
<!--    <caption>-->
<!--      Таблица -->
<!--    </caption>-->
    <tr>


      <th v-for="item in tableHeads" v-bind:key="item.id">{{item.name}}</th>

    </tr>
    <tr>
      <td>34,5</td>
      <td>3,5</td>
      <td>36</td>
      <td>23</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { ITableHeader } from "@/types/interfaces/base/ITable"
export default {
  name: "BTable",
  props: {
    tableHeads: {
      required: true,
      type: Object as () => PropType<ITableHeader>,
    },
  },
};
</script>

<style scoped></style>
