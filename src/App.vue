<template>
  <div id="app">
    <PostList></PostList>
    <PopularPost></PopularPost>
    <Footer></Footer>
  </div>
</template>

<script>
import PopularPost from './pages/MainPage/sections/popularPost'
import PostList from './pages/MainPage/sections/postList'
import Footer from './pages/MainPage/sections/footer'

export default {
  name: 'app',
  components: {
    PopularPost,
    PostList,
    Footer
  }
}
</script>

<styles lang="scss" src="./styles/styles.scss" scoped />
