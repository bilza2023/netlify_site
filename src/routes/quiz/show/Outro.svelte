<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import check from "./check.js";
import Result from "./Result.svelte";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { emailStore , passwordStore } from '$lib/stores/showStore.js';

let email ="";
let password ="";
//  $: email = $emailStore;
//  $: password = $passwordStore;
  emailStore.subscribe(value => email = value);
  passwordStore.subscribe(value => password = value);

export let quiz;
let result;
let showSaveResultButton = true;


const saveResults = async ()=>{
result.quizId = quiz._id; 
// result.password = password; 
result.email = email; 

const resp = await fetch(`${BASE_URL}/result/save`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { result } )
    });
const data = await resp.json();
    if (data.success == true){
        toast.push("results saved");
        showSaveResultButton = false;
    }else {
        toast.push(data.message);
        showSaveResultButton = false;
    }
}

onMount(async () => {
 try {
    result = await check(quiz);
    console.error(result);
// debugger;
 } catch (error) {
    console.error(error);
}
}); 

</script>
{#if quiz.showResult == true}
<Result  {quiz} {result}   />  
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
