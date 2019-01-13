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
		display: inline-block;
		font-weight: 400;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		user-select: none;
		padding: .375rem .75rem;
		font-size: 1rem;
		line-height: 1.5;
		border-radius: .25rem;
		transition-duration: 350ms;
		transition-property: color, background-color, border-color, box-shadow;
		transition-timing-function: ease-in-out;
		&:disabled {
			cursor: not-allowed;
			color: #6b6b6b;
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
</style>
