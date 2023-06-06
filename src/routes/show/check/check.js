import CheckSurveyMCQ from "./CheckSurveyMCQ.js";
import CheckSurveyInput from "./CheckSurveyInput.js";
import CheckSurveyParagraph from "./CheckSurveyParagraph.js";
import CheckSurveyNumber from "./CheckSurveyNumber.js";
import CheckSurveyUrl from "./CheckSurveyUrl.js";
import CheckSurveyPassword from "./CheckSurveyPassword.js";
import CheckSurveyEmail from "./CheckSurveyEmail.js";

import getExtraData from "./getExtraData.js";

///////////////////////////////////////////////////////////////////////
    const schemaMap = {
    "SurveyMCQ"         : CheckSurveyMCQ,
    "SurveyInput"       : CheckSurveyInput,
    "SurveyParagraph"   : CheckSurveyInput,
    "SurveyNumber"      : CheckSurveyInput,
    "SurveyUrl"         : CheckSurveyInput,
    "SurveyPassword"    : CheckSurveyInput,
    "SurveyEmail"       : CheckSurveyInput
    };

export default async function check(quiz){
  try{
  const answers = [];
  const extraData = getExtraData(quiz);

      for (let i = 0; i < quiz.questions.length; i++) {
        const question = quiz.questions[i];
        
         const SchemaConstructor = schemaMap[question.questionType];
          SchemaConstructor(question,answers,extraData,quiz); 

      }
  return answers;    
  }catch (e) {
    return false;
  }
}
/////////////////////////////////////////////////////////
