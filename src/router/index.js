import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
