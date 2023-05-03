import { v4 as uuidv4 } from 'uuid';


export function getOption(content=""){
const option = {
     id: uuidv4(),
    content
}
return option;
}
export function getOptions(optionTitles=[]){
const returnOption = [];
    for (let i = 0; i < optionTitles.length; i++) {
        const optTitle = optionTitles[i];
        const opt = getOption(optTitle);
        returnOption.push(opt);           
    }
return returnOption;
}

export function getMCQ(){
const question = {
    content: "",
    id: uuidv4(),
    correctOption : "",
    explanation: "",
    options: [ ]
}
return question;
}

