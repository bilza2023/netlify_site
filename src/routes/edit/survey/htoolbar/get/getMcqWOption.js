

import getMCQ from "./getSurveyMCQ";

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
