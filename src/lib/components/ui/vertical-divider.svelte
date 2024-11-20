<script lang="ts">
	import { css } from 'styled-system/css';

	const lineWrapperStyle = css({
		marginInline: "auto",
		marginBlock: 12,
		h: "44",
		w: "1",
	});

	const lineStyle = css({
		w: "full",
		h: "full",
		bg: "secondary.main",
		display: "block",
		transformOrigin: "top",
	});
</script>

<div class={`line-animation-wrapper ${lineWrapperStyle}`}>
	<span class={`line-animation ${lineStyle}`}></span>
</div>