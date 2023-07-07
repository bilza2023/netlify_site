<script>
////////////-store variables--///////
import { quizStore  } from '../store';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore; 
$: questions = $quizStore.questions;
////////////-store variables--///////

import Question from "./mcqs/MCQ.svelte";
import InputText from "./inputQuestions/InputText.svelte";
import InputEmail from "./inputQuestions/InputEmail.svelte";
import InputPassword from "./inputQuestions/InputPassword.svelte";
import InputNumber from "./inputQuestions/InputNumber.svelte";
import InputUrl from "./inputQuestions/InputUrl.svelte";
import InputParagraph from "./inputQuestions/InputParagraph.svelte";


</script>


<div class=""><!--miana -->

    {#if questions}
    {#if questions.length > 0}
    <br>

    {#each questions as question, index }
                    <!--MCQ-->
            
            {#if question.questionType == "SurveyMCQ"}
                <Question 
                    {question}  
                    ser={index}
                />
            {/if}
                    <!--Inputs-->
            {#if question.questionType == "SurveyInput" }
                <InputText 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.questionType == "SurveyParagraph"}
                <InputParagraph 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.questionType == "SurveyEmail"}
                <InputEmail 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.questionType == "SurveyPassword"}
                <InputPassword 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.questionType == "SurveyNumber"}
                <InputNumber 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.questionType == "SurveyUrl"}
                <InputUrl 
                 {question}  
                    ser={index}
                />
            {/if}        

<br>
{/each}
{/if}
{/if}





</div><!--miana flex-->
