<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
import ajaxPost from "$lib/js/ajaxPost.js";
import { fade } from 'svelte/transition';
import {goto} from '$app/navigation';
//  import { blur } from 'svelte/transition';
//   import { scale } from 'svelte/transition';
	// import { fly } from 'svelte/transition';
import {showQuizDelStore} from "../store";

export let quiz;
import Agent from "$lib/common/Agent";


const deleteQuiz = async ()=>{
  // debugger;
  // const token = localStorage.getItem('token');
const resp = await Agent.del('template',{id : quiz._id});

 // debugger;
      if (resp.ok == true){
      const data = await resp.json();
        toast.push('deleted');
        showQuizDelStore.set(false);
        goto("/templates");
      }else {
      const data = await resp.json();
      // debugger;
        toast.push(data.message);
      }
}//del fn


</script>
<br/>

<div class="w-full p-2  text-center  bg-red-900 
rounded-md border-2 border-gray-500   "
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >

<h1 class="m-1 text-slate-200 text-2xl underline">Delete Template</h1>
    <div class="flex gap-2 m-4 justify-center items-center bg-gray-900 rounded-md"
    in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
    <p class="text-white text-xl ">Are you sure:</p>

    <div>
    <button class="bg-red-700 text-white rounded-md p-2 m-2 hover:bg-red-300 active:bg-red-900"
    on:click={deleteQuiz}>Delete</button>
    <button class="bg-green-700 text-white rounded-md p-2 m-2 hover:bg-green-300 active:bg-green-900"
    on:click={()=>showQuizDelStore.set(false)}>Cancel</button>
    </div>


    </div>


</div>