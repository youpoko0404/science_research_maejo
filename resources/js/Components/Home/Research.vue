<template>
  <div>
    <p>ผลการค้นหา {{ "3" }} รายการ</p>
    <!-- {{ research }} -->
    <v-data-table
      :headers="headers"
      :items="items"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1 row-pointer"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.index`]="{ index }">
        {{ index + 1 }}
      </template>
      <template v-slot:no-data> ไม่พบผลการค้นหา </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Research",
  props: {
    research: Object,
  },
  components: {},
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "ลำดับ",
          align: "center",
          sortable: false,
          value: "index",
          width: "100px",
        },
        {
          text: "ชื่อผลงาน",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "ชื่อผู้แต่ง",
          align: "start",
          sortable: false,
          value: "calories",
          width: "400px",
        },
      ],
      items: [
        {
          name: "Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>