<script>
import checkBeforePub from './check/checkBeforePub.js';
import {errorsArrayStore,showErrorsStore,showRunStore} from "./store.js";

import {quizStore} from "../../store.js";
$: quiz = $quizStore;
$: errorsArray = $errorsArrayStore;

////////////////////////////////////////////
////////////////////////////////////////////
async function toogle(){
    showErrorsStore.set(false);
    showRunStore.set(false);
      // debugger;
    const errors_Array =  checkBeforePub(quiz);
    if (errors_Array.length !==0) {
          errorsArrayStore.set(errors_Array);
          showErrorsStore.set( true); //here
          console.log("errorsArray" ,  errorsArray)
          showRunStore.set(false);
          return;
    }else {
      // debugger;
      showRunStore.set(true);
    }
}

</script>

<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={toogle}>
    <span class="text-2xl">🏃</span>
    <span class="text-sm font-medium text-white"
    >Run</span>
  </button>
</div>
 