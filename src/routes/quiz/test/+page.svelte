<script>
let currectQuestion = 0;
const data = [
{id:1 , question : "First Question" , selectedAnswer:0 ,correctAnswer:1, 
    answers : [ 
    {id:1,content:"q1 Answer"},
    {id:2,content:"q1 Second Answer"},
    {id:3,content:"q1 Third Answer"},
    {id:4,content:"q1 Fourth Answer"},
    ]
    },
{id:2 , question : "Second Question" ,selectedAnswer:0 ,correctAnswer:2,  
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
    console.log("currectQuestion",currectQuestion);
    console.log("data.length",data.length);
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
</script>

<h1>Quiz Test</h1>

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