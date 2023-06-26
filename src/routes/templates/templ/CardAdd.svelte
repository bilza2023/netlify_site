<script>
import {showNewTemplStore} from "../dashboardStore";
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="w-full bg-gray-600 rounded-md p-2 m-1 
border-4 max-h-32 border-white text-center 
hover:border-green-700 hover:cursor-pointer"
on:click={()=>showNewTemplStore.set(!$showNewTemplStore)}
><!--outer -div-->


    <div class="flex flex-col"><!--inner -div-->
                <div class="mb-2 plus-sign">
                <!-- {#if quiz.quizType == "quiz"} -->
                      <span class="text-4xl">💡</span>
               
                </div>
    <div
    class="p-1 m-1 bg-gray-700 text-sm rounded-md"
    >
   Create New Template
    </div>
            
    </div><!--inner -div-->

</div><!--outer-div-->

