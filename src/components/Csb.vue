<template>
  <v-container>
    <h2 class="Judul">Example Class and Style Bindings</h2>
    <v-card class="kartu">
      <v-card-text>
        <h5>Mengubah warna text menjadi merah</h5>
        <div :class="{'warna_text':cbind}">
          well meaning and kindly.<br />
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="cbind = !cbind">Class Binding</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="kartu">
      <v-card-text>
        <h5>Style binding -> mengubah ukuran font</h5>
        <div :style="{fontSize: value + 'px'}">
          well meaning and kindly.<br />
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="normal" @click="value--">-</v-btn>
        <v-btn color="nomral" @click="value++">+</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<style scoped>
.Judul {
  text-align: center;
  margin-top: 50px;
}
.kartu {
  margin-top: 30px;
}
.warna_text{
  color:red
}
</style>
<script>
export default {
  data() {
    return {
      cbind: false,
      value:'12',
      sbind: false
    };
  }
};
</script>
