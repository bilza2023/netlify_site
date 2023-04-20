<script>
// import {pageState} from "./showQuizStore";
import Btns from "./Btns.svelte";
import ProgressBar from "$lib/cmp/ProgressBar.svelte";
export let setPageState;
export let quiz = {};
$: questions = quiz.questions;
let cq = 0;
const next = ()=>{
  if (cq < questions.length-1){ // This is correct
    cq += 1;
  }else {
  cq = ( questions.length-1 );
  }
}
const prev = ()=>{
  if (cq > 0){
  cq -=1;
  }else {
    cq= 0;
  }
}

</script>

<br>
<div class="flex justify-center">
  <h1 class="bg-blue-900  p-2 m-1  mt-0  w-full text-center text-2xl rounded-md">{quiz.title}
  </h1>
</div>
  <br>


<div class="flex flex-col justify-center bg-gray-700 p-1 
 text-white rounded-md w-10/12 mx-auto border-2 border-gray-100">
  
  
<ProgressBar total={questions.length} current={cq}/>

  <h1 
    class="bg-red-900 rounded-md p-4 m-3  text-center text-xl">
    {questions[cq].content}
  </h1>
<br>

 <div class=" flex justify-center flex-col text-center ">
  {#each questions[cq].options as option }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      on:click={()=>questions[cq].selectedOption = option.id}
      class="p-2 m-2  hover:rounded-2xl  hover:cursor-pointer  text-black  rounded-sm border-gray-900
        {questions[cq].selectedOption == option.id  ? "bg-blue-500" : "bg-gray-300"}
        "
      >
      {option.content}
    </div> 
  {/each}
  </div> 


<Btns   {questions} {cq} {setPageState} {quiz}  saveResponse={quiz.saveResponse} {next} {prev}  />



</div><!--flex box ends--->
