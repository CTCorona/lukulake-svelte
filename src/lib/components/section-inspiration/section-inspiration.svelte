<script lang="ts">
	import inspiration1 from '$lib/assets/images/img-5.jpg?enhanced&quality=80';
	import inspiration2 from '$lib/assets/images/img-6.jpg?enhanced&quality=80';
	import inspiration3 from '$lib/assets/images/img-7.jpg?enhanced&quality=80';
	import Heading from '$lib/components/ui/heading.svelte';
	import { css } from 'styled-system/css';
	import { hstack, vstack } from 'styled-system/patterns';
</script>

<section id="inspiration">
	<Heading tag="h2">Su curiosidad, nuestra inspiración</Heading>
	<div class={hstack({ alignItems: 'flex-start', gap: 10 })}>
		<enhanced:img
			class={css({ mt: 16 })}
			src={inspiration3}
			alt="madre e hija sentadas sobre madera"
		/>
		<div class={vstack({ gap: 10 })}>
			<enhanced:img src={inspiration1} alt="chica abrazando a un conejo" />
			<enhanced:img
				class={css({ maxW: '10/12' })}
				src={inspiration2}
				alt="madre abrazando a su hija"
			/>
		</div>
	</div>
</section>
