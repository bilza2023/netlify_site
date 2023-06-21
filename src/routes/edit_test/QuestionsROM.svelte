<script>
import Th from "$lib/cmp/Th.svelte";
// import FormRow from "../FormRow.svelte";
import { fade } from 'svelte/transition';

import { quizStore } from './store';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore;

</script>

{#if quiz}

<Th title={"Questions (Read-only)"} icon={"❓"}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

   {#each quiz.questions as question,index}

    <div class="bg-gray-900 m-2 p-2 text-xl rounded-md mx-4">{`${index+1}`} : {question.content}</div>
        {#if question.questionType == "SurveyMCQ"}
            {#each question.options as option,optIndex}  
                    <div class=" bg-gray-700 m-1 p-1 text-md rounded-md mx-14">
                       {#if question.correctOptions.includes(option.id)}
                        <span style="color: green;">✅</span>
                        {:else}
                        <span style="color: red;">❌</span>
                        {/if}
                    {option.content}</div>
            {/each}
        {/if}
        
  {/each}
 

<br/>

</div>


</Th>

{/if}