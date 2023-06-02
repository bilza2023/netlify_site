<script>
import Btn from "./BtnNav.svelte";
export let btnBg="bg-gray-700";
import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "./questionTypesData";
import { quizStore  } from '../store';

const createMCQwOpt = (opt=[])=>{
    const newMCQ = getMcqWOption(opt);
    quizStore.update(curr => {
        const questions = [...curr.questions, newMCQ];
        return { ...curr, questions };
    });
}
</script>


<div class="flex flex-wrap">

<Btn bgColor={btnBg} title = "Yes/No" 
clickHandler={()=>createMCQwOpt(["Yes", "No"])}/>

<Btn bgColor={btnBg} title = "Like/Dislike" 
clickHandler={()=>createMCQwOpt(["Like"  , "Dislike" ])} />

<Btn bgColor={btnBg} title = "Allowed/Not Allowed" clickHandler={()=>createMCQwOpt(["Allowed" , "Not Allowed" ])} />

<Btn bgColor={btnBg} title = "True/False"
 clickHandler={()=>createMCQwOpt(["True" , "False" ])} />

<Btn bgColor={btnBg} title = "Correct/Incorrect" clickHandler={()=>createMCQwOpt(["Correct" , "Incorrect" ])} />

<Btn bgColor={btnBg} title = "Right/Wrong" clickHandler={()=>createMCQwOpt(["Right" , "Wrong" ])} />

<Btn bgColor={btnBg} title = "Good/Bad" clickHandler={()=>createMCQwOpt(["Good", "Bad" ])} />

<Btn bgColor={btnBg} title = "Pass/Fail" clickHandler={()=>createMCQwOpt(["Pass" , "Fail" ])} />

<Btn bgColor={btnBg} title = "Accept/Reject" clickHandler={()=>createMCQwOpt(["Accept " ,"Reject" ])} />

<Btn bgColor={btnBg} title = "Agree/Disagree" clickHandler={()=>createMCQwOpt(["Agree" ,"Disagree" ])} />

<Btn bgColor={btnBg} title = "More/Less" clickHandler={()=>createMCQwOpt(["More" , "Less" ])} />

<Btn bgColor={btnBg} title = "High/Low" clickHandler={()=>createMCQwOpt(["High" , "Low" ])} />



<!--special -->
<Btn bgColor={btnBg} title = "Months" 
clickHandler={()=>createMCQwOpt(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])}/>

<Btn bgColor={btnBg} title = "Week Days" 
clickHandler={()=>createMCQwOpt([ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])}/>

<Btn bgColor={btnBg} title = "Major Countries" 
clickHandler={()=>createMCQwOpt([ "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "Egypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Italy", "Tanzania", "South Africa", "Myanmar", "Kenya", "South Korea", "Colombia", "Spain", "Uganda", "Argentina", "Algeria", "Sudan", "Ukraine", "Iraq", "Afghanistan", "Poland"])}/>

<!--more than 2 options -->
<Btn bgColor={btnBg} title = "Strongly Agree/Agree/Neutral/Disagree/Strongly Disagree" clickHandler={()=>createMCQwOpt(["Strongly Agree" , "Agree" , "Neutral" ,"Disagree" , "Strongly Disagree" ])} />

<Btn bgColor={btnBg} title = "Excellent/Good/Average/Poor" clickHandler={()=>createMCQwOpt(["Excellent" ,"Good", "Average" , "Poor" ])} />

<Btn bgColor={btnBg} title = "Always/Often/Sometimes/Rarely/Never" clickHandler={()=>createMCQwOpt(["Always" ,"Often" ,"Sometimes" ,"Rarely" , "Never" ])} />

<Btn bgColor={btnBg} title = "Very Likely/Likely/Unsure/Unlikely/Very Unlikely" clickHandler={()=>createMCQwOpt(["Very Likely", "Likely" , "Unsure" , "Unlikely" , "Very Unlikely" ])} />

<Btn bgColor={btnBg} title = "Very Satisfied/Satisfied/Neutral/Dissatisfied/Very Dissatisfied" clickHandler={()=>createMCQwOpt(["Very Satisfied" , "Satisfied " , "Neutral " ,"Dissatisfied" , "Very Dissatisfied" ])} />

<Btn bgColor={btnBg} title = "Very Important/Important/Somewhat Important/Not Important" clickHandler={()=>createMCQwOpt(["Very Important ", "Important ", "Somewhat Important " , "Not Important" ])} />

<Btn bgColor={btnBg} title = "Very Easy/Easy/Moderate/Difficult/Very Difficult" clickHandler={()=>createMCQwOpt(["Very Easy","Easy" ,"Moderate","Difficult","Very Difficult" ])} />

<Btn bgColor={btnBg} title = "Very High/High/Medium/Low/Very Low" clickHandler={()=>createMCQwOpt(["Very High" ,"High","Medium","Low","Very Low" ])} />

<Btn bgColor={btnBg} title = "Very Fast/Fast/Medium/Slow/Very Slow" clickHandler={()=>createMCQwOpt([ "Very Fast" , "Fast" , "Medium" , "Slow" , "Very Slow" ])} />

<Btn bgColor={btnBg} title = "A lot/A little/Not at all" clickHandler={()=>createMCQwOpt(["A lot","A little" ,"Not at all" ])} />

</div>
