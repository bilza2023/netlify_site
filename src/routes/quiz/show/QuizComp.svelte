<script>
import {pageState} from "./showQuizStore";
import ProgressBar from "$lib/cmp/ProgressBar.svelte";

export let quiz = {};
const questions = quiz.questions;
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

<div class="grid-container bg-gray-700 text-white">
  
  <button 
    class="grid-item third-column btnCol bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  flex items-center focus:outline-none focus:shadow-outline"
    on:click={next}  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path fill="#fff" d="M10.667 6.667v18.666l12-9.333z"/>
    </svg>
  </button>


<div class="grid-item   flex flex-col justify-center">

<ProgressBar total={questions.length} current={cq}/>

  <h1 
    class="bg-red-900 rounded-md p-4 m-3  text-center text-xl">
    {questions[cq].content}
  </h1>

 <div class=" flex justify-center flex-col text-center  ">
  {#each questions[cq].options as option }
  <div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
      on:click={()=>questions[cq].selectedOption = option.id}
      class=" p-2 m-2 bg-gray-300
       hover:bg-blue-300 hover:cursor-pointer  text-black
        focus:outline-none rounded-md 
        {questions[cq].selectedOption == option.id  ? "bg-green-500" : ""}
        transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
      >
      {option.content}
    </div>
  </div>  
  {/each}
</div>



{#if (cq == questions.length-1)}
<div class="flex justify-center ">
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={ ()=> pageState.set(2)  }   > 
    <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
      <path d="M16.59 6l-5.3-5.3C11.16.21 10.91 0 10.59 0H3C1.9 0 1.01.9 1.01 2L1 22c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V8c0-.31-.21-.56-.5-.66L16.59 6zM5 18V9h2v9H5zm3 0V9h2v9H8zm3 0V9h2v9h-2zm3 0V9h2v9h-2z"/>
    </svg>
    <span>Submit</span>
  </button>
</div>
{/if}

</div><!--grid middle column ends-->


<button class="grid-item first-column btnCol bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4  flex items-center focus:outline-none focus:shadow-outline" on:click={prev}  >
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path fill="#fff" d="M21.333 25.333v-18.666l-12 9.333z"/>
  </svg>
</button>


</div><!-- grid ends !-->

<style>

.grid-container {
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: repeat(3, auto);
  grid-gap: 5px;
  margin :5%;
  margin-top: 0;
  
}

.grid-item {

  padding: 5px;
}

.first-column {
  grid-row: 1 / 4;
}

.third-column {
  grid-row: 1 / 4;
  grid-column: 3;
}
.btnCol {
background-color: blue;
}
</style>

