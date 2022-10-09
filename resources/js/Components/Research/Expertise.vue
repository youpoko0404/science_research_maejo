<template>
  <div>
    <Loading :loading="loading || user_loading" />
    <v-container>
      <div class="d-flex justify-space-between">
        <div style="font-size: 30px">
          <div style="font-size: 30px">ความเชี่ยวชาญ</div>
        </div>
        <template v-if="user.role == 'admin'">
          <div>
            <v-btn color="primary" @click="updateExpertise()">
              Update Expertise
            </v-btn>
          </div>
        </template>
      </div>
      <v-divider></v-divider>
      <v-row>
        <v-text-field
          label="ค้นหาข้อมูลจากความเชี่ยวชาญ ชื่อ-สกุล"
          solo
          v-model="query_param"
          v-on:keyup.enter="heddleOnClickSearch"
        >
          <template v-slot:append>
            <v-btn color="primary" @click="heddleOnClickSearch"> SEARCH </v-btn>
          </template>
        </v-text-field>
        <template v-if="this.$route.query.q">
          <div style="font-size: 15px; margin-bottom: 10px">
            ผลการค้นหา
            {{ search_user_expertise ? search_user_expertise.length : 0 }}
            รายการ
          </div>
          <v-data-table
            :headers="headers"
            :items="search_user_expertise"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.index`]="{ index }">
              {{ index + 1 }}
            </template>
            <template v-slot:[`item.name`]="{ item }">
              {{
                `${item.titlePositionShort} ${item.firstName} ${item.lastName}`
              }}
            </template>
            <template v-slot:no-data> ไม่พบผลการค้นหา </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </template>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Loading from "../../Components/Loading/Loading";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Loading,
  },
  data: () => ({
    checkResearch: false,
    query_param: "",
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
        text: "ความเชี่ยวชาญ",
        align: "start",
        value: "type",
        width: "70%",
      },
      {
        text: "ชื่อ-สกุล",
        align: "start",
        value: "name",
        width: "25",
      },
    ],
  }),
  created() {
    if (this.$route.query.q) {
      this.query_param = this.$route.query.q;
      this.fetchSearchUserExpertise(this.$route.query.q);
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user ?? [],
      loading: (state) => state.research.loading,
      user_loading: (state) => state.user.loading,
      search_user_expertise: (state) => state.user.search_user_expertise || [],
    }),
  },
  methods: {
    ...mapActions("snackbar", ["showSnack"]),
    snackBar(timeout = 3500, text = "Successfully", color = "success") {
      this.showSnack({
        text: text,
        color: color,
        timeout: timeout,
      });
    },
    heddleOnClickSearch() {
      this.$router.replace(
        {
          query: {
            q: this.query_param,
          },
        },
        () => {}
      );
      if (this.query_param) {
        this.fetchSearchUserExpertise(this.query_param);
      }
    },
    fetchSearchUserExpertise(q) {
      this.$store.dispatch("user/fetchSearchUserExpertise", q);
    },
    updateExpertise() {
      this.$store
        .dispatch("user/updateExpertise")
        .then((e) => {
          if (e.message == "Successfully")
            this.snackBar(3500, "Successfully", "success");
        })
        .catch((error) => {
          this.snackBar(3500, "มีบางอย่างผิดพลาดโปรดลองอีกครั้ง", "warning");
        });
    },
  },
};
</script>


