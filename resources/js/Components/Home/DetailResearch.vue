<template>
  <div>
    <Loading :loading="loading" />
    <v-select :items="parameter.branch_group" item-text="value_ref" item-value="value" label="branch_group"></v-select>
    <v-select :items="parameter.test" item-text="value_ref" item-value="value" label="test"></v-select>
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
              <v-btn color="error" dark>ลบงานวิจัยนี้</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row> ฟหกฟ </v-row>
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
  data: () => ({
  }),
  computed: {
    ...mapState({
      loading: (state) => state.parameter.loading,
      parameter: (state) => state.parameter,
    }),
  },
  created() {
    this.fetchParameter(['branch_group', 'test'])
  },

  methods: {
    fetchParameter(group_name) {
      this.$store.dispatch("parameter/fetchParameter", group_name)
    },
  },
};
</script>


