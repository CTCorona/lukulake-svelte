<script>
	import Logo from '$lib/assets/icons/logo.svelte';
	import Button from '$lib/components/ui/button.svelte';
	import { css } from 'styled-system/css';

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

</script>

<header class={headerStyle}>
	<Logo />

	<Button type="primary">
		Contacto
	</Button>
</header>
