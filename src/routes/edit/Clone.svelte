<script>
import { toast } from '@zerodevx/svelte-toast';
import Agent from "../../lib/communicator/Agent";
import LocalStorage from '../../lib/communicator/localStorage';
import { fade } from 'svelte/transition';
import {templatesStore} from "../appStore";
import {showCloneStore} from "./store.js";
//////////////////////////////////////////////////

export let template;
let newPRojectName = "";

//////////////////////////////////////////////////
const handler = async( )=>{

//////////////////////////////////////

const resp = await Agent.create('template' , {title : 'clone'});
  // debugger;
  if (resp.ok){
  const data  = await resp.json();
  const item = {...template};
  item._id = data.item._id;
  item.title = newPRojectName;
  // item.isNew = true;

  const resp2 = await Agent.update('template' , {item});
  
      if (resp2.ok){
        const data = await resp2.json();
        await templatesStore.update( curr =>{return [...curr,data.item]});
        await LocalStorage.updateTemplates();
        toast.push( "Cloned" );

        showCloneStore.set(false);
        newPRojectName = "";

      }else {
      toast.push( "failed to clone" );        
      }
  }else {
    toast.push( "failed to clone" );        
  }
}////function

</script>
<br/>

<div class="w-full  m-0 p-0"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<div class=" p-2  text-center  bg-gray-800 
rounded-md border-2 border-white ">

<h1 class="m-1 text-slate-200 text-2xl underline">Clone Title</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >

<br/>

<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={handler}>Clone</button>

</div>
</div>