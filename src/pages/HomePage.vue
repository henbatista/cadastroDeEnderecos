<template>
  <v-app>
    <v-main id="main">
      <v-container fluid>
        <SheetsTitle text="Overview" pictureSrc="logo.png" />
        <MainRegister />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainRegister from "@/components/registerComponents/RegisterMain.vue";
import SheetsTitle from "@/components/util/LogoMain.vue";

export default {
  data: () => ({ drawer: null }),
  components: {
    MainRegister,
    SheetsTitle,
  },
};
</script>

<style lang="scss" scoped>
#main {
  background-color: #f7f8fa;
}
</style>
