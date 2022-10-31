<template>
  <v-container>
    <Loading :loading="loading" />
    <div class="d-flex justify-space-between">
      <div style="font-size: 30px">
        {{ "งานวิจัย" }}
      </div>
      <template v-if="myPermission.is_create == 1">
        <v-btn color="primary" @click="heddleOnClickButton(0)">
          เพิ่มข้อมูล
        </v-btn>
      </template>
    </div>
    <v-divider></v-divider>
    <div style="display: flex;justify-content: flex-end;">
      <v-col cols="8" style="padding: 0px 0px 20px 0px;">
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-col>
    </div>
    <v-row>
      <div>
        <v-data-table :search="search" :headers="headers" :items="researchAll" :page.sync="page"
          :items-per-page="itemsPerPage" hide-default-footer class="elevation-1" @page-count="pageCount = $event">
          <template v-slot:[`item.index`]="{ index }">
            {{ index + 1 }}
          </template>
          <template v-slot:[`item.title_name_th`]="{ item }">
            {{ item.title_name_th }}<br />
            {{ item.title_name_en }}
          </template>
          <template v-slot:[`item.edit`]="{ item }">
            <template v-if="myPermission.is_update == 1">
              <v-btn color="warning" dark @click="heddleOnClickButton(item.id)">แก้ไข
              </v-btn>
            </template>
          </template>
          <template v-slot:no-data> ไม่พบผลการค้นหา </template>
        </v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </div>
    </v-row>
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
    search: "",
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
        value: "title_name_th",
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
    // this.fetchAllExpertise();
  },

  computed: {
    ...mapState({
      user: (state) => state.auth.user ?? [],
      loading: (state) => state.research.loading,
      researchAll: (state) => state.research.researchAll ?? [],
      // expertiseAll: (state) => state.user.expertiseAll ?? [],
      myPermission: (state) => state.permission.my_permission ?? [],
    }),
  },

  methods: {
    heddleOnClickButton(id) {
      this.$router.push({
        path: "detail-research",
        query: { id: id },
      });
    },

    // fetchAllExpertise() {
    //   this.$store.dispatch("user/fetchAllExpertise");
    // },

    fetchResearch() {
      this.$store.dispatch("research/fetchAll");
      this.$store.dispatch("permission/fetchUserPermissionByUserId");
    },

    // heddleOnClickSaveUserExpertise() {
    //   this.$refs.form_user_expertise.validate();
    //   if (this.$refs.form_user_expertise.validate()) {
    //     if (this.id_user_expertise != 0) {
    //       let user_expertise = {
    //         id: this.id_user_expertise,
    //         user_expertise: this.user_expertise,
    //       };
    //       this.$store
    //         .dispatch("user/UpdateExpertise", user_expertise)
    //         .then((response) => {
    //           if (response.success) {
    //             location.reload();
    //           }
    //         });
    //     } else {
    //       let user_expertise = {
    //         user_expertise: this.user_expertise,
    //       };
    //       this.$store
    //         .dispatch("user/InsertExpertise", user_expertise)
    //         .then((response) => {
    //           if (response.success) {
    //             this.$refs.form_user_expertise.reset();
    //             this.dialog.user_expertise = false;
    //           }
    //         });
    //     }
    //   }
    // },

    // deleteUseExpertiseItemConfirm(id) {
    //   if (id) {
    //     this.$store
    //       .dispatch("user/deleteUserExpertise", id)
    //       .then((response) => {
    //         if (response.success) {
    //           location.reload();
    //         }
    //       });
    //   }
    // },
  },
};
</script>


