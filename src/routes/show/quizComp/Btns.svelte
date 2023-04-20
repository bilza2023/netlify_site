<script>
export let questions;
export let quiz;
export let next;
import check from "../check.js";
export let cq;
export let prev;
export let saveResponse;
export let setPageState;
import { BASE_URL } from '$lib/js/config.js';
import { toast } from "@zerodevx/svelte-toast";
import { emailStore } from '../store.js';
let email;
emailStore.subscribe(value => email = value);

let hideSaveBtn = false;

async function saveResults  (){
  // debugger;
  hideSaveBtn = true;  
  let quizResult = await check(quiz);
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
        setPageState("outro");
    }else {
        hideSaveBtn = false;
        toast.push(data.message);
 }

}
</script>



<div class="flex justify-between w-full gap-16 mt-2 mb-2 pl-8 pr-8">
 
  <button class="flex-grow bg-blue-600 rounded-2xl p-1" on:click={prev}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="#fff" d="M21.333 25.333v-18.666l-12 9.333z" />
    </svg>
  </button>

<!--submit btn-->
{#if (cq == questions.length-1)} 
{#if (hideSaveBtn == false)}
 <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={ saveResults  }   > 
    <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
      <path d="M16.59 6l-5.3-5.3C11.16.21 10.91 0 10.59 0H3C1.9 0 1.01.9 1.01 2L1 22c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V8c0-.31-.21-.56-.5-.66L16.59 6zM5 18V9h2v9H5zm3 0V9h2v9H8zm3 0V9h2v9h-2zm3 0V9h2v9h-2z"/>
    </svg>
    {#if saveResponse == true}
    <span>Submit & Save</span>
    {:else}
    <span>Submit</span>
    {/if}
 </button>
{/if}
{/if}




  <button class="flex-grow bg-blue-600 flex flex-row-reverse rounded-2xl p-1" on:click={next}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <path fill="#fff" d="M10.667 6.667v18.666l12-9.333z" />
    </svg>
  </button>




</div><!-- flex ends !-->
