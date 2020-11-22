import Vue from "vue";
import VueRouter from "vue-router";
import FactionList from "../views/FactionList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FactionList",
    component: FactionList
  },
  {
    path: "/moneymanagement",
    name: "MoneyManagement",
    component: () => import("../views/MoneyManagement")
  },
  {
    
    path: "/FactionConfiguration",
    name: "FactionConfiguration",
    component: () => import("../views/FactionConfiguration")
  },
  {
    path: "/factioncreation",
    name: "FactionCreation",
    component: () => import("../views/FactionCreation")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
