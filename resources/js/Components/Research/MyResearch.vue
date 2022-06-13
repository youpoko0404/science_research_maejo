<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <p class="h3">งานวิจัย</p>
      <v-divider></v-divider>
      <v-row>
        <v-data-table
          :headers="headers"
          :items="items"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template v-slot:[`item.index`]="{ index }">
            {{ index + 1 }}
          </template>
          <template v-slot:[`item.edit`]="{ item }">
            <v-btn color="warning" dark @click="heddleOnClickEdit(item.id)"
              >แก้ไข</v-btn
            >
          </template>
          <template v-slot:no-data> ไม่พบผลการค้นหา </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import HttpRequest from "../../HttpRequest/httpRequest";
import Loading from "../../Components/Loading/Loading";
const httpRequest = new HttpRequest();
export default {
  components: {
    Loading,
  },
  data: () => ({
    loading: false,
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
        text: "แก้ไขงานวิจัย",
        align: "start",
        sortable: false,
        value: "edit",
        width: "200px",
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
        id: 1,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
        id: 2,
      },
    ],
  }),
  methods: {
    heddleOnClickEdit(id) {
      if (id) {
        this.$router.push({
          path: "detail-research",
          query: { id: id },
        });
      }
    },
  },
};
</script>


