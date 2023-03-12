
export default function saveQuiz(data,title="Quiz.."){
// console.log(data);
const quiz = {questions : [],title};
const questions = [];

for (let i = 0; i < data.length; i++) {
    const q = data[i];

const question = {
id : q.id,
content: q.content,
correctAnswer : q.correctAnswer,
options : []       
};

//--loop over options
        for (let j = 0; j < q.options.length; j++) {
                const o = q.options[j];
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
console.log(quiz);
// return;
const token = localStorage.getItem('token');
//////////////////////////////////////
 fetch('http://localhost/save_quiz', {
    method: 'POST',
    body: JSON.stringify({quiz,token}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error));




}