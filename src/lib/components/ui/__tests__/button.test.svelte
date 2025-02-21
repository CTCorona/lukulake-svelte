<script lang="ts">
	import Button, { type Props as ButtonProps } from '../button.svelte'

	const { variant, type }: Pick<ButtonProps, 'variant' | 'type'> = $props()
</script>

<Button {variant} {type} aria-label="Test Button">Test Button</Button>
