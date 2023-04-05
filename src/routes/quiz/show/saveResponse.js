
export default async function saveResponse(quiz){
try{

const {correctAnswers,wrongAnswers,skippedAnswers} = check(quiz.questions);
return {correctAnswers,wrongAnswers,skippedAnswers};

//   return quizResponse;
}catch (e) {
return false;
}

}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function check(questions){

const correctAnswers = [];
const wrongAnswers = [];
const skippedAnswers = [];

for (let i = 0; i < questions.length; i++) {
    const ques = questions[i];
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

return {correctAnswers,wrongAnswers,skippedAnswers};    
}