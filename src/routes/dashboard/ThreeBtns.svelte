<script>
export let quiz;
import { toast } from '@zerodevx/svelte-toast';
const  copyButton = async ()=> {
         try {
        var textToCopy = `https://skillzaa.com/show?quizId=${quiz._id}`;
        await navigator.clipboard.writeText(textToCopy);
        toast.push('copied');
        } catch (err) {
        console.error('Failed to copy text: ', err);
  }
}
</script>


<div class="flex border-1  rounded-lg justify-center ">

 <a 
 class="hover:bg-gray-300  rounded-lg "
 href={`/edit?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">⚙️</span>
</a>

<a
class="hover:bg-gray-300  rounded-lg "
 href= {`/show?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">🚀</span>
</a>
<button
class="hover:bg-gray-300  rounded-lg "
  style="display: block; height: 100%; width: 100%;"
  
  on:click|preventDefault={copyButton}>
    <span class="text-sm">📋</span>
</button>


<a 
class="hover:bg-gray-300  rounded-lg "
href={`/analytics?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">📊</span>
  </a>



</div>