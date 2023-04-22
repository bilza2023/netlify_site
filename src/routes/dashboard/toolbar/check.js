export default function check(quiz){
const errorsArray = [];

if (quiz.title == ""){
    errorsArray.push("Title can not be empty");
}
if (quiz.questions.length == 0){
    errorsArray.push("Quiz must have at least one question");
}

checkQstatement(quiz.questions ,  errorsArray);
checkMinOptions(quiz.questions ,  errorsArray);

checkOptionStatement(quiz.questions ,  errorsArray);
checkQCorrectOption(quiz.questions ,  errorsArray);

checkQCorrectOptionExists(quiz.questions ,  errorsArray)

return errorsArray;
}
 
////////////////////////////////////////////
function checkQCorrectOptionExists(questions,errorsArray){

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    let exists = false;
    
    for (let j = 0; j < q.options.length; j++) {
    if ( q.options[j].id == q.correctOption ) 
            {
            exists = true;
            }
    }
//...
    if (exists == false){
    const statement  = q.content == "" ? "Missing Statement" : q.content;

    errorsArray.push(`Question # ${i+1} : "${statement}"the  option marked as correct was not found among the given options, "The selected correct option may have been deleted"`)
    }    
}

}
///////////////////////////////////////////////

function checkQCorrectOption(questions,errorsArray){

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const statement  = q.content == "" ? "Missing Statement" : q.content;
        if (q.correctOption == ""){
            errorsArray.push(`Question # ${i+1} : "${statement}" has no correct option selected.`);
        }
}
}


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



