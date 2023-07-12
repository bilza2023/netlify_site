<script>

import RunErrors from "./RunErrors.svelte";
import { fade } from 'svelte/transition';
import ajaxPost from "$lib/js/ajaxPost.js";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import Agent from "$lib/communicator/Agent";
import LocalStorage from '../../../../lib/communicator/localStorage';
import { runsStore  } from "../../../appStore";

import {showErrorsStore,showRunStore,errorsArrayStore} from "./store";

let newName = "New Process";
$:  showErrors = $showErrorsStore;
$:  showRun = $showRunStore;
$:  errorsArray = $errorsArrayStore;

export let test;
const run  = async ()=>{
// debugger;
// quizStore.update(currentQuiz => ({ ...currentQuiz, title: true }));
const item = {...test };
item.testId = test._id;
item._id = null;
item.title = newName;
item.published = true;
item.createdAt =  new Date();
//////////////////////////////////////
// const resp = await ajaxPost(`${BASE_URL}/survey/save` ,{survey});
  const resp = await Agent.create('run',{item});
  if (resp.ok) {
      const data = await response.json();
      //the item that was updated is returned as item
        runsStore.update( curr =>{return [...curr,data.item]});
      LocalStorage.updateRuns(); 
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
    
    <input class="w-full bg-gray-700 text-white rounded-md px-10" 
    type="text" bind:value={newName}>

    <button class="bg-red-700 text-white rounded-md p-2 m-2"
    on:click={run}>Run</button>
    <button class="bg-green-700 text-white rounded-md p-2 m-2"
    on:click={()=>showRunStore.set(false)}>
    Cancel</button>
<br/>    
<br/>    

</div>
{/if}

