<script lang="ts">
	import inspiration1 from '$lib/assets/images/img-5.jpg?enhanced&quality=80'
	import inspiration2 from '$lib/assets/images/img-6.jpg?enhanced&quality=80'
	import inspiration3 from '$lib/assets/images/img-7.jpg?enhanced&quality=80'
	import Animation from '$lib/components/ui/animation.svelte'
	import Heading from '$lib/components/ui/heading.svelte'
	import ImgAnimation from '$lib/components/ui/img-animation.svelte'
	import { css } from 'styled-system/css'
	import { hstack, stack, vstack } from 'styled-system/patterns'

	const imgWrapperStyle = css({
		display: 'flex',
		alignItems: 'flex-start',
		flexDir: 'column',
		gap: 5,
		md: {
			gap: 10,
			flexDir: 'row'
		}
	})
</script>

<section id="inspiration">
	<Animation>
		<Heading gutterBottom tag="h2">Su curiosidad, nuestra inspiración</Heading>
	</Animation>
	<div class={imgWrapperStyle}>
		<ImgAnimation class={css({ md: { mt: 16 } })}>
			<enhanced:img
				src={inspiration3}
				sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
				loading="lazy"
				alt="madre e hija sentadas sobre madera" />
		</ImgAnimation>
		<div class={stack({ gap: 5, md: { direction: 'column', gap: 10 } })}>
			<ImgAnimation>
				<enhanced:img
					src={inspiration1}
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
					loading="lazy"
					alt="chica abrazando a un conejo" />
			</ImgAnimation>
			<ImgAnimation>
				<enhanced:img
					class={css({ md: { maxW: '10/12' } })}
					src={inspiration2}
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
					loading="lazy"
					alt="madre abrazando a su hija" />
			</ImgAnimation>
		</div>
	</div>
</section>
