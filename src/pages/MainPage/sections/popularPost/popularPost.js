import axios from 'axios'
import { POST_URL } from '../../../../config'

export default {
  state: {
    postContent: []
  },
  mutations: {
    savePost (state, payload) {
      state.postContent = payload
    }
  },
  actions: {
    async fetchPost ({ commit }) {
      try {
        const { data } = await axios.get(`${POST_URL}`)
        commit('savePost', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    accessPost (state) {
      return state.postContent
    }
  }
}
