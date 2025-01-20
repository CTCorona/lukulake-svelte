<script lang="ts">
	import Logo from '$lib/assets/icons/logo-icon.svelte'
	import Button from '$lib/components/ui/button.svelte'
	import { lenis } from 'lenis-svelte'
	import { cva } from 'styled-system/css'
	import { sendPosthogEvent } from '$lib/datalayer'
	import { container } from 'styled-system/patterns'

	const headerStyle = cva({
		base: {
			bg: 'white',
			mb: 12,
			zIndex: 1,
			pos: 'sticky',
			top: 0,
			transition: 'shadow',
			transitionDuration: '300ms',
			py: 5
		},
		variants: {
			scrolled: {
				true: {
					shadow: 'lg'
				},
				false: {
					shadow: 'none'
				}
			}
		}
	})

	const headerContainerStyle = container({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	})

	const lenisInstance = lenis.root()
	let isScrolled = $state(false)

	$effect(() => {
		$lenisInstance?.on('scroll', (event) => {
			isScrolled = event.targetScroll > 0
		})
	})

	function handleClick() {
		sendPosthogEvent({ eventName: 'click-contacto' })
		$lenisInstance.scrollTo('#form', { offset: -100 })
	}
	function handleLogoClick() {
		sendPosthogEvent({ eventName: 'click-logo' })
		$lenisInstance.scrollTo(0)
	}
</script>

<header class={headerStyle({ scrolled: isScrolled })}>
	<div class={headerContainerStyle}>
		<button aria-label="logo button" onclick={handleLogoClick}>
			<Logo />
		</button>
		<Button onclick={handleClick} variant="primary">Contacto</Button>
	</div>
</header>
