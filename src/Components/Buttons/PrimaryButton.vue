<script>
export default {
  name: 'PrimaryButton',
  functional: true,
  render (createElement, { data, children }) {
    return createElement('button', { class: ['btn-def'], ...data }, children)
  }
}
</script>

<style scoped lang="scss">
.primary {
	color: #fff;
	background-color: #1e88e5;
	border: 2px solid #1e88e5;

	&:hover {
		box-shadow: 0 14px 26px -12px rgba(23, 105, 255, 0.42),
		0 4px 23px 0 rgba(0, 0, 0, 0.12),
		0 8px 10px -5px rgba(23, 105, 255, 0.2);
	}
}
.success {
	color: #fff;
	background: #26c6da;
	border: 2px solid #26c6da;
	&:hover {
		box-shadow: 0 14px 26px -12px rgba(40, 190, 189, 0.42),
		0 4px 23px 0 rgba(0, 0, 0, 0.12),
		0 8px 10px -5px rgba(40, 190, 189, 0.2);
	}
}
.empty-success {
	color: #6c757d;
	border: 1px solid #6c757d;
	box-shadow: 0 2px 2px 0 rgba(169, 169, 169, 0.14), 0 3px 1px -2px rgba(169, 169, 169, 0.2), 0 1px 5px 0 rgba(169, 169, 169, 0.12);
	&:hover {
		box-shadow: 0 14px 26px -12px rgba(169, 169, 169, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(169, 169, 169, 0.2);
		color: #fff;
		background-color: #6c757d;
		border-color: #6c757d;
	}
}
.btn-def {
	text-transform: uppercase;
	border-radius: 3px;
	transition: all 0.3s ease-in-out;
	display: inline-block;
	font-weight: 700;
	font-size: 1.2rem;
	letter-spacing: .3rem;
	line-height: 5rem;
	padding: 0 3rem;
	color: $black;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	background-color: $backgroundButton;
	//border: .2rem solid $backgroundButton;
	border-color: transparent;
	&:hover, &:focus {
		background-color: $backgroundButtonHover;
		//border-color: $backgroundButtonHover;
		color: $black;
		outline: 0;
		}
}
.lg {
	padding: .75rem 1.5rem;
}
.sm {
	padding: .25rem .5rem;
	font-size: 12px;
}
.xs {
	padding: .25rem .5rem;
	font-size: 10px;
}
.tag-button {
	display: inline-block;
	font-size: 1.3rem;
	line-height: 3.6rem;
	letter-spacing: .2rem;
	padding: 0 2rem;
	margin: 0 1.2rem 1.5rem 0;
	background: $backgroundTag;
	color: $greyTags;
	&:hover, &:active, &:focus {
		color: $white;
		background: $grey;
	}
}
.button-pagination {
	font-size: 1.5rem;
	line-height: 2.4rem;
	padding: .6rem 1.2rem;
	height: 3.6rem;
	margin: 0 .20rem;
	color: $grey;
	background: transparent;
	display: flex;
	align-items: center;
	border-color: transparent;
	&.active {
		color: $white;
		background: $grey;
	}
}

.prev, .next {
	display: block;
	background-color: $white;
	background-repeat: no-repeat;
	background-size: 18px 12px;
	background-position: center;
	height: 4.8rem;
	width: 4.8rem;
	line-height: 4.8rem;
	padding: 0;
	margin: 0;
	border-radius: 50%;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	color: transparent;
	transition: all 0.2s ease-in-out;
	&:hover {
		background-color: $grey;
		background-repeat: no-repeat;
		background-size: 18px 12px;
		background-position: center;
	}
}
.prev {
	background-image: url("../../../public/images/icons/icon-arrow-left.svg");
	margin-right: 20px;
	&:hover {
		background-image: url("../../../public/images/icons/icon-arrow-left-w.svg");
	}
}
.next {
	background-image: url("../../../public/images/icons/icon-arrow-right.svg");
	margin-left: 20px;
	&:hover {
		background-image: url("../../../public/images/icons/icon-arrow-right-w.svg");
	}
}
</style>
