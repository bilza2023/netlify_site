<script>
export let entriesArray=[];
</script>

<div class="flex flex-col w-8/12 mx-auto border-1 border-white">
{#each entriesArray  as entry }
    <div class="m-1 p-1 bg-gray-700 test-white w-full ">
    {entry}
    </div>
{/each}
</div>

