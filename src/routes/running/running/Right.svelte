<script>
import ajaxPost from "$lib/js/ajaxPost.js";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
// import getRunning from "../getRunning";
import Agent from "$lib/common/Agent";



export let quiz;
    let isPaused = false;
    function togglePause() {
        isPaused = !isPaused;
    }

const deleteFn = async ()=>{
    const resp = await Agent.del('run',{id :quiz._id});

    if (resp.ok == true){
        const data = await resp.json();
        toast.push('deleted'); 
        // getRunning();
    }else {
        const data = await resp.json();
        toast.push("failed to delete" );
    }
}
</script>

<div class="flex space-x-4 justify-end">

    <a
    href= {`/show?quizId=${quiz._id}`} 
    class="text-3xl border-separate border-2 border-gray-500 rounded-md p-1 bg-gray-800 hover:cursor-pointer
    hover:bg-green-900" >
        🚀
    </a>


    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="text-3xl border-separate border-2 border-gray-500 rounded-md p-1 bg-gray-800 hover:cursor-pointer
    hover:bg-red-900" on:click={()=>deleteFn()}>
        🗑️
    </div>
    
    
    
</div>
