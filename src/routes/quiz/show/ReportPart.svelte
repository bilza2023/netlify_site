<script>
export let answersArray;
export let quiz;
export let title="Title:";
export let background_color ="#512424";
</script>


<h1 class="mb-3 m-1 p-2 bg-gray-900 border-2 border-gray-500 rounded-md">{title}</h1>
{#each answersArray as ans}

    {#each quiz.questions as question}
        {#if question._id == ans}
            <div style= {`background-color: ${background_color};`}  
            class= " rounded-md p-2 m-2 mb-4">
            <p><span class=" border-2 border-gray-500 m-1 p-1 rounded-lg">Question</span> {question.content}</p>
            <br>
                {#each question.options as option}
                    {#if option.id == question.correctOption}
                       <p><span class=" border-2 border-gray-500 m-1 p-1 rounded-lg">Correct Answer</span> {option.content}</p>
                    {/if}
                {/each}
            <br/>
            <p class="border-2 border-gray-600 m-2 p-2 rounded-lg">{question.explanation}</p>    
            </div>
        {/if}
    {/each}
{/each}


