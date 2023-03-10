
export default function check(data){
const resultArray = [];

for (let i = 0; i < data.length; i++) {
    const ques = data[i];
    if (ques.selectedAnswer === ques.correctAnswer){
        //--- 
    }else {   
    const r = {};
    r.question = ques.question;
    r.explanation = ques.explanation;
    r.correctAnswer = ques.answers[ques.correctAnswer - 1].content;
    resultArray.push(r);
    }
}

// console.log("resultArray" , resultArray);    
return resultArray;    
}