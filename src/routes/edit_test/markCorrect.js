


export default function markCorrect(question , option_id){

    if (question.multiSelect == false){
        question.correctOption = option_id;
        return true;
    }else {
       return  multiselect(question , option_id)
    }

}//mian fn ends

//////////////////////////
function multiselect(question , option_id){
  const alreadyExists =  question.correctOptions.includes(option_id);
    if (alreadyExists){
            question.correctOptions = question.correctOptions.filter(option => option !== option_id);
            return false;
    }else {
            question.correctOptions.push( option_id);
            return true;
    }
}