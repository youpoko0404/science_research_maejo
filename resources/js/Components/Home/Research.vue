<template>
  <div>
    <div style="font-size: 15px; margin-bottom: 10px">
      ผลการค้นหา {{ research ? research.length : 0 }} รายการ
    </div>
    <v-data-table
      :headers="headers"
      :items="research ? research : []"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @click:row="heddleOnClick"
      class="elevation-1 row-pointer"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.index`]="{ index }">
        {{ index + 1 }}
      </template>
      <template v-slot:[`item.research_name`]="{ item }">
        {{ item.title_name_th }}<br />
        {{ item.title_name_en }}
      </template>
      <template v-slot:[`item.research_period_start`]="{ item }">
        {{ convertDate(item.research_period_start) }}
      </template>
      <!-- <template v-slot:[`item.name`]="{ item }">
        {{
          item.part_2
            .map((e) => {
              return e.name;
            })
            .join(", ")
        }}
      </template> -->
      <template v-slot:no-data> ไม่พบผลการค้นหา </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
import dayJs from "../Utili/dayJs";
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
          width: "5%",
        },
        {
          text: "ชื่อผลงาน",
          align: "start",
          value: "research_name",
          width: "50%",
        },
        {
          text: "ชื่อผู้แต่ง",
          align: "start",
          value: "research_main_name",
          width: "25%",
        },
        {
          text: "ช่วงเวลาวิจัย",
          align: "start",
          value: "research_period_start",
          width: "20%",
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
    convertDate(date) {
      return dayJs.formatDateTH(date);
    },
  },
};
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>