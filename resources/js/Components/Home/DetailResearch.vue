<template>
  <div>
    <Loading :loading="loading || loadingParameter" />
    <v-container v-if="!loading">
      <v-row justify="space-between">
        <v-col>
          <p class="h3">รายละเอียดงานวิจัย</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <p class="h3 ml-4">{{ search_research_by_id.research_name_th }}</p>
      <p class="h4 ml-4">{{ search_research_by_id.research_name_en }}</p>
      <div class="pa-md-4 mx-lg-auto">
        <div class="pa-4 grey lighten-1 rounded-lg">
          <v-container>
            <v-row>
              <v-col>
                <b>รหัสอ้างอิงมหาวิทยาลัย : </b> {{ search_research_by_id.university_code || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>รหัสอ้างอิง วช. :</b> {{ "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>สถานะการดำเนินงาน :</b> {{ "-- ไม่ระบุ --" }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <b>วันที่ดำเนินงาน :</b> {{ "-- ไม่ระบุ --" }}
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <div class="pa-md-4 mx-lg-auto">
        <div class="pa-4 grey  lighten-5 rounded-lg">
          <v-container>
            <p class="h4"><b>ส่วนที่ 1 ข้อมูลทั่วไป</b></p>
            <v-row>
              <v-col>
                <p><b>ข้อมูลทั่วไป ภาษาไทย</b></p>
                <div class="d-flex flex-column">
                  <v-col>
                    <b>หัวข้อ :</b> {{ search_research_by_id.research_name_th || "-- ไม่ระบุ --" }}
                  </v-col>
                  <v-col>
                    <b>บทคัดย่อ :</b> {{ "-- ไม่ระบุ --" }}
                  </v-col>
                  <v-col>
                    <b>คำสำคัญ :</b> {{ "-- ไม่ระบุ --" }}
                  </v-col>
                </div>
              </v-col>
              <v-col>
                <p><b>ข้อมูลทั่วไป ภาษาอังกฤษ</b></p>
                <div class="d-flex flex-column">
                  <v-col>
                    <b>Title :</b> {{ search_research_by_id.research_name_en || "-- ไม่ระบุ --" }}
                  </v-col>
                  <v-col>
                    <b>Abstract :</b> {{ "-- ไม่ระบุ --" }}
                  </v-col>
                  <v-col>
                    <b>Keyword :</b> {{ "-- ไม่ระบุ --" }}
                  </v-col>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <b>รูปแบบงานวิจัย :</b> {{ search_research_by_id.research_format || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>ประเภทงานวิจัย :</b> {{ search_research_by_id.research_type || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>สาขางานวิจัย :</b>{{ fetchParameterDATA(parameter, "branch_group",
                    search_research_by_id.research_branch).value_ref || "-- ไม่ระบุ --"
                }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <b>กิจกรรมที่เกี่ยวข้อง :</b> {{ search_research_by_id.related_activities || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
                <b>Road map :</b> {{ search_research_by_id.road_map || "-- ไม่ระบุ --" }}
              </v-col>
              <v-col>
              </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 2 นักวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_2 || "ไม่มีข้อมูลนักวิจัย" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 3 ที่ปรึกษางานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ fetchParameterDATA(parameter, "research_consultant", search_research_by_id.part_3).value_ref ||
                    "ไม่มีข้อมูลที่ปรึกษางานวิจัย"
                }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 4 แนวทางการดำเนินงานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_4 || "ไม่มีข้อมูลแนวทางการดำเนินงานวิจัย" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 5 วัตถุประสงค์งานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_5 || "ไม่มีข้อมูลวัตถุประสงค์งานวิจัย" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_6 || "ไม่มีข้อมูลประโยชน์ที่คาดว่าจะได้รับ" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_7 || "ไม่มีข้อมูลผลสำเร็จที่คาดว่าจะได้รับ" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_8 || "ไม่มีข้อมูลพื้นที่ดำเนินงานวิจัย" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_9 || "ไม่มีข้อมูลงานวิจัยอื่น ๆ ที่เกี่ยวข้อง" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_10 || "ไม่มีข้อมูลแหล่งทุนสนับสนุนงานวิจัย" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 11 เอกสารประกอบงานวิจัย</b></p>
            <v-btn class="ma-3" @click="downloadFile(search_research_by_id.id, search_research_by_id.part_11)" outlined
              color="indigo" :disabled="search_research_by_id.part_11 == null">
              ดาวน์โหลดเอกสารประกอบงานวิจัย
              <v-icon right dark>
                mdi-download-outline
              </v-icon>
            </v-btn>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 12 การนำเสนองานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_12 || "ไม่มีข้อมูลการนำเสนองานวิจัย" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_13 || "ไม่มีข้อมูลการตีพิมพ์เผยแพร่งานวิจัย" }}
              </v-card>
            </v-col>

          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_14 || "ไม่มีข้อมูลการนำงานวิจัยไปใช้ประโยชน์" }}
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <p class="h4"><b>ส่วนที่ 15 การนำงานวิจัยไปอ้างอิง</b></p>
            <v-col>
              <v-card class="pa-2" outlined tile>
                {{ search_research_by_id.part_15 || "ไม่มีข้อมูลการนำงานวิจัยไปอ้างอิง" }}
              </v-card>
            </v-col>
            <div class="d-flex flex-row-reverse" flat tile>
              <v-btn class="ma-3" @click="downloadFile(search_research_by_id.id, search_research_by_id.ref_file)"
                outlined color="indigo" :disabled="search_research_by_id.ref_file == null">
                ดาวน์โหลดเอกสารอ้างอิง
                <v-icon right dark>
                  mdi-download-outline
                </v-icon>
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
  data: () => ({
  }),
  computed: {
    ...mapState({
      loading: (state) => state.dashboard.loading,
      search_research_by_id: (state) => state.dashboard.search_research_by_id || [],
      loadingParameter: (state) => state.parameter.loading,
      parameter: (state) => state.parameter || [],
    }),
  },
  created() {
    this.fetchParameter(["branch_group", "funding_type_group", "funding_level_group", "institutional_budget_group", "research_consultant"]);
    this.fetchSearchResearchById(this.$route.query.id)
  },

  methods: {
    
    fetchSearchResearchById(id) {
      if (id) {
        this.$store.dispatch("dashboard/fetchSearchResearchById", id)
      }
    },

    fetchParameterDATA(items, group, key) {
      if (items) {
        return items[group].find(e => e.value == key)
      }
    },

    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },

    downloadFile(id, filename) {
      let req = {
        id: id,
        filename: filename || ""
      }
      this.$store.dispatch("dashboard/downloadFile", req).then((response) => {
        let blob = new Blob([response], { type: 'application/pdf' })
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.target = '_blank';
        link.click()
      });
    },
  },
};
</script>


