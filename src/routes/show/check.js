
export default async function check(quiz){
try{
 
const {correctAnswers,wrongAnswers,skippedAnswers} = check2(quiz.questions);
return {correctAnswers,wrongAnswers,skippedAnswers};

//   return quizResponse;
}catch (e) {
return false;
}

}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function check2(questions){

const correctAnswers = [];
const wrongAnswers = [];
const skippedAnswers = [];

for (let i = 0; i < questions.length; i++) {

    const ques = questions[i];
//------------------------------------------------
  if (ques.questionType == 'SurveyMCQ'){
    checkMCQ(ques,skippedAnswers,correctAnswers,wrongAnswers);
  }else {
  
  }
}

return {correctAnswers,wrongAnswers,skippedAnswers};    
}

////////////////
function checkMCQ(ques,skippedAnswers,correctAnswers,wrongAnswers){
   if (ques.selectedOption == null){
      skippedAnswers.push(ques._id);
    }else {
          if (ques.selectedOption === ques.correctOption){
            correctAnswers.push(ques._id);
          }else {   
            wrongAnswers.push(ques._id);
          }
    }
}