<script>
import Btn from "./BtnNav.svelte";
import {getInput} from "./mcq.js";
import { toast } from '@zerodevx/svelte-toast';
export let btnBg="bg-gray-700";

</script>

  
<div class="flex flex-wrap">
 
<Btn bgColor={btnBg} title = "Text" 
clickHandler={()=>getInput("inputText")}/>

<Btn bgColor={btnBg} title = "Paragraph" clickHandler={()=>getInput("inputParagraph")}/>

<Btn bgColor={btnBg} title = "Number" clickHandler={()=>getInput("inputNumber")}/>

<Btn bgColor={btnBg} title = "Email" 
clickHandler={()=>getInput("inputEmail")}/>

<Btn bgColor={btnBg} title = "Password" clickHandler={()=>getInput("inputPassword")}/>



<Btn bgColor={btnBg} title = "Url" clickHandler={()=>getInput("inputUrl")} />

</div>
