<script>
import { toast } from '@zerodevx/svelte-toast';
import LocalStorage from "../../lib/communicator/localStorage";
import { fade } from 'svelte/transition';
import Agent from '../../lib/communicator/Agent';
import checkBeforePub from "./check/checkBeforePub";
import {testsStore} from "../appStore";
export let template;
import {showErrorsStore,errorsArrayStore,showTestStore} from "./store";
  let newPRojectName = "";

const handler = async(quizType)=>{
debugger;
  // showTestStore.set(false);return;
  const errorsArray = checkBeforePub(template);
  if (errorsArray.length > 0){
  errorsArrayStore.set(errorsArray);
  showErrorsStore.set(true);
  showTestStore.set(false);
  return;
  }
  
  //  // userId is already set
  const item = {...template}; 
    item._id = undefined;
    item.published = false; //important
    item.members = []; //important
    item.isNew = true;
    item.title = newPRojectName; //--new title
    item.createdAt = Date.now();
  
const resp = await Agent.create('test',{item});

  if (resp.ok) { 
      newPRojectName = "";
      const data = await resp.json();
      await testsStore.update( curr =>{return [...curr,data.item]});
      LocalStorage.updateTests();
      showTestStore.set(false);
      toast.push( "New Test Created" );

  }else {
      const data = await resp.json();
      toast.push( data.message );
  }

}

</script>
<br/>

<div class="w-full  m-0 p-0"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<div class=" p-2  text-center  bg-gray-800 
rounded-md border-2 border-white ">

<h1 class="m-1 text-slate-200 text-2xl underline">New Test Title</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >

<br/>
      <div >
      <button class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={()=>handler("quiz")}>Create Test</button>
      <button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={()=>showTestStore.set(false)}>Cancel</button>
      </div>


</div>
</div>