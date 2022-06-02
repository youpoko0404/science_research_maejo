<template>
  <v-app id="app" data-app>
    <AdminMenu></AdminMenu>
    <v-main class="background">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AdminMenu from "./AdminMenu.vue";

export default {
  name: "app",
  components: { AdminMenu },
};
</script>

