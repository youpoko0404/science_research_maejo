<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <p class="h3">ข้อมูลงานวิจัย</p>
      <v-divider></v-divider>
      <v-row>
        <v-text-field
          label="ค้นหาข้อมูลจากรหัสโครงการ ชื่อโครงการภาษาไทย ชื่อโครงการภาษาอังกฤษ ชื่อผู้วิจัย"
          solo
          v-model="research"
        >
          <template v-slot:append>
            <v-btn depressed tile color="primary" @click="heddleOnClickSearch">
              SEARCH
            </v-btn>
          </template>
        </v-text-field>
        <template v-if="loading"> </template>
        <template v-else-if="checkResearch && !loading">
          <Research :research="item" />
        </template>
        <template v-else> <BarChart /> </template>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import HttpRequest from "../../HttpRequest/httpRequest";
import BarChart from "../../Components/Chart/BarChart";
import Research from "../../Components/Home/Research";
import Loading from "../../Components/Loading/Loading";
const httpRequest = new HttpRequest();
export default {
  components: {
    BarChart,
    Research,
    Loading,
  },
  data: () => ({
    loading: false,
    research: "",
    checkResearch: false,
    item: [],
  }),
  methods: {
    heddleOnClickSearch() {
      if (this.research) {
        this.checkResearch = true;
        this.loading = true;
        setTimeout(() => {
          this.item = [
            {
              132: "123",
            },
          ];
          this.loading = false;
        }, 2000);
      } else {
        this.checkResearch = false;
      }
    },
  },
};
</script>


