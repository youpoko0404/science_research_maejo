<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="darken-3"
    style="width: 100%"
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <!-- <button @click="redirect('/')" class="-hidden-sm-and-down">TEST</button> -->
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <!-- <div v-if="$route.fullPath !== '/login'">
      <v-btn class="primary pr-4" @click="redirect('/login')"> Login </v-btn>
    </div> -->
  </v-app-bar>
</template>

<script>

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
