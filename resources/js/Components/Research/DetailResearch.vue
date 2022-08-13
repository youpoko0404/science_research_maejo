<template>
  <div>
    <Loading :loading="loading || loadingUser" />
    <v-container>
      <v-form ref="request" lazy-validation>
        <v-row justify="space-between">
          <template v-if="research_id == 0">
            <v-col>
              <div style="font-size: 30px">สร้างงานวิจัย</div>
            </v-col>
          </template>
          <template v-else>
            <v-col>
              <div style="font-size: 30px">รายละเอียดงานวิจัย</div>
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
                  <v-btn color="error" dark @click="dialog.dialogDelete = true"
                    >ลบงานวิจัยนี้</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
        <v-divider></v-divider>
        <div class="pa-4 grey lighten-5 rounded-lg">
          <v-row>
            <v-col md="6" sm="12">
              <div style="font-size: 20px">ส่วนที่ 1 ข้อมูลทั่วไปภาษาไทย</div>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">หัวข้อ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="หัวข้อ"
                    color="green darken-3"
                    v-model="request.title_name_th"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">บทคัดย่อ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="บทคัดย่อ"
                    color="green darken-3"
                    v-model="request.abstract_name_th"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">คำสำคัญ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="คำสำคัญ"
                    color="green darken-3"
                    v-model="request.keyword_name_th"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="6" sm="12">
              <div style="font-size: 20px">
                ส่วนที่ 1 ข้อมูลทั่วไปภาษาอังกฤษ
              </div>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">Title : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Title"
                    color="green darken-3"
                    v-model="request.title_name_en"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">Abstract : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Abstract"
                    color="green darken-3"
                    v-model="request.abstract_name_en"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">Keyword : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Keyword"
                    color="green darken-3"
                    v-model="request.keyword_name_en"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">รหัสอ้างอิง วช. : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="รหัสอ้างอิง วช."
                color="green darken-3"
                v-model="request.ref_code_nr"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">รหัสอ้างอิงมหาวิทยาลัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="รหัสอ้างอิงมหาวิทยาลัย"
                color="green darken-3"
                v-model="request.ref_code_university"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ช่วงเวลาวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="ช่วงเวลาวิจัย"
                color="green darken-3"
                v-model="request.research_period"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">รูปแบบงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="รูปแบบงานวิจัย"
                color="green darken-3"
                v-model="request.research_model"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ประเภทงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="ประเภทงานวิจัย"
                color="green darken-3"
                v-model="request.research_type"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ระดับสาขางานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select
                :items="parameter.branch_main_group"
                color="green darken-3"
                item-text="value_ref"
                item-value="value"
                label="สาขางานวิจัย"
                v-model="request.research_branch_main"
                :rules="rules.required"
                required
              >
              </v-select>
            </v-col>
            <v-col cols="auto">
              <v-subheader class="mt-2">สาขางานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select
                :items="parameter[request.research_branch_main]"
                color="green darken-3"
                item-text="value_ref"
                item-value="value"
                label="สาขางานวิจัย"
                :disabled="request.branch_main_group == ''"
                v-model="request.research_branch"
                :rules="rules.required"
                required
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">กิจกรรมที่เกี่ยวข้อง : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="กิจกรรมที่เกี่ยวข้อง"
                color="green darken-3"
                v-model="request.research_activities"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">Road map : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="Road map"
                color="green darken-3"
                v-model="request.road_map"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">สถานะงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="สถานะงานวิจัย"
                color="green darken-3"
                v-model="request.research_status"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ประเภทโครงการวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="ประเภทโครงการวิจัย"
                color="green darken-3"
                v-model="request.research_project_type"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ลักษณะโครงการวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="ลักษณะโครงการวิจัย"
                color="green darken-3"
                v-model="request.research_nature"
                :rules="rules.required"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div>
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 2 นักวิจัย
            </div>
          </div>
          <div>
            <v-col>
              <div style="font-size: 20px">ผู้วิจัยหลัก</div>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ชื่อผู้วิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ชื่อผู้วิจัย"
                    color="green darken-3"
                    v-model="request.research_main_name"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สังกัด : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="สังกัด"
                    color="green darken-3"
                    v-model="request.research_main_address"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ตำแหน่งงานวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ตำแหน่งงานวิจัย"
                    color="green darken-3"
                    v-model="request.research_main_position"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ร้อยละความรับผิดชอบ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ร้อยละความรับผิดชอบ"
                    color="green darken-3"
                    v-model="request.research_main_responsible"
                    :rules="rules.requiredNumber"
                    required
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <div style="font-size: 20px">ผู้วิจัยรอง</div>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ชื่อผู้วิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ชื่อผู้วิจัย"
                    color="green darken-3"
                    v-model="request.research_second_name"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สังกัด : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="สังกัด"
                    color="green darken-3"
                    v-model="request.research_second_address"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ตำแหน่งงานวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ตำแหน่งงานวิจัย"
                    color="green darken-3"
                    v-model="request.research_second_position"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ร้อยละความรับผิดชอบ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ร้อยละความรับผิดชอบ"
                    color="green darken-3"
                    v-model="request.research_second_responsible"
                    :rules="rules.requiredNumber"
                    required
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </div>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 3 ที่ปรึกษางานวิจัย
            </div>
          </div>
          <v-row>
            <v-text-field
              label="ที่ปรึกษางานวิจัย"
              color="green darken-3"
              v-model="request.research_consultant"
              :rules="rules.required"
              required
            >
            </v-text-field>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 ml-4" style="font-size: 30px">
              ส่วนที่ 4 แนวทางการดำเนินงานวิจัย
            </div>
          </div>
          <v-row>
            <v-textarea
              color="green darken-3"
              label="แนวทางการดำเนินงานวิจัย"
              v-model="request.research_operation"
              :rules="rules.required"
              required
            ></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 ml-4" style="font-size: 30px">
              ส่วนที่ 5 วัตถุประสงค์งานวิจัย
            </div>
          </div>
          <v-row>
            <v-textarea
              color="green darken-3"
              label="วัตถุประสงค์งานวิจัย"
              v-model="request.research_objective"
              :rules="rules.required"
              required
            ></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 ml-4" style="font-size: 30px">
              ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ
            </div>
          </div>
          <v-row>
            <v-textarea
              color="green darken-3"
              label="ประโยชน์ที่คาดว่าจะได้รับ"
              v-model="request.research_benefit"
              :rules="rules.required"
              required
            ></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 ml-4" style="font-size: 30px">
              ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ
            </div>
          </div>
          <v-row>
            <v-textarea
              color="green darken-3"
              label="ผลสำเร็จที่คาดว่าจะได้รับ"
              v-model="request.research_achievements"
              :rules="rules.required"
              required
            ></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 pa-4" style="font-size: 30px">
              ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย
            </div>
          </div>
          <v-row>
            <v-textarea
              color="green darken-3"
              label="พื้นที่ดำเนินงานวิจัย"
              v-model="request.research_area"
              :rules="rules.required"
              required
            ></v-textarea>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 9 งานวิจัยอื่น ๆ ที่เกี่ยวข้อง
            </div>
          </div>
          <v-row>
            <v-select
              :items="parameter.research_other_group"
              color="green darken-3"
              item-text="value_ref"
              item-value="value"
              label="งานวิจัยอื่น ๆ ที่เกี่ยวข้อง"
              v-model="request.research_other"
              :rules="rules.required"
              required
            >
            </v-select>
          </v-row>
        </div>
        <br />

        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย
            </div>
            <template v-if="request.research_fundings.length > 0">
              <v-btn
                class="pa-2 error mr-2"
                @click="request.research_fundings = []"
              >
                ล้างค่า
              </v-btn>
            </template>
            <v-btn
              class="pa-2 primary"
              @click="
                () => {
                  editedIndex = -1;
                  dialog.research_fundings = true;
                }
              "
            >
              เพิ่มแหล่งทุนสนับสนุน</v-btn
            >
          </div>
          <v-row>
            <template v-if="request.research_fundings.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <v-data-table
                  :headers="headers_research_fundings"
                  :items="request.research_fundings"
                >
                  <template v-slot:[`item.count`]="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:[`item.title`]="{ item }">
                    <strong>{{
                      fetchParameterByGroupKey(
                        parameter,
                        "funding_type_group",
                        item.type
                      )
                    }}</strong>
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
                  <template v-slot:[`item.year`]="{ item }">
                    {{ item.year }} <br />
                    {{ formatDate(item.date1) }} -
                    {{ formatDate(item.date2) }}
                  </template>
                  <template v-slot:[`item.price`]="{ item }">
                    {{ item.amount }}
                  </template>
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                      class="pa-2 error mr-2"
                      @click="
                        () => {
                          onClickManageResearchFunding(item, 'delete');
                        }
                      "
                    >
                      ลบ</v-btn
                    >
                    <v-btn
                      class="pa-2 primary"
                      @click="
                        () => {
                          onClickManageResearchFunding(item, null);
                          dialog.research_fundings = true;
                        }
                      "
                    >
                      แก้ไข</v-btn
                    >
                  </template>
                  <template slot="body.append">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>รวมทั้งหมดเป็น</th>
                      <th>
                        {{
                          request.research_fundings.reduce(
                            (t, n) => t + Number(n.amount),
                            0
                          )
                        }}
                      </th>
                    </tr>
                  </template>
                </v-data-table>
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
            <div class="h3 pa-2" style="font-size: 30px">
              ส่วนที่ 11 เอกสารประกอบงานวิจัย
            </div>
            <v-btn
              color="primary"
              @click="$refs.research_papers_path.$refs.input.click()"
            >
              เพิ่มเอกสารประกอบ
            </v-btn>
          </div>
          <v-row>
            <v-file-input
              ref="research_papers_path"
              color="green darken-3"
              accept="application/pdf"
              v-model="request.research_papers_path"
              label="เอกสารประกอบงานวิจัย"
            >
            </v-file-input>
          </v-row>
        </div>

        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 12 การนำเสนองานวิจัย
            </div>
            <template v-if="request.research_presentations.length > 0">
              <v-btn
                class="pa-2 error mr-2"
                @click="request.research_presentations = []"
              >
                ล้างค่า
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                class="pa-2 primary"
                @click="
                  () => {
                    editedIndex = -1;
                    dialog.research_presentations = true;
                  }
                "
              >
                เพิ่มข้อมูล</v-btn
              >
            </template>
          </div>
          <v-row>
            <template v-if="request.research_presentations.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div
                  v-for="research_presentations in request.research_presentations"
                  :key="research_presentations.id"
                >
                  <v-row>
                    <div class="d-flex justify-end">
                      <!-- <v-btn
                        class="pa-2 error mr-2"
                        @click="
                          () => {
                            onClickManageResearchPresentations(
                              research_presentations,
                              'delete'
                            );
                          }
                        "
                      >
                        ลบ</v-btn
                      > -->
                      <v-btn
                        class="pa-2 primary"
                        @click="
                          () => {
                            onClickManageResearchPresentations(
                              research_presentations,
                              null
                            );
                            dialog.research_presentations = true;
                          }
                        "
                      >
                        แก้ไข</v-btn
                      >
                    </div>
                    <v-subheader>
                      {{
                        `วันที่นำเสนองานวิจัย : ${
                          formatDate(
                            research_presentations.research_presentation_date
                          ) || "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `รูปแบบการนำเสนอ : ${
                          fetchParameterByGroupKey(
                            parameter,
                            "presentations_type_group",
                            research_presentations.presentation_style
                          ) || "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ประเภทงานวิชาการ : ${
                          fetchParameterByGroupKey(
                            parameter,
                            "presentations_academic_type_group",
                            research_presentations.academic_work
                          ) || "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ชื่อวิชาการ : ${
                          research_presentations.academic_name ||
                          "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `สถานที่นำเสนอ : ${
                          research_presentations.place_presentation ||
                          "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ระดับการนำเสนอ : ${
                          fetchParameterByGroupKey(
                            parameter,
                            "presentation_level_group",
                            research_presentations.presentation_level
                          ) || "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ชื่อหน่วยงานที่่จัด : ${
                          research_presentations.organization_name ||
                          "-- ไม่ระบุ --"
                        } 
                        `
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
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย
            </div>
            <template v-if="request.research_publications.length > 0">
              <v-btn
                class="pa-2 error mr-2"
                @click="request.research_publications = []"
              >
                ล้างค่า
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                class="pa-2 primary"
                @click="
                  () => {
                    editedIndex = -1;
                    dialog.research_publications = true;
                  }
                "
              >
                เพิ่มข้อมูล</v-btn
              >
            </template>
          </div>
          <v-row>
            <template v-if="request.research_publications.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div
                  v-for="research_publications in request.research_publications"
                  :key="research_publications.id"
                >
                  <v-row>
                    <div class="d-flex justify-end">
                      <!-- <v-btn
                        class="pa-2 error mr-2"
                        @click="
                          () => {
                            onClickManageResearchPublications(
                              research_publications,
                              'delete'
                            );
                          }
                        "
                      >
                        ลบ</v-btn
                      > -->
                      <v-btn
                        class="pa-2 primary"
                        @click="
                          () => {
                            onClickManageResearchPublications(
                              research_publications,
                              null
                            );
                            dialog.research_publications = true;
                          }
                        "
                      >
                        แก้ไข</v-btn
                      >
                    </div>
                    <v-subheader>
                      {{
                        `การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ : ${
                          research_publications.reference || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ระดับการนำเสนอ : ${
                          fetchParameterByGroupKey(
                            parameter,
                            "presentation_level_group",
                            research_publications.presentation_level
                          ) || "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ชื่อบทความภาษาไทย/อังกฤษ : ${
                          research_publications.title_th || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ชื่อบทความภาษาอังกฤษ : ${
                          research_publications.title_en || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `วัน เดือน ปี ที่ตีพิมพ์ : ${
                          formatDate(research_publications.publication_date) ||
                          "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ฉบับที่ : ${
                          research_publications.no || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `เลขหน้า : ${
                          research_publications.page_number || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `โรงพิมพ์/เว็บไซต์ : ${
                          research_publications.printing_website ||
                          "-- ไม่ระบุ --"
                        } 
                        `
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
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์
            </div>
            <template v-if="request.research_benefits.length > 0">
              <v-btn
                class="pa-2 error mr-2"
                @click="request.research_benefits = []"
              >
                ล้างค่า
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                class="pa-2 primary"
                @click="
                  () => {
                    editedIndex = -1;
                    dialog.research_benefits = true;
                  }
                "
              >
                เพิ่มข้อมูล</v-btn
              >
            </template>
          </div>
          <v-row>
            <template v-if="request.research_benefits.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div
                  v-for="research_benefits in request.research_benefits"
                  :key="research_benefits.id"
                >
                  <v-row>
                    <div class="d-flex justify-end">
                      <!-- <v-btn
                        class="pa-2 error mr-2"
                        @click="
                          () => {
                            onClickManageResearchBenefits(
                              research_benefits,
                              'delete'
                            );
                          }
                        "
                      >
                        ลบ</v-btn
                      > -->
                      <v-btn
                        class="pa-2 primary"
                        @click="
                          () => {
                            onClickManageResearchBenefits(
                              research_benefits,
                              null
                            );
                            dialog.research_benefits = true;
                          }
                        "
                      >
                        แก้ไข</v-btn
                      >
                    </div>
                    <v-subheader>
                      {{
                        `วันที่ถูกอ้างอิง : ${
                          formatDate(research_benefits.date_reference) ||
                          "-- ไม่ระบุ --"
                        }`
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ชื่อผู้วิจัยที่นำไปอ้างอิง : ${
                          research_benefits.research_name_reference ||
                          "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `ชื่อภาษาไทย/Research Name : ${
                          research_benefits.research_name || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `URL เชื่อมโยง : ${
                          research_benefits.url || "-- ไม่ระบุ --"
                        } 
                        `
                      }}
                    </v-subheader>
                    <v-subheader>
                      {{
                        `การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ : ${
                          research_benefits.reference || "-- ไม่ระบุ --"
                        } 
                        `
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
            <div class="h3 ml-4" style="font-size: 30px">
              ส่วนที่ 15 การนำงานวิจัยไปใช้อ้างอิง
            </div>
          </div>
          <v-row>
            <v-textarea
              color="green darken-3"
              label="การนำงานวิจัยไปใช้อ้างอิง"
              v-model="request.research_reference"
              :rules="rules.required"
              required
            ></v-textarea>
          </v-row>
        </div>

        <!-- <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 ml-4" style="font-size: 30px">
              ส่วนที่ 15 การนำงานวิจัยไปใช้อ้างอิง
            </div>
            <v-btn color="primary"> เพิ่มข้อมูล </v-btn>
          </div>
          <v-row>
            <template v-if="request.part_15.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div v-for="part_15 in request.part_15" :key="part_15.id">
                  <v-row> </v-row>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="pa-4 grey lighten-2 rounded-lg text-center">
                -- ไม่ระบุ --
              </div>
            </template>
          </v-row>
        </div> -->

        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              แนบไฟล์เอกสารอ้างอิง
            </div>
            <v-btn
              color="primary"
              @click="$refs.research_reference_path.$refs.input.click()"
            >
              เพิ่มเอกสารประกอบ
            </v-btn>
          </div>
          <v-row>
            <v-file-input
              ref="research_reference_path"
              color="green darken-3"
              accept="application/pdf"
              v-model="request.research_reference_path"
              label="เอกสารอ้างอิง"
            >
            </v-file-input>
          </v-row>
        </div>
        <div class="pa-4">
          <v-row>
            <v-btn
              color="primary"
              dark
              @click="
                () => {
                  if (this.$refs.request.validate()) {
                    onClickSave();
                  } else {
                    valid = true;
                  }
                }
              "
              >บันทึกงานวิจัย</v-btn
            >
          </v-row>
        </div>
      </v-form>
    </v-container>

    <div class="text-center">
      <v-dialog v-model="dialog.research_fundings" width="900">
        <v-form ref="research_fundings">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มจัดการงบประมาณ
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter.funding_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="research_fundings.type"
                    label="ประเภททุนสนับสนุน"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <template v-if="research_fundings.type == 'other'">
                    <v-text-field
                      color="green darken-3"
                      v-model="research_fundings.other_type"
                      label="อื่นๆ"
                      :rules="rules.required"
                      required
                    >
                    </v-text-field>
                  </template>
                  <template v-else>
                    <v-select
                      color="green darken-3"
                      :items="parameter[research_fundings.type]"
                      item-text="value_ref"
                      item-value="value"
                      :rules="rules.required"
                      v-model="research_fundings.source_capital"
                      label="แหล่งทุนสนับสนุน"
                      required
                    >
                    </v-select>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-select
                    color="green darken-3"
                    :items="parameter.funding_level_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="research_fundings.capital_level"
                    label="ระดับแหล่งทุน"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_fundings.year"
                    type="number"
                    label="ปีการศึกษา"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-menu
                    v-model="datePicker_date1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="green darken-3"
                        v-model="research_fundings.date1"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        :rules="rules.requiredDateTime"
                        required
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dateNow_date_1"
                      no-title
                      @input="datePicker_date1 = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-menu
                    v-model="datePicker_date2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="green darken-3"
                        v-model="research_fundings.date2"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        :rules="rules.requiredDateTime"
                        required
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dateNow_date_2"
                      no-title
                      @input="datePicker_date2 = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="5">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_fundings.amount"
                    type="number"
                    label="จำนวนเงินที่สนับสนุน"
                    onfocus="this.select()"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="7">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_fundings.description"
                    label="คำอธิบายเพิ่มเติม"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-menu
                    v-model="datePicker_date3"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="green darken-3"
                        v-model="research_fundings.delivery_date"
                        prepend-icon="mdi-calendar"
                        label="วันที่ส่งมอบงานวิจัย"
                        v-bind="attrs"
                        v-on="on"
                        :rules="rules.requiredDateTime"
                        required
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dateNow_date_3"
                      no-title
                      @input="datePicker_date3 = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_fundings.reset();
                    dialog.research_fundings = !dialog.research_fundings;
                  }
                "
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_fundings.validate();
                    if (this.$refs.research_fundings.validate()) {
                      onClickResearchFundings();
                      dialog.research_fundings = !dialog.research_fundings;
                    }
                  }
                "
              >
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog.research_presentations" width="900">
        <v-form ref="research_presentations">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มการจัดการนำเสนองานวิจัย
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-menu
                    v-model="datePicker_date4"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="green darken-3"
                        v-model="
                          research_presentations.research_presentation_date
                        "
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        label="วันที่นำเสนองานวิจัย"
                        v-on="on"
                        :rules="rules.requiredDateTime"
                        required
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dateNow_date_4"
                      no-title
                      @input="datePicker_date4 = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter.presentations_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="research_presentations.presentation_style"
                    label="รูปแบบการนำเสนอ"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter.presentations_academic_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="research_presentations.academic_work"
                    label="ประเภทงานวิชาการ"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_presentations.academic_name"
                    label="ชื่อวิชาการ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_presentations.place_presentation"
                    label="สถานที่นำเสนอ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter.presentation_level_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="research_presentations.presentation_level"
                    label="ระดับการนำเสนอ"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_presentations.organization_name"
                    label="ชื่อหน่วยงานที่จัด"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_presentations.reset();
                    dialog.research_presentations =
                      !dialog.research_presentations;
                  }
                "
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_presentations.validate();
                    if (this.$refs.research_presentations.validate()) {
                      onClickResearchPresentations();
                      dialog.research_presentations =
                        !dialog.research_presentations;
                    }
                  }
                "
              >
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog.research_publications" width="900">
        <v-form ref="research_publications">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มการจัดการตีพิมพ์งานวิจัย
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_publications.reference"
                    label="การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-select
                    color="green darken-3"
                    :items="parameter.presentation_level_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="research_publications.presentation_level"
                    label="ระดับการนำเสนอ"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_publications.title_th"
                    label="ชื่อบทความภาษาไทย/อังกฤษ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_publications.title_en"
                    label="ชื่อบทความภาษาอังกฤษ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-menu
                    v-model="datePicker_date5"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="green darken-3"
                        v-model="research_publications.publication_date"
                        prepend-icon="mdi-calendar"
                        label="วัน เดือน ปี ที่ตีพิมพ์"
                        v-bind="attrs"
                        v-on="on"
                        :rules="rules.requiredDateTime"
                        required
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dateNow_date_5"
                      no-title
                      @input="datePicker_date5 = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_publications.no"
                    label="ฉบับที่"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_publications.page_number"
                    label="เลขหน้า"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_publications.printing_website"
                    label="โรงพิมพ์/เว็บไซต์"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_publications.reset();
                    dialog.research_publications =
                      !dialog.research_publications;
                  }
                "
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_publications.validate();
                    if (this.$refs.research_publications.validate()) {
                      onClickResearchPublications();
                      dialog.research_publications =
                        !dialog.research_publications;
                    }
                  }
                "
              >
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog.research_benefits" width="900">
        <v-form ref="research_benefits">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มการจัดการข้อมูลการถูกอ้างอิงงานวิจัย
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-menu
                    v-model="datePicker_date6"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="green darken-3"
                        v-model="research_benefits.date_reference"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        label="วันที่ถูกอ้างอิง"
                        v-on="on"
                        :rules="rules.requiredDateTime"
                        required
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dateNow_date_6"
                      no-title
                      @input="datePicker_date6 = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_benefits.research_name_reference"
                    label="ชื่อผู้วิจัยที่นำไปอ้างอิง"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_benefits.research_name"
                    label="ชื่อภาษาไทย/Research Name"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_benefits.url"
                    label="URL เชื่อมโยง"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="research_benefits.reference"
                    label="การอ้างอิง / วารสารงาน ที่ สกอ. ยอมรับ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_benefits.reset();
                    dialog.research_benefits = !dialog.research_benefits;
                  }
                "
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="
                  () => {
                    this.$refs.research_benefits.validate();
                    if (this.$refs.research_benefits.validate()) {
                      onClickResearchBenefits();
                      dialog.research_benefits = !dialog.research_benefits;
                    }
                  }
                "
              >
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog.dialogDelete" max-width="500px">
        <v-card>
          <v-card-title>คุณยืนยันที่จะลบข้อมูลงานวิจัยนี้</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog.dialogDelete = false"
              >ยกเลิก</v-btn
            >
            <v-btn
              color="blue darken-1"
              text
              @click="deleteItemConfirm(research_id)"
              >ตกลง</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div class="text-center">
      <v-dialog v-model="valid" width="300">
        <v-card>
          <v-card-title class="grey lighten-2 mb-2"> แจ้งเตือน </v-card-title>
          <v-card-text> กรุณากรอกข้อมูลให้ครบ </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="valid = false"> ตกลง </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>


<script>
import dayJs from "../Utili/dayJs";
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
      dialogDelete: false,
      research_fundings: false,
      research_presentations: false,
      research_publications: false,
      research_benefits: false,
    },
    request: {
      title_name_th: "",
      abstract_name_th: "",
      keyword_name_th: "",
      title_name_en: "",
      abstract_name_en: "",
      keyword_name_en: "",
      ref_code_nr: "",
      ref_code_university: "",
      research_period: "",
      research_model: "",
      research_type: "",
      research_branch: "",
      research_branch_main: "",
      research_activities: "",
      road_map: "",
      research_status: "",
      research_project_type: "",
      research_nature: "",
      research_main_name: "",
      research_main_address: "",
      research_main_position: "",
      research_main_responsible: "",
      research_second_name: "",
      research_second_address: "",
      research_second_position: "",
      research_second_responsible: "",
      research_consultant: "",
      research_operation: "",
      research_objective: "",
      research_benefit: "",
      research_achievements: "",
      research_area: "",
      research_other: "",
      research_papers_path: null,
      research_reference_path: null,
      research_benefits: [],
      research_fundings: [],
      research_presentations: [],
      research_publications: [],
      research_publications: [],
      //research_reference: [],
      research_reference: "",
    },
    research_fundings: {
      type: "",
      other_type: "",
      source_capital: "",
      capital_level: "",
      year: "",
      date1: "",
      date2: "",
      amount: 0,
      description: "",
      delivery_date: "",
    },
    research_presentations: {
      research_presentation_date: "",
      presentation_style: "",
      academic_work: "",
      academic_name: "",
      place_presentation: "",
      presentation_level: "",
      organization_name: "",
    },
    research_publications: {
      reference: "",
      presentation_level: "",
      title_th: "",
      title_en: "",
      publication_date: "",
      no: "",
      page_number: "",
      printing_website: "",
    },
    research_benefits: {
      date_reference: "",
      research_name_reference: "",
      research_name: "",
      url: "",
      reference: "",
    },
    research_reference: {},

    rules: {
      required: [(val) => !!val || "โปรดกรอกข้อมูลให้ครบถ้วน"],
      requiredDateTime: [
        (v) => !!v || "โปรดกรอกข้อมูลให้ครบถ้วน",
        (v) => /^\d{2}\/\d{2}\/\d{4}$/.test(v) || "ข้อมูลไม่ถูกต้อง",
      ],
      requiredNumber: [
        (v) => !!v || "โปรดกรอกข้อมูลให้ครบถ้วน",
        (v) => v <= 100 || "โปรดหรอกข้อมูลไม่เกิน 100%",
      ],
    },
    headers_research_fundings: [
      { text: "", value: "count" },
      { text: "ประมาณทุนสนับสนุน", value: "title" },
      { text: "ปีงบประมาณ", value: "year" },
      { text: "จำนวนเงิน/บาท", value: "price" },
      { text: "จัดการ", value: "actions" },
    ],
    dateNow_date_1: "",
    datePicker_date1: false,
    dateNow_date_2: "",
    datePicker_date2: false,
    dateNow_date_3: "",
    datePicker_date3: false,
    dateNow_date_4: "",
    datePicker_date4: false,
    dateNow_date_5: "",
    datePicker_date5: false,
    dateNow_date_6: "",
    datePicker_date6: false,
  }),

  computed: {
    ...mapState({
      loading: (state) => state.parameter.loading,
      parameter: (state) => state.parameter,
      user: (state) => state.auth.user,
      loadingUser: (state) => state.auth.loading,
    }),
    research_id() {
      return this.$route.query.id;
    },
  },

  watch: {
    dateNow_date_1() {
      this.research_fundings.date1 = dayJs.formatDate(this.dateNow_date_1);
    },
    dateNow_date_2() {
      this.research_fundings.date2 = dayJs.formatDate(this.dateNow_date_2);
    },
    dateNow_date_3() {
      this.research_fundings.delivery_date = dayJs.formatDate(
        this.dateNow_date_3
      );
    },
    dateNow_date_4() {
      this.research_presentations.research_presentation_date = dayJs.formatDate(
        this.dateNow_date_4
      );
    },
    dateNow_date_5() {
      this.research_publications.publication_date = dayJs.formatDate(
        this.dateNow_date_5
      );
    },
    dateNow_date_6() {
      this.research_benefits.date_reference = dayJs.formatDate(
        this.dateNow_date_6
      );
    },
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
    this.fetchResearchById(this.$route.query.id);
  },

  methods: {
    formatDate(date) {
      return dayJs.formatDate(date);
    },
    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },

    fetchParameterByGroupKey(items, group, key) {
      if (items && group && key) {
        const param = items[group]?.find((e) => e.value == key);
        if (param) return param.value_ref;
      }
    },

    fetchResearchById(id) {
      if (id != 0) {
        this.$store.dispatch("research/fetchById", id).then((response) => {
          if (response.success) {
            for (const [key, value] of Object.entries(response.payload)) {
              if (value) {
                if (
                  key == "research_reference_path" ||
                  key == "research_papers_path"
                ) {
                  this.request[key] = new File([""], value);
                } else {
                  this.request[key] = value;
                }
              }
            }
          }
        });
      }
    },

    deleteItemConfirm(id) {
      if (id) {
        this.$store.dispatch("research/delete", id).then((response) => {
          if (response.success) window.location.href = `/my-research`;
        });
      }
    },

    onClickResearchFundings() {
      const research_fundings = {};
      for (const [key, value] of Object.entries(this.research_fundings)) {
        if (key == "date1" || key == "date2" || key == "delivery_date") {
          value = dayJs.parseDate(value);
          research_fundings[key] = value;
        } else {
          research_fundings[key] = value;
        }
      }
      if (this.editedIndex > -1) {
        Object.assign(
          this.request.research_fundings[this.editedIndex],
          this.research_fundings
        );
      } else {
        this.request.research_fundings.push(research_fundings);
      }
      this.$refs.research_fundings.reset();
    },

    onClickManageResearchFunding(item, action) {
      if (action == "delete") {
        this.editedIndex = this.request.research_fundings.indexOf(item);
        // this.research_fundings = Object.assign({}, item);
        this.request.research_fundings.splice(this.editedIndex, 1);
      } else {
        for (const [key, value] of Object.entries(item)) {
          if (key == "date1" || key == "date2" || key == "delivery_date") {
            value = dayJs.formatDate(value);
            item[key] = value;
          } else {
            item[key] = value;
          }
        }
        this.editedIndex = this.request.research_fundings.indexOf(item);
        this.research_fundings = Object.assign({}, item);
      }
    },

    onClickResearchPresentations() {
      const research_presentations = {};
      for (const [key, value] of Object.entries(this.research_presentations)) {
        if (key == "research_presentation_date") {
          value = dayJs.parseDate(value);
          research_presentations[key] = value;
        } else {
          research_presentations[key] = value;
        }
      }
      if (this.editedIndex > -1) {
        Object.assign(
          this.request.research_presentations[this.editedIndex],
          this.research_presentations
        );
      } else {
        this.request.research_presentations.push(research_presentations);
      }
      this.$refs.research_presentations.reset();
    },

    onClickManageResearchPresentations(item, action) {
      for (const [key, value] of Object.entries(item)) {
        if (key == "research_presentation_date") {
          value = dayJs.formatDate(value);
          item[key] = value;
        } else {
          item[key] = value;
        }
      }
      this.editedIndex = this.request.research_presentations.indexOf(item);
      this.research_presentations = Object.assign({}, item);
      if (action == "delete") {
        this.request.research_presentations.splice(this.editedIndex, 1);
      }
    },

    onClickResearchPublications() {
      const research_publications = {};
      for (const [key, value] of Object.entries(this.research_publications)) {
        if (key == "publication_date") {
          value = dayJs.parseDate(value);
          research_publications[key] = value;
        } else {
          research_publications[key] = value;
        }
      }
      if (this.editedIndex > -1) {
        Object.assign(
          this.request.research_publications[this.editedIndex],
          this.research_publications
        );
      } else {
        this.request.research_publications.push(research_publications);
      }
      this.$refs.research_publications.reset();
    },

    onClickManageResearchPublications(item, action) {
      for (const [key, value] of Object.entries(item)) {
        if (key == "publication_date") {
          value = dayJs.formatDate(value);
          item[key] = value;
        } else {
          item[key] = value;
        }
      }
      this.editedIndex = this.request.research_publications.indexOf(item);
      this.research_publications = Object.assign({}, item);
      if (action == "delete") {
        this.request.research_publications.splice(this.editedIndex, 1);
      }
    },

    onClickResearchBenefits() {
      const research_benefits = {};
      for (const [key, value] of Object.entries(this.research_benefits)) {
        if (key == "date_reference") {
          value = dayJs.parseDate(value);
          research_benefits[key] = value;
        } else {
          research_benefits[key] = value;
        }
      }
      if (this.editedIndex > -1) {
        Object.assign(
          this.request.research_benefits[this.editedIndex],
          this.research_benefits
        );
      } else {
        this.request.research_benefits.push(research_benefits);
      }
      this.$refs.research_benefits.reset();
    },

    onClickManageResearchBenefits(item, action) {
      for (const [key, value] of Object.entries(item)) {
        if (key == "date_reference") {
          value = dayJs.formatDate(value);
          item[key] = value;
        } else {
          item[key] = value;
        }
      }
      this.editedIndex = this.request.research_benefits.indexOf(item);
      this.research_benefits = Object.assign({}, item);
      if (action == "delete") {
        this.request.research_benefits.splice(this.editedIndex, 1);
      }
    },

    onClickSave() {
      let formData = new FormData();
      for (const [key, value] of Object.entries(this.request)) {
        if (
          key == "research_benefits" ||
          key == "research_fundings" ||
          key == "research_presentations" ||
          key == "research_publications"
        ) {
          if (value) formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }

      if (this.$route.query.id == 0) {
        this.$store.dispatch("research/save", formData).then((response) => {
          if (response.success) {
            window.location.href = `/detail-research?id=${response.payload}`;
          }
        });
      } else {
        this.$store
          .dispatch("research/update", {
            id: this.$route.query.id,
            research: formData,
          })
          .then((response) => {
            if (response.success) {
              window.location.href = `/detail-research?id=${response.payload}`;
            }
          });
      }
    },

    downloadFile(item) {
      let req = {
        id: item.id,
        filename: item.part_11.name,
      };
      this.$store.dispatch("research/downloadFile", req).then((response) => {
        let blob = new Blob([response], { type: "application/pdf" });
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.target = "_blank";
        link.click();
      });
    },
  },
};
</script>


