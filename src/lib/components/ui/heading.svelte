<script lang="ts">
	import { heading, type HeadingVariant } from 'styled-system/recipes';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = Partial<HeadingVariant> & {
		tag?: keyof Pick<SvelteHTMLElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
		children: Snippet;
	};

	const { children, tag = 'h2', gutterBottom = false }: Props = $props();
</script>

<svelte:element this={tag} class={heading({ gutterBottom })}>
	{@render children()}
</svelte:element>
