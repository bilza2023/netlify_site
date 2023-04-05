<script>
import { goto } from '$app/navigation';
export let title = "Welcome to our website!";
import { toast } from '@zerodevx/svelte-toast';
export let introText = "";
export let quiz;
export let setPageState;
let email = "";
let password = "";

const pageStateHandler = ()=>{
// debugger;
if (quiz.dispatchTo == "selected"){
  for (let i = 0; i < quiz.members.length; i++) {
    const element = quiz.members[i];
      if (element.email == email){
        if (element.password == password){
          setPageState("showQuiz");
          return;
        }  
      }
  }
toast.push("wrong email or password");
}else {
setPageState("showQuiz");
}

}
</script>

 
<br/>

<div class="border-2 border-white rounded-md bg-gray-700">
  
      <h1 class="text-4xl font-bold text-left bg-gray-800 
      m-4 p-5  inline-block rounded-lg
      border-2 border-gray-600
      ">
        {title}
      </h1>

      {#if quiz.showIntro == true}
      <div class="flex justify-center">
            <p class="text-1xl  bg-gray-800 w-4/5 leading-10 
            m-3 p-3 rounded-lg mx-auto inline-block">
                {introText}
            </p>
      </div>
      {/if}

{#if quiz.dispatchTo != "anyone"}
<div class="flex bg-gray-800 justify-center border border-gray-500 p-2 m-1 rounded-md">

    <label class="items-center p-1 m-1">Email</label>
    <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white"  type="text" bind:value={email}>


    <label class="items-center p-1 m-1">Password</label>
    <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white"  type="text" bind:value={password}>

</div>
{/if}


<div class="flex justify-center gap-4 ">

    <button class="bg-gray-300 text-white m-3 p-3 rounded-lg"
    on:click={ ()=> goto('/') }>
    Home
    </button>

    <button class="bg-green-500 text-white m-3 p-3 rounded-lg"
    on:click={pageStateHandler}>
    Quiz
    </button>

</div>


</div>
