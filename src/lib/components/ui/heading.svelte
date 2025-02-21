<script lang="ts">
	import { cva } from 'styled-system/css'
	import type { Snippet } from 'svelte'
	import type { SvelteHTMLElements } from 'svelte/elements'

	export type Props = {
		tag?: keyof Pick<SvelteHTMLElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
		children: Snippet
		gutterBottom?: boolean
	}

	const headingStyle = cva({
		base: {
			fontWeight: 'bold',
			textAlign: 'center',
			fontSize: {
				base: '3xl',
				lg: '6xl'
			}
		},
		variants: {
			gutterBottom: {
				true: {
					mb: 10
				},
				false: {
					mb: 3
				}
			}
		},
		defaultVariants: {
			gutterBottom: false
		}
	})

	const { children, tag = 'h2', gutterBottom }: Props = $props()
</script>

<svelte:element this={tag} class={headingStyle({ gutterBottom })}>
	{@render children()}
</svelte:element>
