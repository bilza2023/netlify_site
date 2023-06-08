

import { quizStore  } from './store';
let quiz;
quizStore.subscribe(value => quiz = value);

export default function unPublish (){
quizStore.update(currentQuiz => ({ ...currentQuiz, published: false }));
}
// $: questions = $quizStore.questions;
