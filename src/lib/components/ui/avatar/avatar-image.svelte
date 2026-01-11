<script lang="ts">
	export let className = "";
	export let ref: HTMLImageElement;
	export let src = "";
	export let alt = "";
	export let style = "";
</script>

<img
	bind:this={ref}
	data-slot="avatar-image"
	src={src}
	alt={alt}
	class="aspect-square size-full {className}"
	style={style}
/>