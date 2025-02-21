<script lang="ts">
	import Heading, { type Props as HeadingProps } from '../heading.svelte'

	const { tag, gutterBottom }: Pick<HeadingProps, 'tag' | 'gutterBottom'> = $props()
</script>

<Heading {tag} {gutterBottom}>Test Heading</Heading>
