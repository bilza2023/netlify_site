<script> 
import saveQuiz from "./saveQuiz.js";
import { v4 as uuidv4 } from 'uuid';
let data = [
{
id: uuidv4(),
content: "What is the highest mountain in the world?",
selectedAnswer: 0,
correctAnswer: 3,
explanation: "Mount Everest is the highest mountain above sea level.",
options: [
{ id: uuidv4(), content: "K2" },
{ id: uuidv4(), content: "Kangchenjunga" },
{ id: uuidv4(), content: "Mount Everest" },
{ id: uuidv4(), content: "Lhotse" },
],
},
{
id: uuidv4(),
content: "Which is the largest desert in the world?",
selectedAnswer: 0,
correctAnswer: 4,
explanation: "The Sahara Desert is the largest hot desert in the world.",
options: [
{ id: uuidv4(), content: "Mojave Desert" },
{ id: uuidv4(), content: "Gobi Desert" },
{ id: uuidv4(), content: "Atacama Desert" },
{ id: uuidv4(), content: "Sahara Desert" },
],
},
{
id: uuidv4(),
content: "What is the capital of Australia?",
selectedAnswer: 0,
correctAnswer: 2,
explanation: "Canberra is the capital city of Australia.",
options: [
{ id: uuidv4(), content: "Sydney" },
{ id: uuidv4(), content: "Canberra" },
{ id: uuidv4(), content: "Melbourne" },
{ id: uuidv4(), content: "Perth" },
],
},
{
id: uuidv4(),
content: "Which is the longest river in Africa?",
selectedAnswer: 0,
correctAnswer: 1,
explanation: "The Nile is the longest river in Africa.",
options: [
{ id: uuidv4(), content: "Nile" },
{ id: uuidv4(), content: "Congo" },
{ id: uuidv4(), content: "Niger" },
{ id: uuidv4(), content: "Zambezi" },
],
}
];

const addQuestion = ()=>{
const q = {
    id: uuidv4(),
    content: "Add your question",
    selectedAnswer: null,
    correctAnswer: null,
    explanation: "Add your explanation",
    options: [
    { id: uuidv4(), content: "option--1" },
    { id: uuidv4(), content: "option--2" },
    { id: uuidv4(), content: "option--3" },
    { id: uuidv4(), content: "option--4" },
    ],
}
data = [...data,q];
}


</script>


<h1>Create Quiz</h1>
<br>

{#each data as q }
<div class="bg-gray-500 rounded-sm m-2 p-2 border-2 border-white mx-auto quiz-question">
    <h1><input class="bg-gray-800" type="text" bind:value={q.question}></h1>
<hr>
    <ol>
    {#each q.options as option }
        <li class="flex items-center">
  <input class="text-black border-2 border-red-400 m-2" type="text" bind:value={option.content}>

  <button class="ml-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" on:click={()=>q.correctAnswer = option.id}>
    Mark Correct
  </button>
    </li>

    {/each}
    </ol>
<br>
</div>
{/each}

<button on:click={addQuestion}>Add Question</button>
<button on:click={()=>console.log(data)}>Print</button>
<button on:click={()=>saveQuiz(data)}>Save</button>



<style>
.quiz-question {
  width: 80%;
}

</style>