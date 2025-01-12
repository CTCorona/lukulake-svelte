<script lang="ts">
	import { animate, inView } from 'motion';
	import { css } from 'styled-system/css';
	import { onMount, type Snippet } from 'svelte';

	const animationWrapperStyle = css({
		overflow: 'hidden'
	});

	const animationChildStyle = css({
		display: 'inline-block',
		width: '100%',
		transform: 'translateY(100%)'
	});

	type Props = {
		children: Snippet;
		delay?: number;
	};

	const { children, delay = 0 }: Props = $props();

	let ref: HTMLDivElement;

	onMount(() => {
		inView(
			ref,
			(child) => {
				animate(
					child.target.querySelector('.animation-child')!,
					{ y: ['100%', 0] },
					{ duration: 0.5, delay }
				);
			},
			{ margin: '0px 0px -300px 0px' }
		);
	});
</script>

<div class={`animation-wrapper ${animationWrapperStyle}`} bind:this={ref}>
	<div class={`animation-child ${animationChildStyle}`}>
		{@render children()}
	</div>
</div>
