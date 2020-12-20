import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    dir: 1
  },
  mutations: {
    SET_USERS: (state, payload) => {
      state.users = payload
    },
    SET_DIR: (state, payload) => {
      state.dir = payload
    }
  },
  actions: {
    // add payload
    GET_USERS: async (context, payload) => {
      let res = await fetch("/prediction?school=" + payload.school)
      if (res.status != 200) {
        console.log(res)
        return
      }
      let data = await res.json()
      context.commit("SET_USERS", data)
    },
    UPDATE_STATUS: (context, payload) => {
      fetch("/status", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
      })
    }
  },
  modules: {
  }
})
