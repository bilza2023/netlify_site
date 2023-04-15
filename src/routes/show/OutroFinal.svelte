<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { emailStore  } from '$lib/stores/showStore.js';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import check from "./check.js";

export let quiz;


let email ="";
  emailStore.subscribe(value => email = value);

let showSaveResultButton = true;

let quizResult = {};
$: console.log(quizResult);
onMount(async () => {
  quizResult = await check(quiz);
});

 async function saveResults  (){
// debugger;
  const r = await fetch('https://api.ipify.org?format=json');
  const d = await r.json();
  quizResult.ip = d.ip;

  quizResult.quizId = quiz._id; 
  quizResult.email = email; 
///////////////
    const resp = await fetch(`${BASE_URL}/result/save`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { result:quizResult } )
    });

    const data = await resp.json();
    if (data.success == true){
        toast.push("results saved");
        showSaveResultButton = false;
    }else {
        toast.push(data.message);
        toast.push("results saved");
        showSaveResultButton = true;
}

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
