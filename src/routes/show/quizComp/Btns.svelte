<script>
import { v4 as uuid } from 'uuid';

export let questions;
export let quiz;
export let next;
export let setWaiting;

import check from "../check/check.js";
export let cq;
export let prev;
export let saveResponse;
import { BASE_URL } from '$lib/js/config.js';
import { toast } from "@zerodevx/svelte-toast";
import ajaxPost from "$lib/js/ajaxPost.js";

import {pageStateStore, emailStore } from '../store.js';
$: email = $emailStore;

let hideSaveBtn = false;

async function saveResults  (){

 setWaiting();
  // debugger;
  hideSaveBtn = true;  
  let quizResult = {};
  quizResult.answers = await check(quiz);

quizResult.userId = quiz.userId;
  // console.log("quizResult" , quizResult);
  // return;
    const r = await fetch('https://api.ipify.org?format=json');
    const d = await r.json();
    quizResult.ip = d.ip;


  // Get the user's country code
  const countryCodeResponse = await fetch(`https://ip2c.org/${quizResult.ip }`);
  const countryCodeData = await countryCodeResponse.text();
  const countryCode = countryCodeData.split(';')[1];
  quizResult.countryCode = countryCode;

  quizResult.id = uuid(); 
  quizResult.quizId = quiz._id; 
  quizResult.email = email;
  
  console.log("quizResult after check before save" ,quizResult);
console.log("quiz" ,quiz);
// return;
 ///////////////
// debugger;
  const resp = await ajaxPost(`${BASE_URL}/result/save`,{ quizResult, quiz } ); 
    
    if (resp.ok){
        // console.log("resp",resp)
          pageStateStore.set('outro');
        console.log("outro",$pageStateStore)
        toast.push("results saved");
    }else {
      const data = await resp.json();
        hideSaveBtn = false;
        toast.push(data.errormsg);
        pageStateStore.set('outro');
 }
pageStateStore.set('outro');
}
</script>



<div class="flex   justify-between w-full   gap-2  mt-2 mb-2 items-center">
  <div class="elm">
  <button class="" on:click={prev}>
  <span class="text-2xl p-2">&#8592;</span>
  </button>
  </div>

  <div class="elm">
    <!--submit btn-->
    {#if (cq == questions.length-1)} 
      {#if (hideSaveBtn == false)}
        <button 
          class=""
          on:click={ saveResults  }   > 
          {#if saveResponse == true}
          <span class="text-2xl">💾 Submit & Save</span>
          {:else}
            <span class="text-2xl">📋Submit</span>
          {/if}
        </button>
      {/if}
    {/if}
  </div>

  <div class="elm">
  <button class="" on:click={next}>
   <span class="text-2xl p-2">&#8594;</span>
  </button>
  </div>
</div>


<style>
.elm {
  background-color:blue;
  color:white;
  padding:1px;
  margin:1px;
  border-radius: 10px;

  }

</style>