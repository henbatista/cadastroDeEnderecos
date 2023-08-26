<!-- eslint-disable prettier/prettier -->
<template>
  <v-app class="app-font">
    <v-main>
      <div class="top">
        <div class="topColor"></div>
      </div>
      <div class="center-hv">
        <Logo />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "@/components/atoms/LogoWeon.vue";
export default {
  name: "App",
  components: { Logo },
};
</script>

<style>
.top {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 1rem;
}
.topColor {
  margin-top: 0;
  margin-left: 0;
  background-image: rgb(2, 0, 36);
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 58, 121, 0.8465511204481793) 31%,
    rgba(0, 212, 255, 1) 100%
  );
}
html {
  overflow-y: auto;
}
body {
  font-family: "Roboto";
}
.center-hv {
  margin: auto;
  position: absolute;
  width: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.app-font {
  /* font-family: "Gill Sans Nova", sans-serif !important;
  font-weight: bold !important; */
}

::-webkit-scrollbar-track {
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 15px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #6e6e6e;
  border-radius: 10px;
  border-right: 3px #ffffff solid;
  border-left: 3px #ffffff solid;
  border-top: 2px white solid;
  border-bottom: 2px white solid;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #9e9e9e;
}
</style>
