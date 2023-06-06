<script>
import { quizStore  } from '../store';
import InputTypes from './InputTypes.svelte';
import McqTypes from './MCQTypes.svelte';
import Btn from "./BtnNav.svelte";

import { getDataUrl,getDataPassword,getDataParagraph,getDataNumber,getDataInput,getDataEmail,getDataMCQ,getDataBaseMCQ, getMcqWOption, getSurvey} from "./questionTypesData.js";

 
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

const addMCQ = () => {
  const newMCQ = getDataBaseMCQ();
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

