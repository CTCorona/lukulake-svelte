<script lang="ts">
	import type { Snippet } from 'svelte';
	import { button, type ButtonVariant } from 'styled-system/recipes';

	type Props = ButtonVariant & {
		children: Snippet;
	}

	const { children, type = 'primary', ...rest }: Props = $props();
</script>

<button class={button({type})} {...rest}>
	{@render children()}
</button>