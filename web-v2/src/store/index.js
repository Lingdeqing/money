import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import {getPlan, setPlan} from "../io"
const store = new Vuex.Store({
    state: {
        plan: null,
    },
    getters: {
        getRoleIndexById(state){
            return function(_id){
                for(let i = 0; i < state.roles.length; i++){
                    if(state.roles[i]._id === _id){
                        return i;
                    }
                }
                return -1;
            }
        },
    },
    mutations: {
        setPlan(state, plan) {
            state.plan = plan;
        }
    },
    actions: {
        async getPlan(context){
            const plan = await getPlan();
            context.commit('setPlan', plan);
        },
        async setPlan(context, newPlan){
            console.log(newPlan)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        code: 0
                    });
                }, 4000)
            })
        }
    }
});

export default store;
