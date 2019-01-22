import axios from 'axios'
import { POST_URL } from '@/config'
import { TAGS_URL } from '@/config'

export default {
  state: {
    postContent: [],
    tagsList: []
  },
  mutations: {
    savePost (state, payload) {
      state.postContent = payload
    },
    saveTagsList (state, payload) {
      state.tagsList = payload
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
    },
    async fetchTagsList ({ commit }) {
      try {
        const { data } = await axios.get(`${TAGS_URL}`)
        commit('saveTagsList', data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    accessPost (state) {
      return state.postContent
    },
    accessTagsList (state) {
      return state.tagsList
    }
  }
}
