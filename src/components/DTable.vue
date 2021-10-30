<script>
export default {
  name: 'DTable',
  props: {
    ddocument: { type: Object, default: () => {} },
  },
  computed: {
    columnCount() { return this.ddocument?.getColumnCount() || 0; },
    rowCount() { return this.ddocument?.getRowCount() || 0; },
  },
  methods: {
    setValue() {
      this.ddocument.setCellValue(3, 3, 'Tom');
    },
  },
};
</script>

<template>
  <v-card>
    <v-card-text>
      <div class="d-table">
        <table class="table">
          <tr v-for="row in rowCount"
              :key="`row-${row}`">
            <td v-for="column in columnCount"
                :key="`column-${column}`">
              {{ ddocument.ddocument[row][column] }}
            </td>
          </tr>
        </table>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn tile
             dark
             color="teal"
             height="24"
             @click="setValue">Set value from component</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.d-table {
  width: 300px;
  .table {
    width: 100%;
    border-collapse: collapse;
    border-color: grey;
    color: rgba(0, 0, 0, .8);
  }
}
</style>
