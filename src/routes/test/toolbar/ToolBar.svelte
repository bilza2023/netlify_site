<script>
////////////-store variables--///////
import { quizStore , membersStore } from '../store';

quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));
$: quiz = $quizStore; 
$: members = $membersStore;

////////////-store variables--///////

import Clone from "./Clone.svelte";
import QuizDel from "./QuizDel.svelte";
// import RunErrors from './runBtn/RunErrors.svelte';
import RunBtn from './runBtn/RunBtn.svelte';
import RunBtnDivs from './runBtn/RunBtnDivs.svelte';
import SaveBtn from './SaveBtn.svelte';
import SettingsBtn from './SettingsBtn.svelte';
import AnalyticsBtn from './AnalyticsBtn.svelte';
import DeleteBtn from './DeleteBtn.svelte';


export let toggleShowSettings;
export let showSettings;


let showClone = false;
function toggleShowClone(){
  showClone = !showClone;
}

let showQuizDel = false;
function toggleshowQuizDel(){
  showQuizDel = !showQuizDel;
}
</script>

<div class="flex justify-between   items-center bg-gray-400 px-2  py-2 gap-2  ">

<div class="flex gap-1">
  <SaveBtn />  
  <SettingsBtn  {toggleShowSettings} {showSettings}/> 
  <DeleteBtn {toggleshowQuizDel} />
  
</div>


<div class="flex gap-1">
  <RunBtn />
  <AnalyticsBtn id={quiz._id} />
</div>

</div>

<!---The divs which are out of the toolbar div-->
<!---The divs which are out of the toolbar div-->
<!---The divs which are out of the toolbar div-->

<div class="w-full bg-gray-800">

<RunBtnDivs />

{#if showClone == true}
<Clone  {quiz} {toggleShowClone}/>
{/if}''

{#if showQuizDel == true}
<QuizDel  {quiz} {toggleshowQuizDel}/>
{/if}

</div>


<!-- 📱 -->