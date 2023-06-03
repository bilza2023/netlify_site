


export default function checkMCQ(question,errorsArray){

    checkCorrectOptions(question,errorsArray);

}
///////////////////////////////
function checkCorrectOptions(question,errorsArray) {
  const optionsIds = question.options.map(option => option.id);
 
 const result =  question.correctOptions.every(correctOptionId => optionsIds.includes(correctOptionId));
  
  if (!result) {
    errorsArray.push("Some correct options do not have a corresponding option");
    }
}

function checkOptionMissingStatements(questions,errorsArray){

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