<script>
import {pageState} from "./showQuizStore";
export let questions = [];
let cq = 0;
const next = ()=>{
  if (cq >= questions.length){
    cq= questions.length;
  }else {
  cq+=1;
  }
}
const prev = ()=>{
  if (cq <= 0){
    cq= 0;
  }else {
  cq -=1;
  }
}
</script>




<div id="card" class="flex flex-col items-center justify-center rounded-lg  bg-gray-600  p-2 mx-auto sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">




<div class="questionCard"   id={cq}>
  <h1 class="bg-red-900 rounded-sm p-2 m-1">{questions[cq].content}</h1>
  <br />
 <ol>
  {#each questions[cq].options as option }
    <button 
      on:click={()=>questions[cq].selectedOption = option.id}
      class="block w-full p-1 px-4 text-left
       bg-gray-800
       hover:bg-blue-400  
        focus:outline-none rounded-md 
        {questions[cq].selectedOption == option.id  ? "bg-green-500" : ""}
        transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
    >{option.content}</button>
    <br/>
  {/each}
</ol>

</div>

<div class="flex justify-between">
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={prev}
  >
    <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12H20V10H10.83l4.58-4.59z" />
    </svg>
    <span>Previous</span>
  </button>
  &nbsp;
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={ ()=> pageState.set(2)  }
  > 
    <svg class="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
      <path d="M16.59 6l-5.3-5.3C11.16.21 10.91 0 10.59 0H3C1.9 0 1.01.9 1.01 2L1 22c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V8c0-.31-.21-.56-.5-.66L16.59 6zM5 18V9h2v9H5zm3 0V9h2v9H8zm3 0V9h2v9h-2zm3 0V9h2v9h-2z"/>
    </svg>
    <span>Print</span>
  </button>

  &nbsp;

  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
    on:click={next}
  >
    <span>Next</span>
    <svg class="w-6 h-6 fill-current ml-2" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41L12.83 13H4v-2h8.83l-4.24-4.24z" />
    </svg>
  </button>
</div>


</div>