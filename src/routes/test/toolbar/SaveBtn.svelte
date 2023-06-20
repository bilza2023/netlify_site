<script>
import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { quizStore } from '../store';

$: quiz = $quizStore;

async function save( ){
  // debugger;
  //////////////////////////////////////
    quizStore.update((currentQuiz) => {
    currentQuiz.publishObj.runStartTime = new Date();
    return currentQuiz;
  });

  
  // console.log("quiz",quiz);
  // return;
  const resp = await ajaxPost(`${BASE_URL}/test/save` ,{test : quiz} );

    if (resp.ok) {
        toast.push( "Test saved" );
    }else {
        const data = await resp.json();

        toast.push( "Failed to Save Test" );
    }
  }
</script>

<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
    on:click={save}
    >
      <span class="text-2xl">💾</span>
      <span class="text-sm font-medium text-white">Save</span>
    </button>
  </div>