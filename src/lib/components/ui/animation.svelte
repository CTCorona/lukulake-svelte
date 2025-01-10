<script lang="ts">
	import { animate, inView } from 'motion';
	import { type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();

	$effect(() => {
		inView(
			'.animation-wrapper',
			(child) => {
				console.log(child.target);
				animate(
					child.target.querySelector('.animation-child')!,
					{ y: ['100%', 0] },
					{ duration: 0.5 }
				);
			},
			{ margin: '0px 0px -300px 0px' }
		);
	});
</script>

<div class="animation-wrapper" style="overflow: hidden;">
	<div
		class="animation-child"
		style="display: inline-block; width: 100%; transform: translateY(100%);"
	>
		{@render children()}
	</div>
</div>
