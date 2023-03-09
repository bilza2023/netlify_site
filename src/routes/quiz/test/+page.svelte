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

/////////////////////////////////////////////////
const data = [
{
id: 1,
question: "What is the highest mountain in the world?",
selectedAnswer: 0,
correctAnswer: 3,
explanation: "Mount Everest is the highest mountain above sea level.",
answers: [
{ id: 1, content: "K2" },
{ id: 2, content: "Kangchenjunga" },
{ id: 3, content: "Mount Everest" },
{ id: 4, content: "Lhotse" },
],
},
{
id: 2,
question: "Which is the largest desert in the world?",
selectedAnswer: 0,
correctAnswer: 4,
explanation: "The Sahara Desert is the largest hot desert in the world.",
answers: [
{ id: 1, content: "Mojave Desert" },
{ id: 2, content: "Gobi Desert" },
{ id: 3, content: "Atacama Desert" },
{ id: 4, content: "Sahara Desert" },
],
},
{
id: 3,
question: "What is the capital of Australia?",
selectedAnswer: 0,
correctAnswer: 2,
explanation: "Canberra is the capital city of Australia.",
answers: [
{ id: 1, content: "Sydney" },
{ id: 2, content: "Canberra" },
{ id: 3, content: "Melbourne" },
{ id: 4, content: "Perth" },
],
},
{
id: 4,
question: "Which is the longest river in Africa?",
selectedAnswer: 0,
correctAnswer: 1,
explanation: "The Nile is the longest river in Africa.",
answers: [
{ id: 1, content: "Nile" },
{ id: 2, content: "Congo" },
{ id: 3, content: "Niger" },
{ id: 4, content: "Zambezi" },
],
}
];

const nxt = ()=>{
    if (currentQuestion >= data.length-1){
    // currentQuestion = 0;
    }else {
    currentQuestion += 1;
    }
}

const prev = ()=>{
    if (currentQuestion <= 0){
    // currentQuestion = data.length -1 ;
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
      
      {#if currentQuestion == (data.length - 1)}
      <button class="bg-gray-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition-colors duration-300" on:click={checkProcess}>Result</button>
    {/if}

    <button class="bg-gray-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-500 transition-colors duration-300" on:click={nxt}>Next</button>    
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