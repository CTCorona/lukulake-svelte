<script lang="ts">
	import Logo from '$lib/assets/icons/logo-icon.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { lenis } from 'lenis-svelte';
	import { cva } from 'styled-system/css';
	import { onMount } from 'svelte';
	import { sendPosthogEvent } from '$lib/datalayer';

	const headerStyle = cva({
		base: {
			bg: 'white',
			p: 5,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			mb: 12,
			zIndex: 1,
			pos: 'sticky',
			top: 0,
			transition: 'shadow',
			transitionDuration: '300ms',
			md: {
				px: '24'
			}
		},
		variants: {
			scrolled: {
				true: {
					shadow: 'lg'
				},
				false: {
					shadow: 'none'
				}
			}
		}
	});

	const lenisInstance = lenis.root();
	let isScrolled = $state(false);

	onMount(() => {
		$lenisInstance?.on('scroll', (event) => {
			isScrolled = event.targetScroll > 0;
		});
	});

	function handleClick() {
		sendPosthogEvent({ eventName: 'click-contacto' });
		$lenisInstance.scrollTo('#form', { offset: -100 });
	}
</script>

<header class={headerStyle({ scrolled: isScrolled })}>
	<Logo />
	<Button onclick={handleClick} variant="primary">Contacto</Button>
</header>
