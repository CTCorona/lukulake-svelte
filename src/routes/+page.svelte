<script lang="ts">
	import SectionFirstSteps from '$lib/components/section-first-steps/section-first-steps.svelte'
	import SectionForm from '$lib/components/section-form/section-form.svelte'
	import SectionInspiration from '$lib/components/section-inspiration/section-inspiration.svelte'
	import SectionInsta from '$lib/components/section-insta/section-insta.svelte'
	import Intro from '$lib/components/section-intro/section-intro.svelte'
	import SectionModels from '$lib/components/section-models/section-models.svelte'
	import SectionNature from '$lib/components/section-nature/section-nature.svelte'
	import VerticalDivider from '$lib/components/ui/vertical-divider.svelte'

	const title = 'Luku Lake | Bienvenidos al mundo Luku Lake'
	const description =
		'Luku Lake es un espacio creativo donde descubrirás productos para bebés y en el que respetamos la naturaleza y el movimiento orgánico'
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://lukulake.ctcc.dev" />

	<!-- Font preloads -->
	<link rel="preload" href="/fonts/Solomon-Sans-Bold.woff" as="font" type="font/woff"/>
	<link rel="preload" href="/fonts/Solomon-Sans-Normal.woff" as="font" type="font/woff"/>
	<link rel="preload" href="/fonts/Solomon-Sans-SemiBold.woff" as="font" type="font/woff"/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://lukulake.ctcc.dev" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/imgs/cover.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://lukulake.ctcc.dev" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content="/imgs/cover.png" />
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
