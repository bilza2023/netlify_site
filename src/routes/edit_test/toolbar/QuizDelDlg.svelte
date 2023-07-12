<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
import ajaxPost from "$lib/js/ajaxPost.js";
import { fade } from 'svelte/transition';
import {goto} from '$app/navigation';
//  import { blur } from 'svelte/transition';
//   import { scale } from 'svelte/transition';
	// import { fly } from 'svelte/transition';
import { testsStore } from "../../appStore";  
import Agent from '../../../lib/communicator/Agent';
import LocalStorage from '../../../lib/communicator/localStorage';

export let test; 
let visible = false;
export let toggleshowQuizDel;

/**
 * deleting all results are not implemented nor have at the back end i stopped it from preventing deletion of results exist
 */
async function deleteAllResults (){
//  const token = await localStorage.getItem("token");
//   const resp = await ajaxPost(`${BASE_URL}/result/deleteAll`,
//             {quizId : quiz._id} );
//  if (resp.ok == true){
//       // const data = await resp.json();
//         toast.push("All responses were deleted"); 
//         // goto("/dashboard");
//       }else {
//       // const data = await resp.json();
//         toast.push("failed to delete responses");
//       }


}

const deleteQuiz = async ()=>{
  // debugger;
  // const token = localStorage.getItem('token');
  // const resp = await ajaxPost(`${BASE_URL}/test/delete`,{id : quiz._id});
    const resp = await Agent.del('test',{id : test._id});

      if (resp.ok == true){
        debugger;
      const data = await resp.json();
       testsStore.update(currentArray => {
      return currentArray.filter(item => item._id !== test._id);
      });

      LocalStorage.updateTests();
        goto("/tests");
        toast.push('deleted'); 
      }else {
      const data = await resp.json();
        toast.push(data.message );
      }
}//del fn


</script>

<br/>

<div class="w-full p-2  text-center  bg-red-900 
rounded-md border-2 border-gray-500   "
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >

<h1 class="m-1 text-slate-200 text-2xl underline">Delete Test</h1>

    <div class="flex gap-2 m-4 justify-center items-center bg-gray-900 rounded-md">
    <p class="text-white text-xl ">Deleting Your Test will also delete all your results / responses. ARE YOU SURE</p>

    <button class="bg-red-700 text-white rounded-md p-2 m-2"
    on:click={()=> visible = !visible}>I Know</button>
    <button class="bg-green-700 text-white rounded-md p-2 m-2"
    on:click={toggleshowQuizDel}>
    Take Me Back</button>
    </div>

{#if visible}
    <div class="flex gap-2 m-4 justify-center items-center bg-gray-900 rounded-md"
    in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>
    <p class="text-white text-xl ">This is your final warning:</p>

    <button class="bg-red-400 text-white rounded-md p-2 m-2 hover:bg-red-300 active:bg-red-900"
    on:click={deleteAllResults}>
    Delete Responses</button>
    <button class="bg-red-400 text-white rounded-md p-2 m-2 hover:bg-red-300 active:bg-red-900"
    on:click={deleteQuiz}>Delete Test</button>
    </div>
{/if}


</div>