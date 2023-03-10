
export default function saveResponse(quiz){
// console.log("quiz",quiz);
// const quiz_id= quiz._id;
// console.log(quiz._id);
// return;
const {correctAnswers,wrongAnswers} = check(quiz.questions);
const quizResponse = {
      quizId : quiz._id,
      correctAnswers : correctAnswers,
      wrongAnswers : wrongAnswers,
      totalQuestions : quiz.questions.length,
}; 

// console.log(quizResponse);


 fetch('http://localhost/save_response', {
    method: 'POST',
    body: JSON.stringify(quizResponse),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));

}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function check(questions){

const correctAnswers = [];
const wrongAnswers = [];

for (let i = 0; i < questions.length; i++) {
    const ques = questions[i];
    if (ques.selectedOptionId === ques.correctAnswer){
        correctAnswers.push(ques._id);
    }else {   
    wrongAnswers.push(ques._id);
    }
}

// console.log("resultArray" , resultArray);    
return {correctAnswers,wrongAnswers};    
}