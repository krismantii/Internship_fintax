<template>
  <v-container>
    <h2 class="Judul">List User</h2>
    <v-btn depressed color="primary" to="/add_user">
      Add user
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="user"
      :sort-desc="[false, true]"
      :footer-props="{
        itemsPerPageOptions: [3, 5, 10, -1]
      }"
      class="elevation-1"
    ></v-data-table>
    <Csb></Csb>
  </v-container>
</template>
<style scoped>
.gambar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
<script>
import Csb from "@/components/Csb.vue";
import axios from "axios";
export default {
  components: {
    Csb
  },
  data() {
    return {
      user: [],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id"
        },
        { text: "Fisrt name", value: "first_name" },
        { text: "Last name", value: "last_name" },
        { text: "Email", value: "email" }
      ]
    };
  },
  mounted() {
    this.load_user();
  },
  methods: {
    load_user() {
      axios({
        method: "get",
        url: "https://reqres.in/api/users?page=1"
      })
        .then(response => {
          console.log("Data user :", response.data);
          this.user = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
          console.log("error");
        });
    }
  }
};
</script>
<style scoped>
.Judul {
  text-align: center;
}
</style>
