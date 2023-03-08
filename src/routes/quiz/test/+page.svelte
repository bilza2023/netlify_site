<script>
import check from "./result";
import H1 from "$lib/cmp/H1.svelte";
import HdgMain from "$lib/cmp/HdgMain.svelte";
import QuizResult from "$lib/cmp/QuizResult.svelte";
import MsgnCall2Action from "$lib/cmp/MsgnCall2Action.svelte";
let resultArray = [];
let quizState = 0; //0=intro; 1=questions ,2 =result
let currectQuestion = 0;
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
    if (currectQuestion >= data.length-1){
    currectQuestion = 0;
    }else {
    currectQuestion += 1;
    }
    // console.log("currectQuestion",currectQuestion);
    // console.log("data.length",data.length);
}
const prev = ()=>{
    if (currectQuestion <= 0){
    currectQuestion = data.length -1 ;
    }else {
    currectQuestion -= 1;
    }
    console.log("currectQuestion",currectQuestion);
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

{#if quizState==1}

<h1>Question</h1>

<h3>Current Question : {currectQuestion+1}</h3>
<h3>{data[currectQuestion].question}</h3>


{#each  data[currectQuestion].answers as answer }
<p>Option: {answer.content}</p>
<input type="radio" name="foo" bind:group={data[currectQuestion].selectedAnswer} value={answer.id}>
{/each}

<hr/>
<button on:click={nxt}>Next</button>
<button on:click={prev }>Previous</button>
<button on:click={console.log(data) }>Print</button>
<button on:click={()=>checkProcess() }>Check</button>
{/if}

{#if quizState==3}
    <QuizResult  results={resultArray}/>
{/if}

{#if quizState==0}
    
<MsgnCall2Action actionHandler = {()=> quizState =1} button_content="Click To Start Quiz">
{ introScreen}
</MsgnCall2Action>
{/if}