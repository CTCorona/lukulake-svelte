<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import Header from '$lib/components/header/header.svelte';
	import 'lenis/dist/lenis.css';
	import { container } from 'styled-system/patterns';
	import '../app.css';

	const { children } = $props();
</script>

<Header />
<main class={container()}>
	{@render children()}
</main>
<Footer />

<style>
	:global {
		@font-face {
			font-family: 'Solomon';
			src: url('/fonts/Solomon-Sans-Normal.woff') format('woff');
			font-weight: 400;
			font-display: swap;
		}
		@font-face {
			font-family: 'Solomon';
			src: url('/fonts/Solomon-Sans-SemiBold.woff') format('woff');
			font-weight: 600;
			font-display: swap;
		}
		@font-face {
			font-family: 'Solomon';
			src: url('/fonts/Solomon-Sans-Bold.woff') format('woff');
			font-weight: 700;
			font-display: swap;
		}

		::selection {
			background-color: #003866;
			color: #ed752a;
		}

		body {
			color: #003866;
			font-family: 'Solomon', sans-serif;
			font-size: 17px;
		}
	}
</style>
