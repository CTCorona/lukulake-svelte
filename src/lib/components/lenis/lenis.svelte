<script lang="ts">
	import { browser } from '$app/environment';
	import Lenis from 'lenis';

	if (browser) {
		console.log("Lenis");
		console.log("---------------------");
		const lenis = new Lenis({
			autoRaf: true
		});

		lenis.on('scroll', (e) => {
			console.log(lenis.scroll, e);
		});

	}
</script>
