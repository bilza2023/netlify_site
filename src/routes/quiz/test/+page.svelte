<script>
import check from "./result";
// import H1 from "$lib/cmp/H1.svelte";
import HdgMain from "$lib/cmp/HdgMain.svelte";
import QuizResult from "$lib/cmp/QuizResult.svelte";
import MsgnCall2Action from "$lib/cmp/MsgnCall2Action.svelte";
let resultArray = [];
let quizState = 0; //0=intro; 1=questions ,2 =result
let currentQuestion = 0;
let introScreen = "A small Quiz about interesting global facts. answer these questions and see the datails at the end";
const title = "Interesting Global Facts";
const data = [
{id:1 , question : "First Question" , selectedAnswer:0 ,correctAnswer:1, 
explanation : "This is the explanation of the answer to the first question",
    answers : [ 
    {id:1,content:"q1 Answer"},
    {id:2,content:"q1 Second Answer"},
    {id:3,content:"q1 Third Answer"},
    {id:4,content:"q1 Fourth Answer"},
    ]
    },
{id:2 , question : "Second Question" ,selectedAnswer:0 ,correctAnswer:1, 
explanation : "This is the explanation of the answer to the first question", 
    answers : [ 
    {id:1,content:"q2 First Answer"},
    {id:2,content:"q2 Second Answer"},
    {id:3,content:"q2 Third Answer"},
    {id:4,content:"q2 Fourth Answer"},
    ]
    }
];

const nxt = ()=>{
    if (currentQuestion >= data.length-1){
    currentQuestion = 0;
    }else {
    currentQuestion += 1;
    }
}

const prev = ()=>{
    if (currentQuestion <= 0){
    currentQuestion = data.length -1 ;
    }else {
    currentQuestion -= 1;
    }
    console.log("currentQuestion",currentQuestion);
    console.log("data.length",data.length);
}
const checkProcess = ()=>{
    resultArray = check(data);
    // console.log("result",result);
    quizState =3;
}
</script>

<!-- <h1>{title}</h1> -->
<HdgMain background_color="bg-green-900" >
{title}
</HdgMain>
<br/>

{#if quizState==1}
{currentQuestion}
<div class="bg-gray-700 p-4 rounded-lg shadow shadow-gray-400">
  <h3 class="text-lg font-medium bg-pink-900 p-2 m-2 rounded-md">{data[currentQuestion].question}</h3>

  {#each data[currentQuestion].answers as answer}
    <div class="flex items-center mt-2">
      <input type="radio" name="foo" bind:group={data[currentQuestion].selectedAnswer} value={answer.id}>
      <p class="ml-2 text-white bg-gray-900 p-1 m-1 rounded-md">{answer.content}</p>
    </div>
  {/each}

  <hr class="my-4">

  <div class="flex justify-between">
    <button class="bg-gray-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition-colors duration-300" on:click={prev}>Previous</button>
    <div class="flex space-x-4">
      <button class="bg-gray-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition-colors duration-300" on:click={nxt}>Next</button>
      {#if currentQuestion == (data.length - 1)}
      <button class="bg-gray-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition-colors duration-300" on:click={checkProcess}>Result</button>
    {/if}    
    </div>
  </div>
</div>



{/if}

{#if quizState==3}
    <QuizResult  results={resultArray}/>
{/if}

{#if quizState==0}
    
<MsgnCall2Action actionHandler = {()=> quizState =1} button_content="Click To Start Quiz">
{ introScreen}
</MsgnCall2Action>
{/if}