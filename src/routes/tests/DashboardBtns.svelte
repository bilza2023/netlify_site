<script>
export let showTemplates;
export let showTests;
export let showRunning;
export let tooglePanel;
</script>



<div class="flex  justify-center ">

    <div class="border-2 border-gray-600 bg-gray-900 p-2 rounded-md mt-3 ">
    
    <button class=" text-center p-2 m-1 rounded-md text-white text-1xl 
bg-blue-700 my-4
{showTemplates ? "border-4 border-gray-300" : ""}
" on:click={() => tooglePanel("templates")}
>Templates</button>

    <button class=" text-center p-2 m-1 rounded-md text-white text-1xl 
bg-red-700 my-4
{showTests ? "border-4 border-gray-300" : ""}
" on:click={() => tooglePanel("tests")}
>Tests</button>

    <button class=" text-center p-2 m-1 rounded-md text-white text-1xl 
bg-green-700 my-4
{showRunning  ? "border-4 border-gray-300" : ""}
" on:click={() => tooglePanel("running")}
>Running</button>

    </div>
</div>
