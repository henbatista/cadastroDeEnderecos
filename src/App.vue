<template>
  <div id="app">
    <router-view />
  </div>
</template>

components: { HeaderGlobal, },

<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default {
  methods: {
    redirectToLink(link) {
      const { isNavigationFailure, NavigationFailureType } = VueRouter;
      this.$router.push(link).catch((e) => {
        if (!isNavigationFailure(e, NavigationFailureType.duplicated)) {
          throw Error(e);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#inspire {
  width: 100%;
}

.avatar {
  background-color: #f7f8fa;
}
#navigation {
  overflow-x: hidden;
  overflow-y: hidden;
}

#logo {
  width: 50%;
  margin-top: 2rem;
  margin-left: 0.7rem;
  overflow: hidden;
}

#main {
  background-color: #f7f8fa;
}

#sheet-main {
  display: grid;
  grid-auto-flow: column;
  margin-left: start auto;
}
#list {
  padding-top: 2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #314156;
}

#icon-list {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
}

#icons-header {
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
}

#img-avatar {
  height: 50px;
  width: 50px;
}
</style>
