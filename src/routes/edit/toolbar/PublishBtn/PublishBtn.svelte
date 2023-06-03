<script>
import { toast } from '@zerodevx/svelte-toast';
import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import checkBeforePub from './checkBeforePub.js';
import publishFn from  "../publishFn.js";
import { quizStore , showErrorsStore, errorsArrayStore } from '../../store';
$: quiz = $quizStore; 
$: published = $quizStore.published; 

////////////////////////////////////////////
////////////////////////////////////////////
async function tooglePublish(){
      // debugger;
      showErrorsStore.set(false); //start with this

  if (quiz.published == true){
        // debugger;
        quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));

        const q2 = quiz;
        q2.published = false;
        const resp = await ajaxPost(`${BASE_URL}/survey/update` ,{survey:q2}); 
                  if (resp.ok) {
                      toast.push( "UnPublished" );
                  }else {
                      toast.push( "failed to UnPublish" );
                  }
      return;
  }else {
      const errors_Array =  checkBeforePub(quiz);
    if (errors_Array.length !==0) {
      // set_errors_Array(errors_Array);
        //--This is wrong since errorsArrayStore is not an object
        // errorsArrayStore.update(currentArr => ({ errors_Array }));
        errorsArrayStore.set(errors_Array);
        showErrorsStore.set( true); //here

    }else {
      // debugger;
        await quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));
        const q2 = quiz;
        q2.published = true;
        await publishFn({survey:q2});
    }
  }
}

</script>



<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={tooglePublish}>
    <span class="text-2xl">📤</span>
    <span class="text-sm font-medium 
    { published == true ? "text-green-400" : "text-red-400"}
    ">{ published == true ? "Publish" : "UnPublish"}</span>
  </button>
</div>
 