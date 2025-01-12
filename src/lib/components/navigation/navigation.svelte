<script lang="ts">
	import { css } from 'styled-system/css';
	import { onMount } from 'svelte';
	import { animate, inView } from 'motion';
	import { lenis } from 'lenis-svelte';
	import { container } from 'styled-system/patterns';

	const navWrapperStyle = container({
		position: 'fixed',
		top: 120,
		w: 'full',
		zIndex: 10,
		display: 'flex',
		mx: 'auto',
		left: 0,
		right: 0,
		justifyContent: 'flex-end'
	});

	const navListStyle = css({});

	const navListItemStyle = css({
		position: 'relative'
	});

	const navDotStyle = css({
		display: 'block',
		rounded: 'full',
		bg: 'secondary',
		w: 3,
		h: 3,
		cursor: 'pointer',
		opacity: 0.5
	});

	const navLineStyle = css({
		bg: 'secondary.light',
		w: 0.5,
		h: 12,
		mx: 'auto'
	});

	const navNumberStyle = css({
		position: 'absolute',
		color: 'secondary',
		top: -1.5,
		left: -8,
		transform: 'translateY(30px)',
		opacity: 0
	});

	const ANIMATION_DURATION = 0.3;

	const navItems = ['#descubre', '#nature', '#first-steps', '#models', '#inspiration', '#form'];
	const lenisInstance = lenis.root();

	onMount(() => {
		navItems.forEach((item) => {
			const itemElement = document.querySelector(item);
			const listItemElement = document.querySelector(`.nav-list-item--${item.replace('#', '')}`);
			inView(
				itemElement!,
				() => {
					if ($lenisInstance.direction === 1) {
						animate(
							listItemElement.querySelector(`button`)!,
							{
								opacity: [0.5, 1]
							},
							{
								duration: ANIMATION_DURATION
							}
						);
						animate(
							listItemElement.querySelector(`span`)!,
							{
								opacity: [0, 1],
								y: [30, 0]
							},
							{
								duration: ANIMATION_DURATION
							}
						);
					} else {
						animate(
							listItemElement.querySelector(`span`)!,
							{
								opacity: [0, 1],
								y: [-30, 0]
							},
							{
								duration: ANIMATION_DURATION
							}
						);
					}
					return () => {
						if ($lenisInstance.direction === -1) {
							animate(
								listItemElement.querySelector(`button`)!,
								{
									opacity: [1, 0.5]
								},
								{ duration: ANIMATION_DURATION }
							);
							animate(
								listItemElement.querySelector(`span`)!,
								{
									y: [0, 30],
									opacity: [1, 0]
								},
								{
									duration: ANIMATION_DURATION
								}
							);
						} else {
							animate(
								listItemElement.querySelector(`span`)!,
								{
									y: [0, -30],
									opacity: [1, 0]
								},
								{
									duration: 0.3
								}
							);
						}
					};
				},
				{ margin: '0px 0px -90% 0px' }
			);
		});
	});

	function handleClick(item: string) {
		$lenisInstance.scrollTo(item, { offset: -100 });
	}
</script>

<nav class={navWrapperStyle}>
	<ul class={navListStyle}>
		{#each navItems as item, index}
			<li class={`nav-list-item--${item.replace('#', '')} ${navListItemStyle}`}>
				<button
					type="button"
					aria-label={item}
					class={`nav-dot ${navDotStyle}`}
					onclick={() => handleClick(item)}
				>
				</button>
				<span class={navNumberStyle}>0{index + 1}</span>
				{#if navItems.length - 1 !== index}
					<div class={navLineStyle}></div>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
