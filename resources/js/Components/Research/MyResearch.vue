<template>
  <v-container>
    <Loading :loading="loading" />
    <div class="d-flex justify-space-between">
      <div style="font-size: 30px">งานวิจัยของฉัน</div>
      <v-btn color="primary" @click="heddleOnClickButton(0)">
        เพิ่มข้อมูล
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="researchAll"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      >
        <template v-slot:[`item.index`]="{ index }">
          {{ index + 1 }}
        </template>
        <template v-slot:[`item.research_name`]="{ item }">
          {{ item.research_name_th }}<br />
          {{ item.research_name_en }}
        </template>
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn color="warning" dark @click="heddleOnClickButton(item.id)"
            >แก้ไข</v-btn
          >
        </template>
        <template v-slot:no-data> ไม่พบผลการค้นหา </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-row>
    <div class="d-flex justify-space-between">
      <div style="font-size: 30px">ความเชี่ยวชาญของฉัน</div>
      <v-btn color="primary" @click="dialog.user_expertise = true">
        เพิ่มข้อมูล
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-row>
      <v-data-table
        :headers="headers1"
        :items="expertiseAll"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      >
        <template v-slot:[`item.index`]="{ index }">
          {{ index + 1 }}
        </template>
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn
            color="warning"
            dark
            @click="
              () => {
                dialog.user_expertise = true;
                id_user_expertise = item.id;
                user_expertise = item.type;
              }
            "
            >แก้ไข</v-btn
          >
          <v-btn
            color="error"
            dark
            @click="
              () => {
                deleteId = item.id;
                dialog.dialogDelete = true;
              }
            "
            >ลบ</v-btn
          >
        </template>
        <template v-slot:no-data> ไม่พบผลการค้นหา </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-row>

    <div class="text-center">
      <v-dialog v-model="dialog.user_expertise" width="900">
        <v-form ref="form_user_expertise">
          <v-card>
            <v-card-title class="grey lighten-2 mb-2">
              ความเชี่ยวชาญของฉัน
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green darken-3"
                    v-model="user_expertise"
                    label="ความเชี่ยวชาญของฉัน"
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
                    this.$refs.form_user_expertise.reset();
                    dialog.user_expertise = !dialog.user_expertise;
                  }
                "
              >
                ยกเลิก
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="heddleOnClickSaveUserExpertise()"
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
          <v-card-title>คุณยืนยันที่จะลบข้อมูลนี้</v-card-title>
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
              @click="deleteUseExpertiseItemConfirm(deleteId)"
              >ตกลง</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
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
      dialogDelete: false,
      user_expertise: false,
    },
    deleteId: 0,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    id_user_expertise: 0,
    user_expertise: "",
    headers: [
      {
        text: "ลำดับ",
        align: "center",
        sortable: false,
        value: "index",
        width: "100px",
      },
      {
        text: "ชื่อผลงาน",
        align: "start",
        sortable: false,
        value: "research_name",
      },
      {
        text: "",
        align: "start",
        sortable: false,
        value: "edit",
        width: "200px",
      },
    ],
    headers1: [
      {
        text: "ลำดับ",
        align: "center",
        sortable: false,
        value: "index",
        width: "100px",
      },
      {
        text: "ชื่อประเภท",
        align: "start",
        sortable: false,
        value: "type",
      },
      {
        text: "",
        align: "start",
        sortable: false,
        value: "edit",
        width: "200px",
      },
    ],
    rules: {
      required: [(val) => !!val || "กรอกข้อมูลไม่ครบถ้วน"],
    },
  }),
  created() {
    this.fetchResearch();
    this.fetchAllExpertise();
  },

  computed: {
    ...mapState({
      loading: (state) => state.research.loading,
      researchAll: (state) => state.research.researchAll ?? [],
      expertiseAll: (state) => state.user.expertiseAll ?? [],
    }),
  },

  methods: {
    heddleOnClickButton(id) {
      this.$router.push({
        path: "detail-research",
        query: { id: id },
      });
    },

    fetchAllExpertise() {
      this.$store.dispatch("user/fetchAllExpertise");
    },

    fetchResearch() {
      this.$store.dispatch("research/fetchAll");
    },

    heddleOnClickSaveUserExpertise() {
      if (this.id_user_expertise != 0) {
        let user_expertise = {
          id: this.id_user_expertise,
          user_expertise: this.user_expertise,
        };
        this.$store
          .dispatch("user/UpdateExpertise", user_expertise)
          .then((response) => {
            if (response.success) {
              location.reload();
            }
          });
      } else {
        let user_expertise = {
          user_expertise: this.user_expertise,
        };
        this.$store
          .dispatch("user/InsertExpertise", user_expertise)
          .then((response) => {
            if (response.success) {
              this.dialog.user_expertise = false;
            }
          });
      }
    },

    deleteUseExpertiseItemConfirm(id) {
      if (id) {
        this.$store
          .dispatch("user/deleteUserExpertise", id)
          .then((response) => {
            if (response.success) {
              location.reload();
            }
          });
      }
    },
  },
};
</script>


