<script>
import CardSlim from "./CardSlim.svelte";
import CardInner from "./CardInner.svelte";
import CardItem from "./CardItem.svelte";

import getMCQ from "./get/getSurveyMCQ";
import getInput from "./get/getSurveyInput";
import getEmail from "./get/getSurveyEmail";
import getNumber from "./get/getSurveyNumber";
import getParagraph from "./get/getSurveyParagraph";
import getPassword from "./get/getSurveyPassword";
import getUrl from "./get/getSurveyUrl";
import getMcqWOption from "./get/getMcqWOption";
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
on:click={getMCQ}
>MCQ</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="text-xs hover:bg-stone-800 hover:cursor-pointer  m-1"
    on:click={getMCQ}>
  MCQ MS</div>
</CardInner>
{/if}

<CardSlim title = "MCQ Types" handler = {()=>setPageState("mcq_types")}  />

{#if pageState=="mcq_types"}
<CardInner>
<CardItem handler={()=>getMcqWOption(["Yes", "No"])}>Yes/No</CardItem>
<CardItem handler={()=>getMcqWOption(["Like"  , "Dislike" ])}>Like/Dislike</CardItem>
<CardItem handler={()=>getMcqWOption(["Allowed" ,"Not Allowed" ])}>Allowed/Not Allowed</CardItem>
<CardItem handler={()=>getMcqWOption(["True " ,"False" ])}>True/False</CardItem>
<CardItem handler={()=>getMcqWOption(["Correct " ,"Incorrect" ])}>Correct/Incorrect</CardItem>
<CardItem handler={()=>getMcqWOption(["Right " ,"Wrong" ])}>Right/Wrong</CardItem>
<CardItem handler={()=>getMcqWOption(["Good " ,"Bad" ])}>Good/Bad</CardItem>
<CardItem handler={()=>getMcqWOption(["Pass " ,"Fail" ])}>Pass/Fail</CardItem>
<CardItem handler={()=>getMcqWOption(["Accept " ,"Reject" ])}>Accept/Reject</CardItem>
<CardItem handler={()=>getMcqWOption(["Agree " ,"Disagree" ])}>Agree/Disagree</CardItem>
<CardItem handler={()=>getMcqWOption(["More " ,"Less" ])}>More/Less</CardItem>

<CardItem handler={()=>getMcqWOption(["High","Low" ])}>High/Low</CardItem>
<CardItem handler={()=>getMcqWOption([ "Strongly Agree" , "Agree" , "Neutral" ,"Disagree" , "Strongly Disagree"])}>Strongly Agree/Agree</CardItem>
<CardItem handler={()=>getMcqWOption(["Excellent" ,"Good", "Average" , "Poor" ])}>Excellent/Good</CardItem>
<CardItem handler={()=>getMcqWOption(["Always" ,"Often" ,"Sometimes" ,"Rarely" , "Never" ])}>Always/Often</CardItem>
<CardItem handler={()=>getMcqWOption(["Very Likely", "Likely" , "Unsure" , "Unlikely" , "Very Unlikely" ])}>Very Likely/Likely</CardItem>
<CardItem handler={()=>getMcqWOption(["Very Satisfied" , "Satisfied " , "Neutral " ,"Dissatisfied" , "Very Dissatisfied" ])}>Very Satisfied</CardItem>
<CardItem handler={()=>getMcqWOption(["Very Important ", "Important ", "Somewhat Important " , "Not Important" ])}>Very Important</CardItem>
<CardItem handler={()=>getMcqWOption(["Very Easy","Easy" ,"Moderate","Difficult","Very Difficult" ])}>Very Easy/Easy</CardItem>
<CardItem handler={()=>getMcqWOption(["Very High" ,"High","Medium","Low","Very Low" ])}>Very High/High</CardItem>
<CardItem handler={()=>getMcqWOption(["Very Fast" , "Fast" , "Medium" , "Slow" , "Very Slow" ])}>Very Fast/Fast</CardItem>
<CardItem handler={()=>getMcqWOption(["A lot","A little" ,"Not at all" ])}>A lot/A little</CardItem>

  </CardInner>
  
{/if}

<CardSlim title = "Inputs" handler = {()=>setPageState("inputs")} />

{#if pageState=="inputs"}
 <CardInner> 
        <CardItem handler={()=>getInput()}>Text</CardItem>
        <CardItem handler={()=>getParagraph()}>Paragraph</CardItem>
        <CardItem handler={()=>getNumber()}>Number</CardItem>
        <CardItem handler={()=>getEmail()}>Email</CardItem>
        <CardItem handler={()=>getPassword()}>Password</CardItem>
        <CardItem handler={()=>getUrl()}>Url</CardItem>
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