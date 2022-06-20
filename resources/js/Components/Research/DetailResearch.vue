<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <v-form ref="request" lazy-validation>
        <v-row justify="space-between">
          <template v-if="research_id == 0">
            <v-col>
              <p class="h3">เพิ่มงานวิจัย</p>
            </v-col>
          </template>
          <template v-else>
            <v-col>
              <p class="h3 mt-6">รายละเอียดงานวิจัย</p>
            </v-col>
            <v-col>
              <v-row>
                <v-col cols="10 text-right">
                  <div>หากท่านต้องการลบงานวิจัยนี้ออกจากระบบ</div>
                  <div>
                    (หากลบงานวิจัยใด ๆ
                    ออกจากระบบแล้วจะไม่สามารถเรียกข้อมูลงานวิจัยนั้นกลับมาได้อีก)
                  </div>
                </v-col>
                <v-col cols="2">
                  <v-btn color="error" dark>ลบงานวิจัยนี้</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
        <v-divider></v-divider>
        <div class="pa-4 grey lighten-5 rounded-lg">
          <template v-if="research_id == 0">
            <v-row>
              <v-col cols="auto">
                <v-subheader class="mt-2">ชื่อผลงานวิจัย : </v-subheader>
              </v-col>
              <v-col>
                <v-text-field label="ชื่อผลงานวิจัย" v-model="request.research_name" :rules="rules.required" required>
                </v-text-field>
              </v-col>
            </v-row>
          </template>
          <template v-else>
            <p class="h3 ml-4">Name</p>
          </template>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">รหัสอ้างอิงมหาวิทยาลัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value"
                label="รหัสอ้างอิงมหาวิทยาลัย"></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ช่วงเวลาวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="ช่วงเวลาวิจัย">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">รูปแบบงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="รูปแบบงานวิจัย">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ประเภทงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="ประเภทงานวิจัย">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">สาขางานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="สาขางานวิจัย">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">กิจกรรมที่เกี่ยวข้อง : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value"
                label="กิจกรรมที่เกี่ยวข้อง"></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">Road map : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="Road map">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">สถานะงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="สถานะงานวิจัย">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ประเภทโครงการวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value"
                label="ประเภทโครงการวิจัย"></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ลักษณะโครงการวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value"
                label="ลักษณะโครงการวิจัย"></v-select>
            </v-col>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <p class="h3 pa-2 mr-auto">ส่วนที่ 2 นักวิจัย</p>
            <template v-if="request.researcher.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.researcher = []"> ล้างค่า </v-btn>
            </template>
            <v-btn class="pa-2 primary" @click="() => {
              editedIndex = -1
              dialog.dialog_researcher = true
            }
            "> นักวิจัย</v-btn>
          </div>
          <v-row>
            <template v-if="request.researcher.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div v-for="researcher in request.researcher" :key="researcher.id">
                  <v-row>
                    <div class="d-flex justify-end">
                      <v-btn class="pa-2 error mr-2" @click="() => {
                        ManageItemResearcher(researcher, 'delete')
                      }"> ลบ</v-btn>
                      <v-btn class="pa-2 primary" @click="() => {
                        ManageItemResearcher(researcher, null)
                        dialog.dialog_researcher = true
                      }"> แก้ไข</v-btn>
                    </div>
                    <v-subheader> {{ `ชื่อนักวิจัย : ${researcher.researcher_name || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `สังกัด : ${researcher.researcher_structure || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `สาขา : ${researcher.researcher_branch || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `ตำแหน่งงานวิจัย : ${researcher.researcher_position || '-- ไม่ระบุ --'}` }}
                    </v-subheader>
                    <v-subheader> {{ `ร้อยละความรับผิดชอบ : ${researcher.researcher_responsibility || '-- ไม่ระบุ --'}`
                    }}
                    </v-subheader>
                  </v-row>
                  <v-divider></v-divider>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="pa-4 grey lighten-2 rounded-lg text-center">
                -- ไม่ระบุ --
              </div>
            </template>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 3 ที่ปรึกษางานวิจัย</p>
            <v-btn color="primary"> ที่ปรึกษางานวิจัย </v-btn>
          </div>
          <v-row>
            <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value"
              label="ที่ปรึกษางานวิจัย">
            </v-select>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 4 แนวทางการดำเนินงานวิจัย</p>
            <v-btn color="primary"> แนวทางการทำวิจัย </v-btn>
          </div>
          <v-row>
            <v-textarea label="แนวทางการทำวิจัย"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 5 วัตถุประสงค์งานวิจัย</p>
            <v-btn color="primary"> วัตถุประสงค์ </v-btn>
          </div>
          <v-row>
            <v-textarea label="วัตถุประสงค์"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ</p>
            <v-btn color="primary"> ประโยชน์ที่จะได้รับ </v-btn>
          </div>
          <v-row>
            <v-textarea label="ประโยชน์ที่จะได้รับ"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ</p>
            <v-btn color="primary"> ผลสำเร็จที่จะได้รับ </v-btn>
          </div>
          <v-row>
            <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย</p>
            <v-btn color="primary"> พื้นที่ดำเนินงานวิจัย </v-btn>
          </div>
          <v-row>
            <v-textarea label="พื้นที่ดำเนินงานวิจัย"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <p class="h3 pa-2 mr-auto">ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง</p>
            <v-btn class="pa-2 primary mr-2"> งานวิจัยหลัก</v-btn>
            <v-btn class="pa-2 primary"> งานวิจัยย่อย </v-btn>
          </div>
          <v-row>
            <v-textarea label="งานวิจัยอื่น ๆ ที่เกี่ยวข้อง"></v-textarea>
          </v-row>
        </div>
        <br />

        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <p class="h3 pa-2 mr-auto">ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย</p>
            <template v-if="request.part_10.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.part_10 = []"> ล้างค่า </v-btn>
            </template>
            <v-btn class="pa-2 primary" @click="() => {
              editedIndex = -1
              dialog.dialog_part_10 = true
            }
            "> เพิ่มแหล่งทุนสนับสนุน</v-btn>
          </div>
          <v-row>
            <template v-if="request.part_10.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div v-for="part_10 in request.part_10" :key="part_10.id">
                  <v-row>
                    <div class="d-flex justify-end">
                      <v-btn class="pa-2 error mr-2" @click="() => {
                        ManageItemPart_10(part_10, 'delete')
                      }"> ลบ</v-btn>
                      <v-btn class="pa-2 primary" @click="() => {
                        ManageItemPart_10(part_10, null)
                        dialog.dialog_part_10 = true
                      }"> แก้ไข</v-btn>
                    </div>
                    <!-- <v-subheader> {{ `ชื่อนักวิจัย : ${part_10.researcher_name || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `สังกัด : ${part_10.researcher_structure || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `สาขา : ${part_10.researcher_branch || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `ตำแหน่งงานวิจัย : ${part_10.researcher_position || '-- ไม่ระบุ --'}` }}
                    </v-subheader>
                    <v-subheader> {{ `ร้อยละความรับผิดชอบ : ${part_10.researcher_responsibility || '-- ไม่ระบุ --'}`
                    }}
                    </v-subheader> -->
                  </v-row>
                  <v-divider></v-divider>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="pa-4 grey lighten-2 rounded-lg text-center">
                -- ไม่ระบุ --
              </div>
            </template>
          </v-row>
        </div>

        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 11 เอกสารประกอบงานวิจัย</p>
            <v-btn color="primary"> เอกสารประกอบ </v-btn>
          </div>
          <v-row>
            <v-file-input label="เอกสารประกอบงานวิจัย"></v-file-input>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 12 การนำเสนองานวิจัย</p>
            <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
          </div>
          <v-row>
            <v-textarea label="การนำเสนองานวิจัย"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย</p>
            <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
          </div>
          <v-row>
            <v-textarea label="การตีพิมพ์เผยแพร่งานวิจัย"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์</p>
            <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
          </div>
          <v-row>
            <v-textarea label="การนำงานวิจัยไปใช้ประโยชน์"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">ส่วนที่ 15 การนำงานวิจัยไปใช้อ้างอิง</p>
            <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
          </div>
          <v-row>
            <v-textarea label="การนำงานวิจัยไปใช้อ้างอิง"></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <p class="h3 ml-4">แนบไฟล์เอกสารอ้างอิง</p>
            <v-btn color="primary"> เอกสารประกอบ </v-btn>
          </div>
          <v-row>
            <v-file-input label="เอกสารอ้างอิง"></v-file-input>
          </v-row>
        </div>
        <div class="pa-4">
          <v-row>
            <v-btn color="primary" dark @click="() => {
            
              if (this.$refs.request.validate()) {
                this.$refs.request.reset()
              } else {
                this.$refs.request.validate()
                valid = true
              }
            }">บันทึกงานวิจัย</v-btn>
          </v-row>
        </div>
      </v-form>
    </v-container>

    <div class="text-center">
      <v-dialog v-model="dialog.dialog_researcher" width="900">
        <v-form ref="form_researcher">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2"> นักวิจัย </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ชื่อนักวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="researcher.researcher_name" label="ชื่อนักวิจัย" :rules="rules.required"
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สังกัด : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="researcher.researcher_structure" label="สังกัด" :rules="rules.required"
                    required></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สาขา : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="researcher.researcher_branch" label="สาขา" :rules="rules.required" required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ตำแหน่งงานวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="researcher.researcher_position" label="ตำแหน่งงานวิจัย" :rules="rules.required"
                    required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ร้อยละความรับผิดชอบ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="researcher.researcher_responsibility" label="ร้อยละความรับผิดชอบ"
                    :rules="rules.required" required>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="() => {
                this.$refs.form_researcher.reset()
                dialog.dialog_researcher = !dialog.dialog_researcher
              }">
                ยกเลิก
              </v-btn>
              <v-btn color="primary" text @click="() => {
                this.$refs.form_researcher.validate()
                if (this.$refs.form_researcher.validate()) {
                  onClickResearcher()
                  dialog.dialog_researcher = !dialog.dialog_researcher
                }
              }">
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog.dialog_part_10" width="900">
        <v-form ref="form_part_10">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2"> แบบฟอร์มจัดการงบประมาณ </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ชื่อนักวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="researcher.researcher_name" label="ชื่อนักวิจัย" :rules="rules.required"
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="() => {
                this.$refs.form_part_10.reset()
                dialog.dialog_part_10 = !dialog.dialog_part_10
              }">
                ยกเลิก
              </v-btn>
              <v-btn color="primary" text @click="() => {
                this.$refs.form_part_10.validate()
                if (this.$refs.form_part_10.validate()) {
                  onClickResearcher()
                  dialog.dialog_part_10 = !dialog.dialog_part_10
                }
              }">
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="valid" width="300">
        <v-card>
          <v-card-title class="grey lighten-2 mb-2"> แจ้งเตือน </v-card-title>
          <v-card-text>
            กรุณากรอกข้อมูลให้ครบ
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="valid = false">
              ตกลง
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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
    valid: false,
    editedIndex: -1,
    dialog: {
      dialog_researcher: false,
      dialog_part_10: false,
    },
    request: {
      research_name: "",
      university_code: "",
      research_period: "",
      research_format: "",
      research_type: "",
      research_branch: "",
      related_activities: "",
      road_map: "",
      research_status: "",
      researcher: [],
      part_10: []
    },
    researcher: {
      researcher_name: "",
      researcher_structure: "",
      researcher_branch: "",
      researcher_position: "",
      researcher_responsibility: "",
    },
    part_10: {
      researcher_name: "",
      researcher_structure: "",
      researcher_branch: "",
      researcher_position: "",
      researcher_responsibility: "",
    },
    rules: {
      required: [val => (val || '').length > 0 || 'This field is required'],
    },
  }),
  computed: {
    ...mapState({
      loading: (state) => state.parameter.loading,
      parameter: (state) => state.parameter,
    }),
    research_id() {
      return this.$route.query.id;
    },
  },
  created() {
    this.fetchParameter(["branch_group"]);
  },

  methods: {
    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },

    onClickResearcher() {
      const researcher = {
        researcher_name: this.researcher.researcher_name,
        researcher_structure: this.researcher.researcher_structure,
        researcher_branch: this.researcher.researcher_branch,
        researcher_position: this.researcher.researcher_position,
        researcher_responsibility: this.researcher.researcher_responsibility,
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.researcher[this.editedIndex], this.researcher)
      } else {
        this.request.researcher.push(researcher)
      }
      this.$refs.form_researcher.reset()
    },

    ManageItemResearcher(item, action) {
      this.editedIndex = this.request.researcher.indexOf(item)
      this.researcher = Object.assign({}, item)
      if (action == 'delete') {
        this.request.researcher.splice(this.editedIndex, 1)
      }
    },
  },
};
</script>


