<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import check from "./check.js";
import Result from "./Result.svelte";
import OutroFinal from "./OutroFinal.svelte";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { emailStore , passwordStore } from '$lib/stores/showStore.js';

let showOutroFinal = false;
let email ="";
let password ="";
//  $: email = $emailStore;
//  $: password = $passwordStore;
  emailStore.subscribe(value => email = value);
  passwordStore.subscribe(value => password = value);

export let quiz;
let result;

const setShowOutroFinal = ()=> showOutroFinal=true;


const save = async ( result )=> { 

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
        showSaveResultButton = true;
}
}

onMount(async () => {
 try {
    result = await check(quiz);
    // console.error(result);
// debugger;
 } catch (error) {
    console.error(error);
}
}); 

</script>


{#if quiz.showResult == true && showOutroFinal == false}
<Result  {quiz} {result}  {setShowOutroFinal}  />
{:else}
{showOutroFinal = true}
{/if}




{#if showOutroFinal == true}
<OutroFinal {quiz} {result} />
{/if}
