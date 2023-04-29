<script>
// export let title = ""
import MobileCard from "./MobileCard.svelte";
export let logoutFn;
</script>

<div class="flex justify-center items-center p-1 m-1">

     <MobileCard url={'/create'} icon=&#x1F4A1; />
     <MobileCard url={'/dashboard'} icon=&#x1F5A5; />
     <MobileCard url={'/teams'} icon=&#x1F46C; />
     <MobileCard url={'/docs'} icon=&#x1F4D6;  />

     <div class="bg-gray-600 hover:bg-gray-900 rounded-md m-1 p-1">
    <button on:click={logoutFn}>
     <span class="text-md">&#x1F6EB;</span>  
    </button>
    </div>

</div>


