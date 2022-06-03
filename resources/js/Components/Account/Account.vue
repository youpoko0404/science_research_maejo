<template>
  <div>
    <Loading :loading="loading" />
    <v-container>
      <p class="h3">ยินดีต้อนรับเข้าสู่ระบบงานวิจัย</p>
      <v-divider></v-divider>
      <v-row>
        <p class="h4">ตำแหน่งงาน</p>
        <div class="ml-6">
          <li class="h4">เลขที่ตำแหน่ง :</li>
          <li class="h4">ประเภทการจ้าง :</li>
          <li class="h4">ตำแหน่ง :</li>
          <li class="h4">ระดับ :</li>
          <li class="h4">วันที่เริ่มทำงาน :</li>
        </div>

        <p class="h4">ตำแหน่งการบริการ</p>

        <p class="h4">การศึกษา</p>

        <p class="h4">ความเชี่ยวชาญ/ชำนาญการ/ความสนใจ</p>
      </v-row>
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
    items: [],
  }),
  methods: {
    heddleOnClickSearch() {
      if (this.research) {
        this.checkResearch = true;
        this.loading = true;
        setTimeout(() => {
          this.item = [
            {
              132: "123",
            },
          ];
          this.loading = false;
        }, 2000);
      } else {
        this.checkResearch = false;
      }
    },
  },
};
</script>


