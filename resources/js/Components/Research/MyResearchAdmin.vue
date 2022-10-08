<template>
  <v-container>
    <Loading :loading="loading" />
    <div class="d-flex justify-space-between">
      <div style="font-size: 30px">
        {{ "งานวิจัยทั้งหมด" }}
      </div>
      <v-btn color="primary" @click="heddleOnClickButton(0)">
        เพิ่มข้อมูล
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="researchAll"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      >
        <template v-slot:[`item.index`]="{ index }">
          {{ index + 1 }}
        </template>
        <template v-slot:[`item.research_name`]="{ item }">
          {{ item.title_name_th }}<br />
          {{ item.title_name_en }}
        </template>
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn color="warning" dark @click="heddleOnClickButton(item.id)"
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
</template>


<script>
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: {
    Loading,
  },
  data: () => ({
    dialog: {
      dialogDelete: false,
      user_expertise: false,
    },
    deleteId: 0,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    id_user_expertise: 0,
    user_expertise: "",
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
        value: "research_name",
      },
      {
        text: "",
        align: "start",
        sortable: false,
        value: "edit",
        width: "200px",
      },
    ],
  }),
  created() {
    this.fetchResearch();
  },

  computed: {
    ...mapState({
      loading: (state) => state.research.loading,
      researchAll: (state) => state.research.researchAll ?? [],
    }),
  },

  methods: {
    heddleOnClickButton(id) {
      this.$router.push({
        path: "detail-research",
        query: { id: id },
      });
    },

    fetchResearch() {
      this.$store.dispatch("research/fetchAllAdmin");
    },
  },
};
</script>


