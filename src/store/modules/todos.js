const state = {

    loading: false,

    items: [],
    activeFilter: null,

}

const getters = {

    loading (state) {
        return state.loading;
    },

    items (state) {

        // This filtering won't be needed if the API does the filtering work

        switch (state.activeFilter) {

            case 'completed':
                return state.items.filter(function (todoItem) {
                    return todoItem.state && !todoItem.trashed;
                });

            case 'trashed':
                return state.items.filter(function (todoItem) {
                    return todoItem.trashed;
                });

            case null:
            default:
                return state.items.filter(function (todoItem) {
                    return !todoItem.trashed;
                });

        }

    },

    activeFilter (state) {
        return state.activeFilter;
    },

}

const mutations = {

    SET_LOADING (state, data) {
        state.loading = data;
    },

    SET_ITEMS (state, data) {
        state.items = data;
    },

    ADD_ITEM (state, data) {
        state.items.push(data);
    },

    REMOVE_ITEM (state, data) {
        const index = state.items.findIndex(item => item.id === data.id);
        if (index >= 0) state.items.splice(index, 1);
    },

    UPDATE_ITEM (state, data) {
        const index = state.items.findIndex(item => item.id === data.id);
        if (index >= 0) state.items[index] = data;
    },

    SET_ACTIVE_FILTER (state, data) {
        state.activeFilter = data;
    },

}

const actions = {

    // eslint-disable-next-line no-unused-vars
    fetchItems ({ commit, state }) {
        // commit('SET_LOADING', true);
        //return axios.get({
        //   params: {
        //     filter: state.activeFilter
        //   }
        // }).then((response) => {
        // commit('SET_ITEMS', response.data.items);
        // commit('SET_LOADING', false);
        // });
    },

    updateItem({ commit }, data) {
        commit('SET_LOADING', true);
        // Maybe API Call
        commit('UPDATE_ITEM', data);
        commit('SET_LOADING', false);
    },

    addItem ({ commit }, data) {
        commit('SET_LOADING', true);
        // Maybe API Call
        commit('ADD_ITEM', data);
        commit('SET_LOADING', false);
    },

    removeItem({ commit }, data) {
        commit('SET_LOADING', true);
        // Maybe API Call
        commit('REMOVE_ITEM', data);
        commit('SET_LOADING', false);
    },

    setActiveFilter({ commit, dispatch }, data) {
        commit('SET_ACTIVE_FILTER', data);
        dispatch('fetchItems');
    },

}

export default {
    namespaced: true,
    state: () => (state),
    getters,
    mutations,
    actions
}
