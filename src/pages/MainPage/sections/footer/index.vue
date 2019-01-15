<template>
	<div class="footer-block">
		<div class="container">
			<div class="footer-grid">
				<menuFooter></menuFooter>
				<formFooter></formFooter>
			</div>
			<copyright></copyright>
		</div>
	</div>
</template>

<script>
import copyright from './copyright'
import menuFooter from './menuFooter'
import formFooter from './formFooter'

export default {
  name: 'index',
  components: {
    copyright, menuFooter, formFooter
  }
}
</script>

<styles lang="scss" src="./style.scss" scoped />
