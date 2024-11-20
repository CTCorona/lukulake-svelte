<script lang="ts">
	import { typography, type TypographyVariant } from 'styled-system/recipes';
	import { type Snippet } from 'svelte';
	import { type SvelteHTMLElements } from 'svelte/elements';

	type Props = Partial<TypographyVariant> & {
		tag?: keyof SvelteHTMLElements;
		children: Snippet;
	};
	const { children, align = "center", fluid = false, withGutterBottom = true, tag = 'p' }: Props = $props();
</script>

<svelte:element this={tag} class={typography({ align, fluid, withGutterBottom })}>
	{@render children()}
</svelte:element>
