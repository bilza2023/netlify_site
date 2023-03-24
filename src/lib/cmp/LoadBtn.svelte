<script>
export let showFirst = true;
</script>



{#if showFirst}
  <slot></slot>
{:else}
  <slot name="alternate"></slot>
{/if}
