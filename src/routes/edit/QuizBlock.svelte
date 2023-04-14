<script>
import Tf from "./Tf.svelte";
import Dispatch from "./Dispatch.svelte";
import Th from "./Th.svelte";
import FormRow from "./FormRow.svelte";
import { fade } from 'svelte/transition';
import check from "./check.js";
// import tooglePublishFn from "./tooglePublish.js";
export let quiz;
export let members;
export let set_errors_Array;
let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }

function tooglePublish(tf){
  if (tf == false){
      quiz.published = false;
      return;
  }
  if (tf == true){
      const errors_Array =  check(quiz);
    if (errors_Array.length !==0) {
      set_errors_Array(errors_Array);
      quiz.published = false;
    }else {
      quiz.published = true;
    }
  }
}

</script>

<Th title={quiz.title}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 
<FormRow title="Quiz Title">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={quiz.title} 
>
</FormRow>

<FormRow title="Intro Text">
<textarea class="w-full bg-gray-700 color-white"
bind:value={quiz.introText}></textarea>
</FormRow>

<FormRow title="Farewell Text">
<textarea class="w-full bg-gray-700 color-white" bind:value={quiz.farewellText}></textarea>
</FormRow>

<FormRow title="Save Responses">
<Tf obj={quiz} bool_prop="saveResponse" />
</FormRow>

<FormRow title="Show Intro">
<Tf obj={quiz} bool_prop="showIntro" />
</FormRow>
<!-- 
<FormRow title="Show Farewell Text">
<Tf obj={quiz} bool_prop="showfarewellText" />
</FormRow> -->

<FormRow title="Show Results to user">
<Tf obj={quiz} bool_prop="showResult" />
</FormRow>

<FormRow title="Published"  >

{#if  quiz.published == true}
<button class="w-full bg-green-500 hover:bg-green-700 active:bg-green-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"  on:click={()=>{tooglePublish(false)}}>True</button>
{:else}
<button class="w-full bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" 
on:click={()=>{tooglePublish(true)}}>False</button>
{/if}
</FormRow>
 
{#if quiz.quizType == "quiz"}
  
<FormRow title="Users"  >
<Dispatch  {members} {quiz}/>
</FormRow>
{/if} 




</div>



</Th>
