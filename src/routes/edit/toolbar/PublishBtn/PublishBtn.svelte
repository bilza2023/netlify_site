<script>
import { toast } from '@zerodevx/svelte-toast';
import checkBeforePub from './checkBeforePub.js';
import save from  "../save";
import publishFn from  "../publishFn.js";
import { quizStore , showErrorsStore, errorsArrayStore } from '../../store';
$: quiz = $quizStore; 




async function tooglePublish(){
      // debugger;
      showErrorsStore.set(false); //start with this

  if (quiz.published == true){
        debugger;
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
        //  need to save unpublished state
        const q2 = quiz;
        q2.published = false;
        await save({survey:q2});
        // toast.push("Unpublished");
      return;
  }else {
      const errors_Array =  checkBeforePub(quiz);
      // const errors_Array =  []; --fake line for testing
    if (errors_Array.length !==0) {
      // set_errors_Array(errors_Array);
        //--This is wrong since errorsArrayStore is not an object
        // errorsArrayStore.update(currentArr => ({ errors_Array }));
        errorsArrayStore.set(errors_Array);
        showErrorsStore.set( true); //here

        // quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
    }else {
      debugger;
        await quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));
        const q2 = quiz;
        q2.published = true;
        await publishFn({survey:q2});
        // toast.push("Published");
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
 