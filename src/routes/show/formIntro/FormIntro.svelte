<script>
import { goto } from '$app/navigation';
import { toast } from "@zerodevx/svelte-toast";

import Title from "./Title.svelte";
import IntroText from "./IntroText.svelte";
import IfQuiz from "./IfQuiz.svelte";
import { emailStore , passwordStore ,quizStore , pageStateStore } from '../store';
//--we need these only if we want to react to them
$: quiz = $quizStore;
$: email = $emailStore;
$: password = $passwordStore;


const checklogin = ()=>{
//  debugger;
  // if (quiz.quizType == "quiz"){
  for (let i = 0; i < quiz.members.length; i++) {
    const element = quiz.members[i];
      if (element.email == email){
        if (element.password == password){
          emailStore.set(email); 
          // passwordStore.set(password);
          pageStateStore.set("showQuiz");
          return;
        }  
      }
  }
  toast.push("wrong email or password");

}

</script>


<div class="flex flex-col justify-center   border-2 border-white rounded-md bg-gray-700 
text-white  p-4 m-8  ">

<Title title ={quiz.title} />

<IntroText introText= {quiz.introText} />


<IfQuiz  {quiz}  />    


<!--button-->
<div class="flex justify-center w-full ">

 <button class="bg-green-500 text-white m-3 p-3 rounded-lg w-4/12"
    on:click={checklogin}>
    Start
 </button>
 
</div>          

</div><!--form intro ends-->