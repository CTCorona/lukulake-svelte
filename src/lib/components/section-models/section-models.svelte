<script lang="ts">
	import Carousel from '$lib/components/section-models/carousel.svelte'
	import {
		shoesGalleryData,
		shoeSizes,
		type ShoeSize
	} from '$lib/components/section-models/shoes-data'
	import Animation from '$lib/components/ui/animation.svelte'
	import Heading from '$lib/components/ui/heading.svelte'
	import { css } from 'styled-system/css'
	import { hstack } from 'styled-system/patterns'
</script>

{#snippet card(shoeData: ShoeSize)}
	<article class={css({ bgColor: 'primary.light', px: 10, py: 9 })}>
		<div class={hstack({ gap: 8 })}>
			<svelte:component this={shoeData.icon} class={css({ width: 40, height: 40 })} />
			<div>
				<h4 class={css({ fontWeight: 'bold', fontSize: 'xl' })}>
					{shoeData.name} ({shoeData.size})
				</h4>
				<p>
					<span class={css({ fontWeight: 'bold' })}>Talla:</span>
					{shoeData.talla}
				</p>
				<p>
					<span class={css({ fontWeight: 'bold' })}>Meses:</span>
					{shoeData.meses}
				</p>
				<p>
					<span class={css({ fontWeight: 'bold' })}>Tamaño pie:</span><br />
					{shoeData.tamano_pie.largo} (largo)<br />
					{shoeData.tamano_pie.ancho} (ancho)
				</p>
			</div>
		</div>
	</article>
{/snippet}

<section id="models">
	<Animation>
		<Heading>Descubre todos los modelos</Heading>
	</Animation>
	<Carousel slidesData={shoesGalleryData} />
	<div
		class={css({
			display: 'flex',
			gap: 10,
			justifyContent: 'center',
			flexDir: 'column',
			lg: { flexDir: 'row' }
		})}>
		{#each shoeSizes as cardShoe, index}
			<Animation delay={index * 0.2}>
				{@render card(cardShoe)}
			</Animation>
		{/each}
	</div>
</section>
