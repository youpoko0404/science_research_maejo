<template>
  <div>
    <Loading :loading="loading || loadingParameter" />
    <v-container>
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
                {{
                    `${search_research_by_id.research_period_start} ถึง ${search_research_by_id.research_period_end}` ||
                    "-- ไม่ระบุ --"
                }}
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
                      search_research_by_id.research_branch
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
              <v-data-table :headers="headers_research_owner" :items="research_owner_name(search_research_by_id)"
                hide-default-footer>
                <template v-slot:[`item.count`]="{ index }">
                  {{ index + 1 }}
                </template>
                <template v-slot:[`item.research_name`]="{ item }">
                  <strong>{{ item.research_name }}</strong> <br />
                  คณะ :{{ item.research_group }} <br />
                  สาขา :{{ item.research_branch }} <br />
                  ตำแหน่ง :{{ item.research_position }} <br />
                </template>
                <template v-slot:[`item.position`]="{ item }">
                  {{ item.research_type }}
                </template>
                <template v-slot:[`item.percent`]="{ item }">
                  {{ `${item.research_responsible}%` }}
                </template>
              </v-data-table>
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
                <div v-html="
                  showText(search_research_by_id.research_operation) ||
                  'ไม่มีข้อมูลแนวทางการดำเนินงานวิจัย'
                "></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 5 วัตถุประสงค์งานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div v-html="
                  showText(search_research_by_id.research_objective) ||
                  'ไม่มีข้อมูลวัตถุประสงค์งานวิจัย'
                "></div>
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
                <div v-html="
                  showText(search_research_by_id.research_benefit) ||
                  'ไม่มีข้อมูลประโยชน์ที่คาดว่าจะได้รับ'
                "></div>
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
                <div v-html="
                  showText(search_research_by_id.research_achievements) ||
                  'ไม่มีข้อมูลผลสำเร็จที่คาดว่าจะได้รับ'
                "></div>
              </v-card>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย</div>
            <v-col>
              <v-card class="pa-2" outlined tile>
                <div v-html="
                  showText(search_research_by_id.research_area) ||
                  'ไม่มีข้อมูลพื้นที่ดำเนินงานวิจัย'
                "></div>
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
              <template v-if="search_research_by_id.research_fundings.length > 0">
                <v-data-table :headers="headers_research_fundings" :items="search_research_by_id.research_fundings"
                  hide-default-footer>
                  <template v-slot:[`item.count`]="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:[`item.year`]="{ item }">
                    ปีงบประมาณ : {{ item.year }} <br />
                    {{ toFormatDateShortTH(item.date1) }} ถึง
                    {{ toFormatDateShortTH(item.date2) }}
                  </template>
                  <template v-slot:[`item.title`]="{ item }">
                    <strong>ประเภทแหล่งทุน :</strong>
                    {{
                        fetchParameterByGroupKey(
                          parameter,
                          "funding_type_group",
                          item.type
                        )
                    }}
                    <br />
                    {{
                        fetchParameterByGroupKey(
                          parameter,
                          item.type,
                          item.source_capital
                        )
                    }}
                    <br />
                    {{
                        fetchParameterByGroupKey(
                          parameter,
                          "funding_level_group",
                          item.capital_level
                        )
                    }}
                  </template>
                  <template v-slot:[`item.price`]="{ item }">
                    {{ toFixedNumber(item.amount) }}
                  </template>
                  <template slot="body.append">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>รวมจำนวนเงิน</th>
                      <th>
                        {{
                            toFixedNumber(
                              search_research_by_id.research_fundings.reduce(
                                (t, n) => t + Number(n.amount),
                                0
                              )
                            )
                        }}
                      </th>
                    </tr>
                  </template>
                </v-data-table>
              </template>
              <template v-else>
                <div class="pa-4 grey lighten-2 rounded-lg text-center">
                  ไม่มีข้อมูลแหล่งทุนสนับสนุนงานวิจัย
                </div>
              </template>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 11 เอกสารประกอบงานวิจัย</div>
            <v-btn class="ma-3" @click="
              downloadFile(
                search_research_by_id.id,
                search_research_by_id.research_papers_path
              )
            " outlined color="indigo" :disabled="search_research_by_id.research_papers_path == null">
              ดาวน์โหลดเอกสารประกอบงานวิจัย
              <v-icon right dark> mdi-download-outline </v-icon>
            </v-btn>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">ส่วนที่ 12 การนำเสนองานวิจัย</div>
            <v-col>
              <template v-if="search_research_by_id.research_presentations.length > 0">
                <v-data-table :headers="headers_research_presentations"
                  :items="search_research_by_id.research_presentations" hide-default-footer>
                  <template v-slot:[`item.count`]="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:[`item.research_presentation_date`]="{ item }">
                    {{ toFormatDateShortTH(item.research_presentation_date) }}
                  </template>

                  <template v-slot:[`item.description`]="{ item }">
                    <v-row>
                      <v-col>
                        <strong> รูปแบบการนำเสนอ : </strong>{{
                            fetchParameterByGroupKey(
                              parameter,
                              "presentations_type_group",
                              item.presentation_style
                            )
                        }}
                        <br />
                      </v-col>
                      <v-col>
                        <strong> ประเภทงานวิชาการ : </strong>
                        {{
                            fetchParameterByGroupKey(
                              parameter,
                              "presentations_academic_type_group",
                              item.academic_work
                            )
                        }}
                        <br />
                      </v-col>
                      <v-col>
                        <strong> ชื่อวิชาการ : </strong>
                        {{ item.academic_name }}
                        <br />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <strong> สถานที่นำเสนอ : </strong>{{ item.place_presentation }}
                        <br />
                      </v-col>
                      <v-col>
                        <strong> ระดับการนำเสนอ : </strong>
                        {{
                            fetchParameterByGroupKey(
                              parameter,
                              "presentation_level_group",
                              item.presentation_level
                            )
                        }}
                        <br />
                      </v-col>
                      <v-col>
                        <strong> ชื่อหน่วยงานที่่จัด : </strong>
                        {{ item.organization_name }}
                        <br />
                      </v-col>
                    </v-row>
                    <br />
                  </template>
                </v-data-table>
              </template>
              <template v-else>
                <div class="pa-4 grey lighten-2 rounded-lg text-center">
                  ไม่มีข้อมูลการนำเสนองานวิจัย
                </div>
              </template>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย
            </div>
            <v-col>
              <template v-if="search_research_by_id.research_publications.length > 0">
                <v-data-table :headers="headers_research_publications"
                  :items="search_research_by_id.research_publications" hide-default-footer>
                  <template v-slot:[`item.count`]="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:[`item.publication_date`]="{ item }">
                    {{ toFormatDateShortTH(item.publication_date) }}
                  </template>
                  <template v-slot:[`item.description`]="{ item }">
                    <strong>
                      {{ search_research_by_id.title_name_en }}
                    </strong>
                    <br />
                    <strong> วารสารที่ตีพิมพ์ : </strong> {{ item.title_th }}
                    <br />
                    <v-row>
                      <v-col>
                        <strong> ฉบับที่ : </strong>{{ item.no }}
                        <br />
                      </v-col>
                      <v-col>
                        <strong> หน้า : </strong> {{ item.page_number }}
                        <br />
                      </v-col>
                      <v-col>
                        <strong> ระดับการนำเสนอ :</strong>{{
                            fetchParameterByGroupKey(
                              parameter,
                              "presentation_level_group",
                              item.presentation_level
                            )
                        }}
                        <br />
                      </v-col>
                    </v-row>
                    <br />
                    <!-- <strong> เจ้าของวารสาร</strong>
                      <br /> -->
                  </template>
                  <!-- <template v-slot:[`item.wight`]="{ item }">
                      {{ item.amount }}
                    </template> -->
                </v-data-table>
              </template>
              <template v-else>
                <div class="pa-4 grey lighten-2 rounded-lg text-center">
                  ไม่มีข้อมูลการตีพิมพ์เผยแพร่งานวิจัย
                </div>
              </template>
            </v-col>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <div style="font-size: 30px">
              ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์
            </div>
            <v-col>
              <template v-if="search_research_by_id.research_benefits.length > 0">
                <v-data-table :headers="headers_research_benefits" :items="search_research_by_id.research_benefits"
                  hide-default-footer>
                  <template v-slot:[`item.count`]="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:[`item.date_reference`]="{ item }">
                    {{ toFormatDateShortTH(item.date_reference) }}
                  </template>
                  <template v-slot:[`item.description`]="{ item }">
                    <strong> ชื่อผู้วิจัยที่นำไปอ้างอิง : </strong>{{ item.research_name_reference }}
                    <br />
                    <strong> ชื่อภาษาไทย/Research Name : </strong>{{ item.research_name }}
                    <br />
                    <strong> URL เชื่อมโยง : </strong>{{ item.url }}
                    <br />
                    <strong> การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ : </strong>{{ item.reference }}
                    <br />
                  </template>
                </v-data-table>
              </template>
              <template v-else>
                <div class="pa-4 grey lighten-2 rounded-lg text-center">
                  ไม่มีข้อมูลการนำงานวิจัยไปใช้ประโยชน์
                </div>
              </template>
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
              <v-btn class="ma-3" @click="
                downloadFile(
                  search_research_by_id.id,
                  search_research_by_id.research_reference_path
                )
              " outlined color="indigo" :disabled="
  search_research_by_id.research_reference_path == null
                ">
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
import dayJs from "../Utili/dayJs";
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  name: "DetailResearch",
  components: {
    Loading,
  },
  data: () => ({
    headers_research_fundings: [
      { text: "", value: "count", width: "10px" },
      { text: "ปีงบประมาณ / วันที่", value: "year" },
      { text: "รายละเอียดแหล่งทุน", value: "title" },
      { text: "จำนวนเงิน/บาท", value: "price", align: "end" },
    ],
    headers_research_publications: [
      { text: "", value: "count", width: "10px" },
      {
        text: "วันที่ดำเนินการ",
        value: "publication_date",
        align: "center",
        width: "300px",
      },
      { text: "รายละเอียด", value: "description" },
      // {
      //   text: "น้ำหนักการตีพิมพ์",
      //   value: "wight",
      //   align: "center",
      // },
    ],
    headers_research_presentations: [
      { text: "", value: "count", width: "10px" },
      {
        text: "วันที่นำเสนองานวิจัย",
        value: "research_presentation_date",
        width: "300px",
        align: "center",
      },
      { text: "รายละเอียด", value: "description" },
    ],
    headers_research_benefits: [
      { text: "", value: "count", width: "10px" },
      {
        text: "วันที่ถูกอ้างอิง",
        value: "date_reference",
        width: "300px",
        align: "center",
      },
      { text: "รายละเอียด", value: "description" },
    ],
    headers_research_owner: [
      { text: "", value: "count", width: "10px" },
      {
        text: "รายชื่อนักวิจัย",
        value: "research_name",
        align: "left",
      },
      { text: "ตำแหน่งนักวิจัย", value: "position" },
      { text: "สัดส่วน (%)", value: "percent" },
    ],
  }),
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
      "branch_group",
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

    toFormatDateShortTH(date) {
      return dayJs.toFormatDateShortTH(date);
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

    toFixedNumber(item) {
      if (item) return Number(item).toFixed(2);
    },

    research_owner_name(search_research_by_id) {
      if (search_research_by_id) {
        let arrayOwner = [];
        let main = {
          research_name: search_research_by_id.research_main_name,
          research_position: search_research_by_id.research_main_position,
          research_responsible: search_research_by_id.research_main_responsible,
          research_group: search_research_by_id.research_main_group,
          research_branch: search_research_by_id.research_main_branch,
          research_type: "ผู้วิจัยหลัก",
        };
        arrayOwner.push(main);
        if (search_research_by_id.research_seconds) {
          search_research_by_id.research_seconds.forEach((element) => {
            let second = {
              research_name: element.research_second_name,
              research_position: element.research_second_position,
              research_responsible: element.research_second_responsible,
              research_group: element.research_second_group,
              research_branch: element.research_second_branch,
              research_type: "ผู้วิจัยรอง",
            };
            arrayOwner.push(second);
          });
        }
        return arrayOwner;
      }
    },
  },
};
</script>


