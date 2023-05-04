<script>
import Btn from "./BtnNav.svelte";
export let btnBg="bg-gray-700";
import { getMcqWOption} from "./mcq.js";
</script>


<div class="flex flex-wrap">

<Btn bgColor={btnBg} title = "Yes/No" 
clickHandler={()=>getMcqWOption(["Yes", "No"])}/>

<Btn bgColor={btnBg} title = "Like/Dislike" 
clickHandler={()=>getMcqWOption(["Like"  , "Dislike" ])} />

<Btn bgColor={btnBg} title = "Allowed/Not Allowed" clickHandler={()=>getMcqWOption(["Allowed" , "Not Allowed" ])} />

<Btn bgColor={btnBg} title = "True/False"
 clickHandler={()=>getMcqWOption(["True" , "False" ])} />

<Btn bgColor={btnBg} title = "Correct/Incorrect" clickHandler={()=>getMcqWOption(["Correct" , "Incorrect" ])} />

<Btn bgColor={btnBg} title = "Right/Wrong" clickHandler={()=>getMcqWOption(["Right" , "Wrong" ])} />

<Btn bgColor={btnBg} title = "Good/Bad" clickHandler={()=>getMcqWOption(["Good", "Bad" ])} />

<Btn bgColor={btnBg} title = "Pass/Fail" clickHandler={()=>getMcqWOption(["Pass" , "Fail" ])} />

<Btn bgColor={btnBg} title = "Accept/Reject" clickHandler={()=>getMcqWOption(["Accept " ,"Reject" ])} />

<Btn bgColor={btnBg} title = "Agree/Disagree" clickHandler={()=>getMcqWOption(["Agree" ,"Disagree" ])} />

<Btn bgColor={btnBg} title = "More/Less" clickHandler={()=>getMcqWOption(["More" , "Less" ])} />

<Btn bgColor={btnBg} title = "High/Low" clickHandler={()=>getMcqWOption(["High" , "Low" ])} />

<!--more than 2 options -->
<Btn bgColor={btnBg} title = "Strongly Agree/Agree/Neutral/Disagree/Strongly Disagree" clickHandler={()=>getMcqWOption(["Strongly Agree" , "Agree" , "Neutral" ,"Disagree" , "Strongly Disagree" ])} />

<Btn bgColor={btnBg} title = "Excellent/Good/Average/Poor" clickHandler={()=>getMcqWOption(["Excellent" ,"Good", "Average" , "Poor" ])} />

<Btn bgColor={btnBg} title = "Always/Often/Sometimes/Rarely/Never" clickHandler={()=>getMcqWOption(["Always" ,"Often" ,"Sometimes" ,"Rarely" , "Never" ])} />

<Btn bgColor={btnBg} title = "Very Likely/Likely/Unsure/Unlikely/Very Unlikely" clickHandler={()=>getMcqWOption(["Very Likely", "Likely" , "Unsure" , "Unlikely" , "Very Unlikely" ])} />

<Btn bgColor={btnBg} title = "Very Satisfied/Satisfied/Neutral/Dissatisfied/Very Dissatisfied" clickHandler={()=>getMcqWOption(["Very Satisfied" , "Satisfied " , "Neutral " ,"Dissatisfied" , "Very Dissatisfied" ])} />

<Btn bgColor={btnBg} title = "Very Important/Important/Somewhat Important/Not Important" clickHandler={()=>getMcqWOption(["Very Important ", "Important ", "Somewhat Important " , "Not Important" ])} />

<Btn bgColor={btnBg} title = "Very Easy/Easy/Moderate/Difficult/Very Difficult" clickHandler={()=>getMcqWOption(["Very Easy","Easy" ,"Moderate","Difficult","Very Difficult" ])} />

<Btn bgColor={btnBg} title = "Very High/High/Medium/Low/Very Low" clickHandler={()=>getMcqWOption(["Very High" ,"High","Medium","Low","Very Low" ])} />

<Btn bgColor={btnBg} title = "Very Fast/Fast/Medium/Slow/Very Slow" clickHandler={()=>getMcqWOption([ "Very Fast" , "Fast" , "Medium" , "Slow" , "Very Slow" ])} />

<Btn bgColor={btnBg} title = "A lot/A little/Not at all" clickHandler={()=>getMcqWOption(["A lot","A little" ,"Not at all" ])} />

</div>
