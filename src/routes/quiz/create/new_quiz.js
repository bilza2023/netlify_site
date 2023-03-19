
export function getQuiz(){
const quiz = {
  title: "Quiz Title",
  userId: "",
  saveResponse: false,
  showIntro: true,
  introText: "Intro Text",
  showResult: "true",
  farewellText: "Farewell Text",
  
  questions: [],
}
return quiz;
}
///////////////////////////////////////////////////
export function getQuestion(id){
const question = {
    content: "Question Statement ?",
    id: id,
    correctOption : "",
    explanation: "explanation",
    options: [ ]
}
return question;
}

export function getOption(id){
const option = {
     id: id,
    content: "The Option"
}
return option;
}



// module.exports = { getQuiz, getQuestion , getOption };