
<script>
import Mcq from "./showQuestions/mcqs/Mcq.svelte";

function deleteQuestion(id){
template.questions = template.questions.filter(q => q.id !== id);
}

export let template;

</script>


<div class=""><!--miana -->

    {#if template}
    {#if template.questions.length > 0}
    <br>

    {#each template.questions as question, index }
                    <!--MCQ-->
            
            {#if question.questionType == "SurveyMCQ"}
                <Mcq 
                    {question}  
                    ser={index}
                    deleteQuestion={deleteQuestion}
                />
            {/if}
                    <!--Inputs-->
            <!-- {#if question.questionType == "SurveyInput" }
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
            {/if}         -->
<br>
{/each}
{/if}
{/if}


</div><!--miana flex-->
