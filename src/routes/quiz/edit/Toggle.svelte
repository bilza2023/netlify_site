<script>

export let flag=false;
export let  toggle;
</script>
 

{#if  flag ==true}
<button class="w-full bg-green-500 hover:bg-green-700 active:bg-green-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"  on:click={()=>{flag= toggle(false)}}>True</button>
{:else}
<button class="w-full bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" 
on:click={()=>{flag=toggle(true)}}>False</button>
{/if}
