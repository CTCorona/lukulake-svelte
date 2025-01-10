<script lang="ts">
	import nature1 from '$lib/assets/images/img-2.jpg?enhanced&quality=80';
	import nature2 from '$lib/assets/images/img-3.jpg?enhanced&quality=80';
	import nature3 from '$lib/assets/images/img-4.jpg?enhanced&quality=80';
	import Animation from '$lib/components/ui/animation.svelte';
	import Heading from '$lib/components/ui/heading.svelte';
	import ImgAnimation from '$lib/components/ui/img-animation.svelte';
	import { css } from 'styled-system/css';
	import { hstack, vstack } from 'styled-system/patterns';
</script>

<section id="nature">
	<Animation>
		<Heading gutterBottom tag="h2">Un vínculo con la naturaleza</Heading>
	</Animation>
	<div class={hstack({ alignItems: 'flex-start', gap: 10 })}>
		<div class={vstack({ gap: 10 })}>
			<ImgAnimation>
				<enhanced:img src={nature1} alt="chica abrazando a un conejo" />
			</ImgAnimation>
			<ImgAnimation>
				<enhanced:img
					class={css({ maxW: '10/12', justifySelf: 'flex-end' })}
					src={nature2}
					alt="madre abrazando a su hija"
				/>
			</ImgAnimation>
		</div>
		<ImgAnimation class={css({ mt: 16 })}>
			<enhanced:img src={nature3} alt="madre e hija sentadas sobre madera" />
		</ImgAnimation>
	</div>
</section>
