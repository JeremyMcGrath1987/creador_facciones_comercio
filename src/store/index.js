import Vue from "vue";
import Vuex from "vuex";
import loadingScreen from "./loadingScreen";
import factionList from "./factionList";
import faction from "./faction"
import coords from "./coords"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loadingScreen,
    factionList,
    faction,
    coords
  }
});
