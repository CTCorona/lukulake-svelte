<script lang="ts">
	import Lenis from '$lib/components/lenis/lenis.svelte';
	import SectionFirstSteps from '$lib/components/section-first-steps/section-first-steps.svelte';
	import SectionForm from '$lib/components/section-form/section-form.svelte';
	import SectionInspiration from '$lib/components/section-inspiration/section-inspiration.svelte';
	import SectionInsta from '$lib/components/section-insta/section-insta.svelte';
	import Intro from '$lib/components/section-intro/section-intro.svelte';
	import SectionModels from '$lib/components/section-models/section-models.svelte';
	import SectionNature from '$lib/components/section-nature/section-nature.svelte';
	import VerticalDivider from '$lib/components/ui/vertical-divider.svelte';
</script>

<Lenis />
<Intro />
<VerticalDivider />
<SectionNature />
<VerticalDivider />
<SectionFirstSteps />
<VerticalDivider />
<SectionModels />
<VerticalDivider />
<SectionInspiration />
<VerticalDivider />
<SectionForm />
<VerticalDivider />
<SectionInsta />
