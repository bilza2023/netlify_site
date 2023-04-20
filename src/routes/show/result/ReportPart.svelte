<script>
export let answersArray;
export let quiz;
</script>


{#if answersArray.length == 0}
<br/>
<p><span class="bg-gray-500  p-1 px-2 rounded-lg ">None </span></p>
<br/>
{:else}

{#each answersArray as ans}

    {#each quiz.questions as question}
        {#if question._id == ans}
            <div class= "border-2 border-gray-400 rounded-md p-4 m-2 mb-4">
            <p><span class="bg-gray-700  p-1 px-2 rounded-lg">Question: </span> {question.content}</p>
            <br>
                {#each question.options as option}
                    {#if option.id == question.correctOption}
           
                       <p><span class="bg-gray-700  p-1 px-2 rounded-lg">Correct Answer: </span> {option.content}</p>
                    {/if}
                {/each}
            <br/>
            <p>
            <span class="bg-gray-700  p-1 px-2 rounded-lg">Explanation: </span> 
            {question.explanation}</p>    
            </div>
        {/if}
    {/each}
{/each}

{/if}
