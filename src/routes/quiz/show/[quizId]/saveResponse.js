
export default async function saveResponse(quiz){
try{

const {correctAnswers,wrongAnswers,skippedAnswers} = check(quiz.questions);

const quizResponse = {
      quizId : quiz._id,
      correctAnswers ,
      wrongAnswers ,
      skippedAnswers,
      totalQuestions : quiz.questions.length,
}; 
// console.log("quizResponse",quizResponse);
if  (quiz.saveResponse==false){
return {correctAnswers,wrongAnswers,skippedAnswers};
}


 const response = await fetch('http://localhost/save_response', {
    method: 'POST',
    body: JSON.stringify(quizResponse),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return quizResponse;
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