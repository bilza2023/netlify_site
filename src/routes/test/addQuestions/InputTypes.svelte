<script>
import Btn from "./BtnNav.svelte";
import { quizStore  } from '../store';
export let btnBg="bg-gray-700";

import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey } from "../../../lib/globals/questionTypesData";


const getInput = (questionType) =>{
    let newQuest = null;

    switch (questionType) {
        
        case 'SurveyMCQ': 
            newQuest = getDataMCQ();
        break;
        case 'SurveyEmail': 
        newQuest = getDataEmail();
        break;
        case 'SurveyInput': 
        newQuest = getDataInput();
        break;
        case 'SurveyNumber':
        newQuest = getDataNumber();
         break;
        case 'SurveyParagraph': 
        newQuest = getDataParagraph();
        
        break;
        case 'SurveyPassword': 
        newQuest = getDataPassword();
        
        break;
        case 'SurveyUrl': 
        newQuest = getDataUrl();
        
        break;
    
        default:
        break;
    }
if (newQuest==null){throw new Error("Question type casting failed");}


  quizStore.update(curr => {
    const questions = [...curr.questions, newQuest];
    return { ...curr, questions };
  });
}

</script>

  
<div class="flex flex-wrap">
 
<Btn bgColor={btnBg} title = "Text" 
clickHandler={()=>getInput('SurveyInput')}/>

<Btn bgColor={btnBg} title = "Paragraph" clickHandler={()=>getInput("SurveyParagraph")}/>

<Btn bgColor={btnBg} title = "Number" clickHandler={()=>getInput("SurveyNumber")}/>

<Btn bgColor={btnBg} title = "Email" 
clickHandler={()=>getInput("SurveyEmail")}/>

<Btn bgColor={btnBg} title = "Password" clickHandler={()=>getInput("SurveyPassword")}/>



<Btn bgColor={btnBg} title = "Url" clickHandler={()=>getInput("SurveyUrl")} />

</div>
