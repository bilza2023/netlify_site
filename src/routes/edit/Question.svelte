<script>
import Thq from "./Thq.svelte";
import FormRow from "./FormRow.svelte";
import { fade } from 'svelte/transition';
export let question;
export let addOption;
export let deleteOption;
export let index;
export let deleteQuestion;
export let ser;
const mark_correct = (option_id)=>{
question.correctOption = option_id;
}

</script>

<Thq title={question.content} {deleteQuestion} id={question._id} {ser}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >


<FormRow title="Question">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={question.content} >
</FormRow>

<FormRow title="Explanation">
<textarea class="w-full bg-gray-700 color-white"
bind:value={question.explanation}></textarea>
</FormRow>

<br/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(index)}
>
<span class="">Options</span> &nbsp;&nbsp;&nbsp;&nbsp;
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
</svg>
</div>

<br/>

    <div class="text-center">
    {#each question.options as option , option_index }
      <div class="flex mb-1 border-2 border-gray-400 mx-10">    
          
          <input
          class="bg-gray-500 text-white w-8/12 " 
          type="text" bind:value={option.content} 
          />
          
          {#if question.correctOption==option.id}
          <button class="w-2/12 bg-green-600 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          Mark Correct
          </button>
          {:else}
          <button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-gray-400 hover:bg-gray-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          Mark Correct
          </button>
          {/if}
          
<button class="w-2/12 bg-red-600 rounded-sm focus:outline-none active:bg-red-400 hover:bg-red-500 hover:cursor-pointer mx-2 my-1"
          on:click={()=>deleteOption(index,option_index)}>
          Delete
</button>

    </div>
    {/each}
    </div>

</div>

</Thq>