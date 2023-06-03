import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';


export default async function publishFn(survey){
debugger;
//////////////////////////////////////
const resp = await ajaxPost(`${BASE_URL}/survey/publish` ,survey);
  
  if (resp.ok) {
      toast.push( "Published" );
  }else {
      // const data = await resp.json();

      toast.push( "failed to Publish" );
  }



}