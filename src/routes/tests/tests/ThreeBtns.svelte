<script>
export let quiz;
import { toast } from '@zerodevx/svelte-toast';


</script>


<div class="flex border-1  rounded-lg justify-center ">

 <a  class="hover:bg-gray-300  rounded-lg "
 href={`/edit_test?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">⚙️</span>
</a>


<a 
class="hover:bg-gray-300  rounded-lg "
href={`/analytics?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">📊</span>
  </a>



</div>