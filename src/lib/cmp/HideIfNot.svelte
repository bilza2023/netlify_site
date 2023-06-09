<script>
export let ifNot = true;



</script>


{#if ifNot == true}
<div>
<slot></slot>
</div>
{/if}
