<template>
  <v-container>
    <v-alert type="warning">
      example account -> email: eve.holt@reqres.in , password: cityslicka
    </v-alert>
    <form>
      <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="form.password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="login">Login</v-btn>
    </form>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      },
      show1: false,
      password: "Password",
      form: {
        email: "",
        password: ""
      },
      token: localStorage.getItem("token") || "",
      error: false
    };
  },
  methods: {
    login() {
      axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: this.form
      })
        .then(response => {
          console.log("Data login :", response.data);
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.$router.push("/ketentuan", () => this.$router.go(0));
        })
        .catch(function(error) {
          alert("Login gagal");
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
