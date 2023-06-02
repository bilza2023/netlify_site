<script>
import { quizStore  } from '../store';


import Btn from "./BtnNav.svelte";

import { qDataUrl,qDataPassword,qDataParagraph,qDataNumber,qDataInput,qDataEmail,qDataMCQ, getSurvey } from "./questionTypesData.js";

 
  let showMCQType = false;
  let showInputs = false;
  let showMix = false;
  const toggleHandler = (value)=> {

    switch (value) {

      case "showMCQType":
        showMCQType = !showMCQType;
        showInputs = false;
        showMix = false;
      break;

      case "showInputs":
        showMCQType = false;
        showInputs = !showInputs;
        showMix = false;
      break;

      case "showMix":
        showMCQType = false;
        showInputs = false;
        showMix = !showMix;
      break;
    
      default:
      break;
    }

  }

const addMCQ = () => {
  const newMCQ = qDataMCQ;
  quizStore.update(curr => {
    const questions = [...curr.questions, newMCQ];
    return { ...curr, questions };
  });
}

</script>


<div><!-- main div-->

  <div class="flex justify-between    bg-gray-700 m-0 p-0">
     
    <div class="flex">
    <Btn title="MCQ" clickHandler={addMCQ} />  
    <Btn title="Inputs"   clickHandler={()=>toggleHandler("showInputs")}/>   

    </div>
    
    
    <div class="flex">
    <Btn title="Mix" bgColor="bg-stone-800"  clickHandler={()=>toggleHandler("showMix")}/>  
    <Btn title="MCQ-Types" bgColor="bg-stone-800"  
      clickHandler={()=>toggleHandler("showMCQType")} />  
    </div>
    
    

  </div>

<!--not flex area the lower portion-->
{#if showMCQType}
fff
<!-- <McqTypes /> -->
{/if}

{#if showInputs}
sss
<!-- <InputTypes /> -->
{/if}

{#if showMix}
azaz
<!-- <Mix /> -->
{/if}


</div><!-- main div-->

