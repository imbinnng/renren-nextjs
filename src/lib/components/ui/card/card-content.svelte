<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    className = "",
    children,
    ...restProps
  }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div bind:this={ref} data-slot="card-content" class={cn("px-6", className)} {...restProps}>
  {@render children?.()}
</div>