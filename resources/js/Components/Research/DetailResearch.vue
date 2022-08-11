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
            <v-col cols="6">
              <div style="font-size: 20px">ส่วนที่ 1 ข้อมูลทั่วไปภาษาไทย</div>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">หัวข้อ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    label="หัวข้อ"
                    color="green darken-3"
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="6">
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
              <v-subheader class="mt-2">รหัสอ้างอิงวช. : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field
                label="รหัสอ้างอิงวช."
                color="green darken-3"
                v-model="request.university_code"
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
                v-model="request.university_code"
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
                v-model="request.research_format"
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
              <v-subheader class="mt-2">สาขางานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select
                :items="parameter.bachelor_degree_branch_group"
                color="green darken-3"
                item-text="value_ref"
                item-value="value"
                label="สาขางานวิจัย"
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
                v-model="request.related_activities"
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
                label="ประเภทโครงการวิจัย"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
                    :rules="rules.required"
                    required
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
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
                    v-model="request.research_name_th"
                    :rules="rules.required"
                    required
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
              v-model="request.research_name_th"
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
              v-model="request.part_4"
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
              v-model="request.part_5"
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
              v-model="request.part_6"
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
              v-model="request.part_7"
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
              v-model="request.part_8"
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
              :items="[]"
              color="green darken-3"
              item-text="value_ref"
              item-value="value"
              label="งานวิจัยอื่น ๆ ที่เกี่ยวข้อง"
              v-model="request.research_branch"
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
            <template v-if="request.part_10.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.part_10 = []">
                ล้างค่า
              </v-btn>
            </template>
            <v-btn
              class="pa-2 primary"
              @click="
                () => {
                  editedIndex = -1;
                  dialog.dialog_part_10 = true;
                }
              "
            >
              เพิ่มแหล่งทุนสนับสนุน</v-btn
            >
          </div>
          <v-row>
            <template v-if="request.part_10.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <v-data-table
                  :headers="headers_part_10"
                  :items="request.part_10"
                >
                  <template v-slot:item.count="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:item.title="{ item }">
                    <strong>{{
                      fetchParameterDATA(
                        parameter,
                        "funding_type_group",
                        item.type
                      ).value_ref
                    }}</strong>
                    <br />
                    {{
                      fetchParameterDATA(parameter, item.type, item.source)
                        .value_ref
                    }}
                    <br />
                    {{
                      fetchParameterDATA(
                        parameter,
                        "funding_level_group",
                        item.level
                      ).value_ref
                    }}
                  </template>
                  <template v-slot:item.year="{ item }">
                    {{ item.year }} <br />
                    {{ item.start_date }} - {{ item.end_date }}
                  </template>
                  <template v-slot:item.price="{ item }">
                    {{ item.amount }}
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-btn
                      class="pa-2 error mr-2"
                      @click="
                        () => {
                          ManageItemPart_10(item, 'delete');
                        }
                      "
                    >
                      ลบ</v-btn
                    >
                    <v-btn
                      class="pa-2 primary"
                      @click="
                        () => {
                          ManageItemPart_10(item, null);
                          dialog.dialog_part_10 = true;
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
                          request.part_10.reduce(
                            (t, n) => t + Number(n.part_10_amount),
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
            <v-btn color="primary" @click="$refs.part_11.$refs.input.click()">
              เพิ่มเอกสารประกอบ
            </v-btn>
          </div>
          <v-row>
            <v-file-input
              ref="part_11"
              color="green darken-3"
              accept="application/pdf"
              v-model="request.part_11"
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
            <template v-if="request.part_12.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.part_12 = []">
                ล้างค่า
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                class="pa-2 primary"
                @click="
                  () => {
                    editedIndex = -1;
                    dialog.dialog_part_12 = true;
                  }
                "
              >
                เพิ่มข้อมูล</v-btn
              >
            </template>
          </div>
          <v-row>
            <template v-if="request.part_12.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                {{ request.part_12 }}
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
            <template v-if="request.part_13.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.part_13 = []">
                ล้างค่า
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                class="pa-2 primary"
                @click="
                  () => {
                    editedIndex = -1;
                    dialog.dialog_part_13 = true;
                  }
                "
              >
                เพิ่มข้อมูล</v-btn
              >
            </template>
          </div>
          <v-row>
            <template v-if="request.part_13.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                {{ request.part_13 }}
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
            <template v-if="request.part_14.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.part_14 = []">
                ล้างค่า
              </v-btn>
            </template>
            <template v-else>
              <v-btn
                class="pa-2 primary"
                @click="
                  () => {
                    editedIndex = -1;
                    dialog.dialog_part_14 = true;
                  }
                "
              >
                เพิ่มข้อมูล</v-btn
              >
            </template>
          </div>
          <v-row>
            <template v-if="request.part_14.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                {{ request.part_14 }}
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
        </div>

        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex justify-space-between">
            <div class="h3 pa-2 mr-auto" style="font-size: 30px">
              แนบไฟล์เอกสารอ้างอิง
            </div>
            <v-btn color="primary" @click="$refs.ref_file.$refs.input.click()">
              เพิ่มเอกสารประกอบ
            </v-btn>
          </div>
          <v-row>
            <v-file-input
              ref="ref_file"
              color="green darken-3"
              accept="application/pdf"
              v-model="request.ref_file"
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
              disabled
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
      <v-dialog v-model="dialog.dialog_part_2" width="900">
        <v-form ref="form_part_2">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2"> นักวิจัย </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ชื่อนักวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    color="green darken-3"
                    v-model="part_2.name"
                    label="ชื่อนักวิจัย"
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
                    color="green darken-3"
                    v-model="part_2.agency"
                    label="สังกัด"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สาขา : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    color="green darken-3"
                    v-model="part_2.branch"
                    label="สาขา"
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
                    color="green darken-3"
                    v-model="part_2.research_position"
                    label="ตำแหน่งงานวิจัย"
                    :rules="rules.required"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ร้อยละความรับผิดชอบ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field
                    type="number"
                    color="green darken-3"
                    v-model="part_2.percen_responsibility"
                    label="ร้อยละความรับผิดชอบ"
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
                    this.$refs.form_part_2.reset();
                    dialog.dialog_part_2 = !dialog.dialog_part_2;
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
                    this.$refs.form_part_2.validate();
                    if (this.$refs.form_part_2.validate()) {
                      onClickPart_2();
                      dialog.dialog_part_2 = !dialog.dialog_part_2;
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
      <v-dialog v-model="dialog.dialog_part_10" width="900">
        <v-form ref="form_part_10">
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
                    v-model="part_10.type"
                    label="ประเภททุนสนับสนุน"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter[part_10.type]"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="part_10.source"
                    label="แหล่งทุนสนับสนุน"
                    required
                  >
                  </v-select>
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
                    v-model="part_10.level"
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
                    v-model="part_10.year"
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
                        v-model="part_10.start_date"
                        label="Date"
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
                        v-model="part_10.end_date"
                        label="Date2"
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
                    v-model="part_10.amount"
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
                    v-model="part_10.description"
                    label="คำอธิบายเพิ่มเติม"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_10.send"
                    label="วันที่ส่งมอบงานวิจัย"
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
                    this.$refs.form_part_10.reset();
                    dialog.dialog_part_10 = !dialog.dialog_part_10;
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
                    this.$refs.form_part_10.validate();
                    if (this.$refs.form_part_10.validate()) {
                      onClickPart_10();
                      dialog.dialog_part_10 = !dialog.dialog_part_10;
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
      <v-dialog v-model="dialog.dialog_part_12" width="900">
        <v-form ref="form_part_12">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มการจัดการนำเสนองานวิจัย
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_12.research_present_date"
                    label="วันที่นำเสนองานวิจัย"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter.funding_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="part_12.presentation_style"
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
                    :items="parameter.funding_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="part_12.academic_work"
                    label="ประเภทงานวิชาการ"
                    required
                  >
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_12.academic_name"
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
                    v-model="part_12.presentation_place"
                    label="สถานที่นำเสนอ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select
                    color="green darken-3"
                    :items="parameter.funding_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="part_12.present_level"
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
                    v-model="part_12.organization_name"
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
                    this.$refs.form_part_12.reset();
                    dialog.dialog_part_12 = !dialog.dialog_part_12;
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
                    this.$refs.form_part_12.validate();
                    if (this.$refs.form_part_12.validate()) {
                      onClickPart_12();
                      dialog.dialog_part_12 = !dialog.dialog_part_12;
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
      <v-dialog v-model="dialog.dialog_part_13" width="900">
        <v-form ref="form_part_13">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มการจัดการตีพิมพ์งานวิจัย
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_13.reference"
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
                    :items="parameter.funding_type_group"
                    item-text="value_ref"
                    item-value="value"
                    :rules="rules.required"
                    v-model="part_13.presentation_level"
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
                    v-model="part_13.thai_article_title"
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
                    v-model="part_13.english_article_title"
                    label="ชื่อบทความภาษาอังกฤษ"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_13.date_publication"
                    label="วัน เดือน ปี ที่ตีพิมพ์"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_13.no"
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
                    v-model="part_13.page_number"
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
                    v-model="part_13.printer_website"
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
                    this.$refs.form_part_13.reset();
                    dialog.dialog_part_13 = !dialog.dialog_part_13;
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
                    this.$refs.form_part_13.validate();
                    if (this.$refs.form_part_13.validate()) {
                      onClickPart_13();
                      dialog.dialog_part_13 = !dialog.dialog_part_13;
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
      <v-dialog v-model="dialog.dialog_part_14" width="900">
        <v-form ref="form_part_14">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              แบบฟอร์มการจัดการข้อมูลการถูกอ้างอิงงานวิจัย
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_14.date_reference"
                    label="วันที่ถูกอ้างอิง"
                    :rules="rules.required"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    color="green darken-3"
                    v-model="part_14.name_researcher"
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
                    v-model="part_14.thai_name"
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
                    v-model="part_14.link_url"
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
                    v-model="part_14.reference_journal"
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
                    this.$refs.form_part_14.reset();
                    dialog.dialog_part_14 = !dialog.dialog_part_14;
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
                    this.$refs.form_part_14.validate();
                    if (this.$refs.form_part_14.validate()) {
                      onClickPart_14();
                      dialog.dialog_part_14 = !dialog.dialog_part_14;
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
      dialog_part_2: false,
      dialog_part_10: false,
      dialog_part_12: false,
      dialog_part_13: false,
      dialog_part_14: false,
    },
    request: {
      research_name_th: "",
      research_name_en: "",
      research_code: "",
      university_code: "",
      research_period: "",
      research_format: "",
      research_type: "",
      research_branch: "",
      related_activities: "",
      road_map: "",
      research_status: "",
      research_project_type: "",
      research_nature: "",
      part_2: [],
      part_3: "",
      part_4: "",
      part_5: "",
      part_6: "",
      part_7: "",
      part_8: "",
      part_9: "",
      part_10: [],
      part_11: null,
      part_12: [],
      part_13: [],
      part_14: [],
      part_15: [],
      ref_file: null,
    },
    part_2: {
      agency: "",
      branch: "",
      name: "",
      percen_responsibility: 0,
      research_position: "",
    },
    part_10: {
      type: "",
      source: "",
      level: "",
      year: "",
      start_date: "",
      end_date: "",
      amount: 0,
      description: "",
      send: "",
    },
    part_12: {
      research_present_date: "",
      presentation_style: "",
      academic_work: "",
      academic_name: "",
      presentation_place: "",
      present_level: "",
      organization_name: "",
    },
    part_13: {
      reference: "",
      presentation_level: "",
      thai_article_title: "",
      english_article_title: "",
      date_publication: "",
      no: "",
      page_number: "",
      printer_website: "",
    },
    part_14: {
      date_reference: "",
      name_researcher: "",
      thai_name: "",
      link_url: "",
      reference_journal: "",
    },
    part_15: {},
    rules: {
      required: [(val) => !!val || "กรอกข้อมูลไม่ครบถ้วน"],
      requiredDateTime: [
        (v) => !!v || "กรอกข้อมูลไม่ครบถ้วน",
        (v) => /^\d{2}\/\d{2}\/\d{4}$/.test(v) || "ข้อมูลไม่ถูกต้อง",
      ],
    },
    dateNow_date_1: "",
    datePicker_date1: false,
    dateNow_date_2: new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .substr(0, 10),
    datePicker_date2: false,
    headers_part_10: [
      { text: "", value: "count" },
      { text: "ประมาณทุนสนับสนุน", value: "title" },
      { text: "ปีงบประมาณ", value: "year", align: "center" },
      { text: "จำนวนเงิน (บาท)", value: "price" },
      { text: "จัดการ", value: "actions" },
    ],
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

  created() {
    this.fetchParameter([
      "bachelor_degree_branch_group",
      "master_degree_branch_group",
      "doctor_degree_branch_group",
    ]);
    this.fetchResearchById(this.$route.query.id);
  },

  watch: {
    dateNow_date_1() {
      this.part_10.part_10_start_date = dayJs.formatDate(this.dateNow_date_1);
    },
    dateNow_date_2() {
      this.part_10.part_10_end_date = dayJs.formatDate(this.dateNow_date_2);
    },
  },

  methods: {
    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },

    deleteItemConfirm(id) {
      if (id) {
        this.$store.dispatch("research/delete", id).then((response) => {
          if (response.success) {
            window.location.href = `/my-research`;
          }
        });
      }
    },

    fetchResearchById(id) {
      if (id != 0) {
        this.$store.dispatch("research/fetchById", id).then((response) => {
          if (response.success) {
            for (const [key, value] of Object.entries(response.payload)) {
              if (value) {
                if (key == "ref_file" || key == "part_11") {
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

    fetchParameterDATA(items, group, key) {
      return items[group].find((e) => e.value == key);
    },

    onClickPart_2() {
      const part_2 = {};
      for (const [key, value] of Object.entries(this.part_2)) {
        part_2[key] = value;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_2[this.editedIndex], this.part_2);
      } else {
        this.request.part_2.push(part_2);
      }
      this.$refs.form_part_2.reset();
    },

    ManageItemPart_2(item, action) {
      this.editedIndex = this.request.part_2.indexOf(item);
      this.part_2 = Object.assign({}, item);
      if (action == "delete") {
        this.request.part_2.splice(this.editedIndex, 1);
      }
    },

    onClickPart_10() {
      const part_10 = {};
      for (const [key, value] of Object.entries(this.part_10)) {
        part_10[key] = value;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_10[this.editedIndex], this.part_10);
      } else {
        this.request.part_10.push(part_10);
      }
      this.$refs.form_part_10.reset();
    },

    ManageItemPart_10(item, action) {
      this.editedIndex = this.request.part_10.indexOf(item);
      this.part_10 = Object.assign({}, item);
      if (action == "delete") {
        this.request.part_10.splice(this.editedIndex, 1);
      }
    },

    onClickPart_12() {
      const part_12 = {};
      for (const [key, value] of Object.entries(this.part_12)) {
        part_12[key] = value;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_12[this.editedIndex], this.part_12);
      } else {
        this.request.part_12.push(part_12);
      }
      this.$refs.form_part_12.reset();
    },

    ManageItemPart_12(item, action) {
      this.editedIndex = this.request.part_12.indexOf(item);
      this.part_12 = Object.assign({}, item);
      if (action == "delete") {
        this.request.part_12.splice(this.editedIndex, 1);
      }
    },

    onClickPart_13() {
      const part_13 = {};
      for (const [key, value] of Object.entries(this.part_13)) {
        part_13[key] = value;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_13[this.editedIndex], this.part_13);
      } else {
        this.request.part_13.push(part_13);
      }
      this.$refs.form_part_13.reset();
    },

    ManageItemPart_13(item, action) {
      this.editedIndex = this.request.part_13.indexOf(item);
      this.part_13 = Object.assign({}, item);
      if (action == "delete") {
        this.request.part_13.splice(this.editedIndex, 1);
      }
    },

    onClickPart_14() {
      const part_14 = {};
      for (const [key, value] of Object.entries(this.part_14)) {
        part_14[key] = value;
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_14[this.editedIndex], this.part_14);
      } else {
        this.request.part_14.push(part_14);
      }
      this.$refs.form_part_14.reset();
    },

    ManageItemPart_14(item, action) {
      this.editedIndex = this.request.part_14.indexOf(item);
      this.part_14 = Object.assign({}, item);
      if (action == "delete") {
        this.request.part_14.splice(this.editedIndex, 1);
      }
    },

    onClickSave() {
      let formData = new FormData();
      formData.append("research_name_th", this.request.research_name_th);
      formData.append("research_name_en", this.request.research_name_en);
      formData.append("research_code", this.request.research_code);
      formData.append("university_code", this.request.university_code);
      formData.append("research_period", this.request.research_period);
      formData.append("research_format", this.request.research_format);
      formData.append("research_type", this.request.research_type);
      formData.append("research_branch", this.request.research_branch);
      formData.append("related_activities", this.request.related_activities);
      formData.append("road_map", this.request.road_map);
      formData.append("research_status", this.request.research_status);
      formData.append(
        "research_project_type",
        this.request.research_project_type
      );
      formData.append("research_nature", this.request.research_nature);
      formData.append("part_2", JSON.stringify(this.request.part_2));
      formData.append("part_3", this.request.part_3);
      formData.append("part_4", this.request.part_4);
      formData.append("part_5", this.request.part_5);
      formData.append("part_6", this.request.part_6);
      formData.append("part_7", this.request.part_7);
      formData.append("part_8", this.request.part_8);
      formData.append("part_9", this.request.part_9);
      formData.append("part_10", JSON.stringify(this.request.part_10));
      formData.append("part_11", this.request.part_11);
      formData.append("part_12", JSON.stringify(this.request.part_12));
      formData.append("part_13", JSON.stringify(this.request.part_13));
      formData.append("part_14", JSON.stringify(this.request.part_14));
      formData.append("part_15", this.request.part_15);
      formData.append("ref_file", this.request.ref_file);
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


