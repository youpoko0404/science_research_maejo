<template>
  <div>
    <Loading :loading="loading" />
    <v-card>
      <v-card-title class="justify-center">จำนวนงานวิจัยแยกตามสาขา</v-card-title>
      <Bar :chart-options="chartOptions" :chart-data="chartData(dashboard)" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
        :height="height" />
    </v-card>

    <div class="mt-5">
      <v-list>
        <v-list-item v-for="item in dashboard" :key="item.id">
          <v-list-item-content>
            <v-list-item-title v-text="item.branch"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            {{ item.count }}
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </div>
    <v-alert dense border="left" type="warning" class="mt-5" icon="mdi-alert">
      <strong>หมายเหตุ : </strong> ผลรวมจำนวนงานที่จำแนกตามสาขา
      อาจมีจำนวนมากกว่าผลรวมในกราฟสรุปผลจำนวนงานวิจัย
      เนื่องจากงานวิจัยบางงานมีหน่วยงานที่รับผิดชอบการทำงานวิจัยมากกว่า 1
      หน่วยงาน
    </v-alert>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
    Loading
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => { },
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.dashboard.loading,
      dashboard: (state) => state.dashboard.dashboard,
    }),
  },
  created() {
    this.fetchDashboard()
  },

  methods: {
    fetchDashboard() {
      this.$store.dispatch("dashboard/fetchDashboard")
    },

    chartData(dashboard) {
      let chartData = {}
      if (dashboard) {
        chartData = {
          labels: dashboard.map(e => e.branch.replace("สาขาวิชา", "")),
          datasets: [
            {
              data: dashboard.map(e => e.count),
              backgroundColor: dashboard.map(e => e.color)
            },
          ],
        }
      }
      return chartData
    },


  },
};
</script>
