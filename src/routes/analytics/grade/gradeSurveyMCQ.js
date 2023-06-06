import { v4 as uuid } from 'uuid';



function getData (){
    return {
        id      : uuid(),
        required   : false,
        totalMarks   : 0,
        payload : '',
        selectedOptions : []
    };
}

export default async function CheckSurveyMCQ(question,answers,extraData,quiz){

    const g = getData();
    g.questionId = question.id;
    g.required = false;
    g.totalMarks = 10; //????
    g.questionType = question.questionType;
        // if(question.selectedOptions){
        g.selectedOptions = question.selectedOptions;
        // }
    answers.push(g);

}