<template>
  <div>
    <v-toolbar :height="150" dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-col align-self="end">
        <div class="d-flex justify-end">
          <div class="pa-3">
            <v-btn text @click="redirect('/')"> หน้าแรก </v-btn>
          </div>
          <div class="pa-3">
            <v-btn text to="/login">
              บุคลากร(เข้าสู่ระบบ)
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    redirect(path) {
      window.location.href = path;
    },
  },
};
</script>
