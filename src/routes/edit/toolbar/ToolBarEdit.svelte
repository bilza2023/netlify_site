<script>
////////////-store variables--///////
import Agent from "../../../lib/communicator/Agent";
import { fade } from 'svelte/transition';
import { toast } from '@zerodevx/svelte-toast';

import PublishErrors from './PublishErrors.svelte';

import ToolBar from '$lib/toolbar/ToolBar.svelte';
import ToolBarBtn from '$lib/toolbar/ToolBarBtn.svelte';
import LocalStorage from "../../../lib/communicator/localStorage";

import { showTestStore ,showCloneStore,showQuizDelStore,
showErrorsStore,errorsArrayStore} from '../store';
////////////// 
import { templatesStore} from '../../appStore.js';
$: templates = $templatesStore; 
export let template;


const save = async ()=>{
  console.log(template)
  debugger;
 const resp = await Agent.update('template',{item: template});

  if (resp.ok) {
      const data = await resp.json();
      LocalStorage.updateTemplates();
      toast.push( "saved" );
  }else {
      toast.push( data.message );
  }

}

</script>

<ToolBar>


<ToolBarBtn  icon={"💾"} title="Save" tf={true} trueColor={"text-white"} clk={save}  />


<ToolBarBtn  icon={"🧪"} title="Test"  tf={false} trueColor={"text-white"}  
 falseColor={"text-gray-600"} clk={()=>showTestStore.set(true) }/>

<ToolBarBtn  icon={"🐑"} title="Clone" tf={false} trueColor={"text-white"}  falseColor={"text-gray-600"}
clk={()=>showCloneStore.set(true) }
/>

<ToolBarBtn  icon={"🗑️"} title="Delete" tf={false} trueColor= {"text-white"} falseColor={"text-gray-600"}
clk={()=>showQuizDelStore.set(true) }
/>

</ToolBar>

