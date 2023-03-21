
export function getQuiz(){
const quiz = {
  title: "",
  userId: "",
  saveResponse: false,
  showIntro: true,
  introText: "",
  showResult: true,
  farewellText: "",
  
  questions: [],
}
return quiz;
}
///////////////////////////////////////////////////
export function getQuestion(id){
const question = {
    content: "",
    id: id,
    correctOption : "",
    explanation: "",
    options: [ ]
}
return question;
}

export function getOption(id){
const option = {
     id: id,
    content: ""
}
return option;
}



// module.exports = { getQuiz, getQuestion , getOption };