<template>
  <v-container>
    <h2>Add User</h2>
    <form>
      <v-text-field
        v-model="form.first_name"
        :counter="10"
        label="First Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.last_name"
        :counter="10"
        label="Last Name"
        required
      ></v-text-field>
      <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
      <v-btn class="mr-4" @click="add_user">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
      form: {
        first_name: "",
        last_name: "",
        email: ""
      }
    };
  },
  methods: {
    add_user() {
      axios({
        method: "post",
        url: "https://reqres.in/api/users",
        data: this.form
      })
        .then(response => {
          console.log("Data user baru :", response.data);
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    },
    clear() {
      this.form.first_name = "";
      this.form.last_name = "";
      this.form.email = "";
    }
  }
};
</script>
