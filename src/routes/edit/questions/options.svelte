<script>
import Option from "./Option.svelte";
import { getOption } from "../addQuestions/mcq";
import unPublish from "../unPublish";
import { quizStore  } from '../store';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore; 
// $: questions = $quizStore.questions;


export let question;

function deleteOption(questionId, optionId) {
 quizStore.update(currentQuiz => {
    let question = currentQuiz.questions.find(q => q.id === questionId);
    if (question) {
      let optionIndex = question.options.findIndex(o => o.id === optionId);
      if (optionIndex !== -1) {
        question.options.splice(optionIndex, 1);
        unPublish();
      }
    }
    return currentQuiz;
  });
}

const addOption = qid => {
  quizStore.update(currentQuiz => {
    const index = currentQuiz.questions.findIndex(question => question.id === qid);
    if (index !== -1) {
      const op = getOption();
      currentQuiz.questions[index].options.push(op);
      unPublish();
    }
    return currentQuiz;
  });
};

const mark_correct = (option_id)=>{
question.correctOption = option_id;
}

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(question.id)}
>
<span class="">Add Option</span> &nbsp;&nbsp;&nbsp;&nbsp;
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
  </svg>
</div>

<br/>

    <div class="text-center">
    {#each question.options as option}
   <Option {option} {question} {deleteOption} {mark_correct}/>
    {/each}
    </div>
