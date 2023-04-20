<script>
import { goto } from '$app/navigation';
import { toast } from "@zerodevx/svelte-toast";

import Title from "./Title.svelte";
import IntroText from "./IntroText.svelte";
import IfQuiz from "./IfQuiz.svelte";

export let setPageState;
export let quiz;
import { emailStore , passwordStore } from '$lib/stores/showStore.js';
let email;
let password;
emailStore.subscribe(value => email = value);
passwordStore.subscribe(value => password = value);
const checklogin = ()=>{
//  debugger;
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


<div class="flex flex-col justify-center   border-2 border-white rounded-md bg-gray-700 
text-white  p-4 m-8  ">

<Title title ={quiz.title} />

{#if quiz.showIntro == true}
<IntroText introText= {quiz.introText} />
{/if} 


{#if quiz.quizType == "quiz"}
<IfQuiz  {quiz} {setPageState} />    
{/if}


<!--button-->
<div class="flex justify-center w-full ">

 <button class="bg-green-500 text-white m-3 p-3 rounded-lg w-4/12"
    on:click={checklogin}>
    Start
 </button>
 
</div>          

</div><!--form intro ends-->