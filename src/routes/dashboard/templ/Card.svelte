<script>
export let quiz;
export let urlTag;
import ThreeBtns from "./ThreeBtns.svelte";



</script>

<a  class="hover:bg-gray-300  rounded-lg "
 href={`/${urlTag}?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
 
<div class="w-full bg-gray-600 rounded-md p-2 m-1 
border-4 max-h-32 border-blue-700 text-center "><!--outer -div-->
    <div class="flex flex-col"><!--inner -div-->
                <div class="mb-2">
                <!-- {#if quiz.quizType == "quiz"} -->
                      <span class="text-4xl">📝</span>
                <!-- {/if} -->
                <!-- {#if quiz.quizType == "survey"}
                        <span class="text-4xl">🗳️</span>
                {/if} -->
                </div>
    <span
    class="p-1 m-1 bg-gray-700 text-sm rounded-md"
    >
    {quiz.title}
    </span>
    <!-- <ThreeBtns {quiz} {urlTag}/>             -->
    </div><!--inner -div-->

</div><!--outer-div-->
</a>