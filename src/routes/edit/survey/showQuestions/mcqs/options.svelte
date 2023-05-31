<script>
import Option from "./Option.svelte";
import { v4 as uuid } from 'uuid';
// import { getOption } from "../../htoolbar/mcq.js";
// import unPublish from "../../unPublish"; 
// import markCorrect from "./markCorrect.js";

import { quizStore  } from '../../store.js';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore; 
$: questions = $quizStore.questions;


export let question;

function deleteOption(questionId, optionId) {
 quizStore.update(currentQuiz => {
    let question = currentQuiz.questions.find(q => q.id === questionId);
    if (question) {
      let optionIndex = question.options.findIndex(o => o.id === optionId);
      if (optionIndex !== -1) {
        question.options.splice(optionIndex, 1);
        // unPublish();
      }
    }
    return currentQuiz;
  });
}

const addOption = qid => {
  quizStore.update(currentQuiz => {
    const index = currentQuiz.questions.findIndex(question => question.id === qid);
    if (index !== -1) {
      const op = {id : uuid() , content : ""};
      currentQuiz.questions[index].options.push(op);
      // unPublish();
    }
    return currentQuiz;
  });
};


</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(question.id)}
>
<span class="text-md">Add Option + </span>

</div>

<br/>

    <div class="text-center">
    {#if question.options}
    {#each question.options as option}
   <Option {option} {question} {deleteOption} />
    {/each}
    {/if}
    </div>
