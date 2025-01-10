<script lang="ts">
	import { animate, scroll } from 'motion';
	import { css } from 'styled-system/css';
	import { type Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const imgContainerStyle = css({
		overflow: 'hidden'
	});

	type Props = SvelteHTMLElements['div'] & {
		children: Snippet;
	};

	const { children, class: className, ...props }: Props = $props();

	let ref: HTMLDivElement;

	$effect(() => {
		scroll(animate(ref.querySelector('img')!, { y: [-70, 70] }), {
			target: ref.querySelector('img')!,
			offset: ['start end', 'end start'],
		});
	});
</script>

<div class={`img-container ${imgContainerStyle} ${className}`} {...props} bind:this={ref}>
	{@render children()}
</div>
