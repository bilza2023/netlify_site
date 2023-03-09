<script>
let data = [
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

const addQuestion = ()=>{
const q = {
    id: (Math.random()* 990000),
    question: "Add your question",
    selectedAnswer: 0,
    correctAnswer: 1,
    explanation: "Add your explanation",
    answers: [
    { id: 1, content: "option--1" },
    { id: 2, content: "option--2" },
    { id: 3, content: "option--3" },
    { id: 4, content: "option--4" },
    ],
}
data = [...data,q];
}


</script>



<h1>Create Quiz</h1>
<button on:click={addQuestion}>Add Question</button>
<br>
<hr>
<br>

{#each data as q }
    <h1><input class="text-black" type="text" bind:value={q.question}></h1>
<hr>
    <ol>
    {#each q.answers as answer }
    <br>
        <li><input class="text-black" type="text" bind:value= {answer.content} ></li>
    {/each}
    </ol>
<hr>    
{/each}

<button on:click={()=>console.log(data)}>Print</button>
<button on:click={()=>console.log(data)}>Save</button>