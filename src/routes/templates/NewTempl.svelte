<script>

import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
import ajaxPost from "$lib/js/ajaxPost.js";

import {templatesStore,showNewTemplStore} from "./dashboardStore";


let newPRojectName = "";

const handler = async( )=>{
  if (newPRojectName == ""){
      toast.push( "Project name can not be empty" );
      return;
  }
  // debugger;
  const response = await ajaxPost( `${BASE_URL}/template/create` , {title :newPRojectName} );

  if (response.ok) {
      newPRojectName = "";
      // debugger;
      const data = await response.json();
      //the item that was updated is returned as item
      templatesStore.update( curr =>{return [...curr,data.item]})
      showNewTemplStore.set(false);
      toast.push( "New Template Created" );

  }else {
       const data = await response.json();
      toast.push( data.message );
  }

}

</script>

<div class="bg-gray-800 text-white m-0 py-0 px-6">


<div class=" border-2 border-white p-2 m-2  text-center rounded-lg ">
    <h1 class="m-1 text-slate-200 text-2xl underline">Create New Test</h1>
    <input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >

<div class="flex flex-col sm:flex-row justify-center w-full">
  <button class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 text-white font-bold py-2 px-4 rounded w-full sm:w-4/12 m-1" on:click={()=>handler("survey")}>
    <span class="text-2xl">📝 <span class="hidden md:inline text-sm">New Template</span></span>
  </button>
</div>

</div>
</div>
