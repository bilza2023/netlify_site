<script>
import { fade } from 'svelte/transition';
import PublishErrors from './toolbar/PublishErrors.svelte';
import {get} from 'svelte/store'
import Clone from "./Clone.svelte";
import MakeTest from "./MakeTest.svelte";
import QuizDel from "./QuizDel.svelte";

export let template;

import { showTestStore ,showCloneStore,showQuizDelStore,
showErrorsStore,errorsArrayStore} from './store';

$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showQuizDel = $showQuizDelStore;
</script>


<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

{#if get( showErrorsStore  ) }
  <!-- <HideIfNot ifNot={showErrors}> -->
  <div class="p-2 m-2 bg-gray-600 border-white border-2 rounded-md"
  in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} >
  <PublishErrors />
  <button 
  class="bg-gray-700 rounded-md m-1 p-1  hover:bg-gray-600 active:bg-gray-800"
  on:click={()=>showErrorsStore.set(false)}>Hide</button>
  </div>
{/if}


{#if showClone == true}
  <Clone  {template}  />
{/if}

{#if showTest == true}
  <MakeTest  {template}  />
  <!-- <div class="text-white">MakeTest MakeTest MakeTest MakeTest MakeTest </div> -->
{/if}

{#if showQuizDel == true}
  <QuizDel  {template} />
{/if}

</div>