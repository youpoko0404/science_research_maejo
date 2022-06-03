<template>
  <v-app id="app" data-app>
    <AdminMenu></AdminMenu>
    <v-main class="background">
      <router-view  class="mt-5 mb-5"></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";

export default {
  name: "app",
  components: { AdminMenu, Footer },
};
</script>

<style scoped>
.background {
  background-color: #dcdcdc;
  /* margin-bottom: 90px; */
}
</style>

