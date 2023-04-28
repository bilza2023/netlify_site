import { v4 as uuidv4 } from 'uuid';

export function getMCQ(){
const question = {
    content: "",
    id: uuidv4(),
    correctOption : "",
    explanation: "",
    options: [ ]
}
    const op1 = getOption();
    const op2 = getOption();
    question.options.push(op1);
    question.options.push(op2);
return question;
}

export function getOption(){
const option = {
     id: uuidv4(),
    content: ""
}
return option;
}


