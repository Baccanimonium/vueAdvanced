import Vue from 'vue'
import Vuex from 'vuex'
import popularPost from './pages/MainPage/sections/popularPost/popularPost'
import postList from './pages/MainPage/sections/postList/postList'
import footer from './pages/MainPage/sections/footer/footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popularPost, postList, footer
  }
})
