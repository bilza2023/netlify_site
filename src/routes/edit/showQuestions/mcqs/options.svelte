<script>

// import Option from "./Option.svelte";
import { v4 as uuid } from 'uuid';

// import { quizStore } from '../../store'; // import your quiz store

// import unPublish from "../../unPublish"; 


export let question;

// function deleteOption(questionId, optionId) {
//  quizStore.update(currentQuiz => {
//     let question = currentQuiz.questions.find(q => q.id === questionId);
//     if (question) {
//       let optionIndex = question.options.findIndex(o => o.id === optionId);
//       if (optionIndex !== -1) {
//         question.options.splice(optionIndex, 1);
//         unPublish();
//       }
//     }
//     return currentQuiz;
//   });
// }

// const addOption = qid => {
//   quizStore.update(currentQuiz => {
//     const index = currentQuiz.questions.findIndex(question => question.id === qid);
//     if (index !== -1) {
//       const op = {id : uuid() , content : ""};
//       currentQuiz.questions[index].options.push(op);
//       unPublish();
//     }
//     return currentQuiz;
//   });
// };

// const mark_correct = (option_id) => {
//   quizStore.update(currentQuiz => {
//     // find the question in the currentQuiz object
//     let currentQuestion = currentQuiz.questions.find(q => q.id === question.id);
//     if (currentQuestion) {
//       if (currentQuestion.multiSelect == false) {
//         currentQuestion.correctOptions = [option_id];
//       } 
//       else {
//         let index = currentQuestion.correctOptions.indexOf(option_id);
//         if (index > -1) {
//           //--remove the option if already exists
//           currentQuestion.correctOptions.splice(index, 1);
//         } else {
//           currentQuestion.correctOptions.push(option_id);
//         }
//       }
//     }
//     // console.log(question.correctOptions);  
//     return currentQuiz;
//   });
// } 
function deleteOption(){}
function addOption(){}
function mark_correct(){}
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-green-600 m-2 p-2 w-2/12 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer"
on:click={()=>addOption(question.id)}
>
<span class="">Add Option</span> &nbsp;&nbsp;&nbsp;&nbsp;
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M12 2v20m10-10H2" stroke="white" stroke-width="3" fill="none"/>
  </svg>
</div>

<br/>

    <div class="text-center">
    {#each question.options as option}
      <h1>{option.content}</h1>
   <!-- <Option {option} {question} {deleteOption} {mark_correct}/> -->
    {/each}
    </div>
