import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { quizStore } from '../store';


export default async function save(){
//////////////////////////////////////
quizStore.update(currentQuiz => ({ ...currentQuiz, published: true }));

const resp = await ajaxPost(`${BASE_URL}/survey/save` ,{test : quizStore} );

  if (resp.ok) {
      toast.push( "New Test Running" );
  }else {
      const data = await resp.json();

      toast.push( "Failed to Run Test" );
  }



}