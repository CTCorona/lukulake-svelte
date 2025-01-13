<script>
	import ImagoVariantIcon from '$lib/assets/icons/imago-variant-icon.svelte'
	import { css } from 'styled-system/css'

	const footerStyles = css({
		bg: 'primary',
		color: 'primary.contrast',
		display: 'flex',
		flexDir: 'column',
		alignItems: 'center',
		gap: 4,
		py: 6,
		px: 8,
		md: {
			py: 12,
			px: 16
		}
	})
</script>

<footer class={footerStyles}>
	<ImagoVariantIcon />
	<div class={css({ textAlign: 'center' })}>
		<!-- svelte-ignore a11y_invalid_attribute -->
		<a href="#">Aviso legal</a> -
		<!-- svelte-ignore a11y_invalid_attribute -->
		<a href="#">Política de privacidad</a> -
		<!-- svelte-ignore a11y_invalid_attribute -->
		<a href="#">Política de cookies</a>
	</div>
	<p class={css({ fontWeight: 'bold' })}>© 2021 Luku Lake</p>
</footer>
