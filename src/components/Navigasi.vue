/* eslint-disable vue/valid-template-root */
<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <span v-if="isLoggedIn">
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>List user</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
        <span v-if="isLoggedIn == ''">
          <v-list-item link to="/login">
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
        <span v-if="isLoggedIn">
          <v-list-item link to="/matematika">
            <v-list-item-action>
              <v-icon>mdi-calculator</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Fungsi matematika</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
        <span v-if="isLoggedIn">
          <v-list-item link to="/ketentuan">
            <v-list-item-action>
              <v-icon>mdi-information</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Ketentuan Aplikasi</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
        <v-list-item link to="/contact">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <span v-if="isLoggedIn">
          <v-list-item link @click="logout()">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo darken-2" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>
