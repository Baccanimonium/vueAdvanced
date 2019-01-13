import Vue from 'vue'
import Vuex from 'vuex'
import popularPost from './pages/MainPage/sections/popularPost/popularPost'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popularPost
  }
})
