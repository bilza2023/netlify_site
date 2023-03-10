
export default function saveQuiz(data){
// console.log(data);
const quiz = {questions : []};
const questions = [];

for (let i = 0; i < data.length; i++) {
    const q = data[i];

const question = {
id : q.id,
content: q.content,
correctAnswer : q.correctAnswer,
selectedAnswer : null,
options : []       
};

//--loop over options
        for (let j = 0; j < q.options.length; j++) {
                const o = q.options[i];
                const option = {
                id : o.id,
                content : o.content,
                };
        question.options.push(option);
        }
//--outer loop ends
questions.push(question);
}
//----
quiz.questions = questions;
//----
 fetch('http://localhost/save_quiz', {
    method: 'POST',
    body: JSON.stringify(quiz),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));




}