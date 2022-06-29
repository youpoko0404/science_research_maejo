<template>
  <div>
    <p>ผลการค้นหา {{ research ? research.length : 0 }} รายการ</p>
    <v-data-table :headers="headers" :items="research ? research : []" :page.sync="page" :items-per-page="itemsPerPage"
      hide-default-footer @click:row="heddleOnClick" class="elevation-1 row-pointer" @page-count="pageCount = $event">
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
    research: {
      type: Array,
      default: () => [],
    },
  },
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
          value: "research_name",
        },
        {
          text: "ชื่อผู้แต่ง",
          align: "start",
          value: "calories",
        },
      ],
    };
  },
  methods: {
    heddleOnClick(row) {
      if (row) {
        this.$router.push({
          path: "research",
          query: { id: row.id },
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.row-pointer>>>tbody tr :hover {
  cursor: pointer;
}
</style>