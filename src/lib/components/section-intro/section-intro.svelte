<script lang="ts">
	import coverImage from '$lib/assets/images/img-1.jpg?enhanced';
	import { css } from 'styled-system/css';
	import Animation from '../ui/animation.svelte';
	import Heading from '../ui/heading.svelte';
	import Typography from '../ui/typography.svelte';
</script>

<section id="descubre">
	<Animation>
		<Heading tag="h1">Bienvenidos al mundo Luku Lake</Heading>
		<Typography align="center">
			Un espacio creativo donde descubrirás productos para bebés y en el que respetamos la
			naturaleza y el movimiento orgánico
		</Typography>
	</Animation>
	<enhanced:img
		class={css({ w: 'full', md: { w: '1/2', m: 'auto' } })}
		src={coverImage}
		alt="shoes created by LukuLake"
	/>
</section>
