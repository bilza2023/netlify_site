import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';

export default async function save(survey){
// console.log("save");
// return;
//////////////////////////////////////
const resp = await ajaxPost(`${BASE_URL}/survey/update` ,survey);
  
  if (resp.ok) {
      toast.push( "saved" );
  }else {
      // const data = await resp.json();

      toast.push( "failed to save" );
  }



}