<template>
  <v-app>
    <Loading :loading="loading" />
    <v-main>
      <v-row align="center" justify="center">
        <v-layout align-center justify-center>
          <div class="limiter">
            <div class="container-login100">
              <div class="wrap-login100">
                <div class="login100-pic js-tilt" data-tilt>
                  <img src="/images/login.png" alt="IMG" />
                </div>
                <dev>
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
                </dev>
              </div>
            </div>
          </div>
        </v-layout>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import GuestTopBar from "../../Layouts/GuestTopBar.vue";
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: { GuestTopBar, Loading },
  data: () => ({
    email: "",
    password: "",
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
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("auth/login", user).then((response) => {
        if (response.success) {
          window.location.href = "/my-research";
        }
      });
    },
  },
};
</script>

<style>
@import "./login.css";
@import "./util.css";
@import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
</style>
