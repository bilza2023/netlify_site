


function getData (){
    return {
        id      : '',
        payload  : ''
    };
}


export default async function CheckSurveyParagraph(question,answers,extraData,quiz){

    const g = getData();
    g.id = question.id;
    g.payload = question.payload;
    answers.push(g);

}