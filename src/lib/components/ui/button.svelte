<script lang="ts">
	import { cva } from 'styled-system/css';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		type?: 'primary' | 'secondary';
	};

	const buttonStyle = cva({
		base: {
			cursor: 'pointer',
			paddingInline: 9,
			paddingBlock: 3,
			borderRadius: 'md',
			fontWeight: 'bold',
			transition: 'colors',
			color: 'white'
		},
		variants: {
			type: {
				primary: {
					bgColor: 'primary',
					_hover: {
						bgColor: 'primary'
					}
				},
				secondary: {
					bgColor: 'secondary',
					_hover: {
						bgColor: 'secondary'
					}
				}
			}
		},
		defaultVariants: {
			type: 'primary'
		}
	});

	const { children, type, ...rest }: Props = $props();
</script>

<button class={buttonStyle({ type })} {...rest}>
	{@render children()}
</button>
