<script>
import { goto } from '$app/navigation';

import { emailStore , passwordStore } from '$lib/stores/showStore.js';

let email ="";
let password ="";

emailStore.subscribe(value => email = value);
passwordStore.subscribe(value => password = value);

export let setPageState;
export let quiz;



const checklogin = ()=>{
// debugger;
if (quiz.quizType == "quiz"){
  for (let i = 0; i < quiz.members.length; i++) {
    const element = quiz.members[i];
      if (element.email == email){
        if (element.password == password){
          emailStore.set(email); 
          // passwordStore.set(password);
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


<div class="border-2 border-white rounded-md bg-gray-700 text-white  p-4 m-8 ">


 {#if quiz.showIntro == true}
    <div class="flex flex-col justify-center items-center">
    <br/>
    <br/>
    <h1
    class="shadow-md bg-gray-600 text-white 
    p-3 rounded-lg text-center w-8/12"  >
        {quiz.title}
        </h1>

        <p class="text-1xl bg-gray-600 leading-10 m-3 p-3 rounded-lg">
            {quiz.introText}
        </p>
        </div>
      {/if}

    {#if quiz.quizType == "quiz"}
    <div class="flex bg-gray-800 justify-center border border-gray-500 p-2 m-1 rounded-md">

    <label class="items-center p-1 m-1">Email</label>
    <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white"  type="text" bind:value={email}>


    <label class="items-center p-1 m-1">Password</label>
    <input class="bg-gray-600 text-white rounded-md m-1 p-1 border border-white"  type="text" bind:value={password}>

    </div>
    {/if}
  <!--this must always be shown-->
    <div class="flex justify-center gap-4 ">

    <button class="bg-gray-300 text-white m-3 p-3 rounded-lg"
    on:click={ ()=> goto('/') }>
    Home
    </button>

    <button class="bg-green-500 text-white m-3 p-3 rounded-lg"
    on:click={checklogin}>
    Start
    </button>
    </div>



</div><!--form intro ends-->