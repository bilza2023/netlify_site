import { BASE_URL } from '$lib/js/config.js';
import ajaxGet from "$lib/js/ajaxGet.js";
import { toast } from '@zerodevx/svelte-toast';

import {runningStore} from "./dashboardStore"




export default async function  getRunning(){
 try {
 //  debugger;

  const resp = await ajaxGet( `${BASE_URL}/survey/page/10/0`);
  if(resp.ok){
    const data = await resp.json();
    // console.log(data);
    runningStore.set(data.surveys); 
 
  }else {
    toast.push("failed to load Tests");
  }
   // console.log("quizzes",quizzes);

 } catch (error) {
    // console.error(error);
    toast.push("failed to load..");
 }
}

