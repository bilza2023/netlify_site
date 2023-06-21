<script>
export let quizzes;
import { toast } from '@zerodevx/svelte-toast';
const  copyButton = async (id)=> {
         try {
        var textToCopy = `https://skillzaa.com/show?quizId=${id}`;
        await navigator.clipboard.writeText(textToCopy);
        toast.push('copied');
        } catch (err) {
        console.error('Failed to copy text: ', err);
  }
}
</script>

<div class="bg-gray-800 text-white m-0 py-0 px-6 min-h-screen flex justify-center " >

<div class="w-11/12">

  {#if quizzes}
    <table class="w-full border-collapse table-responsive border-white">
      
        <tr class="bg-gray-900 text-white border-2 border-gray-200">
          <td class="text-center">Ser</td>
          <td class="text-center">Type</td>
          <td class="text-center">Title</td>
          <td class="text-center">Launch</td>
          <td class="text-center">Edit</td>
          <td class="text-center">Analytics</td>
          <td class="text-center">Copy Link</td>
        </tr>

{#each quizzes as quiz,index }
<tr class="text-white bg-gray-900 border-2 border-gray-200">
<td class="p-1 border  text-center text-white">{index+1}</td>

<td class="p-1 border  text-center text-white  rounded-md">
      {#if quiz.quizType == "quiz"}
      <span class="text-sm">📝</span>
      {/if}
      {#if quiz.quizType == "survey"}
      <span class="text-sm">🗳️</span>
      {/if}
</td>



<td class="p-1 border  text-left text-white">&nbsp;{quiz.title}</td>


<td class="p-1 border bg-blue-900 text-center text-white hover:bg-blue-700 active:bg-blue-800 rounded-md transition duration-200">
  <a href= {`/show?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">🚀</span>
  </a>
</td>

<td class="p-1 border bg-green-900 text-center text-white hover:bg-green-700 active:bg-green-800 rounded-md transition duration-200">
  <a href={`/edit?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">⚙️</span>
  </a>
</td>
<!-- http://localhost:5173/analytics?quizId=642e02e8cfa55f9ef58091d8 -->
<td class="p-1 border bg-blue-900 text-center text-white hover:bg-blue-700 active:bg-blue-800 rounded-md transition duration-200">
  <a href={`/analytics?quizId=${quiz._id}`} style="display: block; height: 100%; width: 100%;">
    <span class="text-sm">📊</span>
  </a>
</td>

<td class="p-1 border bg-green-900 text-center text-white hover:bg-green-700 active:bg-green-800 rounded-md transition duration-200">
  <button  style="display: block; height: 100%; width: 100%;"
  on:click|preventDefault={()=>copyButton(quiz._id)}>
    <span class="text-sm">📋</span>
  </button>
</td>

            
</tr>
{/each}

</table>
  {/if}

<br>
<br> 

</div><!--page div ends-->
</div><!--page div ends-->

<style>
@media screen and (max-width: 360px) {
  table {
    font-size: 0.8rem;
  }
  td, th {
    padding: 0.3rem;
  }
}
</style>