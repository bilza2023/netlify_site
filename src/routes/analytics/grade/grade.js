import gradeSurveyMCQ from "./gradeSurveyMCQ.js";

// import getExtraData from "./getExtraData.js";

///////////////////////////////////////////////////////////////////////
    const schemaMap = {
    "SurveyMCQ"         : gradeSurveyMCQ
    // "SurveyInput"       : CheckSurveyInput,
    // "SurveyParagraph"   : CheckSurveyInput,
    // "SurveyNumber"      : CheckSurveyInput,
    // "SurveyUrl"         : CheckSurveyInput,
    // "SurveyPassword"    : CheckSurveyInput,
    // "SurveyEmail"       : CheckSurveyInput
    };

export default async function check(quiz){
  try{
  const answers = [];
  const extraData = getExtraData(quiz);

      for (let i = 0; i < result.answers.length; i++) {
        const answer = result.answers[i];
        
        //  const SchemaConstructor = schemaMap[answer.questionType];
          // SchemaConstructor(answer); 
        gradeMCQ(answer);
      }
  return answers;    
  }catch (e) {
    return false;
  }
}
/////////////////////////////////////////////////////////

function gradeMCQ(){

}