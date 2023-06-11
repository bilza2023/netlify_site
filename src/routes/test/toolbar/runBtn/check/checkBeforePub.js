import checkQuiz from "./checkQuiz";


export default function checkBeforePub(quiz){
const errorsArray = [];
// errorsArray.push("Test");
checkQuiz(quiz,errorsArray);

return errorsArray;
}