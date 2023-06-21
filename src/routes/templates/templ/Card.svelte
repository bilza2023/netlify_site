<script>
export let quiz;
export let urlTag;
</script>

 
<div class="w-full bg-gray-600 rounded-md p-2 m-1 
border-4 max-h-32 border-blue-700 text-center 
hover:border-red-800"><!--outer -div-->

<a  class="hover:bg-gray-300  rounded-lg" 
 href={`/${urlTag}?quizId=${quiz._id}`} >

    <div class="flex flex-col"><!--inner -div-->
                <div class="mb-2">
                <span class="text-4xl">📝</span>
                </div>
   <div class="p-1 m-1 bg-gray-700 text-sm rounded-md">
    {quiz.title}
    </div>
    </div><!--inner -div-->
</a>
</div><!--outer-div-->
