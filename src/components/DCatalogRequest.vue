<script>
export default {
  name: 'DCatalogRequest',
  data() {
    return {
      headers: [
        { text: '№ п/п', value: 'id' },
        { text: 'Наименование', value: 'name' },
      ],
      items: [
        { id: 1, name: 'Заявка на сертификат' },
        { id: 2, name: 'Заявка на Интернет' },
        { id: 3, name: 'Заявка на Крипту' },
        { id: 4, name: 'Служебная записка' },
        { id: 5, name: 'Объяснительная' },
      ],
    };
  },
};
</script>

<template>
  <v-data-table hide-default-footer
                :headers="headers"
                :items="items"></v-data-table>
</template>
