<script lang="ts">
	import nature1 from '$lib/assets/images/img-2.jpg?enhanced&quality=80';
	import nature2 from '$lib/assets/images/img-3.jpg?enhanced&quality=80';
	import nature3 from '$lib/assets/images/img-4.jpg?enhanced&quality=80';
	import Heading from '$lib/components/ui/heading.svelte';
	import { css } from 'styled-system/css';
	import { hstack, vstack } from 'styled-system/patterns';
</script>

<section id="nature">
	<Heading gutterBottom tag="h2">Un vínculo con la naturaleza</Heading>
	<div class={hstack({ alignItems: 'flex-start', gap: 10 })}>
		<div class={vstack({ gap: 10 })}>
			<enhanced:img src={nature1} alt="chica abrazando a un conejo" />
			<enhanced:img
				class={css({ maxW: '10/12', justifySelf: 'flex-end' })}
				src={nature2}
				alt="madre abrazando a su hija"
			/>
		</div>
		<enhanced:img class={css({ mt: 16 })} src={nature3} alt="madre e hija sentadas sobre madera" />
	</div>
</section>
