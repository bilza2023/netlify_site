<script>
import { goto } from '$app/navigation';
import { toast } from "@zerodevx/svelte-toast";
import { onMount } from 'svelte';
import Title from "./Title.svelte";
import IntroText from "./IntroText.svelte";
//////////////////////////////////////////////////////
import { emailStore , pageStateStore } from "../store.js";
//////////////////////////////////////////////////////
export let quiz;
export let students;

let email;
let password;
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const checklogin = ()=>{
  // debugger;
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
      if (student.email == email){
        if (student.password == password){
          emailStore.set(email); 
          pageStateStore.set("showQuiz");
          return;
        }  
      }
  }
  toast.push("wrong email or password"); 
}
//////////////////////////////////////////////////////
</script>


<div class="flex flex-col justify-center   border-2 border-white rounded-md bg-gray-700 
text-white  p-4 m-8  ">

<Title title ={quiz.title} />

<IntroText introText= {quiz.introText} />

<!--button-->
<div class="flex justify-center w-full">
<div class="flex flex-col md:flex-row justify-center bg-gray-800 border border-gray-500 p-2 m-1 rounded-md w-full">
  <!-- <div class="flex flex-col md:flex-row bg-gray-800 border border-gray-500 p-2 m-1 rounded-md w-full"> -->
    <div class="flex flex-col items-center">
      <label for="" class="p-1 m-1">Email</label>
      <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white" type="text" bind:value={email} on:input|preventDefault={()=> true}>
    </div>
    <div class="flex flex-col items-center">
      <label for="" class="p-1 m-1">Password</label>
      <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white" type="text" bind:value={password} on:input|preventDefault={()=> true}>
    </div>
  </div>
</div>


<!--button-->
<div class="flex justify-center w-full ">

 <button class="bg-green-500 text-white m-3 p-3 rounded-lg w-4/12"
    on:click={checklogin}>
    Start
 </button>
 
</div>          

</div><!--form intro ends-->