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
              <v-text-field label="รหัสอ้างอิงมหาวิทยาลัย" v-model="request.university_code" :rules="rules.required"
                required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ช่วงเวลาวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="ช่วงเวลาวิจัย" v-model="request.research_period" :rules="rules.required" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">รูปแบบงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="รูปแบบงานวิจัย" v-model="request.research_format" :rules="rules.required" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ประเภทงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="ประเภทงานวิจัย" v-model="request.research_type" :rules="rules.required" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">สาขางานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="สาขางานวิจัย"
                v-model="request.research_branch" :rules="rules.required" required>
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">กิจกรรมที่เกี่ยวข้อง : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="กิจกรรมที่เกี่ยวข้อง" v-model="request.related_activities" :rules="rules.required"
                required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">Road map : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="Road map" v-model="request.road_map" :rules="rules.required" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">สถานะงานวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="สถานะงานวิจัย" v-model="request.research_status" :rules="rules.required" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ประเภทโครงการวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="ประเภทโครงการวิจัย" v-model="request.research_project_type" :rules="rules.required"
                required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-subheader class="mt-2">ลักษณะโครงการวิจัย : </v-subheader>
            </v-col>
            <v-col>
              <v-text-field label="ประเภทโครงการวิจัย" v-model="request.research_nature" :rules="rules.required"
                required>
              </v-text-field>
            </v-col>
          </v-row>
        </div>
        <br />
        <div class="pa-4 grey lighten-5 rounded-lg">
          <div class="d-flex mb-6" color="grey lighten-2" flat tile>
            <p class="h3 pa-2 mr-auto">ส่วนที่ 2 นักวิจัย</p>
            <template v-if="request.part_2.length > 0">
              <v-btn class="pa-2 error mr-2" @click="request.part_2 = []"> ล้างค่า </v-btn>
            </template>
            <v-btn class="pa-2 primary" @click="() => {
              editedIndex = -1
              dialog.dialog_part_2 = true
            }
            "> นักวิจัย</v-btn>
          </div>
          <v-row>
            <template v-if="request.part_2.length > 0">
              <div class="pa-4 grey lighten-2 rounded-lg">
                <div v-for="part_2 in request.part_2" :key="part_2.id">
                  <v-row>
                    <div class="d-flex justify-end">
                      <v-btn class="pa-2 error mr-2" @click="() => {
                        ManageItemPart_2(part_2, 'delete')
                      }"> ลบ</v-btn>
                      <v-btn class="pa-2 primary" @click="() => {
                        ManageItemPart_2(part_2, null)
                        dialog.dialog_part_2 = true
                      }"> แก้ไข</v-btn>
                    </div>
                    <v-subheader> {{ `ชื่อนักวิจัย : ${part_2.part_2_name || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `สังกัด : ${part_2.part_2_structure || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `สาขา : ${part_2.part_2_branch || '-- ไม่ระบุ --'}` }}</v-subheader>
                    <v-subheader> {{ `ตำแหน่งงานวิจัย : ${part_2.part_2_position || '-- ไม่ระบุ --'}` }}
                    </v-subheader>
                    <v-subheader> {{ `ร้อยละความรับผิดชอบ : ${part_2.part_2_responsibility || '-- ไม่ระบุ --'}`
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
                <v-data-table :headers="headers_part_10" :items="request.part_10">
                  <template v-slot:item.count="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:item.title="{ item }">
                    <strong>{{ fetchParameterDATA(parameter, "funding_type_group", item.part_10_type).value_ref
                    }}</strong> <br />
                    {{ fetchParameterDATA(parameter, item.part_10_type, item.part_10_source).value_ref }} <br />
                    {{ fetchParameterDATA(parameter, "funding_level_group", item.part_10_level).value_ref }}
                  </template>
                  <template v-slot:item.year="{ item }">
                    {{ item.part_10_year }} <br /> {{ item.part_10_start_date }} - {{ item.part_10_end_date }}
                  </template>
                  <template v-slot:item.price="{ item }">
                    {{ item.part_10_amount }}
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-btn class="pa-2 error mr-2" @click="() => {
                      ManageItemPart_10(item, 'delete')
                    }"> ลบ</v-btn>
                    <v-btn class="pa-2 primary" @click="() => {
                      ManageItemPart_10(item, null)
                      dialog.dialog_part_10 = true
                    }"> แก้ไข</v-btn>
                  </template>
                  <template slot="body.append">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>รวมทั้งหมดเป็น</th>
                      <th>{{ request.part_10.reduce((t, n) => t + Number(n.part_10_amount), 0) }}</th>
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
            <p class="h3 ml-4">ส่วนที่ 11 เอกสารประกอบงานวิจัย</p>
            <v-btn color="primary"> เอกสารประกอบ </v-btn>
          </div>
          <v-row>
            <v-file-input v-model="request.part_11_file" label="เอกสารประกอบงานวิจัย"></v-file-input>
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
            <v-file-input v-model="request.ref_file" label="เอกสารอ้างอิง"></v-file-input>
          </v-row>
        </div>
        <div class="pa-4">
          <v-row>
            <v-btn color="primary" dark @click="() => {
              if (this.$refs.request.validate()) {
                onClickSave()
              } else {
                valid = true
              }
            }">บันทึกงานวิจัย</v-btn>
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
                  <v-text-field v-model="part_2.part_2_name" label="ชื่อนักวิจัย" :rules="rules.required" required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สังกัด : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="part_2.part_2_structure" label="สังกัด" :rules="rules.required" required>
                  </v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-subheader class="mt-2">สาขา : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="part_2.part_2_branch" label="สาขา" :rules="rules.required" required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ตำแหน่งงานวิจัย : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="part_2.part_2_position" label="ตำแหน่งงานวิจัย" :rules="rules.required"
                    required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto">
                  <v-subheader class="mt-2">ร้อยละความรับผิดชอบ : </v-subheader>
                </v-col>
                <v-col>
                  <v-text-field v-model="part_2.part_2_responsibility" label="ร้อยละความรับผิดชอบ"
                    :rules="rules.required" required>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="() => {
                this.$refs.form_part_2.reset()
                dialog.dialog_part_2 = !dialog.dialog_part_2
              }">
                ยกเลิก
              </v-btn>
              <v-btn color="primary" text @click="() => {
                this.$refs.form_part_2.validate()
                if (this.$refs.form_part_2.validate()) {
                  onClickPart_2()
                  dialog.dialog_part_2 = !dialog.dialog_part_2
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
                <v-col cols="6">
                  <v-select :items="parameter.funding_type_group" item-text="value_ref" item-value="value"
                    :rules="rules.required" v-model="part_10.part_10_type" label="ประเภททุนสนับสนุน" required>
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-select :items="parameter[part_10.part_10_type]" item-text="value_ref" item-value="value"
                    :rules="rules.required" v-model="part_10.part_10_source" label="แหล่งทุนสนับสนุน" required>
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-select :items="parameter.funding_level_group" item-text="value_ref" item-value="value"
                    :rules="rules.required" v-model="part_10.part_10_level" label="ระดับแหล่งทุน" required>
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-text-field v-model="part_10.part_10_year" type="number" label="ปีการศึกษา" :rules="rules.required"
                    required>
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-menu v-model="datePicker_date1" :close-on-content-click="false" transition="scale-transition"
                    offset-y max-width="290px" min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="part_10.part_10_start_date" label="Date" prepend-icon="mdi-calendar"
                        v-bind="attrs" v-on="on" :rules="rules.requiredDateTime" required>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="dateNow_date_1" no-title @input="datePicker_date1 = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-menu v-model="datePicker_date2" :close-on-content-click="false" transition="scale-transition"
                    offset-y max-width="290px" min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="part_10.part_10_end_date" label="Date2" prepend-icon="mdi-calendar"
                        v-bind="attrs" v-on="on" :rules="rules.requiredDateTime" required>
                      </v-text-field>
                    </template>
                    <v-date-picker v-model="dateNow_date_2" no-title @input="datePicker_date2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="5">
                  <v-text-field v-model="part_10.part_10_amount" type="number" label="จำนวนเงินที่สนับสนุน"
                    onfocus="this.select()" :rules="rules.required" required>
                  </v-text-field>
                </v-col>
                <v-col cols="7">
                  <v-text-field v-model="part_10.part_10_description" label="คำอธิบายเพิ่มเติม" :rules="rules.required"
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field v-model="part_10.part_10_send" label="วันที่ส่งมอบงานวิจัย">
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
                  onClickPart_10()
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
      dialog_part_2: false,
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
      research_project_type: "",
      research_nature: "",
      part_2: [],
      part_10: [],
      part_11_file: null,
      ref_file: null
    },
    part_2: {
      part_2_name: "",
      part_2_structure: "",
      part_2_branch: "",
      part_2_position: "",
      part_2_responsibility: "",
    },
    part_10: {
      part_10_type: "",
      part_10_source: "",
      part_10_level: "",
      part_10_year: "",
      part_10_start_date: "",
      part_10_end_date: "",
      part_10_amount: 0,
      part_10_description: "",
      part_10_send: "",
    },
    rules: {
      required: [val => !!val || 'กรอกข้อมูลไม่ครบถ้วน'],
      requiredDateTime: [
        v => !!v || 'กรอกข้อมูลไม่ครบถ้วน',
        v => /^\d{2}\/\d{2}\/\d{4}$/.test(v) || 'ข้อมูลไม่ถูกต้อง',
      ],
    },
    dateNow_date_1: "",
    datePicker_date1: false,
    dateNow_date_2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    datePicker_date2: false,
    headers_part_10: [
      { text: '', value: 'count' },
      { text: 'ประมาณทุนสนับสนุน', value: 'title' },
      { text: 'ปีงบประมาณ', value: 'year', align: 'center' },
      { text: 'จำนวนเงิน (บาท)', value: 'price' },
      { text: 'จัดการ', value: 'actions' },
    ],
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
    this.fetchParameter(["branch_group", "funding_type_group", "funding_level_group", "institutional_budget_group"]);
  },

  watch: {
    dateNow_date_1() {
      this.part_10.part_10_start_date = dayJs.formatDate(this.dateNow_date_1)
    },
    dateNow_date_2() {
      this.part_10.part_10_end_date = dayJs.formatDate(this.dateNow_date_2)
    },
  },

  methods: {
    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name);
    },

    fetchParameterDATA(items, group, key) {
      return items[group].find(e => e.value == key)
    },

    onClickPart_2() {
      const part_2 = {
        part_2_name: this.part_2.part_2_name,
        part_2_structure: this.part_2.part_2_structure,
        part_2_branch: this.part_2.part_2_branch,
        part_2_position: this.part_2.part_2_position,
        part_2_responsibility: this.part_2.part_2_responsibility,
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_2[this.editedIndex], this.part_2)
      } else {
        this.request.part_2.push(part_2)
      }
      this.$refs.form_part_2.reset()
    },

    ManageItemPart_2(item, action) {
      this.editedIndex = this.request.part_2.indexOf(item)
      this.part_2 = Object.assign({}, item)
      if (action == 'delete') {
        this.request.part_2.splice(this.editedIndex, 1)
      }
    },

    onClickPart_10() {
      const part_10 = {
        part_10_type: this.part_10.part_10_type,
        part_10_source: this.part_10.part_10_source,
        part_10_level: this.part_10.part_10_level,
        part_10_year: this.part_10.part_10_year,
        part_10_start_date: this.part_10.part_10_start_date,
        part_10_end_date: this.part_10.part_10_end_date,
        part_10_amount: this.part_10.part_10_amount,
        part_10_description: this.part_10.part_10_description,
        part_10_send: this.part_10.part_10_send,
      }
      if (this.editedIndex > -1) {
        Object.assign(this.request.part_10[this.editedIndex], this.part_10)
      } else {
        this.request.part_10.push(part_10)
      }
      this.$refs.form_part_10.reset()
    },

    ManageItemPart_10(item, action) {
      this.editedIndex = this.request.part_10.indexOf(item)
      this.part_10 = Object.assign({}, item)
      if (action == 'delete') {
        this.request.part_10.splice(this.editedIndex, 1)
      }
    },

    onClickSave() {
      console.log(this.request)
    }
  },
};
</script>


