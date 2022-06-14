<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <p class="h3">ข้อมูลงานวิจัย</p>
      <v-divider></v-divider>
      <v-row>
        <v-text-field label="ค้นหาข้อมูลจากรหัสโครงการ ชื่อโครงการภาษาไทย ชื่อโครงการภาษาอังกฤษ ชื่อผู้วิจัย" solo
          v-model="query_param">
          <template v-slot:append>
            <v-btn depressed tile color="primary" @click="heddleOnClickSearch">
              SEARCH
            </v-btn>
          </template>
        </v-text-field>
        <template v-if="this.$route.query.search">
          <Research :research="item" />
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
export default {
  components: {
    BarChart,
    Research,
    Loading,
  },
  data: () => ({
    loading: false,
    checkResearch: false,
    query_param: "",
    item: [],
  }),
  created() {
    if (this.$route.query.search) {
      this.query_param = this.$route.query.search
    }
  },
  methods: {
    heddleOnClickSearch() {
      this.$router.replace({
        query: {
          search: this.query_param
        }
      })
    },
  },
};
</script>


