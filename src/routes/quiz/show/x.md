<h1 class="m-1 p-1 bg-gray-900 border-2 border-white">Questions that were skipped:</h1>
{#each resp.skippedAnswers as skippedAnswer}

    {#each quiz.questions as question}
        {#if question._id == skippedAnswer}
            <div class="wrong rounded-md p-2 m-2 mb-4 ">
            <p><span class="bg-gray-700 border-2 border-white m-1 p-1 rounded-lg">Question:</span> {question.content}</p>
            <br>
                {#each question.options as option}
                    {#if option.id == question.correctOption}
                       <p><span class="bg-gray-700 border-2 border-white m-1 p-1 rounded-lg">Correct Answer:</span> {option.content}</p>
                    {/if}
                {/each}
            <br/>
            <p class="border-2 border-white m-2 p-2 rounded-lg">{question.explanation}</p>    
            </div>
        {/if}
    {/each}
{/each}
