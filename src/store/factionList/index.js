export default {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    SETFACTIONLIST: (context, list) => {
      context.commit("setFactionList", list);
    }
  },
  mutations: {
    setFactionList: (state, list) => {
      state.data = list;
    }

  }
};