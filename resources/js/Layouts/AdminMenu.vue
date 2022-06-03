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
          <v-col lg="1">
            <p class="h5"><a @click="redirect('/')"> หน้าแรก </a></p>
          </v-col>
          <v-col lg="2">
            <p class="h5">
              <a @click="redirect('/login')">
                <v-icon> mdi-account </v-icon>
                บุคลากร (เข้าสู่ระบบ)
              </a>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-toolbar>
  </div>
</template>
<script>
import Redirect from "../Base/Redirect";
export default {
  components: {
    Redirect,
  },
  data() {
    return {};
  },
  async created() {},
  computed: {},
  methods: {
    redirect(path) {
      Redirect.redirect(path);
    },
  },
};
</script>
