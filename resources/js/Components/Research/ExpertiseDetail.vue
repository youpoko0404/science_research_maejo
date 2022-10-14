<template>
  <v-container>
    <Loading :loading="loading" />
    <div>
      <div style="font-size: 30px; padding: 10px">
        {{ "ข้อมูลความเชี่ยวชาญ" }}
      </div>
    </div>
    <div class="pa-4 grey lighten-2 rounded-lg">
      <h2>
        ชื่อ :
        {{
          `${expertise_by_id.title_position_short || ""} ${
            expertise_by_id.first_name || ""
          } ${expertise_by_id.last_name || ""}`
        }}
      </h2>
      <h2>
        ชื่อหน่วยงาน :
        {{
          `${expertise_by_id.section || ""}  ${
            expertise_by_id.division || ""
          } ${expertise_by_id.faculty || ""}`
        }}
      </h2>
      <h2>
        ประเภทความเชี่ยวชาญ :
        {{ `${expertise_by_id.exp_type || ""}` }}
      </h2>
      <h2>
        กลุ่มสาขาวิชาความเชี่ยวชาญ :
        {{
          `${expertise_by_id.exp_group_field || ""} ${
            expertise_by_id.exp_main_field || ""
          }`
        }}
      </h2>
      <h2>
        อนุสาขาวิชาความเชี่ยวชาญ :
        {{ `${expertise_by_id.exp_sub_field || ""}` }}
      </h2>
      <h2>
        รายละเอียดความเชี่ยวชาญเพิ่มเติม :
        {{ `${expertise_by_id.exp_detail || ""}` }}
      </h2>
      <template v-if="!isEmpty(expertise_by_id.is_research)">
        <h2>รายละเอียดความเชี่ยวชาญเพิ่มเติม</h2>
      </template>
      <template v-if="!isEmpty(expertise_by_id.is_service)">
        <h2>เป็นวิทยากร/ให้บริการวิชาการ/สอน/บรรยายแก่บุคคลอื่นหรือองค์กร</h2>
      </template>
      <template v-if="!isEmpty(expertise_by_id.is_award)">
        <h2>ได้รับรางวัลในสาขาวิชาที่มีความเชี่ยวชาญ</h2>
      </template>
      <template v-if="!isEmpty(expertise_by_id.is_experience)">
        <h2>ความเชี่ยวชาญที่สั่งสมจากประสบการณ์การทำงาน</h2>
      </template>
      <template v-if="!isEmpty(expertise_by_id.is_interest)">
        <h2>
          ความเชี่ยวชาญที่มีความสนใจและมีการศึกษาหาความรู้/ฝึกฝนปฏิบัติจนมีความเชี่ยวชาญ
        </h2>
      </template>
    </div>
  </v-container>
</template>
  
  
  <script>
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: {
    Loading,
  },
  data: () => ({}),
  created() {
    this.fetchExpertiseById();
  },

  computed: {
    ...mapState({
      loading: (state) => state.user.loading,
      expertise_by_id: (state) => state.user.expertise_by_id,
    }),
  },

  methods: {
    async fetchExpertiseById() {
      await this.$store.dispatch(
        "user/fetchUserExpertiseById",
        this.$route.query.id
      );
    },
    isEmpty(value) {
      if (value != null && value != "") return false;
      else return true;
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 10px;
}
</style>
  
  
  