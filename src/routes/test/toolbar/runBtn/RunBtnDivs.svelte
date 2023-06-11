<script>
import {showErrorsStore,showRunStore,errorsArrayStore} from "./store";
import RunErrors from "./RunErrors.svelte";
import { fade } from 'svelte/transition';
import ajaxPost from "$lib/js/ajaxPost.js";
import {quizStore} from "../../store";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';

$:  showErrors = $showErrorsStore;
$:  showRun = $showRunStore;
$:  errorsArray = $errorsArrayStore;
$:  quiz = $quizStore;


const run  = async ()=>{
// debugger;
quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));
//////////////////////////////////////
const resp = await ajaxPost(`${BASE_URL}/survey/save` ,{survey : quiz});
  
  if (resp.ok) {
      toast.push( "Test is Running now" );
  }else {
      // const data = await resp.json();
      toast.push( "Failed to Run test" );
  }
    showErrorsStore.set(false);
    showRunStore.set(false);
}
</script>

{#if showErrors}
<div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >
<RunErrors/>
<button 
class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
on:click={()=> showErrorsStore.set(false) }>Hide</button>
</div>
{/if}

<!--- run div-->
{#if showRun==true}
<div class="p-2 m-2 bg-gray-800 border-white border-2 rounded-md text-center"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >

<br/>
    <span class="text-white text-xl ">You Test is Ready to Run</span>
    <button class="bg-red-700 text-white rounded-md p-2 m-2"
    on:click={run}>Run   </button>
    <button class="bg-green-700 text-white rounded-md p-2 m-2"
    on:click={()=>showRunStore.set(false)}>
    Cancel</button>
<br/>    
<br/>    

</div>
{/if}

