import { quizStore  } from '../store';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';

export function getOption(content=""){
const option = {
     id: uuidv4(),
    content
}
return option;
}
export function getOptions(optionTitles=[]){
const returnOption = [];
    for (let i = 0; i < optionTitles.length; i++) {
        const optTitle = optionTitles[i];
        const opt = getOption(optTitle);
        returnOption.push(opt);           
    }
return returnOption;
}

export function getMCQ(){
  const question = {
    type : "mcq", 
    content: "",
    id: uuidv4(),
    correctOption : "",
    explanation: "",
    options: [ ]
}
return question;
}

export function getInput(type="inputText"){
  const question = {
    type , 
    content: `${type}`,
    id: uuidv4(),
    explanation: ""
    }  
  //..
  quizStore.update(currentQuiz => {
    currentQuiz.questions.push(question);
    console.log("currentQuiz",currentQuiz);
    return currentQuiz;
  });
  // unPublish();
  // debugger;
  toast.push("Question Added!");    
}

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
