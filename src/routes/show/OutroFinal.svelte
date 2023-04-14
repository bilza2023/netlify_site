<script>
export let quiz;
export let result;
import { goto } from '$app/navigation';
let showSaveResultButton = true;

const saveResults = async ()=>{
  const r = await fetch('https://api.ipify.org?format=json');
  const d = await r.json();
  result.ip = d.ip;

  result.quizId = quiz._id; 
  result.email = email; 
  save(result);
}

</script>


<!-- {#if quiz.showfarewellText == true } -->
    <div class="flex justify-center text-white">
          <p class="text-1xl  bg-gray-800 w-4/5 leading-10 
          m-3 p-3 rounded-lg mx-auto inline-block">
              {quiz.farewellText}
          </p>
    </div>
<!-- {/if} -->


<div class="flex justify-start gap-3 w-full p-1 m-1 rounded-md bg-gray-500">

<div class="">
<button class="bg-gray-600 text-white m-3 p-3 rounded-lg"
on:click={ ()=> goto('/') }>
Home
</button>
</div>

{#if quiz.saveResponse == true}
{#if showSaveResultButton == true}

<div class="flex-grow-4">
  <button class="bg-blue-600 text-white m-3 p-3 rounded-lg hover:bg-blue-500 active:bg-blue-900"
  on:click={ saveResults  }>
  Save Results
  </button>
</div>
{/if}
{/if}
</div>
