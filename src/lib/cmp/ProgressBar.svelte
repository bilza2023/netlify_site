<script>
export let total;
export let current;
 let numbers = Array.from({ length: total }, (_, i) => i);
</script>

<div class="flex bg-blue-100 rounded-sm ">
{#each numbers as number}
    
<div
class= "p-1 m-1 text-xs
{number == current ? "bg-green-600" : "bg-blue-900"}
">
{number+1}
</div>
{/each}

</div>