<script>

////////////-store variables--///////

import QuizDelDlg from "./QuizDelDlg.svelte";
import RunErrors from './runBtn/RunErrors.svelte';
import RunBtn from './runBtn/RunBtn.svelte';
import RunBtnDivs from './runBtn/RunBtnDivs.svelte';
import SaveBtn from './SaveBtn.svelte';
import AnalyticsBtn from './AnalyticsBtn.svelte';
import DeleteBtn from './DeleteBtn.svelte';
import {showErrorsStore,showRunStore} from "../store";


//-----------------
export let test;
//-----------------
let showQuizDel = false;
function toggleshowQuizDel(){
  showQuizDel = !showQuizDel;
}

</script>

<div class="flex justify-between   items-center bg-gray-400 px-2  py-2 gap-2  ">
 
<div class="flex gap-1">
  <SaveBtn {test}/>  
  <DeleteBtn {toggleshowQuizDel} />
  
</div>


<div class="flex gap-1">
  <RunBtn {test}/>

{#if test}  
  <AnalyticsBtn id={test._id} />
{/if}  
</div>

</div>

<!---The divs which are out of the toolbar div-->
<!---The divs which are out of the toolbar div-->
<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">


<RunBtnDivs  {test}/>



</div>


<!-- 📱 -->

{#if showQuizDel}
<QuizDelDlg  {test}   {toggleshowQuizDel}/>
{/if}
{#if showErrorsStore}
<RunErrors   />
{/if}

{#if showRunStore}
<RunBtnDivs   />
{/if}