<template>
  <div>
    <Loading :loading="loading" />
    <v-container v-if="!loading">
      <v-row justify="space-between">
        <v-col>
          <p class="h3">รายละเอียดงานวิจัย</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      {{ search_research_by_id }}
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
      loading: (state) => state.dashboard.loading,
      search_research_by_id: (state) => state.dashboard.search_research_by_id,
    }),
  },
  created() {
    this.fetchParameter(this.$route.query.id)
  },

  methods: {
    fetchParameter(id) {
      if (id) {
        this.$store.dispatch("dashboard/fetchSearchResearchById", id)
      }
    },
  },
};
</script>


