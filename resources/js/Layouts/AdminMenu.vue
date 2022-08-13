<template>
  <div>
    <Loading :loading="loading" />
    <Snackbar />
    <v-toolbar :height="200" dark prominent src="/images/SideBar.jpeg">
      <div class="d-flex mb-12" height="180">
        <div class="pa-2" style="align-items: center; display: flex">
          <v-img src="/images/LogoSci.png" max-width="170"></v-img>
        </div>

        <div class="pa-2 align-self-center">
          <div style="font-size: 50px">คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้</div>
          <div style="font-size: 20px">
            Faculty of Science, Maejo University
          </div>
        </div>
      </div>

      <v-col align-self="end">
        <div class="d-flex justify-end">
          <div class="pa-3">
            <v-btn text to="/" styles="selected"> หน้าแรก </v-btn>
          </div>
          <template v-if="user != null">
            <div class="pa-3">
              <v-btn text to="/my-research" styles="selected">
                งานวิจัยจองฉัน
              </v-btn>
            </div>
          </template>
          <div class="pa-3" style="align-items: center; display: flex">
            <template v-if="user != null">
              <div style="cursor: auto" text>
                บุคลากร ({{ `${user.first_name} ${user.last_name}` }})
              </div>
            </template>
            <template v-if="user == null">
              <v-btn text @click="redirect('/login')">
                บุคลากร(เข้าสู่ระบบ)
              </v-btn>
            </template>
          </div>
          <template v-if="user != null">
            <div class="pa-3">
              <v-btn text color="error" @click="redirect('/logout')">
                ออกจากระบบ
              </v-btn>
            </div>
          </template>
        </div>
      </v-col>
    </v-toolbar>
  </div>
</template>
<script>
import Loading from "../Components/Loading/Loading.vue";
import Snackbar from "../Components/Snackbar/Snackbar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Loading,
    Snackbar,
  },
  data() {
    return {};
  },
  async created() {
    await this.fetchUser();
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      loading: (state) => state.auth.loading,
    }),
  },
  methods: {
    redirect(path) {
      window.location.href = path;
    },
    ...mapActions("snackbar", ["showSnack"]),
    snackBar(timeout = 3500, text = "Successfully", color = "success") {
      this.showSnack({
        text: text,
        color: color,
        timeout: timeout,
      });
    },

    async fetchUser() {
      await this.$store.dispatch("auth/fetchUser").catch((e) => {});
    },
  },
};
</script>
