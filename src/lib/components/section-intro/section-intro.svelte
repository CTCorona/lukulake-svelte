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
	</Animation>
	<Animation delay={0.2}>
		<Typography align="center">
			Un espacio creativo donde descubrirás productos para bebés y en el que respetamos la
			naturaleza y el movimiento orgánico
		</Typography>
	</Animation>
	<enhanced:img
		fetchpriority="high"
		class={css({ w: 'full', md: { w: '1/2', m: 'auto' } })}
		src={coverImage}
		sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
		alt="shoes created by LukuLake"
	/>
</section>
