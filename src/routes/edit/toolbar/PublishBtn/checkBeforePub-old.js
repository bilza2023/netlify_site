
export default function checkBeforePub(quiz){
const errorsArray = [];

return errorsArray;
}
 
////////////////////////////////////////////
///////////////////////////////////////////////


function checkOptionStatement(questions,errorsArray){

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    
    for (let j = 0; j < q.options.length; j++) {
    const option = q.options[j];
            if ( option.content == "") {
            const statement  = q.content == "" ? "Missing Statement" : q.content;
                errorsArray.push(`Question # ${i+1} : "${statement}" has blank option.`)
            }
    }
}
}
function checkMinOptions(questions,errorsArray){

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if ( q.options.length < 2) {
    const statement  = q.content == "" ? "Missing Statement" : q.content;
        errorsArray.push(`Question # ${i+1} : "${statement}" has less than 2 options.`)
    }
}
}

function checkQstatement(questions,errorsArray){

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    if ( q.content == "" ) {
    const statement  = q.content == "" ? "Missing Statement" : q.content;
        errorsArray.push(`Question # ${i+1} : is missing statement`)
    }
}

}



