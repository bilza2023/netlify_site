<script>
import Card from "./Card.svelte";
export let logoutFn;
</script>

<div class="flex" >

<Card url={'/dashboard'} icon=&#x1F5A5; title="DashBoard" />

<Card url={'/teams'} icon=&#x1F46C; title="Teams" />


<Card url={'/docs'} icon=&#x1F4D6; title="Help" />



<div class="w-15   hover:bg-gray-700">
    <button class="w-full flex flex-col items-center p-2 m-0  rounded hover:bg-gray-500 active:bg-gray-900" 
    on:click={logoutFn} >
      <span class="text-md">&#x1F6EB;</span>
      <span class="text-xs font-md text-white">Logout</span>
    </button>
</div>



</div>