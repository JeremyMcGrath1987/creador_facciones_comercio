export default {
  namespaced: true,
  state: {
    data: {
      
    }
  },
  actions: {
    SETPOS: (context, pos) => {
      context.commit("setPos", pos);
    }
  },
  mutations: {
    setPos: (state, pos) => {
      state.data = pos;
    }

  }
};