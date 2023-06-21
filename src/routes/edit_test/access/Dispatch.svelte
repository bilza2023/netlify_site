<script>
import DispatchBlock from "../../edit/settings/DispatchBlock.svelte";
let hide = true;
</script>
<!--------------------------------------->

<div class="flex w-full">

<button class="flex-1
{hide == true ? "bg-green-500" : "bg-gray-500" }
p-1 m-1 rounded-md"
on:click={()=> hide = true}
>Hide</button>

<button class="flex-1
{hide == false ? "bg-green-500" : "bg-gray-500" }
 p-1 m-1 rounded-md"
on:click={()=>hide = false }
>Show</button>

</div>


{#if hide == false}
<DispatchBlock/>
{/if}


