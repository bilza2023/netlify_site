<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import saveResponse from "./saveResponse.js";
import Result from "./Result.svelte";
export let quiz;
let resp;
onMount(async () => {
 try {
    //  console.log("quiz", quiz);
    resp = await saveResponse(quiz);
    // debugger;
   //  console.log("resp", resp );
// debugger;
 } catch (error) {
    console.error(error);
  }

}); 

</script>
{#if quiz.showResult == true}
<Result  {quiz} {resp}   />  
{/if}

{#if quiz.showfarewellText == true }
    <div class="flex justify-center">
          <p class="text-1xl  bg-gray-800 w-4/5 leading-10 
          m-3 p-3 rounded-lg mx-auto inline-block">
              {quiz.farewellText}
          </p>
    </div>
{/if}


<div class="flex justify-start gap-3 w-full p-1 m-1 rounded-md bg-gray-500">

<div class="">
<button class="bg-gray-600 text-white m-3 p-3 rounded-lg"
on:click={ ()=> goto('/') }>
Home
</button>
</div>

{#if quiz.saveResponse == true}
<div class="flex-grow-4">
<button class="bg-blue-600 text-white m-3 p-3 rounded-lg"
on:click={ ()=> goto('/') }>
Save Results
</button>
</div>
{/if}

</div>
