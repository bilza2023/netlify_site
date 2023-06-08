import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { quizStore } from '../store';


export default async function save(survey){
//////////////////////////////////////
const resp = await ajaxPost(`${BASE_URL}/survey/update` ,survey);
quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));

  if (resp.ok) {
      toast.push( "saved" );
  }else {
      const data = await resp.json();

      toast.push( data.msg );
  }



}