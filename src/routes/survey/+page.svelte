<script>
import { onMount } from 'svelte';
import Nav from '$lib/nav/Nav.svelte';
import ajaxPost from "$lib/js/ajaxPost.js";
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import ToolBar from './toolbar/ToolBar.svelte';
import EditQuestions from './EditQuestions.svelte';

////////////-store variables--///////
import { quizStore , membersStore } from './store';
    import Theme from './Theme.svelte';
    import Settings from './Settings.svelte';
quizStore.subscribe(value => quiz = value);
membersStore.subscribe(value => members = Object.values(value));
$: quiz = $quizStore; 
$: members = $membersStore;
////////////-store variables--///////
let pageState = "questions";

const setPageState = (val)=>{
    pageState = val;
}



onMount(async ()=>{
  try {
      const quizId = new URLSearchParams(location.search).get("quizId");
            // debugger;
             //----------------------------------
      const resp = await ajaxPost(`${BASE_URL}/quiz/find`,{quizId});
                if (resp.ok == true) {
                const data = await resp.json();
                const {incommingQuiz, incommingMembers } = data;
            // debugger;
                  quizStore.set(incommingQuiz);
                //   await membersStore.set(incommingMembers);
                //   console.log(quiz);
                    //   toast.push("Loaded");
                  //--these are user members and not quiz members
                }else {
                            // debugger;
                      toast.push("failed to open");
                }  
          
    } catch (error) {
        toast.push("Error");
      // console.error(error);
    }
});

</script>



<div class="w-full bg-gray-800  min-h-screen text-white m-0 p-0  "><!--page div-->
<Nav />

<div class="px-14">
<br>
<ToolBar  {setPageState}/>
</div>

<!-------------------------------------------------->
<!-------------------------------------------------->
<!-------------------------------------------------->
<div class="flex justify-center w-full">

{#if pageState == "questions"}
        <EditQuestions />
{/if}

{#if pageState == "theme"}
        <Theme />
{/if}

{#if pageState == "quiz"}
        <Settings />
{/if}

</div><!--flex div inner-->
</div><!--page div-->