<script lang="ts">
	import FlexibleIcon from '$lib/assets/icons/flexible-icon.svelte';
	import SustainableIcon from '$lib/assets/icons/sustainable-icon.svelte';
	import WalkingIcon from '$lib/assets/icons/walking-icon.svelte';
	import Animation from '$lib/components/ui/animation.svelte';
	import Heading from '$lib/components/ui/heading.svelte';
	import Typography from '$lib/components/ui/typography.svelte';
	import { css } from 'styled-system/css';
	import { hstack, vstack } from 'styled-system/patterns';
	import { type Component } from 'svelte';

	const gridItems = [
		{
			icon: WalkingIcon,
			title: 'Comodidad y autonomía',
			description:
				'Ergonomía adaptada para favorecer la máxima comodidad y seguridad del bebé durante sus primeros pasos, con plantillas planas extraíbles y cierre con velcro para promover su autonomía'
		},
		{
			icon: SustainableIcon,
			title: 'Materiales sostenibles',
			description:
				'Utilizamos materiales reciclados en todos los modelos: la piel y el ante son recuperados de los desperdicios del sector alimenticio, mientras que la loneta está hecha con PET 100% reciclado'
		},
		{
			icon: FlexibleIcon,
			title: 'Flexibilidad',
			description:
				'Adaptación total al pie del bebé que permite un movimiento libre y completamente respetuoso con su desarrollo, gracias a la flexibilidad de las punteras, los talones y las suelas ultra finas'
		}
	];
</script>

{#snippet item(icon: Component, title: string, description: string)}
	<article class={vstack({ gap: 4, maxW: '80' })}>
		<svelte:component this={icon} />
		<h3 class={css({ fontWeight: 'bold', fontSize: '2xl' })}>{title}</h3>
		<Typography fluid>{description}</Typography>
	</article>
{/snippet}

<section id="first-steps">
	<Animation>
		<Heading tag="h2">Primeros pasos libres y naturales</Heading>
		<Typography>
			Zapatos ligeros, flexibles y sostenibles que se adaptan tanto a los movimientos del bebé que
			tendrá la sensación de caminar descalzo. Y nosotros, la seguridad de que está protegido
		</Typography>
	</Animation>
	<Animation>
		<div class={hstack({ justifyContent: 'center', gap: 10 })}>
			{#each gridItems as gridItem}
				{@render item(gridItem.icon, gridItem.title, gridItem.description)}
			{/each}
		</div>
	</Animation>
</section>
