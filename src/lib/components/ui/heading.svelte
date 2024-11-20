<script lang="ts">
	import { heading } from 'styled-system/recipes';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type Props = {
		tag?: keyof Pick<SvelteHTMLElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
		children: Snippet;
	}

	const { children, tag = 'h2' }: Props = $props();
</script>

<svelte:element this={tag} class={heading()}>
	{@render children()}
</svelte:element>