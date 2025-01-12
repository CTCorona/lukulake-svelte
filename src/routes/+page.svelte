<script lang="ts">
	import SectionFirstSteps from '$lib/components/section-first-steps/section-first-steps.svelte';
	import SectionForm from '$lib/components/section-form/section-form.svelte';
	import SectionInspiration from '$lib/components/section-inspiration/section-inspiration.svelte';
	import SectionInsta from '$lib/components/section-insta/section-insta.svelte';
	import Intro from '$lib/components/section-intro/section-intro.svelte';
	import SectionModels from '$lib/components/section-models/section-models.svelte';
	import SectionNature from '$lib/components/section-nature/section-nature.svelte';
	import VerticalDivider from '$lib/components/ui/vertical-divider.svelte';
</script>

<svelte:head>
	<title>Luku Lake</title>
	<meta
		name="description"
		content="Luku Lake is a minimal, seo friendly, accessible portfolio and blog for developers."
	/>
	<meta name="keywords" content="portfolio, blog, minimal, seo, accessible, developer" />
	<meta name="author" content="Christian Corona" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

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
