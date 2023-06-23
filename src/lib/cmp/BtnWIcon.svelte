<script>
export let icon=""; 
export let title="Button"; 
export let fn= ()=>{}; 

</script>



<div class="flex justify-center">
<button
class="bg-blue-800 p-2 m-2 rounded-md px-8"
on:click={fn}>
{icon}&nbsp;{title}
</button>
</div>