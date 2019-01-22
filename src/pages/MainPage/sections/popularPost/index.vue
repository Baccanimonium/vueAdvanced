<template>
  <section class="s-extra">
    <div class="container">
      <div class="top">
        <div class="popular">
          <h3>Popular Posts</h3>
          <miniaturePost :postArray="PostList"/>
        </div>
        <div class="about">
          <h3>About Philosophy</h3>
          <p>
            Donec sollicitudin molestie malesuada.
            Nulla quis lorem ut libero malesuada feugiat.
            Pellentesque in ipsum id orci porta dapibus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
          </p>
          <div class="about-social">
            <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-pinterest" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <h3>Tags</h3>
        <div class="tags">
          <PrimaryButton
            v-for="tag in TagsListArray"
            :key="tag.id"
            :value="tag.name"
            @click="getTag"
            class="tag-button"
          >
            {{tag.name}}
          </PrimaryButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import miniaturePost from './miniaturePost/index'
import PrimaryButton from '@/Components/Buttons/PrimaryButton'
export default {
  name: 'index',
  data () {
    return {
      tag: ''
    }
  },
  components: {
    miniaturePost,
    PrimaryButton
  },
  beforeMount () {
    this.$store.dispatch('fetchPost')
    this.$store.dispatch('fetchTagsList')
  },
  computed: {
    PostList () {
      return this.$store.getters.accessPost
    },
    TagsListArray () {
      return this.$store.getters.accessTagsList
    }
  },
  methods: {
    getTag ({ target: { value } }) {
      this.tag = value
    }
  }
}
</script>

<styles lang="scss" src="./style.scss" scoped />
