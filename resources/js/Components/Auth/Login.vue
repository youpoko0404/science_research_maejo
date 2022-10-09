<template>
  <v-app>
    <Loading :loading="loading" />
    <v-main>
      <Snackbar />
      <v-row align="center" justify="center">
        <v-layout align-center justify-center>
          <div class="limiter">
            <div class="container-login100">
              <div class="wrap-login100" style="justify-content: space-around">
                <div class="login100-pic js-tilt" data-tilt>
                  <img src="/images/login.png" alt="IMG" />
                </div>
                <div>
                  <span class="login100-form-title"> Login </span>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      v-model="email"
                      class="input100"
                      type="email"
                      placeholder="Email"
                    />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Password is required"
                  >
                    <input
                      v-model="password"
                      class="input100"
                      type="password"
                      placeholder="Password"
                      v-on:keyup.enter="login()"
                    />
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                      <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="container-login100-form-btn">
                    <button class="login100-form-btn" @click="login()">
                      Login
                    </button>
                  </div>
                  <div class="text-center p-t-12">
                    <span class="txt1"> </span>
                    <a class="txt2" href="#"> </a>
                  </div>
                  <div class="text-center p-t-136">
                    <a class="txt2" href="#"> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-layout>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "../Snackbar/Snackbar.vue";
import GuestTopBar from "../../Layouts/GuestTopBar.vue";
import { mapState, mapActions } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: { GuestTopBar, Loading, Snackbar },
  data: () => ({
    email: "",
    password: "",
    rules: {
      required: [(val) => !!val || "โปรดกรอกข้อมูลให้ครบถ้วน"],
    },
  }),
  props: {
    source: String,
  },
  computed: {
    ...mapState({
      loading: (state) => state.auth.loading,
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
    login() {
      if (this.email == "" || this.password == "") {
        return this.snackBar(3500, "โปรดกรอกข้อมูลให้ครบถ้วน", "warning");
      } else {
        let user = {
          email: this.email,
          password: this.password,
        };
        this.$store
          .dispatch("auth/login", user)
          .then((response) => {
            if (response.success) {
              console.log(response.payload.role);
              if (response.payload.role == "admin")
                window.location.href = "/manage-research";
              else window.location.href = "/my-research";
            }
          })
          .catch((error) => {
            this.snackBar(3500, "ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด", "warning");
          });
      }
    },
  },
};
</script>

<style>
@import "./login.css";
@import "./util.css";
@import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
</style>
