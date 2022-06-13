<template>
  <v-app>
    <GuestTopBar></GuestTopBar>
    <Loading :loading="loading" />
    <v-main class="background">
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-layout align-center justify-center>
            <v-flex xs12 sm10 md6>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Log In</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-text-field prepend-icon="person" v-model="email" name="email" label="Email" type="text"
                    placeholder=" " persistent-placeholder></v-text-field>
                  <v-text-field id="password" v-model="password" prepend-icon="lock" name="password" label="Password"
                    type="password" placeholder=" " persistent-placeholder></v-text-field>
                </v-card-text>
                <v-layout justify-center>
                  <v-card-actions class="mb-4">
                    <div class="text-center">
                      <v-btn @click="login()">LOGIN</v-btn>
                    </div>
                  </v-card-actions>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GuestTopBar from "../../Layouts/GuestTopBar.vue";
import { mapState } from "vuex";
import Loading from "../../Components/Loading/Loading";
export default {
  components: { GuestTopBar, Loading },
  data: () => ({
    email: "",
    password: "",
  }),
  props: {
    source: String,
  },
  computed: {
    ...mapState({
      loading: (state) => state.auth.loading,
    }),
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("auth/login", user).then((response) => {
        if (response.success) {
          window.location.href = "/account";
        }
      });
    },
  },
};
</script>


