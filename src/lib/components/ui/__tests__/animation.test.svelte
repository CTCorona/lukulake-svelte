<script lang="ts">
	import Animation, { type Props as AnimationProps } from '../animation.svelte'

	const { delay }: Pick<AnimationProps, 'delay'> = $props()
</script>

<Animation {delay}>Test Content</Animation>
