<script> 
import saveQuiz from "./saveQuiz.js";
import Question from "./Question.svelte";
import { v4 as uuidv4 } from 'uuid';
let data = [];
let title = "Quiz Title";

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
};
console.log("new q",q);
data = [...data,q];
}


</script>


<h1>Create Quiz</h1>
<br>
<input class="bg-gray-800 border-2 border-white" type="text" bind:value={title} >
<br>
{#each data as q }
<Question question={q} />
{/each}

<br>
<br>
<br>
<br>
<br>

<button on:click={addQuestion}>Add Question</button>
<button on:click={()=>console.log(data)}>Print</button>
<button on:click={()=>saveQuiz(data,title)}>Save</button>


