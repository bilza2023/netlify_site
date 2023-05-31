// const uuid = require('../uuid');
import { quizStore  } from '../../store.js';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';

export default function getMCQ(){

    const question = {
        id : uuidv4(),
        required : false,
        content : "",
        explanation : "",
        multiSelect:true,
        selectedOptions :[],
        displayOptions : 'bars',
        backendType : 'SurveyMCQ',
        options :[
        {id : uuidv4() , content : "Yes"},
        {id : uuidv4() , content : "No"}
        ]
    }

    //..
    quizStore.update(currentQuiz => {
    currentQuiz.questions.push(question);
    return currentQuiz;
    });
    // unPublish();
    toast.push("Question Added!");    
}

