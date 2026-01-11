<script lang="ts">
	export let className = "";
	export let dataStatus = "";
</script>

<span
	data-slot="avatar-fallback"
	data-status={dataStatus}
	class="bg-muted flex size-full items-center justify-center rounded-full {className}"
>
	<slot />
</span>