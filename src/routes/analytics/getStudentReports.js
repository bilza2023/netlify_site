import getQuestionContent from "./getQuestionContent";
import getQuestionCorrectOptions from "./getQuestionCorrectOptions";
import calcGTotal from "./getGTotal";

export default async function getStudentReports(quiz,results){
    
    //--just make a copy of results object.
    const studentReports = [...results];

    //--now edit the studentReports answers
    for (let i = 0; i < studentReports.length; i++) {
    //--report = student report card
        const report = studentReports[i];
        for (let j = 0; j < report.answers.length; j++) {
          // debugger;
            const answer = report.answers[j];
            answer.content = getQuestionContent(quiz, answer.questionId)
            answer.correctOptions = getQuestionCorrectOptions(quiz, answer.questionId);
            answer.marksObtained = gradeMCQ(answer);
            answer.marksObtained = gradeMCQ(answer);
        }
      //---now send the report
      calcGTotal(report);  
    }
    return studentReports;
}

///////////////////////////////////
function gradeMCQ(answer) {
  let marks = 0;
  if (answer.multiSelect === false) {
    marks = singleSelect(answer);
  } else {
    marks = multiSelect(answer);
    return marks;
  }
  return marks;
}

function singleSelect(answer) {
  if (answer.selectedOptions[0] === answer.correctOptions[0]) {
    return answer.totalMarks;
  } else {
    return 0;
  }
}

function multiSelect(answer) {
  let marks = 0;
  let marksPerOption = parseFloat((answer.totalMarks / answer.correctOptions.length).toFixed(2));
  for (let i = 0; i < answer.selectedOptions.length; i++) {
    if (answer.correctOptions.includes(answer.selectedOptions[i])) {
      marks += marksPerOption;
    } else {
      marks -= marksPerOption;
    }
  }
  return Math.max(marks, 0);
}
