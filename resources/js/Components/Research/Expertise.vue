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
          label="ค้นหาข้อมูลความเชี่ยวชาญ"
          solo
          v-model="query_param"
          v-on:keyup.enter="heddleOnClickSearch"
        >
          <template v-slot:append>
            <v-btn color="primary" @click="heddleOnClickSearch"> SEARCH </v-btn>
          </template>
        </v-text-field>
        <v-col cols="3">
          <v-card class="mx-auto" max-width="300">
            <v-col cols="12">
              <h5>สาขาวิชาความเชี่ยวชาญ</h5>
              <v-checkbox
                label="ทั้งหมด"
                color="green darken-3"
                value="all"
                hide-details
                @click="selectAllCheckBox"
                v-model="selectAll"
              ></v-checkbox>
              <div
                v-for="expertise in expertise_exp_main_field"
                :key="expertise.expMainFieldId"
              >
                <v-checkbox
                  v-model="selected"
                  :label="expertise.expMainField"
                  color="green darken-3"
                  :value="expertise.expMainFieldId"
                  hide-details
                  @click="selectCheckBox"
                >
                </v-checkbox>
              </div>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="1" style="width: 1.33333333%">
          <v-divider vertical></v-divider
        ></v-col>
        <v-col cols="8" style="width: 72.66666667%">
          <template v-if="this.$route.query.q">
            <div style="font-size: 15px; margin-bottom: 10px">
              ผลการค้นหา
              {{ filteredItems ? filteredItems.length : 0 }}
              รายการ
            </div>
            <v-data-table
              :headers="headers"
              :items="filteredItems"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              class="elevation-1"
              @page-count="pageCount = $event"
            >
              <template v-slot:[`item.index`]="{ index }">
                {{ index + 1 }}
              </template>
              <template v-slot:[`item.detail`]="{ item }">
                <strong> ชื่อหน่วยงาน : </strong>
                {{
                  `${item.section || ""}  ${item.division || ""} ${
                    item.faculty || ""
                  }`
                }}
                <br />
                <strong> ประเภทความเชี่ยวชาญ : </strong>
                {{ `${item.expType || ""}` }}
                <br />
                <strong> กลุ่มสาขาวิชาความเชี่ยวชาญ : </strong>
                {{ `${item.expGroupField || ""} ${item.expMainField || ""}` }}
                <br />
                <strong> อนุสาขาวิชาความเชี่ยวชาญ : </strong>
                {{ `${item.expSubField || ""}` }}
                <br />
                <strong> รายละเอียดความเชี่ยวชาญเพิ่มเติม : </strong>
                {{ `${item.expDetail || ""}` }}
                <br />
                <template v-if="!isEmpty(item.isResearch)">
                  <strong>
                    มีผลงานวิจัย/ผลงานทางวิชาการ/ผลงานอื่น ๆ ที่เกี่ยวข้อง
                  </strong>
                  <br />
                </template>
                <template v-if="!isEmpty(item.isService)">
                  <strong>
                    เป็นวิทยากร/ให้บริการวิชาการ/สอน/บรรยายแก่บุคคลอื่นหรือองค์กร
                  </strong>
                  <br />
                </template>
                <template v-if="!isEmpty(item.isAward)">
                  <strong> ได้รับรางวัลในสาขาวิชาที่มีความเชี่ยวชาญ </strong>
                  <br />
                </template>
                <template v-if="!isEmpty(item.isExperience)">
                  <strong> ความเชี่ยวชาญที่สั่งสมจากประสบการณ์การทำงาน </strong>
                  <br />
                </template>
                <template v-if="!isEmpty(item.isInterest)">
                  <strong>
                    ความเชี่ยวชาญที่มีความสนใจและมีการศึกษาหาความรู้/ฝึกฝนปฏิบัติจนมีความเชี่ยวชาญ
                  </strong>
                  <br />
                </template>
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
        </v-col>
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
    selected: [],
    selectAll: [],
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
        text: "รายละเอียด",
        align: "start",
        value: "detail",
        width: "70%",
      },
      {
        text: "ชื่อ-สกุล",
        align: "center",
        value: "name",
        width: "25",
      },
    ],
  }),
  async created() {
    await this.fetchExpertiseExpMainFieldAll();
    if (this.$route.query.q) {
      this.query_param = this.$route.query.q;
      this.fetchSearchUserExpertise(this.$route.query.q);
    }
    this.selected = this.expertise_exp_main_field.map((e) => e.expMainFieldId);
    this.selectAll = ["all"];
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user ?? [],
      loading: (state) => state.research.loading,
      user_loading: (state) => state.user.loading,
      search_user_expertise: (state) => state.user.search_user_expertise || [],
      expertise_exp_main_field: (state) =>
        state.user.expertise_exp_main_field || [],
    }),

    filteredItems() {
      var result = [];
      this.selected.forEach((element) => {
        result.push(
          ..._.orderBy(
            this.search_user_expertise.filter((item) => {
              return item.expMainFieldId.toLowerCase().includes(element);
            }),
            "headline"
          )
        );
      });
      return result;
    },
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
      this.selected = this.expertise_exp_main_field.map(
        (e) => e.expMainFieldId
      );
      this.selectAll = ["all"];
    },
    async fetchExpertiseExpMainFieldAll() {
      await this.$store.dispatch("user/fetchExpertiseExpMainFieldAll");
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
    selectAllCheckBox() {
      if (this.selectAll.includes("all")) {
        this.selected = this.expertise_exp_main_field.map(
          (e) => e.expMainFieldId
        );
      } else {
        this.selected = [];
      }
    },

    selectCheckBox() {
      if (this.selected.length == this.expertise_exp_main_field.length) {
        this.selectAll = ["all"];
      } else {
        this.selectAll = [];
      }
    },

    isEmpty(value) {
      if (value != null && value != "") return false;
      else return true;
    },
  },
};
</script>


