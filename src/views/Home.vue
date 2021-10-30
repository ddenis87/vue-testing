<script>
import DCatalog from '../components/DCatalog.vue';
import DDocument from '../components/DDocument';

export default {
  name: 'Home',
  components: {
    DCatalog,
  },
  data() {
    return {
      ddocument: new DDocument(),
      catalogName: 'User',
    };
  },
  methods: {
    setValue() {
      this.ddocument.setCellValue(2, 2, 'Denis');
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="home__control">
      <v-card>
        <v-card-actions>
          <v-btn tile
                 dark
                 class="btn"
                 color="teal"
                 height="24"
                 @click="() => catalogName = 'User'">FIO</v-btn>
          <v-btn tile
                 dark
                 class="btn"
                 color="teal"
                 height="24"
                 @click="() => catalogName = 'Request'">Request</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-divider></v-divider>
    <div class="home__table">
      <d-catalog :catalogName="catalogName"></d-catalog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  padding-right: 10px;
  margin-bottom: 10px;
}
</style>
