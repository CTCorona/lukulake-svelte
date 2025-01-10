<script lang="ts">
	import FoxIcon from '$lib/assets/icons/fox-icon.svelte';
	import MooseIcon from '$lib/assets/icons/moose-icon.svelte';
	import OwlIcon from '$lib/assets/icons/owl-icon.svelte';
	import Animation from '$lib/components/ui/animation.svelte';
	import Heading from '$lib/components/ui/heading.svelte';
	import { css } from 'styled-system/css';
	import { hstack } from 'styled-system/patterns';
	import { type Component } from 'svelte';

	type ShoeSize = {
		icon: Component;
		name: string;
		size: 'small' | 'medium' | 'large';
		talla: string;
		meses: string;
		tamano_pie: {
			largo: string;
			ancho: string;
		};
	};

	const shoeSizes: ShoeSize[] = [
		{
			icon: OwlIcon,
			name: 'Ardilla',
			size: 'small',
			talla: '18/19',
			meses: '9 a 12 meses',
			tamano_pie: {
				largo: '10,3cm - 11,3cm',
				ancho: '5,2cm'
			}
		},
		{
			icon: FoxIcon,
			name: 'Zorro',
			size: 'medium',
			talla: '20/21',
			meses: '12 a 18 meses',
			tamano_pie: {
				largo: '11,5cm - 12,5cm',
				ancho: '5,4cm'
			}
		},
		{
			icon: MooseIcon,
			name: 'Ciervo',
			size: 'large',
			talla: '22/23',
			meses: '18 a 24 meses',
			tamano_pie: {
				largo: '12,7cm - 13,7cm',
				ancho: '5,6cm'
			}
		}
	];
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
	<Animation>
		<div class={hstack({ gap: 10, justifyContent: 'center' })}>
			{#each shoeSizes as cardShoe}
				{@render card(cardShoe)}
			{/each}
		</div>
	</Animation>
</section>
