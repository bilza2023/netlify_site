
so as you know I have an array of objects called $templatesStore as a svelte store. 
Each item in this array of objects is "template"and each template has "questions" in it (another array of objects). 
while working with  templatesStore I will pick one of the item from it to edit. I will pass this item / template to the child components. However once I have to add a question to the selected template icannot add it to template since that is read only. What to do???
HOW TO CHANGE / ADD QUESTION TO THE QUESTIONS ARRAY OF A TEMPLATE ITEM THAT IHAVE PICKED FROM  templatesStore BASED ON ._id

page.svelte
<script>

import Nav from '$lib/nav/Nav.svelte';
import Footer from '$lib/cmp/Footer.svelte';
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';  
import QuizBlock from './QuizBlock.svelte';  
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import Questions from './showQuestions/Questions.svelte';
import AddQuestionBar from './addQuestions/AddQuestionBar.svelte';

// import ToolBarEdit from './toolbar/ToolBarEdit.svelte';
// import Loading from '$lib/cmp/Loading.svelte';

import { templatesStore , appLoadedStore} from '../mainStore.js';
//-----------------------------------------------
let template;
let quizId;
  //===================== 
$: appLoaded = $appLoadedStore; 
 //===================== 

onMount(async ()=>{
  try {
    //   debugger;
      if (appLoaded==false){
        toast.push('App Data Not loaded')
      }
        quizId = new URLSearchParams(location.search).get("quizId");
      template = await $templatesStore.find(item => item._id === quizId);
      console.log(template);
      //----------------------------------
    } catch (error) {
      // console.error(error);
    }
});
/////////////////////////////////////////

const save = async ()=>{

    // isLoading = true; 
  debugger;
    const resp = await ajaxPost(`${BASE_URL}/quiz/update`,{quiz});
      if (resp.ok == true) {
            const data = await resp.json();
            isLoading = false; 
            toast.push("Quiz Saved"); 
        }else {
            const data = await resp.json();
      //     console.log(data);
            isLoading = false;
            toast.push("failed to save");
      }// if ends

}

</script>

<Nav/>

<div class="wrapper bg-gray-800 text-white m-0 px-8  min-h-screen w-full">


<HdgWithIcon title="Edit Template" , icon ="📜"/>

{#if template}
<br>
<QuizBlock  {template}/>
<Questions template={template.questions}/>
  
<br/>
<AddQuestionBar  {quizId}/>

{/if} 



<br>
<br> 
<br>
<br> 
<br>
<br> 
<br>
<br> 
<br>
<br> 
</div><!--app-->


<Footer /> 


AddQuestionBar.svelte
<script>
import { templatesStore , appLoadedStore} from '../../mainStore.js';
export let quizId;
//-----------------------------------------------
// let template;
// import { quizStore  } from '../store';
// import InputTypes from './InputTypes.svelte';
import McqTypes from './MCQTypes.svelte';
import Btn from "./BtnNav.svelte";

import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "../../../lib/globals/questionTypesData";

 
  let showInputs = false;
  let showMCQType = false;
  const toggleHandler = (value)=> {

    switch (value) {

      case "showMCQType":
        showMCQType = !showMCQType;
        showInputs = false;
      break;

      case "showInputs":
        showMCQType = false;
        showInputs = !showInputs;
      break;
    
      default:
      break;
    }

  }

const addMCQ = async () => {
  debugger;
  const newMCQ = getDataBaseMCQ();
  let template = await $templatesStore.find(item => item._id === quizId);

    if (template) {
    $templatesStore.update(curr => {
      const questions = [...curr.questions, newMCQ];
      return { ...curr, questions };
    });
  } else {
    console.error('Template not found');
  }

  
}

</script>


<div><!-- main div-->

  <div class="flex justify-between    bg-gray-700 m-0 p-0">
     
    <div class="flex">
    <Btn title="MCQ" clickHandler={addMCQ} />  
    <!-- <Btn title="Inputs"   clickHandler={()=>toggleHandler("showInputs")}/>    -->

    </div>
    
    
    <div class="flex">
    <!-- <Btn title="Mix" bgColor="bg-stone-800"  clickHandler={()=>toggleHandler("showMix")}/>   -->
    <Btn title="MCQ-Types" bgColor="bg-stone-800"  
      clickHandler={()=>toggleHandler("showMCQType")} />  
    </div>
    
    

  </div>

<!--not flex area the lower portion-->
{#if showMCQType}
<McqTypes />
{/if}

<!-- {#if showInputs}
<InputTypes />
{/if} -->



</div><!-- main div-->

MCQTypes.svelte
<script>
import Btn from "./BtnNav.svelte";
export let btnBg="bg-gray-700";
import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "../../../lib/globals/questionTypesData";
// import { quizStore  } from '../store';

const createMCQwOpt = (opt=[])=>{
    const newMCQ = getMcqWOption(opt);
    // quizStore.update(curr => {
    //     const questions = [...curr.questions, newMCQ];
    //     return { ...curr, questions };
    // });
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
