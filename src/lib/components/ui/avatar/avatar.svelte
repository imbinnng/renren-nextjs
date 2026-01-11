<script lang="ts">
	export let loadingStatus = "loading";
	export let className = "";
	export let ref: HTMLDivElement;
</script>

<div
	bind:this={ref}
	data-slot="avatar"
	data-status={loadingStatus}
	class="relative flex size-8 shrink-0 overflow-hidden rounded-full {className}"
>
	<slot />
</div>