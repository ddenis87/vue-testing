<script>
export default {
  name: 'DCatalogUser',
  data() {
    return {
      headers: [
        { text: 'Отдел', value: 'dep' },
        { text: 'Должность', value: 'post' },
        { text: 'ФИО', value: 'fio' },
      ],
      items: [
        { dep: 'ОЗИ', post: 'Вед. спец.-эксперт', fio: 'Глок Эдуард Олегович' },
        { dep: 'ПУ', post: 'Гл.спец.-эксперт', fio: 'Шашанова Ольга Викторовна' },
        { dep: 'ИТ', post: 'Гл.спец.-эксперт', fio: 'Чагаров Андрей Викторович' },
        { dep: 'Казначейство', post: 'Зам.гл.бухгалтера', fio: 'Гайдамак Ирина Валерьевна' },
        { dep: 'Пенсионщики', post: 'Начальник отдела', fio: 'Кучеренко Наталья Александровна' },
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
