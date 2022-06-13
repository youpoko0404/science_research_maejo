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
                <b>เลขที่ตำแหน่ง :</b> {{ user.position_number }}
              </li>
              <li class="h4">
                <b>ประเภทการจ้าง :</b> {{ user.employment_type }}
              </li>
              <li class="h4"><b>ตำแหน่ง : </b>{{ user.position }}</li>
              <li class="h4"><b>ระดับ : </b>{{ user.level }}</li>
              <li class="h4">
                <b>วันที่เริ่มทำงาน :</b> {{ formatDate(user.work_start_date) }}
              </li>
            </div>
          </div>
        </div>

        <div class="pa-md-4 mx-lg-auto">
          <p class="h4"><b>ตำแหน่งการบริการ</b></p>
          <div class="pa-4 grey lighten-1 rounded-lg">
            <template v-if="user.service.length != 0">
              <div v-for="service in user.service" :key="service.id">
                <div class="ml-6">
                  <li class="h4"><b>ระดับ : </b>{{ service.level }}</li>
                  <li class="h4">
                    <b>วุฒิการศึกษา : </b>{{ service.educational }}
                  </li>
                  <li class="h4"><b>สถาบัน :</b> {{ service.university }}</li>
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
              <div v-for="study in user.study" :key="study.id">
                <div class="ml-6">
                  <li class="h4"><b>ระดับ : </b>{{ study.level }}</li>
                  <li class="h4">
                    <b>วุฒิการศึกษา : </b>{{ study.educational }}
                  </li>
                  <li class="h4"><b>สถาบัน :</b> {{ study.university }}</li>
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
              <div v-for="expertise in user.expertise" :key="expertise.id">
                <div class="ml-6">
                  <li class="h4"><b>{{ expertise.group }} : </b>{{ expertise.value }}</li>
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
import dayJs from "../Utili/dayJs";
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: {
    Loading,
  },
  data: function () {
    return {};
  },
  created() { },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      loading: (state) => state.auth.loading,
    }),
  },
  methods: {
    formatDate: (date) => dayJs.formatDateTH(date)
  },
};
</script>


