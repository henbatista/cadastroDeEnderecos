<template>
  <v-app>
    <v-main id="main">
      <v-container fluid>
        <SheetsTitle text="Overview" pictureSrc="Logo-WeON.png" class="Title" />
        <MainRegister />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainRegister from "@/components/registerComponents/RegisterMain.vue";
import SheetsTitle from "@/components/util/SheetsTitle.vue";

export default {
  data: () => ({ drawer: null }),
  components: {
    MainRegister,
    SheetsTitle,
  },
};
</script>

<style lang="scss" scoped>
.Title {
  display: grid;
  grid-template-columns: 50% 50%;
}

#main {
  background-color: #f7f8fa;
}
</style>
