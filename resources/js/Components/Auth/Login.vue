<template>
  <v-app>
    <GuestTopBar></GuestTopBar>
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
                  <v-form
                    ref="form"
                    id="form"
                    method="POST"
                    action="/announce/user"
                  >
                    <v-text-field
                      prepend-icon="person"
                      v-model="email"
                      name="email"
                      label="Email"
                      type="text"
                      placeholder=" "
                      persistent-placeholder
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      v-model="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      placeholder=" "
                      persistent-placeholder
                    ></v-text-field>
                    <v-text-field
                      v-show="false"
                      name="_token"
                      :value="csrf"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-layout justify-center>
                  <v-card-actions class="mb-4">
                    <div class="text-center">
                      <v-btn color="primary" type="submit" form="form"
                        >Log in</v-btn
                      >
                    </div>
                  </v-card-actions>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-row>
      </v-container>

      <v-btn @click="login()">asdasd</v-btn>
    </v-main>
  </v-app>
</template>


<script>
import GuestTopBar from "../../Layouts/GuestTopBar.vue";

export default {
  components: { GuestTopBar },
  data: () => ({
    drawer: null,
    email: "",
    password: "",
    //csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    csrf: document.head.querySelector('meta[name="csrf-token"]').content,
  }),
  props: {
    source: String,
  },
  methods: {
    redirect(url) {
      window.location.href = url;
    },
    login() {
      axios.post("api/auth/user", {}).then(() => {});
    },
  },
};
</script>


