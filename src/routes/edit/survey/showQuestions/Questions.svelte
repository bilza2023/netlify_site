<script>
////////////-store variables--///////
import { quizStore  } from '../store.js';
quizStore.subscribe(value => quiz = value);
$: quiz = $quizStore; 
$: questions = $quizStore.questions;
////////////-store variables--///////

import MCQ from "./mcqs/MCQ.svelte";
import InputText from "./inputQuestions/InputText.svelte";
import InputEmail from "./inputQuestions/InputEmail.svelte";
import InputPassword from "./inputQuestions/InputPassword.svelte";
import InputNumber from "./inputQuestions/InputNumber.svelte";
import InputUrl from "./inputQuestions/InputUrl.svelte";
import InputParagraph from "./inputQuestions/InputParagraph.svelte";


</script>


<div class="ml-0 mr-7"><!--miana -->



    {#if questions}
    {#if questions.length > 0}
    

    {#each questions as question, index }
                    <!--MCQ-->
            
            {#if question.type == "mcq"}
                <MCQ 
                    {question}  
                    ser={index}
                />
            {/if}
                    <!--Inputs-->
            {#if question.type == "inputText"}
                <InputText 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.type == "inputParagraph"}
                <InputParagraph 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.type == "inputEmail"}
                <InputEmail 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.type == "inputPassword"}
                <InputPassword 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.type == "inputNumber"}
                <InputNumber 
                 {question}  
                    ser={index}
                />
            {/if}        
            
            {#if question.type == "inputUrl"}
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
