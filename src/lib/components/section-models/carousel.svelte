<script lang="ts">
	import type { ShoesGalleryData } from '$lib/components/section-models/shoes-data'
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	import { animate } from 'motion'
	import { css } from 'styled-system/css'

	const emblaStyle = css({
		overflow: 'hidden',
		py: 10,
		mb: 12,
		mx: -4,
		md: {
			mx: -6
		},
		lg: {
			mx: -8
		}
	})

	const emblaContainerStyle = css({
		display: 'flex'
	})

	const emblaSlideStyle = css({
		flex: '0 0 85%',
		minW: 0,
		mr: 4,
		px: 4,
		py: 4,
		shadow: '0 10px 20px 0 rgba(0,0,0,.15)',
		'&:nth-child(1)': {
			ml: 4
		},
		md: {
			flex: '0 0 30%',
			px: 11,
			py: 10,
			mr: 8,
			'&:nth-child(1)': {
				ml: 20
			}
		}
	})

	const emblaProgressStyle = css({
		mt: 10,
		mx: 'auto',
		h: 1.5,
		w: '3/5',
		bg: 'gray.200',
		rounded: 'full',
		overflow: 'hidden',
		lg: {
			w: '1/5'
		}
	})

	const emblaProgressBarStyle = css({
		display: 'block',
		w: 'full',
		h: 'full',
		bg: 'primary.contrast',
		transform: 'scaleX(0)',
		transformOrigin: 'left'
	})

	type Props = {
		slidesData: ShoesGalleryData[]
	}

	const { slidesData }: Props = $props()

	let scrollBarRef: HTMLSpanElement
	let emblaApi: { on: (arg0: string, arg1: () => void) => void; scrollProgress: () => any }

	const options = {
		dragFree: true
	}

	const plugins: never[] = []

	function onInit(event: CustomEvent) {
		emblaApi = event.detail
		emblaApi.on('scroll', handleCarouselScroll)
	}

	function handleCarouselScroll() {
		if (emblaApi) {
			animate(scrollBarRef, { scaleX: emblaApi.scrollProgress() })
		}
	}
</script>

<div class={`embla ${emblaStyle}`}>
	<div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} onemblaInit={onInit}>
		<div class={`embla__container ${emblaContainerStyle}`}>
			{#each slidesData as slideData}
				<div class={`embla__slide ${emblaSlideStyle}`}>
					<enhanced:img
						class={css({ userSelect: 'none' })}
						src={slideData.imgs[0]}
						loading="lazy"
						sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
						alt={`${slideData.id} shoe`} />
					<p class={css({ userSelect: 'none', fontWeight: 'bold' })}>{slideData.title}</p>
					<p class={css({ userSelect: 'none' })}>{slideData.description}</p>
				</div>
			{/each}
		</div>
	</div>
	<div class={emblaProgressStyle}>
		<span class={`embla-progress-bar ${emblaProgressBarStyle}`} bind:this={scrollBarRef}></span>
	</div>
</div>
