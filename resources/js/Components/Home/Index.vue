<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <div style="font-size: 30px">ข้อมูลงานวิจัย</div>
      <v-divider></v-divider>
      <v-row>
        <v-text-field
          label="ค้นหาข้อมูลจากรหัสโครงการ ชื่อโครงการภาษาไทย ชื่อโครงการภาษาอังกฤษ ชื่อผู้วิจัย"
          solo
          v-model="query_param"
          v-on:keyup.enter="heddleOnClickSearch"
        >
          <template v-slot:append>
            <v-btn color="primary" @click="heddleOnClickSearch"> SEARCH </v-btn>
          </template>
        </v-text-field>
        <template v-if="this.$route.query.q">
          <Research :research="search_research" />
        </template>
        <template v-else>
          <BarChart />
        </template>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import BarChart from "../../Components/Chart/BarChart";
import Research from "../../Components/Home/Research";
import Loading from "../../Components/Loading/Loading";
import { mapState } from "vuex";
export default {
  components: {
    BarChart,
    Research,
    Loading,
  },
  data: () => ({
    checkResearch: false,
    query_param: "",
  }),
  created() {
    if (this.$route.query.q) {
      this.query_param = this.$route.query.q;
      this.fetchSearchResearch(this.$route.query.q);
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.dashboard.loading,
      search_research: (state) => state.dashboard.search_research,
    }),
  },
  methods: {
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
        this.fetchSearchResearch(this.query_param);
      }
    },
    fetchSearchResearch(q) {
      this.$store.dispatch("dashboard/fetchSearchResearch", q);
    },
  },
};
</script>


