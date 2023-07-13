<script>
export let template;
import MCQ from "./mcqs/Mcq.svelte";

function deleteQuestion(id){
// debugger;
     template.questions = template.questions.filter(q => q.id !== id);
     
}

// import InputText from "./inputQuestions/InputText.svelte";
// import InputEmail from "./inputQuestions/InputEmail.svelte";
// import InputPassword from "./inputQuestions/InputPassword.svelte";
// import InputNumber from "./inputQuestions/InputNumber.svelte";
// import InputUrl from "./inputQuestions/InputUrl.svelte";
// import InputParagraph from "./inputQuestions/InputParagraph.svelte";
// debugger;

</script>


<div class=""><!--miana -->

    {#if template}
    {#if template.questions.length > 0}
    <br>

    {#each template.questions as question, index }
                    <!--MCQ-->
            
            {#if question.questionType == "SurveyMCQ"}
                <MCQ 
                    {question}  
                    ser={index}
                    {deleteQuestion}
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
