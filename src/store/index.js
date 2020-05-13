import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
    satus:true,
    value:''
}
const mutations={
    edit(state,obj){
      state.satus = !state.satus
      console.log(obj)
    }
}
const actions={
    change(context,value){
        context.commit('edit',value);
    }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});
