<template>
  <div id="app">
    <TestReduce></TestReduce>
    <!--<PopularPost></PopularPost>-->
    <router-view></router-view>
  </div>
</template>

<script>
import PopularPost from './pages/MainPage/sections/popularPost'
import TestReduce from './pages/TestReduce'

export default {
  name: 'app',
  components: {
    PopularPost, TestReduce
  }
}
</script>

<styles lang="scss" src="./styles/styles.scss" scoped />
