<script>
import Tf from "./Tf.svelte";
import Toggle from "./Toggle.svelte";
import Th from "./Th.svelte";
import FormRow from "./FormRow.svelte";
import { fade } from 'svelte/transition';
import check from "./check.js";

export let quiz;
export let set_errors_Array;
let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }

const tooglePublish = (tf)=>{
if (tf==true){
  const errors_Array = check(quiz);
    if ( errors_Array.length > 0){
        set_errors_Array(errors_Array)
        quiz.publish = false;
      return false; //keep it false
    }else {
    quiz.publish = true;
    return true; //set it true i.e correct
    }
}else {
  quiz.publish = false;
  return false; //keep it false
}    
}  
</script>

<Th title={quiz.title}>

<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} 
 class="border-2 border-gray-500 p-1 m-0 mt-0" >

 
<FormRow title="Quiz Title">
<input type="text" class="w-full bg-gray-700 color-white"
bind:value={quiz.title} 
>
</FormRow>

<FormRow title="Intro Text">
<textarea class="w-full bg-gray-700 color-white"
bind:value={quiz.introText}></textarea>
</FormRow>

<FormRow title="Farewell Text">
<textarea class="w-full bg-gray-700 color-white" bind:value={quiz.farewellText}></textarea>
</FormRow>

<FormRow title="Save Responses">
<Tf obj={quiz} bool_prop="saveResponse" />
</FormRow>

<FormRow title="Show Intro">
<Tf obj={quiz} bool_prop="showIntro" />
</FormRow>

<FormRow title="Published"  >
<Toggle toggle= {tooglePublish}/>
</FormRow>


</div>



</Th>
