<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <p class="h3">รายละเอียดงานวิจัย</p>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="10 text-right">
              <div>หากท่านต้องการลบงานวิจัยนี้ออกจากระบบ</div>
              <div>
                (หากลบงานวิจัยใด ๆ
                ออกจากระบบแล้วจะไม่สามารถเรียกข้อมูลงานวิจัยนั้นกลับมาได้อีก)
              </div>
            </v-col>
            <v-col cols="2">
              <v-btn color="error" dark>ลบงานวิจัยนี้</v-btn></v-col
            >
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row> ฟหกฟ </v-row>
    </v-container>
  </div>
</template>


<script>
import HttpRequest from "../../HttpRequest/httpRequest";
import Loading from "../../Components/Loading/Loading";
const httpRequest = new HttpRequest();
export default {
  components: {
    Loading,
  },
  data: () => ({
    loading: false,
  }),
  methods: {},
};
</script>


