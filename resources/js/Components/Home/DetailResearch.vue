<template>
  <div>
    <Loading :loading="loading || loadingParameter" />
    <v-container v-if="!loading">
      <v-row justify="space-between">
        <v-col>
          <div style="font-size: 30px">รายละเอียดงานวิจัย</div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div style="font-size: 30px">
        {{ search_research_by_id.title_name_th }}
      </div>
      <div style="font-size: 30px">
        {{ search_research_by_id.title_name_en }}
      </div>
      <div class="pa-md-4 mx-lg-auto">
        <div class="pa-4 grey lighten-1 rounded-lg">
          <v-container>
            <v-row>
              <v-col>
                <b>รหัสอ้างอิงมหาวิทยาลัย : </b>
                {{
                  search_research_by_id.ref_code_university || "-- ไม่ระบุ --"
                }}
              </v-col>
              <v-col>
                <b>รหัสอ้างอิง วช. :</b>
                {{ search_research_by_id.ref_code_nr || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>สถานะการดำเนินงาน :</b>
                {{ search_research_by_id.research_status || "-- ไม่ระบุ --" }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <b>วันที่ดำเนินงาน :</b>
                {{ search_research_by_id.research_period || "-- ไม่ระบุ --" }}
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <div class="pa-md-4 mx-lg-auto">
        <div class="pa-4 grey lighten-5 rounded-lg">
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 1 ข้อมูลทั่วไป</div>
            <v-row>
              <v-col>
                <div style="font-size: 20px">ข้อมูลทั่วไป ภาษาไทย</div>
                <div class="d-flex flex-column">
                  <v-col>
                    <b>หัวข้อ :</b>
                    {{ search_research_by_id.title_name_th || "-- ไม่ระบุ --" }}
                  </v-col>
                  <v-col>
                    <b>บทคัดย่อ :</b>
                    {{
                      search_research_by_id.abstract_name_th || "-- ไม่ระบุ --"
                    }}
                  </v-col>
                  <v-col>
                    <b>คำสำคัญ :</b>
                    {{
                      search_research_by_id.keyword_name_th || "-- ไม่ระบุ --"
                    }}
                  </v-col>
                </div>
              </v-col>
              <v-col>
                <div style="font-size: 20px">ข้อมูลทั่วไป ภาษาอังกฤษ</div>
                <div class="d-flex flex-column">
                  <v-col>
                    <b>Title :</b>
                    {{ search_research_by_id.title_name_en || "-- ไม่ระบุ --" }}
                  </v-col>
                  <v-col>
                    <b>Abstract :</b>
                    {{
                      search_research_by_id.abstract_name_en || "-- ไม่ระบุ --"
                    }}
                  </v-col>
                  <v-col>
                    <b>Keyword :</b>
                    {{
                      search_research_by_id.keyword_name_en || "-- ไม่ระบุ --"
                    }}
                  </v-col>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <b>รูปแบบงานวิจัย :</b>
                {{ search_research_by_id.research_model || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>ประเภทงานวิจัย :</b>
                {{ search_research_by_id.research_type || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>สาขางานวิจัย :</b>
                {{
                  fetchParameterByGroupKey(
                    parameter,
                    "branch_group",
                    search_research_by_id.research_branch_main
                  ) || "-- ไม่ระบุ --"
                }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <b>กิจกรรมที่เกี่ยวข้อง :</b>
                {{
                  search_research_by_id.research_activities || "-- ไม่ระบุ --"
                }}
              </v-col>
              <v-col>
                <b>Road map :</b>
                {{ search_research_by_id.road_map || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col> </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 2 นักวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_project_type || "-- ไม่ระบุ --"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 3 ที่ปรึกษางานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_consultant || "-- ไม่ระบุ --"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 4 แนวทางการดำเนินงานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div
                  v-html="
                    showText(search_research_by_id.research_operation) ||
                    'ไม่มีข้อมูลแนวทางการดำเนินงานวิจัย'
                  "
                ></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 5 วัตถุประสงค์งานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div
                  v-html="
                    showText(search_research_by_id.research_objective) ||
                    'ไม่มีข้อมูลวัตถุประสงค์งานวิจัย'
                  "
                ></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ
            </div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div
                  v-html="
                    showText(search_research_by_id.research_benefit) ||
                    'ไม่มีข้อมูลประโยชน์ที่คาดว่าจะได้รับ'
                  "
                ></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ
            </div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div
                  v-html="
                    showText(search_research_by_id.research_achievements) ||
                    'ไม่มีข้อมูลผลสำเร็จที่คาดว่าจะได้รับ'
                  "
                ></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div
                  v-html="
                    showText(search_research_by_id.research_area) ||
                    'ไม่มีข้อมูลพื้นที่ดำเนินงานวิจัย'
                  "
                ></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง
            </div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  fetchParameterByGroupKey(
                    parameter,
                    "research_other_group",
                    search_research_by_id.research_other
                  ) || "ไม่มีข้อมูลงานวิจัยอื่น ๆ ที่เกี่ยวข้อง'"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย
            </div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_fundings ||
                  "ไม่มีข้อมูลแหล่งทุนสนับสนุนงานวิจัย"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 11 เอกสารประกอบงานวิจัย</div>
            <v-btn
              class="ma-3"
              @click="
                downloadFile(
                  search_research_by_id.id,
                  search_research_by_id.research_papers_path
                )
              "
              outlined
              color="indigo"
              :disabled="search_research_by_id.research_papers_path == null"
            >
              ดาวน์โหลดเอกสารประกอบงานวิจัย
              <v-icon right dark> mdi-download-outline </v-icon>
            </v-btn>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 12 การนำเสนองานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_presentations ||
                  "ไม่มีข้อมูลการนำเสนองานวิจัย"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย
            </div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_publications ||
                  "ไม่มีข้อมูลการตีพิมพ์เผยแพร่งานวิจัย"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์
            </div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_benefits ||
                  "ไม่มีข้อมูลการนำงานวิจัยไปใช้ประโยชน์"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 15 การนำงานวิจัยไปอ้างอิง</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{
                  search_research_by_id.research_reference ||
                  "ไม่มีข้อมูลการนำงานวิจัยไปอ้างอิง"
                }}
              </v-card>
            </v-col>
            <div class="d-flex flex-row-reverse" flat tile>
              <v-btn
                class="ma-3"
                @click="
                  downloadFile(
                    search_research_by_id.id,
                    search_research_by_id.research_reference_path
                  )
                "
                outlined
                color="indigo"
                :disabled="
                  search_research_by_id.research_reference_path == null
                "
              >
                ดาวน์โหลดเอกสารอ้างอิง
                <v-icon right dark> mdi-download-outline </v-icon>
              </v-btn>
            </div>
          </v-container>
        </div>
      </div>
    </v-container>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: {
    Loading,
  },
  data: () => ({}),
  computed: {
    ...mapState({
      loading: (state) => state.dashboard.loading,
      search_research_by_id: (state) =>
        state.dashboard.search_research_by_id || [],
      loadingParameter: (state) => state.parameter.loading,
      parameter: (state) => state.parameter || [],
    }),
  },
  created() {
    this.fetchParameter([
      "bachelor_degree_branch_group",
      "master_degree_branch_group",
      "doctor_degree_branch_group",
      "research_other_group",
      "branch_main_group",
      "funding_type_group",
      "external_institution_budget_group",
      "institutional_budget_group",
      "personal_budget_group",
      "funding_level_group",
      "presentations_type_group",
      "presentations_academic_type_group",
      "presentation_level_group",
    ]);
    this.fetchSearchResearchById(this.$route.query.id);
  },

  methods: {
    fetchSearchResearchById(id) {
      if (id) {
        this.$store.dispatch("dashboard/fetchSearchResearchById", id);
      }
    },

    fetchParameterByGroupKey(items, group, key) {
      if (items && group && key) {
        const param = items[group]?.find((e) => e.value == key);
        if (param) return param.value_ref;
      }
    },

    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },

    downloadFile(id, filename) {
      let req = {
        id: id,
        filename: filename || "",
      };
      this.$store.dispatch("dashboard/downloadFile", req).then((response) => {
        let blob = new Blob([response], { type: "application/pdf" });
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.target = "_blank";
        link.click();
      });
    },

    showText(item) {
      if (item) return item.replace(/\n/g, "<br />");
      return "";
    },
  },
};
</script>


