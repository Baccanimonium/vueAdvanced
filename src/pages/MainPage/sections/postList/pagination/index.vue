<template>
	<div class="pagination-block">
		<PrimaryButton
			@click="changePage(prevButton)"
			:value="prevButton"
			class="prev"
		></PrimaryButton>
		<PrimaryButton
			@click="changePage(firstButton)"
			:value="firstButton"
			:class="{ active: firstButton === parseInt(page)}"
			class="button-pagination btn-def"
		>
			{{ firstButton }}
		</PrimaryButton>
		<PrimaryButton
			@click="changePage(secondButton)"
			:value="secondButton"
			:class="{ active: secondButton === parseInt(page)}"
			class="button-pagination btn-def"
		>
			{{ secondButton }}
		</PrimaryButton>
		<PrimaryButton
			@click="changePage(threeButton)"
			:value="threeButton"
			:class="{ active: threeButton === parseInt(page)}"
			class="button-pagination btn-def"
		>
			{{ threeButton }}
		</PrimaryButton>
		<PrimaryButton
			@click="changePage(fourButton)"
			:value="fourButton"
			:class="{ active: fourButton === parseInt(page)}"
			class="button-pagination btn-def"
		>
			{{ fourButton }}
		</PrimaryButton>
		<PrimaryButton
			@click="changePage(fiveButton)"
			:value="fiveButton"
			:class="{ active: fiveButton === parseInt(page)}"
			class="button-pagination btn-def"
		>
			{{ fiveButton }}
		</PrimaryButton>
		<PrimaryButton
			@click="changePage(nextButton)"
			:value="nextButton"
			class="next"
		></PrimaryButton>
	</div>
</template>

<script>
import PrimaryButton from '@/Components/Buttons/PrimaryButton'
export default {
  name: 'index',
  components: {
    PrimaryButton
  },
  data () {
    return {
      page: 1
    }
  },
  props: {
	 pageCount: {
	  type: Number,
	  default: 1
	 }
  },
  methods: {
    changePage (value) {
      if (value !== this.page) {
        this.page = value
        this.$emit('pageChange', value)
      }
      console.log(this.page)
    }
  },
  computed: {
    prevButton () {
      return this.page > 1 ? this.page - 1 : 1
    },
    nextButton () {
      return this.page + 1
    },
    firstButton () {
      return this.page > 3 ? this.page - 2 : 1
    },
    secondButton () {
      return this.page > 3 ? this.page - 1 : 2
    },
    threeButton () {
      return this.page > 3 ? this.page : 3
    },
    fourButton () {
      return this.page > 3 ? this.page + 1 : 4
    },
    fiveButton () {
      return this.page > 3 ? this.page + 2 : 5
    }
  }
}
</script>

<style lang="scss" scoped>
	.pagination-block {
		padding: 0 15px;
		margin: 3rem auto;
		justify-content: center;
		align-items: center;
		display: flex;
	}
</style>
