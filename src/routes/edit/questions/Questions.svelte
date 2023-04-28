<script>
////////////-store variables--///////
import { quizStore  } from '../store';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore; 
$: questions = $quizStore.questions;
////////////-store variables--///////

import Question from "./Question.svelte";


</script>

{#if questions}
{#if questions.length > 0}
<br>


{#each questions as question, index }

<Question 
            {question}  
            ser={index}
/>
<br>
{/each}
{/if}
{/if}
