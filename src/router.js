import Vue from "vue";
import Router from "vue-router";
import NominationHome from "./views/NominationHome.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "nomination",
      component: NominationHome
    },
  ]
});

export default router;
