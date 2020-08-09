<template>
  <v-container fluid>
    <v-row dense>
      <v-card>
        <v-spacer></v-spacer>
        <v-card-text>
          <h4 class="text--primary text-truncate">
            Perkalian
          </h4>
          <v-text-field
            v-model="a"
            type="number"
            label="input 1"
            required
          ></v-text-field>
          <v-text-field
            v-model="b"
            type="number"
            label="input 2"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="perkalian(a, b)">
            Answer
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <p class="hasil_matematika">{{ this.hasil_perkalian }}</p>
        </v-card-text>
      </v-card>
      <v-card>
        <v-spacer></v-spacer>
        <v-card-text>
          <h4 class="text--primary text-truncate">
            Penjumlahan
          </h4>
          <v-text-field
            v-model="c"
            type="number"
            label="input 1"
            required
          ></v-text-field>
          <v-text-field
            v-model="d"
            type="number"
            label="input 2"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4" @click="penjumlahan(c, d)">
            Answer
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <p class="hasil_matematika">{{ this.hasil_penjumlahan }}</p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Content",
  data: () => ({
    a: null,
    b: null,
    c: null,
    d: null,
    hasil_pembagian: "",
    hasil_pengurangan: "",
    hasil_penjumlahan: "",
    hasil_perkalian: ""
  }),
  methods: {
    penjumlahan(a, b) {
      return (this.hasil_penjumlahan = parseInt(a) + parseInt(b));
    },
    pengurangan(a, b) {
      this.hasil_pengurangan = a - b;
    },
    perkalian(a, b) {
      this.hasil_perkalian = a * b;
    },
    pembagian(a, b) {
      this.hasil_pembagian = a / b;
    }
  }
};
</script>
<style scoped>
.Judul {
  text-align: center;
  color: blue;
}
.hasil_matematika {
  background-color: darkgray;
  text-align: center;
  color: black;
}
</style>
