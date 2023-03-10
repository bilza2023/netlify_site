
export default function saveResponse(quiz){
console.log(quiz);

const quizResponse = {
      quizId : '640aefa9fe1e185106af45d5',
      correctAnswers : 5,
      wrongAnswers : 5,
      totalQuestions : 10,
}; 

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

