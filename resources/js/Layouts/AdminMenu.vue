<template>
  <div>
    <Loading :loading="loading" />
    <Snackbar />
    <v-toolbar
      id="toolbar"
      :height="200"
      dark
      prominent
      src="/images/SideBar.jpeg"
    >
      <v-toolbar-title>
        <div flat height="200" style="display: flex; align-items: end" tile>
          <v-img
            src="/images/LogoSci.png"
            style="max-width: 150px; height: auto; width: 100%"
            class="pa-2"
          ></v-img>
          <div class="pa-2 align-self-center" outlined tile>
            <div style="font-size: 35px">คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้</div>
            <div style="font-size: 15px">
              Faculty of Science, Maejo University
            </div>
          </div>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-col align-self="end">
          <div class="d-flex justify-end">
            <div class="pa-3">
              <v-btn text to="/" styles="selected"> หน้าแรก </v-btn>
            </div>
            <template v-if="user != null && user.role == 'admin'">
              <div class="pa-3">
                <v-btn text to="/user-permission" styles="selected">
                  จัดการสิทธิ
                </v-btn>
              </div>
            </template>
            <template v-if="user != null && user.role == 'admin'">
              <div class="pa-3">
                <v-btn text to="/manage-research" styles="selected">
                  {{ "งานวิจัยทั้งหมด" }}
                </v-btn>
              </div>
            </template>
            <template v-if="user != null && user.role != 'admin'">
              <div class="pa-3">
                <v-btn text to="/my-research" styles="selected">
                  {{ "งานวิจัยของฉัน" }}
                </v-btn>
              </div>
            </template>
            <template>
              <div class="pa-3">
                <v-btn text to="/user-expertise" styles="selected">
                  ความเชี่ยวชาญ
                </v-btn>
              </div>
            </template>
            <div class="pa-3" style="align-items: center; display: flex">
              <template v-if="user != null">
                <div style="cursor: auto" text>
                  บุคลากร ({{ `${user.first_name}` }})
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
      </v-toolbar-items>
      <div class="hidden-md-and-up">
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="redirect('/')"> หน้าแรก </v-list-item>
            <v-list-item @click="redirect('/user-expertise')"> ความเชียวชาญ </v-list-item>
            <template v-if="user != null">
              <v-list-item @click="redirect('/my-research')">
                งานวิจัยของฉัน
              </v-list-item>
            </template>
            <!-- <template v-if="user != null">
              <v-list-item @click="redirect('/user-expertise')">
                ความเชียวชาญ
              </v-list-item>
            </template> -->
            <template v-if="user != null">
              <v-list-item @click="redirect('/logout')">
                ออกจากระบบ
              </v-list-item>
            </template>
            <template v-else>
              <v-list-item @click="redirect('/login')">
                บุคลากร(เข้าสู่ระบบ)
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
      </div>
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
    return {
      toggleMenu: false,
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" },
      ],
    };
  },
  async created() {
    await this.fetchUser();
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      loading: (state) => state.auth.loading,
    }),
    showMenu() {
      return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp;
    },
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
