<script lang="ts">
	import nature1 from '$lib/assets/images/img-2.jpg?enhanced&quality=80'
	import nature2 from '$lib/assets/images/img-3.jpg?enhanced&quality=80'
	import nature3 from '$lib/assets/images/img-4.jpg?enhanced&quality=80'
	import Animation from '$lib/components/ui/animation.svelte'
	import Heading from '$lib/components/ui/heading.svelte'
	import ImgAnimation from '$lib/components/ui/img-animation.svelte'
	import { css } from 'styled-system/css'
	import { stack } from 'styled-system/patterns'

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

<section id="nature">
	<Animation>
		<Heading gutterBottom tag="h2">Un vínculo con la naturaleza</Heading>
	</Animation>
	<div class={imgWrapperStyle}>
		<div class={stack({ gap: 5, md: { direction: 'column', gap: 10 } })}>
			<ImgAnimation>
				<enhanced:img
					src={nature1}
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
					loading="lazy"
					alt="chica abrazando a un conejo" />
			</ImgAnimation>
			<ImgAnimation>
				<enhanced:img
					class={css({ md: { maxW: '10/12', justifySelf: 'flex-end' } })}
					src={nature2}
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
					loading="lazy"
					alt="madre abrazando a su hija" />
			</ImgAnimation>
		</div>
		<ImgAnimation class={css({ md: { mt: 16 } })}>
			<enhanced:img
				src={nature3}
				sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
				loading="lazy"
				alt="madre e hija sentadas sobre madera" />
		</ImgAnimation>
	</div>
</section>
