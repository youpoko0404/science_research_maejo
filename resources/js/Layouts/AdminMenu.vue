<template>
  <div>
    <v-toolbar
      :height="150"
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-col align-self="end">
        <v-row justify="end">
          <v-col cols="1">
            <p class="h5"><a @click="redirect('/')"> หน้าแรก </a></p>
          </v-col>
          <template v-if="this.$store.state.user.user != null">
            <v-col cols="2">
              <p class="h5">
                <a @click="redirect('/my-research')"> งานวิจัยจองฉัน </a>
              </p>
            </v-col>
          </template>
          <v-col cols="2">
            <p class="h5">
              <a
                @click="
                  $store.state.user.user != null
                    ? redirect('/account')
                    : redirect('/login')
                "
              >
                <v-icon> mdi-account </v-icon>
                บุคลากร ({{
                  this.$store.state.user.user != null
                    ? this.$store.state.user.user.name
                    : "เข้าสู่ระบบ"
                }})
              </a>
            </p>
          </v-col>
          <template v-if="this.$store.state.user.user != null">
            <v-col cols="1">
              <p class="h5 error--text">
                <a @click="redirect('/logout')"> ออกจากระบบ </a>
              </p>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-toolbar>
  </div>
</template>
<script>
import axios from "axios";
import Redirect from "../Base/Redirect";
export default {
  components: {
    Redirect,
  },
  data() {
    return {};
  },
  async created() {
    this.fetchUser();
  },
  computed: {},
  methods: {
    redirect(path) {
      Redirect.redirect(path);
    },
    fetchUser() {
      axios
        .get("api/user")
        .then((response) => {
          if (response.data.success) {
            this.$store.commit("user/SET_USER", response.data.user);
          }
        })
        .catch((e) => {});
    },
  },
};
</script>
