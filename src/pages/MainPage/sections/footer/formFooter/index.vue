<template>
	<div class="col">
		<div class="title">Our Newsletter</div>
		<p>Sit vel delectus amet officiis repudiandae est voluptatem.
			Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>
		<div class="subscribe-form">
			<form class="form-footer" novalidate="true">
				<input type="email" value="" name="EMAIL" class="email" id="mc-email"
				       placeholder="Email Address" required="">
				<button>Send</button>
				<label for="mc-email" class="subscribe-message"></label>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.form-footer {
	width: 100%;
	margin-bottom: 3rem;
	input[type="email"] {
		//width: 100%;
		height: 5.4rem;
		font-size: 1.5rem;
		padding: 1.2rem 100px 1.2rem 60px;
		background: url("../../../../../../public/images/icons/icon-mail.svg") 20px center no-repeat,
		rgba(0, 0, 0, 0.1);
		background-size: 24px 16px, auto;
		margin-bottom: 1.8rem;
		color: rgba(255, 255, 255, 0.5);
		border-radius: 3px;
		border: none;
	}
	button {
		top: 0;
		right: 0;
		color: $white;
		background: $blueHover;
		border-color: $blueHover;
		padding: 0 15px;
		border-radius: 0 3px 3px 0;
	}
	label {
		color: $white;
		font-size: 1.3rem;
		padding: 0 2rem;
	}
}
</style>
