import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeComponent: 'ProjectGrid'
    },
    getters: {
        compo: state => {
            return state.activeComponent = 'step';
        }
    }
});