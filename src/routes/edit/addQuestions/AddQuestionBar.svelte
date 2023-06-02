<script>
import Btn from "./BtnNav.svelte";
import { genericMCQ } from "./mcq.js";
// import { toast } from '@zerodevx/svelte-toast';
////////////-store variables--///////
import { quizStore  } from '../store';
    import McqTypes from "./MCQTypes.svelte";
    import InputTypes from "./InputTypes.svelte";
    import Mix from "./Mix.svelte";

 
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



</script>


<div><!-- main div-->

  <div class="flex justify-between    bg-gray-700 m-0 p-0">
     
    <div class="flex">
    <Btn title="MCQ" clickHandler={genericMCQ} />  
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
<McqTypes />
{/if}

{#if showInputs}
<InputTypes />
{/if}

{#if showMix}
<Mix />
{/if}


</div><!-- main div-->

