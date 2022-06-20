<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
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
              <v-text-field
                label="ชื่อผลงานวิจัย"
                v-model="research_name"
              ></v-text-field>
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
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="รหัสอ้างอิงมหาวิทยาลัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">ช่วงเวลาวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="ช่วงเวลาวิจัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">รูปแบบงานวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="รูปแบบงานวิจัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">ประเภทงานวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="ประเภทงานวิจัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">สาขางานวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="สาขางานวิจัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">กิจกรรมที่เกี่ยวข้อง : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="กิจกรรมที่เกี่ยวข้อง"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">Road map : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="Road map"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">สถานะงานวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="สถานะงานวิจัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">ประเภทโครงการวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="ประเภทโครงการวิจัย"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">ลักษณะโครงการวิจัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="ลักษณะโครงการวิจัย"
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <br />
      <div class="pa-4 grey lighten-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <p class="h3 ml-4">ส่วนที่ 2</p>
          <v-btn color="primary" dark @click="dialog.dialog_researcher = true">
            นักวิจัย
          </v-btn>
        </div>
        <v-row>
          <v-col cols="auto">
            <v-subheader class="mt-2">รหัสอ้างอิงมหาวิทยาลัย : </v-subheader>
          </v-col>
          <v-col>
            <v-select
              :items="parameter.branch_group"
              item-text="value_ref"
              item-value="value"
              label="รหัสอ้างอิงมหาวิทยาลัย"
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <br />
      <div class="pa-4 grey lighten-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <p class="h3 ml-4">ส่วนที่ 3 ที่ปรึกษางานวิจัย</p>
          <v-btn color="primary"> ที่ปรึกษางานวิจัย </v-btn>
        </div>
        <v-row>
          <v-select
            :items="parameter.branch_group"
            item-text="value_ref"
            item-value="value"
            label="ที่ปรึกษางานวิจัย"
          ></v-select>
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
          <v-text-field label="แนวทางการทำวิจัย"></v-text-field>
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
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
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
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
        </v-row>
      </div>
      <br />
      <div class="pa-4 grey lighten-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <p class="h3 ml-4">ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย</p>
          <v-btn color="primary"> แหล่งทุนสนับสนุน </v-btn>
        </div>
        <v-row>
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
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
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
        </v-row>
      </div>
      <br />
      <div class="pa-4 grey lighten-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <p class="h3 ml-4">ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย</p>
          <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
        </div>
        <v-row>
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
        </v-row>
      </div>
      <br />
      <div class="pa-4 grey lighten-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <p class="h3 ml-4">ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์</p>
          <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
        </div>
        <v-row>
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
        </v-row>
      </div>
      <br />
      <div class="pa-4 grey lighten-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <p class="h3 ml-4">ส่วนที่ 15 การนำงานวิจัยไปใช้อ้างอิง</p>
          <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
        </div>
        <v-row>
          <v-textarea label="ผลสำเร็จที่จะได้รับ"></v-textarea>
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
          <v-btn color="primary" dark>บันทึกงานวิจัย</v-btn>
        </v-row>
      </div>
    </v-container>

    <div class="text-center">
      <v-dialog v-model="dialog.dialog_researcher" width="900">
        <v-card>
          <v-card-title class="grey lighten-2 mb-2"> นักวิจัย </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="auto">
                <v-subheader class="mt-2">ชื่อนักวิจัย : </v-subheader>
              </v-col>
              <v-col>
                <v-select
                  :items="parameter.branch_group"
                  item-text="value_ref"
                  item-value="value"
                  label="รหัสอ้างอิงมหาวิทยาลัย"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-subheader class="mt-2">สังกัด : </v-subheader>
              </v-col>
              <v-col>
                <v-select
                  :items="parameter.branch_group"
                  item-text="value_ref"
                  item-value="value"
                  label="รหัสอ้างอิงมหาวิทยาลัย"
                ></v-select>
              </v-col>
              <v-col cols="auto">
                <v-subheader class="mt-2">สาขา : </v-subheader>
              </v-col>
              <v-col>
                <v-select
                  :items="parameter.branch_group"
                  item-text="value_ref"
                  item-value="value"
                  label="รหัสอ้างอิงมหาวิทยาลัย"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-subheader class="mt-2">ตำแหน่งงานวิจัย : </v-subheader>
              </v-col>
              <v-col>
                <v-select
                  :items="parameter.branch_group"
                  item-text="value_ref"
                  item-value="value"
                  label="รหัสอ้างอิงมหาวิทยาลัย"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-subheader class="mt-2">ร้อยละความรับผิดชอบ : </v-subheader>
              </v-col>
              <v-col>
                <v-select
                  :items="parameter.branch_group"
                  item-text="value_ref"
                  item-value="value"
                  label="รหัสอ้างอิงมหาวิทยาลัย"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog.dialog_researcher = !dialog.dialog_researcher"
            >
              ยกเลิก
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="dialog.dialog_researcher = !dialog.dialog_researcher"
            >
              ยืนยัน
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
    dialog: {
      dialog_researcher: false,
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
  },
};
</script>


