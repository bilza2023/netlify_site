import getQuestionContent from "./getQuestionContent";

export default async function getStudentReports(quiz,results){
    // debugger;
    //--just make a copy of results object.
    const studentReports = [...results];
    for (let i = 0; i < studentReports.length; i++) {
        const report = studentReports[i];
        for (let j = 0; j < report.answers.length; j++) {
            const answer = report.answers[j];
            answer.content = getQuestionContent(quiz, answer.questionId)
        }
    }
    return studentReports;
}

