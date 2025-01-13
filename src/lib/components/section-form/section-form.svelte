<script lang="ts">
	import ImgForm from '$lib/assets/images/img-form.jpg?enhanced&quality=80'
	import Button from '$lib/components/ui/button.svelte'
	import Heading from '$lib/components/ui/heading.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import { css } from 'styled-system/css'
	import { vstack } from 'styled-system/patterns'
</script>

<section
	class={css({
		border: 'main',
		pos: 'relative',
		mx: 'auto',
		p: 4,
		md: {
			w: '2/3',
			p: 16
		}
	})}
	id="form">
	<Heading>¡Hablemos!</Heading>
	<Typography
		>¿Quieres saber más sobre los zapatos o su distribución? Escríbenos y resolveremos todas tus
		dudas</Typography>
	<form class={vstack({ mx: 'auto', md: { maxW: '1/2' } })} action="#">
		<Input label="Nombre" name="name" id="name" placeholder="Tu nombre" type="text" />
		<Input label="Email" name="email" id="email" placeholder="Tu email" type="text" />
		<Input
			label="Móvil"
			name="mobile"
			id="mobile"
			placeholder="Tu móvil (recomendado)"
			type="text" />
		<Input
			label="Mensaje"
			name="message"
			id="message"
			placeholder="Escribe tu mensaje"
			type="textarea" />
		<Button variant="secondary">Contactar</Button>
	</form>
	<enhanced:img
		class={css({
			pos: 'absolute',
			bottom: 0,
			left: 0,
			objectFit: 'cover',
			zIndex: -1
		})}
		src={ImgForm}
		sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px, (min-width:425px) 200px, (min-width:320px) 100px"
		loading="lazy"
		alt="Montaña con arboles" />
</section>
