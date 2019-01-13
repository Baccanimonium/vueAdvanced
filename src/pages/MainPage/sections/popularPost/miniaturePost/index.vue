<template>
  <div>
    <div
      class="popular-post"
      v-for="post in postArray"
      :key="post.id"
    >
      <a href="">
        <img :src="post.img" alt="">
      </a>
      <div class="content">
        <a href="" class="title">{{ post.title }}</a>
        <div class="description">
          By <a href="">{{ post.author }}</a> on {{ post.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    postArray: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .popular-post {
    margin-bottom: 3.5rem;
    display: flex;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      height: 69px;
      width: 69px;
      padding-top: 5px;
    }
    .content {
      padding-left: 20px;
      .title {
        font-size: 1.6rem;
        line-height: 1.3125;
        margin-bottom: .6rem;
        font-weight: 900;
      }
      .description {
        font-size: 1.3rem;
        line-height: 1.615;
      }
    }
  }
</style>
