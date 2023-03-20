<script>
export let question;

</script>



<div class="bg-gray-500 rounded-sm m-2 p-2 border-2 border-white mx-auto quiz-question">

<h1><input class="bg-gray-800" type="text" bind:value={question.content}></h1>
<hr>
    <ol>
    {#each question.options as option, optionIndex }
        <li class="flex items-center">
            <input class= "bg-gray-500 text-white border-2 border-red-400 m-2"
             type="text" 
             bind:value={question.options[optionIndex].content}>

  <button class="ml-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" on:click={()=>question.correctAnswer = question.options[optionIndex].id}>
    Mark Correct
  </button>
    </li>

    {/each}
    </ol>
<br>
</div>


<style>
.quiz-question {
  width: 80%;
}

</style>
