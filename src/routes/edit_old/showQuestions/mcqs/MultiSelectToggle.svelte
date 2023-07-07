<script>
import { quizStore  } from '../../store';
export let bool_prop;
export let question;
// export let runFn = ()=>{};
    const  toggle = ()=> {
    
        clearQCorrectOptions(question.id);
        question[bool_prop] = !question[bool_prop]
    };

const clearQCorrectOptions = (question_id) => {
  quizStore.update(currentQuiz => {
    // find the question in the currentQuiz object
    let currentQuestion = currentQuiz.questions.find(q => q.id === question_id);
    if (currentQuestion) {
      // clear the correctOptions array
      currentQuestion.correctOptions = [];
    }
    return currentQuiz;
  });
}

</script>
 

{#if  question[bool_prop] ==true}
<button class="w-full bg-green-500 hover:bg-green-700 active:bg-green-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"  on:click={toggle}>True</button>
{:else}
<button class="w-full bg-red-500 hover:bg-red-700 active:bg-red-900 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" on:click={toggle}>False</button>
{/if}
