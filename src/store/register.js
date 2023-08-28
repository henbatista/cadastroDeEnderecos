import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    colorItems: [],
    loading: false,
    dialog: false,
  },
  getters: {
    //Add account in form
    accountant(state) {
      return state.sequencia++;
    },
  },
  mutations: {
    //Add new Product
    addProduct(state, item) {
      state.items.push(item);
    },

    //Loanding item
    setLoading(state, loading) {
      state.loading = loading;
    },

    //Update color item
    updateColorItems(state, newItems) {
      state.colorItems = newItems;
    },

    //Update Dialog
    updateDialog(state, isOpen) {
      state.dialog = isOpen;
    },

    //Update Date
    DELETE_ITEM_DATE(state, itemIndex) {
      state.items.splice(itemIndex, 1);
    },
    UPDATE_ITEM_DATE(state, { itemIndex, updateDate }) {
      state.items[itemIndex].updateDate = updateDate;
    },

    //Delelte item
    DELETE_ITEM(state, itemsDelete) {
      const index = state.items.indexOf(itemsDelete);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    //Loanding item
    SET_LOADING(state, loadingDelete) {
      state.loading = loadingDelete;
    },
  },

  actions: {
    //Loanding item
    onSubmit({ commit }) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
      }, 2000);
    },

    closeDialog({ commit }) {
      commit("updateDialog", false); // Chame a mutação para definir 'dialog' como false
    },

    updateFormItems({ commit, state }, newItem) {
      const updatedItems = [...state.colorItems, newItem];

      commit("updateColorItems", updatedItems);
    },

    //Update Date
    deleteItemDate({ commit, state }, item) {
      const itemIndex = state.items.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        commit("DELETE_ITEM_DATE", itemIndex);

        // Atualizar a data do item excluído
        const updateDateToday = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedUpdateDate = updateDateToday.toLocaleDateString(
          "pt-BR",
          options
        );

        commit("UPDATE_ITEM_DATE", {
          itemIndex,
          updateDate: formattedUpdateDate,
        });
      }
    },
    //Delete Item
    deleteItem({ commit }, item) {
      if (
        confirm(
          `Você tem certeza que quer deletar o item "${item.localizacaoTitulo}" do cadastro?`
        )
      ) {
        commit("SET_LOADING", true);
        setTimeout(() => {
          commit("DELETE_ITEM", item);
          commit("SET_LOADING", false);
        }, 2000);
      }
    },
  },
  modules: {},
});
