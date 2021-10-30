<script>
export default {
  name: 'DCatalog',
  props: {
    catalogName: { type: String, default: null },
  },
  computed: {
    catalog() {
      if (!this.catalogName) return null;
      console.log(this.catalogName);
      // return () => import('@/components/DCatalogUser.vue');
      return () => import(`@/components/DCatalog${this.catalogName}.vue`);
    },
  },
};
</script>

<template>
  <v-card>
    <v-card-title>

    </v-card-title>
    <v-card-text>
      <component :is="catalog"></component>
    </v-card-text>
  </v-card>
</template>
