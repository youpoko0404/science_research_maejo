<template>
  <div>
    <Loading :loading="loading" />

    <v-container v-if="user">
      <p class="h3"><b>ยินดีต้อนรับเข้าสู่ระบบงานวิจัย</b></p>
      <v-divider></v-divider>
      <v-row>
        <div class="pa-md-4 mx-lg-auto">
          <p class="h4"><b>ตำแหน่งงาน</b></p>
          <div class="pa-4 grey lighten-1 rounded-lg">
            <div class="ml-6">
              <li class="h4">
                <b>เลขที่ตำแหน่ง :</b> {{ user.positionNumber }}
              </li>
              <li class="h4">
                <b>ประเภทการจ้าง :</b> {{ user.employmentType }}
              </li>
              <li class="h4"><b>ตำแหน่ง : </b>{{ user.position }}</li>
              <li class="h4"><b>ระดับ : </b>{{ user.level }}</li>
              <li class="h4">
                <b>วันที่เริ่มทำงาน :</b> {{ user.workStartDate }}
              </li>
            </div>
          </div>
        </div>

        <div class="pa-md-4 mx-lg-auto">
          <p class="h4"><b>ตำแหน่งการบริการ</b></p>
          <div class="pa-4 grey lighten-1 rounded-lg">
            <template v-if="user.service.length != 0">
              <div v-for="user in user.service" :key="user.id">
                <div class="ml-6">
                  <li class="h4"><b>ระดับ : </b>{{ user.level }}</li>
                  <li class="h4">
                    <b>วุฒิการศึกษา : </b>{{ user.educational }}
                  </li>
                  <li class="h4"><b>สถาบัน :</b> {{ user.university }}</li>
                  <v-divider></v-divider>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="ml-6 text-center">ไม่พบข้อมูล</div>
            </template>
          </div>
        </div>

        <div class="pa-md-4 mx-lg-auto">
          <p class="h4"><b>การศึกษา</b></p>
          <div class="pa-4 grey lighten-1 rounded-lg">
            <template v-if="user.study.length != 0">
              <div v-for="user in user.study" :key="user.id">
                <div class="ml-6">
                  <li class="h4"><b>ระดับ : </b>{{ user.level }}</li>
                  <li class="h4">
                    <b>วุฒิการศึกษา : </b>{{ user.educational }}
                  </li>
                  <li class="h4"><b>สถาบัน :</b> {{ user.university }}</li>
                  <v-divider></v-divider>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="ml-6 text-center">ไม่พบข้อมูล</div>
            </template>
          </div>
        </div>

        <div class="pa-md-4 mx-lg-auto">
          <p class="h4"><b>ความเชี่ยวชาญ/ชำนาญการ/ความสนใจ</b></p>
          <div class="pa-4 grey lighten-1 rounded-lg">
            <template v-if="user.expertise.length != 0">
              <div v-for="user in user.expertise" :key="user.id">
                <div class="ml-6">
                  <li class="h4"><b>ระดับ : </b>{{ user.level }}</li>
                  <li class="h4">
                    <b>วุฒิการศึกษา : </b>{{ user.educational }}
                  </li>
                  <li class="h4"><b>สถาบัน :</b> {{ user.university }}</li>
                  <v-divider></v-divider>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="ml-6 text-center">ไม่พบข้อมูล</div>
            </template>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: {
    Loading,
  },
  data: function () {
    return {};
  },
  created() {},
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      loading: (state) => state.auth.loading,
    }),
  },
  methods: {},
};
</script>


