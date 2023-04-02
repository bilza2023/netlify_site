<script>
export let dispatchToAnyOne = true;
</script>
<!--------------------------------------->


<div class="flex w-full">

<button class="flex-1
{dispatchToAnyOne == true ? "bg-green-500" : "bg-gray-500" }
p-1 m-1 rounded-md"
on:click={()=> dispatchToAnyOne=true}
>Any One</button>

<button class="flex-1
 {dispatchToAnyOne == false ? "bg-green-500" : "bg-gray-500" } 
 p-1 m-1 rounded-md"
on:click={()=> dispatchToAnyOne=false}
>Selected</button>

</div>


{#if dispatchToAnyOne == false}
<div>
<h1>Add Members:</h1>



</div>
{/if}


