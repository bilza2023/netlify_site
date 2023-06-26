import ajaxPost from '$lib/js/ajaxPost';
import { BASE_URL } from '$lib/js/config.js';
import { toast } from '@zerodevx/svelte-toast';
import { quizStore } from '../store';

// let quiz = quizStore.subscribe( value => {quiz = value} );

let quiz;
const unsubscribe = quizStore.subscribe((value) => {
  quiz = value;
});

export default async function save(){
// debugger;
//////////////////////////////////////
const resp = await ajaxPost(`${BASE_URL}/template/update` ,{item: quiz});
// quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
  if (resp.ok) {
      toast.push( "saved" );
  }else {
      const data = await resp.json();

      toast.push( data.message );
  }


unsubscribe();
}