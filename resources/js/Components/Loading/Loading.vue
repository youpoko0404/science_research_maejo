<template>
  <div class="text-center">
    <div v-if="this.loading">
      <v-overlay :value="this.loading">
        <v-progress-circular
          :size="50"
          indeterminate
          :color="this.color ? this.color : 'primary'"
        ></v-progress-circular>
      </v-overlay>
    </div>
  </div>
</template>


<script>
export default {
  name: "Loading",
  props: ["loading", "color"],
  data: function () {
    return {};
  },
  mounted() {},
  created() {},
  methods: {},
};
</script>