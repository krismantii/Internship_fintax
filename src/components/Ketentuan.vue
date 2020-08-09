<template>
  <v-container fluid>
    <v-alert type="warning">
      Kualifikasi aplikasi dengan framework vue js
    </v-alert>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-spacer></v-spacer>
          <v-card-text>
            <p class="text--primary text-truncate">
              {{ card.title }}
            </p>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Content",
  data: () => ({
    cards: [
      { title: "Class and Style Bindings", flex: 12 },
      {
        title: "Do routing using path variable, query, and navigation guard",
        flex: 12
      },
      { title: "Create Child and parent component communication", flex: 12 },
      {
        title:
          "Do Event Handling by create simple math calculator ( 2 inputs, 1 operational)",
        flex: 12
      },
      {
        title: "Create Table with filter asc, desc, total record (3,5,10,all)",
        flex: 12
      },
      {
        title:
          "Test API using https://reqres.in/ , http://dummy.restapiexample.com/",
        flex: 12
      },
      { title: "Use browser storage (cookie/ local/ session)", flex: 12 }
    ]
  })
};
</script>
