<script>
import { toast } from '@zerodevx/svelte-toast';
import { BASE_URL } from '$lib/js/config.js';
import { fade } from 'svelte/transition';
import ajaxPost from '$lib/js/ajaxPost';

export let quiz;
export let clk;

  let newPRojectName = "";

const handler = async(quizType)=>{
  // const token = localStorage.getItem('token');
  // quiz.questions = questions; //-update
  // debugger;
  const resp = await ajaxPost(`${BASE_URL}/survey/clone` , { id : quiz._id ,title :newPRojectName});
  
  if (resp.ok) {
      newPRojectName = "";
      const data = await resp.json();
      // debugger;
      toast.push( "Cloned" );
      toggleShowClone();

  }else {
      const data = await resp.json();

      toast.push( data.errormsg );
  }

}

</script>
<br/>

<div class="w-full  m-0 p-0"
in:fade={{ delay: 300 }} out:fade={{ delay: 300 }}>

<div class=" p-2  text-center  bg-gray-800 
rounded-md border-2 border-white ">

<h1 class="m-1 text-slate-200 text-2xl underline">Clone Title</h1>
<input class="bg-gray-700 text-white  w-10/12 m-1 rounded-lg"  type="text" bind:value={newPRojectName} >

<br/>

<button class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-2 px-4 rounded w-4/12 m-1" on:click={()=>handler("quiz")}>Clone</button>

</div>
</div>