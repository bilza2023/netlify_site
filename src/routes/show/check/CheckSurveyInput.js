

function getData (){
    return {
        id      : uuid(),
        questionType   : '',
        required   : false,
        totalMarks   : 0,
        payload : '',
        selectedOptions : []
    };
}
import { v4 as uuid } from 'uuid';



export default async function CheckSurveyInput(question,answers,extraData,quiz){

    const g = getData();
    g.questionId = question.id;
    g.totalMarks = 10;
    g.questionType = question.questionType;
    g.payload = question.payload;
    answers.push(g);

}
