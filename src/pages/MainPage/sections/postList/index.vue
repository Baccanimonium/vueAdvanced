<template>
	<div class="post-list-block">
		<div class="container">
			<pagination></pagination>
		</div>
	</div>
</template>

<script>
import pagination from './pagination'
export default {
  name: 'index',
  components: {
		 pagination
  },
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
  }
}
</script>

<styles lang="scss" src="./style.scss" scoped />
