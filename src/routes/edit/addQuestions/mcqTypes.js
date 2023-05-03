import {getMCQ,getOption,getOptions} from "./mcq.js";
import { toast } from '@zerodevx/svelte-toast';
import { quizStore  } from '../store';



export function genericMCQ(){
 const question = getMCQ();
    const op1 = getOption();
    const op2 = getOption();
    question.options.push(op1);
    question.options.push(op2);
 //..
  quizStore.update(currentQuiz => {
    currentQuiz.questions.push(question);
    return currentQuiz;
  });
  // unPublish();
  toast.push("Question Added!");    
}


export function getMcqWOption (optionTitles = []){
const question = getMCQ();
question.options = getOptions(optionTitles);
 //..
  quizStore.update(currentQuiz => {
    currentQuiz.questions.push(question);
    return currentQuiz;
  });
  // unPublish();
  toast.push("Question Added!");    
}
export function yesno (){
getMcqWOption(["Yes", "No"]);

}