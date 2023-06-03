<script>
import { quizStore , showErrorsStore, errorsArrayStore } from '../../store';
import checkBeforePub from './checkBeforePub';
$: quiz = $quizStore; 

function tooglePublish(){
      showErrorsStore.update(() => false); //start with this

  if (quiz.published == true){
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
      return;
  }
  if (quiz.published == false){
      const errors_Array =  checkBeforePub(quiz);
    if (errors_Array.length !==0) {
      // set_errors_Array(errors_Array);
        //--This is wrong since errorsArrayStore is not an object
        // errorsArrayStore.update(currentArr => ({ errors_Array }));
        errorsArrayStore.update(currentArr => errors_Array);
        showErrorsStore.update(() => true); //here

        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
    }else {
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));
    }
  }
// console.log("quiz.published",quiz.published);  
}

</script>



<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={tooglePublish}>
    <span class="text-2xl">📤</span>
    <span class="text-sm font-medium 
    { quiz.published == true ? "text-green-400" : "text-red-400"}
    ">Publish</span>
  </button>
</div>
 