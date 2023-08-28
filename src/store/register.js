import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        sequence: "1",
        zipCode: "",
        locationTitle: "Paraná",
        publicPlace: "Cláudio Pereira da Cruz",
        complement: "Casa",
        neighborhood: "Afonso Pena",
        location: "São José dos Painhais",
        fu: "PR",
        createdDate: "28 de agosto de 2023",
        updateDate: "28 de agosto de 2023",
      },
    ],
    colorItems: [],
    loading: false,
    dialog: false,
  },
  getters: {
    accountant(state) {
      return state.sequencia++;
    },
  },
  mutations: {
    addProduct(state, item) {
      state.items.push(item);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    updateColorItems(state, newItems) {
      state.colorItems = newItems;
    },
    updateDialog(state, isOpen) {
      state.dialog = isOpen;
    },
  },
  actions: {
    onSubmit({ commit }) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
      }, 2000);
    },

    closeDialog({ commit }) {
      commit("updateDialog", false); // Chame a mutação para definir 'dialog' como false
    },
  },

  updateFormItems({ commit, state }, newItem) {
    const updatedItems = [...state.colorItems, newItem];

    commit("updateColorItems", updatedItems);
  },

  modules: {},
});
