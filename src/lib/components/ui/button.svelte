<script lang="ts">
	import { cva } from 'styled-system/css';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	export type Props = SvelteHTMLElements['button'] & {
		children: Snippet;
		variant?: 'primary' | 'secondary';
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
			variant: {
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
			variant: 'primary'
		}
	});

	const { children, variant, ...rest }: Props = $props();
</script>

<button class={buttonStyle({ variant })} {...rest}>
	{@render children()}
</button>
