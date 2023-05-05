<script>
import CardSlim from "./CardSlim.svelte";
import CardInner from "./CardInner.svelte";
import CardItem from "./CardItem.svelte";
import {genericMCQ,getInput} from "./mcq.js";

let pageState = "mcqs";

const setPageState = (newState)=>{
pageState = newState;
  // switch (newState) {
  //   case "mcqs":
      
  //   break;
  
  //   default:
  //     break;
  // }

}


</script>




<div class="flex flex-col justify-center bg-stone-200 rounded-sm    
  text-white  m-0 p-1 gap-1 ml-3 mr-1" >
<br>
<CardSlim title = "MCQs" handler = {()=>setPageState("mcqs")}  />

{#if pageState=="mcqs"}
<CardInner>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="text-xs hover:bg-stone-800 hover:cursor-pointer  m-1"
on:click={genericMCQ}
>MCQ</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="text-xs hover:bg-stone-800 hover:cursor-pointer  m-1"
    on:click={genericMCQ}>
  MCQ MS</div>
</CardInner>
{/if}

<CardSlim title = "MCQ Types" handler = {()=>setPageState("mcq_types")}  />

{#if pageState=="mcq_types"}
<CardInner>
<CardItem>Yes/No</CardItem>
<CardItem>Like/Dislike</CardItem>
<CardItem>Allowed/Not Allowed</CardItem>
<CardItem>True/False</CardItem>

<CardItem>Correct/Incorrect</CardItem>
<CardItem>Right/Wrong</CardItem>
<CardItem>Good/Bad</CardItem>
<CardItem>Pass/Fail</CardItem>
<CardItem>Accept/Reject</CardItem>
<CardItem>Agree/Disagree</CardItem>
<CardItem>More/Less</CardItem>
<CardItem>High/Low</CardItem>
<CardItem>Strongly Agree/Agree</CardItem>
<CardItem>Excellent/Good</CardItem>
<CardItem>Always/Often</CardItem>
<CardItem>Very Likely/Likely</CardItem>
<CardItem>Very Satisfied</CardItem>
<CardItem>Very Important</CardItem>
<CardItem>Very Easy/Easy</CardItem>
<CardItem>Very High/High</CardItem>
<CardItem>Very Fast/Fast</CardItem>
<CardItem>A lot/A little</CardItem>

  </CardInner>
  
{/if}

<CardSlim title = "Inputs" handler = {()=>setPageState("inputs")} />

{#if pageState=="inputs"}
 <CardInner> 
        <CardItem handler={()=>getInput("inputText")}>Text</CardItem>
        <CardItem handler={()=>getInput("inputParagraph")}>Paragraph</CardItem>
        <CardItem handler={()=>getInput("inputNumber")}>Number</CardItem>
        <CardItem handler={()=>getInput("inputEmail")}>Email</CardItem>
        <CardItem handler={()=>getInput("inputPassword")}>Password</CardItem>
        <CardItem handler={()=>getInput("inputUrl")}>Url</CardItem>
</CardInner>
{/if}

<CardSlim title = "Other" handler = {()=>setPageState("others")}  />
{#if pageState=="others"}
<CardInner> 
        <CardItem>Countries</CardItem>
        <CardItem>Months</CardItem>
        <CardItem>WeekDays</CardItem>
</CardInner>
{/if}

</div><!--flex container-->