<template>
  <v-app id="inspire">
    <Navigasi></Navigasi>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigasi from "@/components/Navigasi.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navigasi,
    Footer
  },
  props: {
    source: String
  }
};
</script>
