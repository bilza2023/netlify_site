please look at this svelte component 
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

    <div class="bg-gray-900 m-2 p-2 text-xl rounded-md">{`${index+1}`} : {question.content}</div>
        {#if question.questionType == "SurveyMCQ"}
            {#each question.options as option,optIndex}  
                    <div class=" bg-gray-700 m-1 p-1 text-md rounded-md mx-14">
                        {#if true}
                            <span style="color: green;">✅</span>
                        {/if}
                    {option.content}</div>
            {/each}
        {/if}
        
  {/each}
 



</div>


</Th>

{/if}


i want your assistance here
 {#if true}
    <span style="color: green;">✅</span>
{/if}

The question has an array of strings called "question.correctOptions" . it has "id" of all the options that are correct. each option also has option.id field. 
I want that instead of 
    {#if true}
i want to check 
    if option.id exists in question.correctOptions then 
    ✅ else X