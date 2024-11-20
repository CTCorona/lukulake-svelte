<script>
	import Button from '$lib/components/ui/button.svelte';
	import Logo from '$lib/assets/logo.svelte';
	import { css } from 'styled-system/css';
	import { browser } from '$app/environment';

	const headerStyle = css({
		bg: 'white',
		p: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		zIndex: 1,
		pos: 'sticky',
		top: 0,
		md: {
			px: '24'
		}
	});

	const goToMovimiento = () => {
	}

</script>

<header class={headerStyle}>
	<Logo />

	<Button type="primary" onclick={goToMovimiento}>
		Contacto
	</Button>
</header>
