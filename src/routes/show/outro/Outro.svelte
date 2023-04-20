<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
 
import Result from "../Result.svelte";
import OutroFinal from "./OutroFinal.svelte";
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

let showOutroFinal;
const setShowOutroFinal = ()=> showOutroFinal=true;


onMount(async () => {
 try {
    if (quiz.showResult == true) {
      showOutroFinal = false;
    }else {
      showOutroFinal = true;
    }
    // console.error(quizResult);
// debugger;
 } catch (error) {
    console.error(error);
}
}); 

</script>

<br>
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md text-white">{quiz.title}
  </h1>
</div>
  <br>

{#if  showOutroFinal == false}
<Result  {quiz}   {setShowOutroFinal}  />
{/if}

{#if  showOutroFinal == true}
<OutroFinal {quiz} />
{/if}

