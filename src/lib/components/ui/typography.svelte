<script lang="ts">
	import { cva } from 'styled-system/css';
	import { type Snippet } from 'svelte';
	import { type SvelteHTMLElements } from 'svelte/elements';

	type Props = {
		tag?: keyof SvelteHTMLElements;
		children: Snippet;
		align?: 'center' | 'left' | 'right';
		fluid?: boolean;
		withGutterBottom?: boolean;
	};

	const typographyStyle = cva({
		base: {
			fontWeight: 'normal',
			marginInline: 'auto',
			lineHeight: 'tight'
		},
		variants: {
			align: {
				center: {
					textAlign: 'center'
				},
				left: {
					textAlign: 'left'
				},
				right: {
					textAlign: 'right'
				}
			},
			fluid: {
				true: {
					w: 'full'
				},
				false: {
					w: 'full',
					md: {
						w: '1/2'
					}
				}
			},
			withGutterBottom: {
				true: {
					mb: 12
				},
				false: {
					mb: 0
				}
			}
		},
		defaultVariants: {
			align: 'center',
			fluid: false,
			withGutterBottom: true
		}
	});

	const { children, align, fluid, withGutterBottom, tag = 'p' }: Props = $props();
</script>

<svelte:element this={tag} class={typographyStyle({ align, fluid, withGutterBottom })}>
	{@render children()}
</svelte:element>
