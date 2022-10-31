<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <div class="d-flex justify-space-between">
        <div style="font-size: 30px">
          จัดการข้อมูลผู้ใช้
        </div>
        <template>
          <v-btn color="primary" @click="heddleOnClickButton(0)">
            เพิ่มข้อมูล
          </v-btn>
        </template>
      </div>
      <v-divider></v-divider>
      <div style="display: flex;justify-content: flex-end;">
        <v-col cols="8" style="padding: 0px 0px 20px 0px;">
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
          </v-text-field>
        </v-col>
      </div>
      <v-row>
        <div>
          <v-data-table :search="search" :headers="headers" :items="users" :page.sync="page"
            :items-per-page="itemsPerPage" hide-default-footer class="elevation-1" @page-count="pageCount = $event">
            <template v-slot:[`item.index`]="{ index }">
              {{ index + 1 }}
            </template>
            <template v-slot:[`item.first_name`]="{ item }">
              {{ `${item.first_name} ${item.last_name}` }}
            </template>
            <template v-slot:[`item.edit`]="{ item }">
              <v-btn color="warning" dark @click="heddleOnClickButton(item.id)">แก้ไข</v-btn>
            </template>
            <template v-slot:no-data> ไม่พบผลการค้นหา </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </div>
      </v-row>
    </v-container>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span style="font-size: 20px">ข้อมูลผู้ใช้</span>
          </v-card-title>
          <v-form ref="required">

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="request.first_name" label="ชื่อ" color="green darken-3"
                      :rules="rules.required" required>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="request.last_name" label="นามสกุล" color="green darken-3"
                      :rules="rules.required" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="request.username" label="ชื่อผู้ใช้" color="green darken-3"
                      :rules="rules.required" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="request.email" label="อีเมล" color="green darken-3" :rules="rules.required"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field color="green darken-3" disabled v-model="request.email_type"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field color="green darken-3" v-model="request.password" label="รหัสผ่าน" type="password"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field color="green darken-3" v-model="request.confirm_password" label="ยืนยันรหัสผ่าน"
                      type="password" required>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                ยกเลิก
              </v-btn>
              <v-btn color="blue darken-1" text @click="() => {
  this.$refs.required.validate();
  if (this.$refs.required.validate()) {
    heddleOnClickSave();
  }
}
              ">
                ยืนยัน
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Loading from "../../Components/Loading/Loading";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Loading,
  },
  data: () => ({
    rules: {
      required: [(val) => !!val || "โปรดกรอกข้อมูลให้ครบถ้วน"],
    },
    search: "",
    dialog: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    request: {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      email_type: "@gmail.com",
      username: "",
      password: "",
      confirm_password: "",
    },
    headers: [
      {
        text: "ลำดับ",
        align: "center",
        sortable: false,
        value: "index",
        width: "100px",
      },
      {
        text: "ชื่อ",
        align: "start",
        sortable: false,
        value: "first_name",
      },
      {
        text: "ชื่อผู้ใช้",
        align: "start",
        sortable: false,
        value: "username",
      },
      {
        text: "อีเมล",
        align: "start",
        sortable: false,
        value: "email",
      },
      {
        text: "",
        align: "start",
        sortable: false,
        value: "edit",
        width: "200px",
      },
    ],
  }),
  created() {
    this.fetchSearchUser();
  },
  computed: {
    ...mapState({
      loading: (state) => state.user.loading,
      users: (state) => state.user.users ?? [],
    }),
  },
  methods: {
    ...mapActions("snackbar", ["showSnack"]),
    snackBar(timeout = 3500, text = "Successfully", color = "success") {
      this.showSnack({
        text: text,
        color: color,
        timeout: timeout,
      });
    },
    fetchSearchUser() {
      this.$store.dispatch("user/fetchUser");
    },
    async heddleOnClickButton(id) {
      await this.$store.dispatch("user/fetchUserById", id)
        .then((e) => {
          if (e.success) {
            this.request.id = e.payload?.id ?? 0
            this.request.first_name = e.payload?.first_name ?? ""
            this.request.last_name = e.payload?.last_name ?? ""
            this.request.email = e.payload?.email.replace("@gmail.com", '') ?? ""
            this.request.username = e.payload?.username ?? ""
            this.dialog = true
          }
        });
    },
    heddleOnClickSave() {
      if (this.request.id < 1 && (this.request.password == "" || this.request.confirm_password == "")) {
        this.snackBar(3500, "โปรดกรอกข้อมูลให้ครบถ้วน", "warning");
      } else if (this.request.password != this.request.confirm_password) {
        this.snackBar(3500, "รหัสผ่านไม่ตรงกัน โปรดลองอีกครั้ง", "warning");
      } else {
        let req = {
          id: this.request.id,
          first_name: this.request.first_name,
          last_name: this.request.last_name,
          email: this.request.email + this.request.email_type,
          username: this.request.username,
          password: this.request.password
        }
        this.$store.dispatch("user/UpdateUserById", req).then((e) => {
          if (e.success) {
            location.reload();
          }
        });
      }
    }
  },
};
</script>


