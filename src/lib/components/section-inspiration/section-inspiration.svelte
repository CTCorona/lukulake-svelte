<script lang="ts">
	import inspiration1 from '$lib/assets/images/img-5.jpg?enhanced&quality=80';
	import inspiration2 from '$lib/assets/images/img-6.jpg?enhanced&quality=80';
	import inspiration3 from '$lib/assets/images/img-7.jpg?enhanced&quality=80';
	import Animation from '$lib/components/ui/animation.svelte';
	import Heading from '$lib/components/ui/heading.svelte';
	import ImgAnimation from '$lib/components/ui/img-animation.svelte';
	import { css } from 'styled-system/css';
	import { hstack, vstack } from 'styled-system/patterns';
</script>

<section id="inspiration">
	<Animation>
		<Heading gutterBottom tag="h2">Su curiosidad, nuestra inspiración</Heading>
	</Animation>
	<div class={hstack({ alignItems: 'flex-start', gap: 10 })}>
		<ImgAnimation class={css({ mt: 16 })}>
			<enhanced:img src={inspiration3} alt="madre e hija sentadas sobre madera" />
		</ImgAnimation>
		<div class={vstack({ gap: 10 })}>
			<ImgAnimation>
				<enhanced:img src={inspiration1} alt="chica abrazando a un conejo" />
			</ImgAnimation>
			<ImgAnimation>
				<enhanced:img
					class={css({ maxW: '10/12' })}
					src={inspiration2}
					alt="madre abrazando a su hija"
				/>
			</ImgAnimation>
		</div>
	</div>
</section>
