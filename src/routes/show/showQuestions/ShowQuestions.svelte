<script>

import ShowMcq from "./ShowMcq.svelte";
import ShowInputText from "./ShowInputText.svelte";
import ShowInputEmail from "./ShowInputEmail.svelte";
import ShowInputNumber from "./ShowInputNumber.svelte";
import ShowInputPassword from "./ShowInputPassword.svelte";
import ShowInputUrl from "./ShowInputUrl.svelte";
import ShowParagraph from "./ShowParagraph.svelte";

export let questions;
export let cq;

</script>


    {#if questions[cq].type == "mcq"}
      <ShowMcq {questions} {cq}/>
    {/if}
    
    {#if questions[cq].type == "inputText"}
      <ShowInputText/>
    {/if}
    
    {#if questions[cq].type == "inputParagraph"}
      <ShowParagraph/>
    {/if}
    
    {#if questions[cq].type == "inputEmail"}
      <ShowInputEmail/>
    {/if}
   
    {#if questions[cq].type == "inputNumber"}
      <ShowInputNumber/>
    {/if}
   
    {#if questions[cq].type == "inputPassword"}
      <ShowInputPassword/>
    {/if}
   
    {#if questions[cq].type == "inputUrl"}
      <ShowInputUrl/>
    {/if}
