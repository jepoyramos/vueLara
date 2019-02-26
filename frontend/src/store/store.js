import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeComponent: 'ProjectGrid'
    },
    getters: { //access state
        getActiveComponent: state => {
            return state.activeComponent;
        }
    },
    mutations: { // set data of state
        set_activeComponent: (state, payload) => {
            state.activeComponent = payload //payload=data passed to our mutation
        },
    },
    actions: {// dispatch an action to commit a mutation
        set_activeComponent: (context, payload) => {
            context.commit("set_activeComponent", payload);
        }
    }
});