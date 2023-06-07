import { v4 as uuid } from 'uuid';

///////////////////////////////////////////////////////////////////////

export default async function transformQ2R(quiz){
  try{
  const answers = [];

      for (let i = 0; i < quiz.questions.length; i++) {
        const question = quiz.questions[i];
            if (question.questionType == 'SurveyMCQ'){
                const rMCQ = transformMCQ(question);
                answers.push(rMCQ);
            }else {
                const rInput = transformInput(question);
                answers.push(rInput);
            }
      }
  return answers;    

  }catch (e) {
    return false;
  }
}
/////////////////////////////////////////////////////////

function transformMCQ(question) {
     return {
        id      : uuid(),
        questionId : question.id,
        required   : question.required,
        totalMarks   : 10,
        payload : question.payload,
        multiSelect : question.multiSelect,
        selectedOptions : question.selectedOptions,
        questionType : question.questionType
    };

}

function transformInput(question) {
     return {
        id      : uuid(),
        questionId   : question.id,
        required     : question.required,
        totalMarks   : 10,
        payload      : question.payload,
        questionType : question.questionType
    };

}


